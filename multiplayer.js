/**
 * 와우리말 에듀테크 영어 마피아 게임 - 실시간 온라인 멀티플레이 엔진 (Firebase Firestore)
 * 2026 Eui Elementary School - Waurimal Project
 *
 * 지원 기능:
 * 1. 4자리 방 코드 기반 실시간 방 생성/입장
 * 2. 방장(교사) 전용 관전 & 진행 컨트롤러 모드 (Spectator & Master Dashboard)
 * 3. 학급 전체 무제한 다인 참여 (마피아 1~3명, 판사 1명, 시민 다수)
 * 4. 역할 자동 비밀 배정: 방장을 제외한 학생들에게만 역할 배정
 * 5. 전 학급 동시 진행 동기화 (신분확인 -> 사전연습 -> 3분 아침조사 -> 저녁투표 -> 밤/재판 -> 새벽발표 -> 승리)
 * 6. 브라우저 새로고침/네트워크 끊김 시 빠른 1클릭 세션 복구 (Local-First Reconnect)
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
    getFirestore, doc, setDoc, getDoc, updateDoc, onSnapshot, deleteDoc 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 1. Firebase 통합 설정 (Waurimal 2026 표준 - mapia-29b3a 샤드 프로젝트)
const firebaseConfig = (window.WaurimalFirebase && window.WaurimalFirebase.getConfig) 
    ? window.WaurimalFirebase.getConfig('mafia') 
    : {
        apiKey: "AIzaSyD6YK02DdhaSVN9mx3Acd5amiiphxcobG8",
        authDomain: "mapia-29b3a.firebaseapp.com",
        projectId: "mapia-29b3a",
        storageBucket: "mapia-29b3a.firebasestorage.app",
        messagingSenderId: "937487062003",
        appId: "1:937487062003:web:2d98688bc5d0db5bfab886"
    };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

signInAnonymously(auth).catch(err => console.warn("[Mafia Multiplayer] Anonymous Auth Warning:", err));

// 2. 세션 식별자 생성 및 영구 유지
let mySessionId = '';
try {
    mySessionId = localStorage.getItem('mafia_session_id') || sessionStorage.getItem('mafia_session_id');
} catch (e) {}

if (!mySessionId) {
    mySessionId = 'mafia_usr_' + Math.random().toString(36).substring(2, 9);
}
try {
    localStorage.setItem('mafia_session_id', mySessionId);
    sessionStorage.setItem('mafia_session_id', mySessionId);
} catch (e) {}

const ROOMS_COLLECTION = 'mafia_rooms';

class MafiaMultiplayerManager {
    constructor() {
        this.currentRoomId = null;
        this.roomData = null;
        this.roomUnsubscribe = null;
        this.mySessionId = mySessionId;
        this.isHost = false;
        this.onStateChangeCallbacks = [];
        this.gameEngine = null;
    }

    generateQuestionOrder() {
        const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        return indices;
    }

    saveActiveSession(info) {
        if (!info || !info.roomId) return;
        try {
            const payload = {
                roomId: String(info.roomId).trim(),
                name: (info.name || '').trim(),
                grade: Number(info.grade) || 6,
                classNum: Number(info.classNum) || 1,
                studentNum: Number(info.studentNum) || 1,
                isHost: !!info.isHost,
                savedAt: Date.now()
            };
            localStorage.setItem('mafia_active_multi_session', JSON.stringify(payload));
        } catch (e) {}
    }

    clearActiveSession() {
        try {
            localStorage.removeItem('mafia_active_multi_session');
        } catch (e) {}
    }

    getActiveSession() {
        try {
            const raw = localStorage.getItem('mafia_active_multi_session');
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (!parsed || !parsed.roomId) return null;
            // 2시간 이내 세션만 유효
            if (Date.now() - parsed.savedAt > 2 * 60 * 60 * 1000) {
                this.clearActiveSession();
                return null;
            }
            return parsed;
        } catch (e) {
            return null;
        }
    }

    async checkRoomActive(code) {
        const cleanCode = (code || '').trim();
        if (!cleanCode || cleanCode.length !== 4) return null;
        try {
            const roomRef = doc(db, ROOMS_COLLECTION, cleanCode);
            const snap = await getDoc(roomRef);
            if (snap.exists()) {
                const data = snap.data();
                if (data.updatedAt && (Date.now() - data.updatedAt < 3 * 60 * 60 * 1000)) {
                    return data;
                }
            }
        } catch (e) {
            console.warn("[Mafia Multiplayer] checkRoomActive error:", e);
        }
        return null;
    }

    /**
     * 신규 방 생성 (방장/선생님 - 관전 모드)
     */
    async createRoom(hostStudentInfo, options = {}) {
        const mafiaCount = Number(options.mafiaCount) || 2;
        const morningTimer = Number(options.morningTimer) || 180; // 3분 기본
        const gradeLevel = options.gradeLevel || '6';
        const unitId = options.unitId || '6G_L04';

        // 4자리 랜덤 숫자 방 코드 생성
        let roomId = '';
        let attempts = 0;
        while (attempts < 5) {
            const cand = String(Math.floor(1000 + Math.random() * 9000));
            const existing = await getDoc(doc(db, ROOMS_COLLECTION, cand));
            if (!existing.exists()) {
                roomId = cand;
                break;
            }
            attempts++;
        }
        if (!roomId) roomId = String(Math.floor(1000 + Math.random() * 9000));

        const initialRoom = {
            roomId: roomId,
            hostId: this.mySessionId,
            state: 'LOBBY', // LOBBY -> ROLE_REVEAL -> PRACTICE -> MORNING -> EVENING_NOMINATION -> NIGHT_TRIAL -> DAWN_RESULTS -> FINISHED
            round: 1,
            roundQuestionOrder: this.generateQuestionOrder(),
            maxRounds: 3,
            config: {
                mafiaCount: mafiaCount,
                judgeCount: 1,
                morningTimerSeconds: morningTimer,
                gradeLevel: gradeLevel,
                unitId: unitId
            },
            players: {
                [this.mySessionId]: {
                    id: this.mySessionId,
                    name: hostStudentInfo.name || '선생님',
                    grade: hostStudentInfo.grade || 6,
                    classNum: hostStudentInfo.classNum || 1,
                    studentNum: hostStudentInfo.studentNum || 0,
                    isHost: true,
                    isSpectator: true,
                    role: 'HOST',
                    isJailed: false,
                    jailedRound: 0,
                    escapeQuizSolved: false,
                    joinedAt: Date.now()
                }
            },
            nominations: {},
            currentSuspects: [],
            judgeDecision: null,
            mafiaTarget: null,
            dawnReport: null,
            winner: null,
            jailedHistory: [],
            caughtMafias: [],
            chatLogs: [
                { time: Date.now(), msg: `선생님(방장)이 방을 생성했습니다. (코드: ${roomId}, 관전 모드)` }
            ],
            createdAt: Date.now(),
            updatedAt: Date.now()
        };

        const roomRef = doc(db, ROOMS_COLLECTION, roomId);
        await setDoc(roomRef, initialRoom);

        this.currentRoomId = roomId;
        this.isHost = true;
        this.saveActiveSession({ roomId, ...hostStudentInfo, isHost: true });
        this.listenRoom(roomId);
        return roomId;
    }

    /**
     * 방 참가하기 (학생 플레이어)
     */
    async joinRoom(roomId, studentInfo) {
        const cleanId = String(roomId).trim();
        const roomRef = doc(db, ROOMS_COLLECTION, cleanId);
        const snap = await getDoc(roomRef);

        if (!snap.exists()) {
            throw new Error(`방 코드 [${cleanId}]를 찾을 수 없습니다. 다시 확인해 주세요.`);
        }

        const data = snap.data();
        const isAlreadyHost = (data.hostId === this.mySessionId);

        if (data.state !== 'LOBBY' && !data.players[this.mySessionId] && !isAlreadyHost) {
            throw new Error(`이미 게임이 진행 중인 방입니다. 대기실 상태에서만 참가할 수 있습니다.`);
        }

        const updatedPlayers = { ...data.players };

        updatedPlayers[this.mySessionId] = {
            id: this.mySessionId,
            name: studentInfo.name,
            grade: studentInfo.grade,
            classNum: studentInfo.classNum,
            studentNum: studentInfo.studentNum,
            isHost: isAlreadyHost,
            isSpectator: isAlreadyHost,
            role: isAlreadyHost ? 'HOST' : (data.players[this.mySessionId]?.role || null),
            isJailed: data.players[this.mySessionId]?.isJailed || false,
            jailedRound: data.players[this.mySessionId]?.jailedRound || 0,
            escapeQuizSolved: data.players[this.mySessionId]?.escapeQuizSolved || false,
            joinedAt: Date.now()
        };

        await updateDoc(roomRef, {
            players: updatedPlayers,
            updatedAt: Date.now()
        });

        this.currentRoomId = cleanId;
        this.isHost = isAlreadyHost;
        this.saveActiveSession({ roomId: cleanId, ...studentInfo, isHost: isAlreadyHost });
        this.listenRoom(cleanId);
        return cleanId;
    }

    /**
     * 실시간 방 상태 구독
     */
    listenRoom(roomId) {
        if (this.roomUnsubscribe) {
            this.roomUnsubscribe();
            this.roomUnsubscribe = null;
        }

        const roomRef = doc(db, ROOMS_COLLECTION, roomId);
        this.roomUnsubscribe = onSnapshot(roomRef, (snap) => {
            if (!snap.exists()) {
                console.warn("[Mafia Multiplayer] 방이 닫혔거나 삭제되었습니다.");
                this.roomData = null;
                this.clearActiveSession();
                this.notifyStateChange({ deleted: true });
                return;
            }

            const data = snap.data();
            this.roomData = data;
            this.isHost = (data.hostId === this.mySessionId);
            this.notifyStateChange(data);
        }, (err) => {
            console.error("[Mafia Multiplayer] onSnapshot error:", err);
        });
    }

    onStateChange(cb) {
        if (typeof cb === 'function') {
            this.onStateChangeCallbacks.push(cb);
        }
    }

    notifyStateChange(data) {
        for (const cb of this.onStateChangeCallbacks) {
            try { cb(data); } catch (e) { console.error(e); }
        }
    }

    /**
     * 게임 시작 및 역할 비밀 배정 (방장 전용 - 학생들에게만 역할 배정!)
     */
    async startGame() {
        if (!this.isHost || !this.currentRoomId || !this.roomData) return;

        // 방장(관전자)을 제외한 실제 학생 플레이어들만 추출
        const studentIds = Object.keys(this.roomData.players).filter(id => id !== this.roomData.hostId);
        
        if (studentIds.length < 2) {
            throw new Error(`최소 2명 이상의 학생이 대기실에 참가해야 게임을 시작할 수 있습니다. (현재 참가 학생: ${studentIds.length}명)`);
        }

        const totalStudents = studentIds.length;
        let mafiaCount = this.roomData.config.mafiaCount || 2;
        if (mafiaCount >= totalStudents) {
            mafiaCount = Math.max(1, Math.floor(totalStudents / 2));
        }

        // 학생 목록 무작위 셔플 후 역할 배정
        const shuffled = [...studentIds].sort(() => Math.random() - 0.5);
        const rolesMap = {};

        if (totalStudents === 2) {
            // 2명인 경우 (테스트 모드): 1 마피아, 1 시민
            rolesMap[shuffled[0]] = 'MAFIA';
            rolesMap[shuffled[1]] = 'CITIZEN';
        } else if (totalStudents === 3) {
            // 3명인 경우: 1 마피아, 1 판사, 1 시민
            rolesMap[shuffled[0]] = 'MAFIA';
            rolesMap[shuffled[1]] = 'JUDGE';
            rolesMap[shuffled[2]] = 'CITIZEN';
        } else {
            // 4명 이상인 경우: 1 판사 + mafiaCount 마피아 + 나머지 시민
            rolesMap[shuffled[0]] = 'JUDGE';
            for (let i = 1; i <= mafiaCount; i++) {
                rolesMap[shuffled[i]] = 'MAFIA';
            }
            for (let i = mafiaCount + 1; i < totalStudents; i++) {
                rolesMap[shuffled[i]] = 'CITIZEN';
            }
        }

        const updatedPlayers = { ...this.roomData.players };
        
        // 방장은 HOST 관전자로 유지
        if (updatedPlayers[this.roomData.hostId]) {
            updatedPlayers[this.roomData.hostId].role = 'HOST';
            updatedPlayers[this.roomData.hostId].isSpectator = true;
            updatedPlayers[this.roomData.hostId].isHost = true;
        }

        // 학생들에게 배정된 역할 적용
        for (const sId of studentIds) {
            updatedPlayers[sId].role = rolesMap[sId];
            updatedPlayers[sId].isJailed = false;
            updatedPlayers[sId].jailedRound = 0;
            updatedPlayers[sId].warnings = 0;
            updatedPlayers[sId].escapeQuizSolved = false;
            updatedPlayers[sId].isSpectator = false;
        }

        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        await updateDoc(roomRef, {
            state: 'ROLE_REVEAL',
            round: 1,
            players: updatedPlayers,
            rolesAssigned: true,
            nominations: {},
            currentSuspects: [],
            judgeDecision: null,
            mafiaTarget: null,
            dawnReport: null,
            winner: null,
            chatLogs: [
                ...this.roomData.chatLogs,
                { time: Date.now(), msg: `🎲 게임이 시작되었습니다! 선생님은 관전 모드로 전환되고 학생들에게 역할이 배정되었습니다.` }
            ],
            updatedAt: Date.now()
        });
    }

    /**
     * 방장 진행 컨트롤: [사전 연습 시간 시작] (방장 전용)
     */
    async startPracticePhase() {
        if (!this.isHost || !this.currentRoomId) return;
        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        await updateDoc(roomRef, {
            state: 'PRACTICE',
            chatLogs: [
                ...(this.roomData?.chatLogs || []),
                { time: Date.now(), msg: `📖 학습지 확인 및 영어 말하기 연습 시간이 시작되었습니다.` }
            ],
            updatedAt: Date.now()
        });
    }

    /**
     * 방장 진행 컨트롤: [아침 조사 3분 시작] (방장 전용 - 전 학급 동시 타이머 시작)
     */
    async startMorningPhase(timerSeconds) {
        if (!this.isHost || !this.currentRoomId) return;
        const dur = Number(timerSeconds) || this.roomData?.config?.morningTimerSeconds || 180;
        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        await updateDoc(roomRef, {
            state: 'MORNING',
            morningStartedAt: Date.now(),
            morningTimerDuration: dur,
            roundQuestionOrder: this.generateQuestionOrder(),
            nominations: {},
            currentSuspects: [],
            judgeDecision: null,
            mafiaTarget: null,
            dawnReport: null,
            chatLogs: [
                ...(this.roomData?.chatLogs || []),
                { time: Date.now(), msg: `🌅 제 ${this.roomData?.round || 1}라운드 아침 조사 시간이 시작되었습니다! (제한시간: ${Math.floor(dur / 60)}분)` }
            ],
            updatedAt: Date.now()
        });
    }

    /**
     * 방장 진행 컨트롤: [아침 조사 종료 & 저녁 투표 시작] (방장 전용)
     */
    async startEveningNominationPhase() {
        if (!this.isHost || !this.currentRoomId) return;
        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        await updateDoc(roomRef, {
            state: 'EVENING_NOMINATION',
            nominations: {},
            chatLogs: [
                ...(this.roomData?.chatLogs || []),
                { time: Date.now(), msg: `🌆 아침 조사가 종료되었습니다. 모든 학생은 용의자 투표를 진행하세요!` }
            ],
            updatedAt: Date.now()
        });
    }

    /**
     * 학생 액션: 용의자 지목 투표
     */
    async submitNomination(targetSessionId) {
        if (!this.currentRoomId || !this.roomData) return;
        if (targetSessionId === this.mySessionId) {
            console.warn("[Mafia] 자신을 지목할 수 없습니다.");
            return;
        }
        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        const currentNoms = { ...(this.roomData.nominations || {}) };
        currentNoms[this.mySessionId] = targetSessionId;

        const voterName = this.roomData.players[this.mySessionId]?.name || '학생';
        const targetName = this.roomData.players[targetSessionId]?.name || '용의자';

        await updateDoc(roomRef, {
            nominations: currentNoms,
            chatLogs: [
                ...(this.roomData.chatLogs || []),
                { time: Date.now(), msg: `🗳️ ${voterName} 학생이 ${targetName} 학생을 지목했습니다.` }
            ],
            updatedAt: Date.now()
        });
    }

    /**
     * 방장 진행 컨트롤: [투표 마감 및 밤/재판 페이즈 진행] (방장 전용)
     */
    async startNightTrialPhase(manualSuspects = null) {
        if (!this.isHost || !this.currentRoomId || !this.roomData) return;
        
        let suspects = manualSuspects;
        if (!suspects || suspects.length === 0) {
            // nominations 투표 결과 집계
            const counts = {};
            const noms = this.roomData.nominations || {};
            Object.values(noms).forEach(tid => {
                if (tid) counts[tid] = (counts[tid] || 0) + 1;
            });

            // 득표순 정렬
            const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
            const targetCount = (this.roomData.round === 1) ? 3 : 1;
            suspects = sorted.slice(0, targetCount);

            // 투표가 없었을 경우 생존 학생 중 무작위 선발
            if (suspects.length === 0) {
                const aliveStudents = Object.values(this.roomData.players).filter(p => !p.isHost && !p.isJailed);
                suspects = aliveStudents.slice(0, targetCount).map(p => p.id);
            }
        }

        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        await updateDoc(roomRef, {
            state: 'NIGHT_TRIAL',
            currentSuspects: suspects,
            judgeDecision: null,
            mafiaTarget: null,
            chatLogs: [
                ...(this.roomData.chatLogs || []),
                { time: Date.now(), msg: `⚖️ 투표가 마감되었습니다. 법정 용의자 심문 및 밤 페이즈가 시작됩니다.` }
            ],
            updatedAt: Date.now()
        });
    }

    /**
     * 판사 학생 액션: 판결 제출
     */
    async submitJudgeDecision(verdict, targetSessionId) {
        if (!this.currentRoomId || !this.roomData) return;
        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        await updateDoc(roomRef, {
            judgeDecision: {
                verdict: verdict, // 'guilty' or 'innocent'
                targetSessionId: targetSessionId,
                decidedAt: Date.now()
            },
            updatedAt: Date.now()
        });
    }

    /**
     * 마피아 학생 액션: 밤의 암살(수감) 목표 지목
     */
    async submitMafiaTarget(targetSessionId) {
        if (!this.currentRoomId || !this.roomData) return;
        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        await updateDoc(roomRef, {
            mafiaTarget: targetSessionId,
            updatedAt: Date.now()
        });
    }

    /**
     * 방장 진행 컨트롤: [새벽 결과 발표] (방장 전용 - 판결 및 암살 정산)
     */
    async resolveDawnAndResults() {
        if (!this.isHost || !this.currentRoomId || !this.roomData) return;

        const updatedPlayers = { ...this.roomData.players };
        const caughtMafias = [...(this.roomData.caughtMafias || [])];
        const currentRound = this.roomData.round || 1;

        let judgeJailedName = null;
        let judgeJailedRole = null;
        let mafiaJailedName = null;

        // 1. 판사 판결 정산
        const jDec = this.roomData.judgeDecision;
        if (jDec && jDec.verdict === 'guilty' && jDec.targetSessionId && updatedPlayers[jDec.targetSessionId]) {
            const p = updatedPlayers[jDec.targetSessionId];
            p.isJailed = true;
            p.jailedRound = currentRound;
            p.jailedBy = 'JUDGE';
            judgeJailedName = p.name;
            judgeJailedRole = p.role;
            if (p.role === 'MAFIA' && !caughtMafias.includes(p.id)) {
                caughtMafias.push(p.id);
            }
        }

        // 2. 마피아 습격 정산
        const mTargetId = this.roomData.mafiaTarget;
        if (mTargetId && updatedPlayers[mTargetId] && !updatedPlayers[mTargetId].isJailed) {
            const p = updatedPlayers[mTargetId];
            p.isJailed = true;
            p.jailedRound = currentRound;
            p.jailedBy = 'MAFIA';
            mafiaJailedName = p.name;
        }

        // 3. 승리 조건 판정
        const studentList = Object.values(updatedPlayers).filter(p => !p.isHost);
        const aliveMafias = studentList.filter(p => p.role === 'MAFIA' && !p.isJailed).length;
        const aliveCitizens = studentList.filter(p => p.role !== 'MAFIA' && !p.isJailed).length;

        let winner = null;
        if (aliveMafias === 0) {
            winner = 'CITIZEN';
        } else if (aliveMafias >= aliveCitizens) {
            winner = 'MAFIA';
        } else if (currentRound >= (this.roomData.maxRounds || 3)) {
            winner = (aliveMafias > 0) ? 'MAFIA' : 'CITIZEN';
        }

        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        await updateDoc(roomRef, {
            state: winner ? 'FINISHED' : 'DAWN_RESULTS',
            players: updatedPlayers,
            caughtMafias: caughtMafias,
            winner: winner,
            dawnReport: {
                round: currentRound,
                judgeJailedName,
                judgeJailedRole,
                mafiaJailedName,
                winner
            },
            chatLogs: [
                ...(this.roomData.chatLogs || []),
                { time: Date.now(), msg: `🌞 새벽 결과: 판결로 [${judgeJailedName || '없음'}], 습격으로 [${mafiaJailedName || '없음'}] 수감` }
            ],
            updatedAt: Date.now()
        });
    }

    /**
     * 방장 진행 컨트롤: [다음 라운드 진행] (방장 전용)
     */
    async advanceToNextRound() {
        if (!this.isHost || !this.currentRoomId || !this.roomData) return;
        const nextRound = (this.roomData.round || 1) + 1;
        const dur = this.roomData?.config?.morningTimerSeconds || 180;

        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        await updateDoc(roomRef, {
            state: 'MORNING',
            round: nextRound,
            morningStartedAt: Date.now(),
            morningTimerDuration: dur,
            roundQuestionOrder: this.generateQuestionOrder(),
            nominations: {},
            currentSuspects: [],
            judgeDecision: null,
            mafiaTarget: null,
            dawnReport: null,
            chatLogs: [
                ...(this.roomData.chatLogs || []),
                { time: Date.now(), msg: `🌅 제 ${nextRound}라운드 아침 조사가 시작되었습니다!` }
            ],
            updatedAt: Date.now()
        });
    }

    /**
     * 감옥 탈출 특별 퀴즈 결과 제출
     */
    async submitEscapeResult(success) {
        if (!this.currentRoomId || !this.roomData) return;
        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        const updatedPlayers = { ...this.roomData.players };

        if (updatedPlayers[this.mySessionId]) {
            updatedPlayers[this.mySessionId].escapeQuizSolved = success;
            if (success) {
                updatedPlayers[this.mySessionId].isJailed = false;
                updatedPlayers[this.mySessionId].warnings = 0;
            }
        }

        const sName = updatedPlayers[this.mySessionId]?.name || '학생';
        await updateDoc(roomRef, {
            players: updatedPlayers,
            chatLogs: [
                ...(this.roomData.chatLogs || []),
                { time: Date.now(), msg: success ? `🎉 ${sName} 학생이 감옥 탈출 퀴즈를 맞혀 석방되었습니다!` : `❌ ${sName} 학생이 감옥 탈출 퀴즈에 실패했습니다.` }
            ],
            updatedAt: Date.now()
        });
    }

    /**
     * 방장(선생님) 액션: 바르지 않은 대답/행동 학생에게 경고 부여 (3회 누적 시 감옥행)
     */
    async giveStudentWarning(sessionId) {
        if (!this.isHost || !this.currentRoomId || !this.roomData) return;
        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        const updatedPlayers = { ...this.roomData.players };
        if (!updatedPlayers[sessionId]) return;

        const student = { ...updatedPlayers[sessionId] };
        const curWarnings = (student.warnings || 0) + 1;
        student.warnings = curWarnings;

        let jailedMsg = '';
        if (curWarnings >= 3 && !student.isJailed) {
            student.isJailed = true;
            student.jailedBy = '경고 3회 누적';
            student.jailedRound = this.roomData.round || 1;
            jailedMsg = ' 🚨 경고 3회 누적으로 즉시 감옥에 수감되었습니다!';
        }
        updatedPlayers[sessionId] = student;

        const notifMsg = `⚠️ [경고 부여] ${student.name} 학생에게 경고가 부여되었습니다. (${curWarnings}/3회)${jailedMsg}`;

        await updateDoc(roomRef, {
            players: updatedPlayers,
            chatLogs: [
                ...(this.roomData.chatLogs || []),
                { time: Date.now(), msg: notifMsg }
            ],
            updatedAt: Date.now()
        });
    }

    /**
     * 방 나가기 / 삭제
     */
    async leaveRoom() {
        if (!this.currentRoomId) return;
        try {
            if (this.isHost) {
                // 방장이 나가면 방 정리
                const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
                await deleteDoc(roomRef);
            } else if (this.roomData && this.roomData.players[this.mySessionId]) {
                const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
                const updatedPlayers = { ...this.roomData.players };
                delete updatedPlayers[this.mySessionId];
                await updateDoc(roomRef, {
                    players: updatedPlayers,
                    updatedAt: Date.now()
                });
            }
        } catch (e) {
            console.warn("[Mafia Multiplayer] leaveRoom error:", e);
        }

        if (this.roomUnsubscribe) {
            this.roomUnsubscribe();
            this.roomUnsubscribe = null;
        }
        this.currentRoomId = null;
        this.roomData = null;
        this.clearActiveSession();
    }
}

window.MafiaMultiplayerManager = MafiaMultiplayerManager;
export default MafiaMultiplayerManager;
