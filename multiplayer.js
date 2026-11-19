/**
 * 와우리말 에듀테크 영어 마피아 게임 - 실시간 온라인 멀티플레이 엔진 (Firebase Firestore)
 * 2026 Eui Elementary School - Waurimal Project
 *
 * 지원 기능:
 * 1. 4자리 방 코드 기반 실시간 방 생성/입장
 * 2. 학급 전체 무제한 다인 참여 (마피아 1~3명, 판사 1명, 시민 다수)
 * 3. 역할 자동 비밀 배정 및 클라이언트 암호화 분기
 * 4. 아침 조사 3분 동기화 타이머, 실시간 가위바위보 대결, 질문-대답 동기화
 * 5. 저녁 용의자 실시간 지목/투표, 판사 재판 & 마피아 암살, 감옥 수감/탈출 퀴즈 동기화
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

    saveActiveSession(info) {
        if (!info || !info.roomId) return;
        try {
            const payload = {
                roomId: String(info.roomId).trim(),
                name: (info.name || '').trim(),
                grade: Number(info.grade) || 6,
                classNum: Number(info.classNum) || 1,
                studentNum: Number(info.studentNum) || 1,
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
     * 신규 방 생성 (방장)
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
            state: 'LOBBY', // LOBBY -> ROLE_REVEAL -> MORNING -> EVENING_NOMINATION -> NIGHT_TRIAL -> DAWN_RESULTS -> FINISHED
            round: 1,
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
                    name: hostStudentInfo.name,
                    grade: hostStudentInfo.grade,
                    classNum: hostStudentInfo.classNum,
                    studentNum: hostStudentInfo.studentNum,
                    isHost: true,
                    role: null, // 시작 시 배정
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
            jailedHistory: [],
            caughtMafias: [],
            chatLogs: [
                { time: Date.now(), msg: `선생님(방장) ${hostStudentInfo.name} 님이 방을 생성했습니다. (코드: ${roomId})` }
            ],
            createdAt: Date.now(),
            updatedAt: Date.now()
        };

        const roomRef = doc(db, ROOMS_COLLECTION, roomId);
        await setDoc(roomRef, initialRoom);

        this.currentRoomId = roomId;
        this.isHost = true;
        this.saveActiveSession({ roomId, ...hostStudentInfo });
        this.listenRoom(roomId);
        return roomId;
    }

    /**
     * 방 참가하기
     */
    async joinRoom(roomId, studentInfo) {
        const cleanId = String(roomId).trim();
        const roomRef = doc(db, ROOMS_COLLECTION, cleanId);
        const snap = await getDoc(roomRef);

        if (!snap.exists()) {
            throw new Error(`방 코드 [${cleanId}]를 찾을 수 없습니다. 다시 확인해 주세요.`);
        }

        const data = snap.data();
        if (data.state !== 'LOBBY' && !data.players[this.mySessionId]) {
            throw new Error(`이미 게임이 진행 중인 방입니다. 대기실 상태에서만 참가할 수 있습니다.`);
        }

        const updatedPlayers = { ...data.players };
        const isAlreadyHost = (data.hostId === this.mySessionId);

        updatedPlayers[this.mySessionId] = {
            id: this.mySessionId,
            name: studentInfo.name,
            grade: studentInfo.grade,
            classNum: studentInfo.classNum,
            studentNum: studentInfo.studentNum,
            isHost: isAlreadyHost,
            role: data.players[this.mySessionId]?.role || null,
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
        this.saveActiveSession({ roomId: cleanId, ...studentInfo });
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
     * 게임 시작 및 역할 비밀 배정 (방장 전용)
     */
    async startGame() {
        if (!this.isHost || !this.currentRoomId || !this.roomData) return;

        const playerIds = Object.keys(this.roomData.players);
        if (playerIds.length < 4) {
            throw new Error(`마피아 게임은 최소 4명 이상의 플레이어가 필요합니다. (현재 ${playerIds.length}명)`);
        }

        const totalPlayers = playerIds.length;
        let mafiaCount = this.roomData.config.mafiaCount || 2;
        if (mafiaCount >= totalPlayers - 1) {
            mafiaCount = Math.max(1, Math.floor(totalPlayers / 3));
        }

        // 무작위 셔플 후 역할 배정
        const shuffled = [...playerIds].sort(() => Math.random() - 0.5);
        const rolesMap = {};

        // 1명 판사 배정
        const judgeId = shuffled[0];
        rolesMap[judgeId] = 'JUDGE';

        // mafiaCount명 마피아 배정
        const mafiaIds = [];
        for (let i = 1; i <= mafiaCount; i++) {
            const mId = shuffled[i];
            rolesMap[mId] = 'MAFIA';
            mafiaIds.push(mId);
        }

        // 나머지 시민 배정
        for (let i = mafiaCount + 1; i < totalPlayers; i++) {
            rolesMap[shuffled[i]] = 'CITIZEN';
        }

        const updatedPlayers = { ...this.roomData.players };
        for (const pId of playerIds) {
            updatedPlayers[pId].role = rolesMap[pId];
            updatedPlayers[pId].isJailed = false;
            updatedPlayers[pId].jailedRound = 0;
            updatedPlayers[pId].escapeQuizSolved = false;
        }

        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        await updateDoc(roomRef, {
            state: 'ROLE_REVEAL',
            round: 1,
            players: updatedPlayers,
            rolesAssigned: true,
            chatLogs: [
                ...this.roomData.chatLogs,
                { time: Date.now(), msg: `🎲 게임이 시작되었습니다! 각자의 신분을 비밀리에 확인하세요.` }
            ],
            updatedAt: Date.now()
        });
    }

    /**
     * 다음 페이즈로 전환 (방장 전용)
     */
    async advancePhase(nextState) {
        if (!this.isHost || !this.currentRoomId || !this.roomData) return;
        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);

        const payload = {
            state: nextState,
            updatedAt: Date.now()
        };

        if (nextState === 'MORNING') {
            payload.morningStartedAt = Date.now();
            payload.nominations = {};
            payload.judgeDecision = null;
            payload.mafiaTarget = null;
            payload.currentSuspects = [];
        }

        await updateDoc(roomRef, payload);
    }

    /**
     * 용의자 지목 투표
     */
    async submitNomination(targetSessionId) {
        if (!this.currentRoomId || !this.roomData) return;
        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);
        const currentNoms = { ...(this.roomData.nominations || {}) };
        currentNoms[this.mySessionId] = targetSessionId;

        await updateDoc(roomRef, {
            nominations: currentNoms,
            updatedAt: Date.now()
        });
    }

    /**
     * 판사 판결 (용의자 1명 수감)
     */
    async submitJudgeDecision(targetSessionId) {
        if (!this.currentRoomId || !this.roomData) return;
        const roomRef = doc(db, ROOMS_COLLECTION, this.currentRoomId);

        await updateDoc(roomRef, {
            judgeDecision: targetSessionId,
            updatedAt: Date.now()
        });
    }

    /**
     * 마피아 암살/납치 지목 (시민 1명 수감)
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
            }
        }

        await updateDoc(roomRef, {
            players: updatedPlayers,
            updatedAt: Date.now()
        });
    }

    /**
     * 방 나가기
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
