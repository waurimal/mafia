/**
 * 와우리말 에듀테크 영어 마피아 게임 - 핵심 게임 엔진 (Game Engine)
 * 단원: 초등 영어 6학년 4단원 (Why are you happy? - Because I got a black belt.)
 * 2026 Eui Elementary School - Waurimal Project
 *
 * 지원 모드:
 * 1. 🤖 개인 모드 (AI 컴퓨터 대전: 6~7인 학급 모의 대결, 가위바위보 질문-대답, 추리 메모, 재판, 감옥 탈출)
 * 2. 📡 단체 모드 (실시간 온라인 멀티플레이: Firebase Firestore 연동, 학급 전체 참여)
 * 3. 🔒 교사 모드 (PIN: 4657, 성적표 조회/CSV 다운로드, 룸 제어, 20문항 커스텀)
 * 4. 🏆 실시간 명예의 전당 (1인 1최고점수, 학생 안심 마스킹, 기여도 점수)
 */

(function(window) {
    'use strict';

    // ────────────────────────────────────────────────────────
    // 1. 상수 및 초기 상태 정의
    // ────────────────────────────────────────────────────────
    const ADMIN_DEFAULT_PIN = '4657';
    const HOF_STORAGE_KEY = 'waurimal_mafia_hof_records';

    // AI 봇 가상 급우 목록
    const BOT_CLASSMATES = [
        { id: 'bot_minsu', name: '김민수', gender: 'm', avatar: '👦', num: 2 },
        { id: 'bot:seoyeon', name: '이서연', gender: 'f', avatar: '👧', num: 5 },
        { id: 'bot_junho', name: '박준호', gender: 'm', avatar: '👦', num: 8 },
        { id: 'bot_jiwoo', name: '최지우', gender: 'f', avatar: '👧', num: 12 },
        { id: 'bot_yeeun', name: '정예은', gender: 'f', avatar: '👧', num: 15 },
        { id: 'bot_doyoon', name: '강도윤', gender: 'm', avatar: '👦', num: 19 }
    ];

    class MafiaGame {
        constructor() {
            this.mode = 'ai'; // 'ai' (개인) | 'online' (단체)
            this.selectedUnit = '6G_L04'; // 기본: 6학년 4단원
            this.student = {
                grade: 6,
                classNum: 1,
                studentNum: 1,
                name: '학생'
            };
            this.currentRole = 'CITIZEN'; // 'CITIZEN' | 'JUDGE' | 'MAFIA'
            this.round = 1;
            this.maxRounds = 3;
            this.phase = 'LOBBY'; // 'ROLE_REVEAL' | 'MORNING' | 'EVENING' | 'NIGHT' | 'DAWN' | 'RESULTS'
            this.timerInterval = null;
            this.timerSeconds = 180;
            this.totalTimerDuration = 180;

            // 게임 참가자 목록 (플레이어 + 봇 또는 멀티플레이어)
            this.players = [];
            this.jailedPlayers = [];
            this.caughtMafias = [];
            this.userMemo = {}; // { [playerId]: { note: '', isSuspect: false, isClear: false } }
            this.userInterviews = {}; // { [playerId]: [ { qId, botAnswer, matched } ] }

            // 가위바위보 & 대결 상태
            this.activeDuel = null;
            this.pendingEscapeQuiz = null;

            // 투표 & 재판 데이터
            this.nominations = {}; // { [voterId]: targetId }
            this.currentSuspects = [];
            this.judgeVerdict = null;
            this.mafiaTarget = null;

            // 점수 및 통계
            this.score = 0;
            this.stats = {
                rpsWins: 0,
                questionsAsked: 0,
                correctSuspects: 0,
                quizEscapes: 0,
                gameWon: false
            };

            // 멀티플레이어 관리자 인스턴스
            this.multiplayer = null;
            this.hostShowSecretRoles = true;
        }

        /**
         * 게임 엔진 초기화 및 이벤트 리스너 바인딩
         */
        init() {
            this.loadStudentProfile();
            this.setUnit(this.selectedUnit);
            this.bindEvents();
            this.renderHomeHof();
            this.initMultiplayer();
            this.setupSpeechSynthesis();
            console.log("[MafiaGame] Initialized successfully.");
        }

        // ────────────────────────────────────────────────────────
        // 2. 학생 SSO 프로필 & 로컬 캐시 관리
        // ────────────────────────────────────────────────────────
        loadStudentProfile() {
            try {
                if (window.WaurimalStudent && typeof window.WaurimalStudent.get === 'function') {
                    const sso = window.WaurimalStudent.get();
                    if (sso && sso.name) {
                        this.student.name = sso.name;
                        this.student.grade = Number(sso.grade) || 6;
                        this.student.classNum = Number(sso.classNum) || 1;
                        this.student.studentNum = Number(sso.studentNum) || 1;
                    }
                } else {
                    let saved = localStorage.getItem('WaurimalStudent') || localStorage.getItem('waurimal_student_profile');
                    if (saved) {
                        const parsed = JSON.parse(saved);
                        if (parsed.name) this.student.name = parsed.name;
                        if (parsed.grade) this.student.grade = Number(parsed.grade) || 6;
                        if (parsed.classNum) this.student.classNum = Number(parsed.classNum) || 1;
                        if (parsed.studentNum) this.student.studentNum = Number(parsed.studentNum) || 1;
                    }
                }
            } catch (e) {}

            // 상단 공통 네비게이션 학생 정보 변경 이벤트 수신
            window.addEventListener('waurimal_student_updated', (e) => {
                if (e.detail && e.detail.name) {
                    this.student.name = e.detail.name;
                    this.student.grade = Number(e.detail.grade) || this.student.grade;
                    this.student.classNum = Number(e.detail.classNum) || this.student.classNum;
                    this.student.studentNum = Number(e.detail.studentNum) || this.student.studentNum;
                }
            });
        }

        saveStudentProfile() {
            if (window.WaurimalStudent && typeof window.WaurimalStudent.get === 'function') {
                const sso = window.WaurimalStudent.get();
                if (sso && sso.name && sso.name.trim()) {
                    this.student.name = sso.name.trim();
                    this.student.grade = Number(sso.grade) || 6;
                    this.student.classNum = Number(sso.classNum) || 1;
                    this.student.studentNum = Number(sso.studentNum) || 1;
                    return true;
                }
            }
            if (!this.student.name || this.student.name === '학생') {
                const btn = document.getElementById('w-btn-student-profile');
                if (btn) {
                    alert("상단 메뉴의 [👤 학생 로그인]을 눌러 학년, 반, 번호, 이름을 먼저 설정해 주세요!");
                    btn.click();
                    return false;
                }
            }
            return true;
        }

        // ────────────────────────────────────────────────────────
        // 2-B. 학습 단원 선택 (Unit Selection)
        // ────────────────────────────────────────────────────────
        setUnit(unitId) {
            if (!MafiaQuestions.setCurrentUnit(unitId)) return;
            this.selectedUnit = unitId;

            const unit = MafiaQuestions.getCurrentUnit();

            // 상단 헤더 업데이트
            const headerUnitBadge = document.getElementById('headerUnitBadge');
            const headerUnitDesc = document.getElementById('headerUnitDesc');
            if (headerUnitBadge) headerUnitBadge.textContent = `${unit.name} 추리`;
            if (headerUnitDesc) headerUnitDesc.textContent = `초등 영어 ${unit.name} ${unit.title} (${unit.shortDesc})`;

            // 단원 카드 활성화 스타일 업데이트
            const unitBtns = document.querySelectorAll('.unit-card-btn');
            unitBtns.forEach(btn => {
                const uId = btn.dataset.unit;
                const badge = btn.querySelector('.unit-card-badge');
                if (uId === unitId) {
                    btn.classList.add('active');
                    btn.classList.remove('border-slate-800', 'bg-slate-900/60');
                    if (badge) {
                        badge.classList.remove('hidden', 'bg-slate-800', 'text-slate-400', 'border-slate-700');
                        badge.classList.add('bg-rose-500/20', 'text-rose-300', 'border-rose-500/40', 'font-black');
                        badge.textContent = '선택됨 ✔';
                    }
                } else {
                    btn.classList.remove('active');
                    btn.classList.add('border-slate-800', 'bg-slate-900/60');
                    if (badge) {
                        badge.classList.add('hidden');
                        badge.textContent = '선택하기';
                    }
                }
            });

            // 인게임 학습지 제목 업데이트
            const wsTitle = document.getElementById('worksheetPanelTitle');
            if (wsTitle) wsTitle.textContent = `나의 비밀 학습지 (${unit.name} 10문항)`;

            this.renderHomeHof();
        }

        // ────────────────────────────────────────────────────────
        // 2-C. 로비 문제 읽기 & 말하기 연습 모달
        // ────────────────────────────────────────────────────────
        openUnitPracticeModal() {
            const modal = document.getElementById('unitPracticeModal');
            const list = document.getElementById('unitPracticeQuestionsList');
            const title = document.getElementById('unitPracticeModalTitle');
            const desc = document.getElementById('unitPracticeModalDesc');
            const unit = MafiaQuestions.getCurrentUnit();

            if (!modal) return;
            if (title) title.innerHTML = `<i class="fa-solid fa-book-open-reader text-rose-400"></i> [${unit.name}] 10개 문항 읽기 & 말하기 연습`;
            if (desc) desc.textContent = `${unit.title} - ${unit.shortDesc} (소리 내어 읽고 🔊 스피커로 발음을 들어보세요)`;

            const qaList = MafiaQuestions.getWorksheetQA('CITIZEN');
            if (list) {
                list.innerHTML = qaList.map(qa => {
                    const qText = MafiaQuestions.formatQuestion(qa);
                    const aText = MafiaQuestions.formatAnswer(qa);

                    return `
                        <div class="practice-card-row p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-3">
                            <div class="flex-1 space-y-1">
                                <div class="flex items-center gap-2 flex-wrap">
                                    <span class="text-[11px] font-black px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                                        Q${qa.id}
                                    </span>
                                    <span class="text-xs font-black text-white">${qText}</span>
                                    ${qa.questionKr ? `<span class="text-[11px] text-slate-400 font-normal">(${qa.questionKr})</span>` : ''}
                                </div>
                                <div class="text-xs font-bold text-emerald-300 flex items-center gap-1.5 flex-wrap pl-6">
                                    <span class="text-slate-500">A:</span>
                                    <span>${aText}</span>
                                    ${qa.answerKr ? `<span class="text-[11px] text-slate-400 font-normal">(${qa.answerKr})</span>` : ''}
                                </div>
                            </div>
                            <button type="button" class="btn-tts-speaker p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 cursor-pointer flex-shrink-0" onclick="window.mafiaGame.speak('${qText.replace(/'/g, "\\'")} ... ${aText.replace(/'/g, "\\'")}')" title="원어민 발음 듣기">
                                <i class="fa-solid fa-volume-high text-sm"></i>
                            </button>
                        </div>
                    `;
                }).join('');
            }

            modal.classList.remove('hidden');
        }

        closeUnitPracticeModal() {
            const modal = document.getElementById('unitPracticeModal');
            if (modal) modal.classList.add('hidden');
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        }

        playAllPracticeSequentially() {
            const qaList = MafiaQuestions.getWorksheetQA('CITIZEN');
            let idx = 0;
            const playNext = () => {
                const modal = document.getElementById('unitPracticeModal');
                if (!modal || modal.classList.contains('hidden')) return;
                if (idx >= qaList.length) return;
                const qa = qaList[idx];
                const text = `${MafiaQuestions.formatQuestion(qa)} ... ${MafiaQuestions.formatAnswer(qa)}`;
                this.speak(text);
                idx++;
                setTimeout(playNext, 3800);
            };
            playNext();
        }

        // ────────────────────────────────────────────────────────
        // 3. 음성 합성 (TTS) & 효과음 연동
        // ────────────────────────────────────────────────────────
        setupSpeechSynthesis() {
            if ('speechSynthesis' in window) {
                // 음성 리스트 프리로드
                window.speechSynthesis.onvoiceschanged = () => {
                    this.voices = window.speechSynthesis.getVoices();
                };
            }
        }

        speak(text) {
            if (!('speechSynthesis' in window) || !text) return;
            try {
                window.speechSynthesis.cancel();
                const utter = new SpeechSynthesisUtterance(text);
                utter.lang = 'en-US';
                utter.rate = 0.9;
                utter.pitch = 1.0;
                window.speechSynthesis.speak(utter);
            } catch (e) {
                console.warn("[MafiaGame] TTS speak error:", e);
            }
        }

        playSound(type) {
            if (window.WaurimalAudio && typeof window.WaurimalAudio.play === 'function') {
                try {
                    window.WaurimalAudio.play(type);
                } catch (e) {}
            }
        }

        // ────────────────────────────────────────────────────────
        // 4. 모드 선택 및 화면 전환 (Home <-> Game)
        // ────────────────────────────────────────────────────────
        showScreen(screenName) {
            const screenHome = document.getElementById('screen-home');
            const screenGame = document.getElementById('screen-game');
            const screenHost = document.getElementById('screen-host');

            if (this.timerInterval) clearInterval(this.timerInterval);

            if (screenName === 'home') {
                if (screenHome) screenHome.classList.remove('hidden');
                if (screenGame) screenGame.classList.add('hidden');
                if (screenHost) screenHost.classList.add('hidden');
            } else if (screenName === 'host') {
                if (screenHome) screenHome.classList.add('hidden');
                if (screenGame) screenGame.classList.add('hidden');
                if (screenHost) screenHost.classList.remove('hidden');
            } else {
                if (screenHome) screenHome.classList.add('hidden');
                if (screenGame) screenGame.classList.remove('hidden');
                if (screenHost) screenHost.classList.add('hidden');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        setMode(mode) {
            this.mode = mode;
            const btnAi = document.getElementById('startAiModeBtn');
            const btnOnline = document.getElementById('selectOnlineTabBtn');
            const onlineSection = document.getElementById('onlineOptionsSection');
            const aiSection = document.getElementById('aiOptionsSection');

            if (mode === 'ai') {
                if (btnAi) {
                    btnAi.className = 'mode-tab-btn py-3.5 px-3 rounded-2xl border-2 font-bold text-xs flex flex-col items-center gap-1.5 transition-all bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 border-amber-300 text-slate-950 shadow-xl shadow-amber-500/25 ring-4 ring-amber-400/40 scale-[1.02] cursor-pointer relative';
                }
                if (btnOnline) {
                    btnOnline.className = 'mode-tab-btn py-3.5 px-3 rounded-2xl border-2 font-bold text-xs flex flex-col items-center gap-1.5 transition-all border-slate-700 bg-slate-900/80 text-slate-400 hover:border-slate-500 hover:bg-slate-800/80 cursor-pointer relative';
                }
                if (onlineSection) onlineSection.classList.add('hidden');
                if (aiSection) aiSection.classList.remove('hidden');
            } else {
                if (btnOnline) {
                    btnOnline.className = 'mode-tab-btn py-3.5 px-3 rounded-2xl border-2 font-bold text-xs flex flex-col items-center gap-1.5 transition-all bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 border-emerald-300 text-slate-950 shadow-xl shadow-emerald-500/25 ring-4 ring-emerald-400/40 scale-[1.02] cursor-pointer relative';
                }
                if (btnAi) {
                    btnAi.className = 'mode-tab-btn py-3.5 px-3 rounded-2xl border-2 font-bold text-xs flex flex-col items-center gap-1.5 transition-all border-slate-700 bg-slate-900/80 text-slate-400 hover:border-slate-500 hover:bg-slate-800/80 cursor-pointer relative';
                }
                if (onlineSection) onlineSection.classList.remove('hidden');
                if (aiSection) aiSection.classList.add('hidden');
            }
        }

        // ────────────────────────────────────────────────────────
        // 5. 개인 모드 (AI 대전) 시작 및 봇 초기화
        // ────────────────────────────────────────────────────────
        startAiGame() {
            if (!this.saveStudentProfile()) return;

            const roleSelect = document.getElementById('aiRoleSelect');
            const chosenRole = roleSelect ? roleSelect.value : 'random';
            const timerSelect = document.getElementById('aiTimerSelect');
            this.totalTimerDuration = timerSelect ? Number(timerSelect.value) || 180 : 180;

            this.round = 1;
            this.jailedPlayers = [];
            this.caughtMafias = [];
            this.userMemo = {};
            this.userInterviews = {};
            this.nominations = {};
            this.currentSuspects = [];
            this.score = 0;
            this.stats = { rpsWins: 0, questionsAsked: 0, correctSuspects: 0, quizEscapes: 0, gameWon: false };

            // 플레이어 구성: 학생 1명 + AI 봇 6명 (총 7명)
            // 역할 배정: 1 Judge, 2 Mafia, 4 Citizen
            const allParticipants = [
                { id: 'user_player', name: this.student.name, isUser: true, avatar: '🎓', num: this.student.studentNum },
                ...BOT_CLASSMATES.map(b => ({ ...b, isUser: false }))
            ];

            let roleAssignment = {};
            if (chosenRole === 'random') {
                const roles = ['JUDGE', 'MAFIA', 'MAFIA', 'CITIZEN', 'CITIZEN', 'CITIZEN', 'CITIZEN'];
                const shuffledRoles = [...roles].sort(() => Math.random() - 0.5);
                allParticipants.forEach((p, idx) => {
                    roleAssignment[p.id] = shuffledRoles[idx];
                });
            } else {
                roleAssignment['user_player'] = chosenRole;
                const remainingRoles = ['JUDGE', 'MAFIA', 'MAFIA', 'CITIZEN', 'CITIZEN', 'CITIZEN', 'CITIZEN'];
                remainingRoles.splice(remainingRoles.indexOf(chosenRole), 1);
                const shuffledRemaining = remainingRoles.sort(() => Math.random() - 0.5);
                allParticipants.filter(p => !p.isUser).forEach((p, idx) => {
                    roleAssignment[p.id] = shuffledRemaining[idx];
                });
            }

            this.currentRole = roleAssignment['user_player'];
            this.players = allParticipants.map(p => ({
                ...p,
                role: roleAssignment[p.id],
                isJailed: false,
                jailedRound: 0,
                escapeQuizSolved: false
            }));

            // 메모 초기화
            this.players.forEach(p => {
                this.userMemo[p.id] = { note: '', isSuspect: false, isClear: false };
                this.userInterviews[p.id] = [];
            });

            this.showScreen('game');
            this.renderIngameHeader();
            this.renderWorksheetTable();
            this.openRoleRevealModal();
        }

        // ────────────────────────────────────────────────────────
        // 6. 신분 확인 모달 ("확인 후 찢어서 주머니에 보관")
        // ────────────────────────────────────────────────────────
        openRoleRevealModal() {
            const modal = document.getElementById('roleRevealModal');
            const cardInner = document.getElementById('roleCardInner');
            const roleTitle = document.getElementById('revealRoleTitle');
            const roleDesc = document.getElementById('revealRoleDesc');
            const roleBadge = document.getElementById('revealRoleBadge');
            const roleIcon = document.getElementById('revealRoleIcon');
            const roleAdvice = document.getElementById('revealRoleAdvice');

            if (!modal) return;

            // 플립 초기화
            if (cardInner) {
                cardInner.parentElement.classList.remove('is-flipped');
            }

            // 역할별 텍스트 및 조언
            if (this.currentRole === 'MAFIA') {
                roleTitle.textContent = '당신은 마피아(MAFIA)입니다!';
                roleTitle.className = 'text-xl font-black text-rose-500 mb-1';
                roleBadge.className = 'px-3 py-1 rounded-full text-xs font-black role-badge-mafia border border-rose-400';
                roleBadge.textContent = '🕶️ 마피아 팀';
                roleIcon.className = 'fa-solid fa-user-secret text-5xl text-rose-500 my-2';
                roleDesc.textContent = '학습지 10개 문항 중 비밀 문항의 대답이 일반 시민과 미세하게 다릅니다.';
                roleAdvice.innerHTML = `
                    <p class="text-xs text-rose-300 font-bold mb-1">💡 마피아 승리 전략:</p>
                    <ul class="text-[11px] text-slate-300 space-y-1 list-disc list-inside">
                        <li>이어진 읽기 연습 시간에 내 비밀 답변과 시민 표준 답변의 차이를 미리 확인하세요!</li>
                        <li>정체를 숨기고 시민인 척 거짓말(블러핑)을 하여 밤까지 살아남으세요.</li>
                        <li>밤마다 판사와 시민들의 눈을 피해 제거할 상대를 은밀히 고르세요.</li>
                    </ul>
                `;
            } else if (this.currentRole === 'JUDGE') {
                roleTitle.textContent = '당신은 판사(JUDGE)입니다!';
                roleTitle.className = 'text-xl font-black text-amber-400 mb-1';
                roleBadge.className = 'px-3 py-1 rounded-full text-xs font-black role-badge-judge border border-amber-400';
                roleBadge.textContent = '⚖️ 정의의 판사';
                roleIcon.className = 'fa-solid fa-gavel text-5xl text-amber-400 my-2';
                roleDesc.textContent = '일반 시민과 동일한 10개 질문-대답을 가지고 있습니다.';
                roleAdvice.innerHTML = `
                    <p class="text-xs text-amber-300 font-bold mb-1">💡 판사 승리 전략:</p>
                    <ul class="text-[11px] text-slate-300 space-y-1 list-disc list-inside">
                        <li>대화 중 10개 표준 정답과 다른 이상한 대답을 하는 마피아를 꼼꼼히 조사하세요.</li>
                        <li>저녁 투표 후 최종 법정에 오른 용의자 중 진짜 마피아를 판결봉으로 가두세요!</li>
                        <li>마피아 2~3명을 모두 체포하면 시민 팀의 압도적 승리입니다.</li>
                    </ul>
                `;
            } else {
                roleTitle.textContent = '당신은 시민(CITIZEN)입니다!';
                roleTitle.className = 'text-xl font-black text-emerald-400 mb-1';
                roleBadge.className = 'px-3 py-1 rounded-full text-xs font-black role-badge-citizen border border-emerald-400';
                roleBadge.textContent = '🤝 무고한 시민';
                roleIcon.className = 'fa-solid fa-users text-5xl text-emerald-400 my-2';
                roleDesc.textContent = '학습지에 10개의 정답이 완벽하게 적혀 있습니다.';
                roleAdvice.innerHTML = `
                    <p class="text-xs text-emerald-300 font-bold mb-1">💡 시민 승리 전략:</p>
                    <ul class="text-[11px] text-slate-300 space-y-1 list-disc list-inside">
                        <li>급우들과 가위바위보를 하고 영어 질문을 던져 대답을 메모하세요.</li>
                        <li>대답이 어딘가 어색하거나 틀린 학생을 찾아 저녁 투표에 용의자로 지목하세요!</li>
                        <li>마피아의 거짓말에 속지 말고 판사를 도와 마피아를 잡으세요.</li>
                    </ul>
                `;
            }

            modal.classList.remove('hidden');
        }

        flipRoleCard() {
            const card = document.getElementById('roleCardContainer');
            if (card) {
                card.classList.toggle('is-flipped');
                this.playSound('click');
            }
        }

        tearAndConfirmRole() {
            const tearBtn = document.getElementById('confirmRoleTearBtn');
            const tearCard = document.getElementById('roleCardContainer');
            if (tearBtn) tearBtn.disabled = true;

            this.playSound('complete');
            if (tearCard) tearCard.classList.add('is-torn');

            setTimeout(() => {
                const modal = document.getElementById('roleRevealModal');
                if (modal) modal.classList.add('hidden');
                if (tearCard) {
                    tearCard.classList.remove('is-torn');
                    tearCard.classList.remove('is-flipped');
                }
                if (tearBtn) tearBtn.disabled = false;

                // 신분 확인 후 아이들이 문제를 읽고 연습할 시간 제공!
                this.startPracticePhase();
            }, 750);
        }

        // ────────────────────────────────────────────────────────
        // 6-B. 인게임 학습지 확인 & 말하기 연습 시간 (Practice Phase)
        // ────────────────────────────────────────────────────────
        startPracticePhase() {
            this.phase = 'PRACTICE';
            const modal = document.getElementById('inGamePracticeModal');
            const listContainer = document.getElementById('inGamePracticeList');
            const adviceBox = document.getElementById('inGamePracticeAdviceBox');
            const roleBadge = document.getElementById('inGamePracticeMyRoleBadge');
            const roundBadge = document.getElementById('practiceRoundBadge');

            if (!modal) {
                this.startMorningPhase();
                return;
            }

            if (roundBadge) roundBadge.textContent = `제 ${this.round}라운드 학습지 확인 & 말하기 연습`;

            if (roleBadge) {
                if (this.currentRole === 'MAFIA') {
                    roleBadge.className = 'px-3 py-1 rounded-full text-xs font-black role-badge-mafia border border-rose-400';
                    roleBadge.textContent = '🕶️ 내 신분: 마피아';
                } else if (this.currentRole === 'JUDGE') {
                    roleBadge.className = 'px-3 py-1 rounded-full text-xs font-black role-badge-judge border border-amber-400';
                    roleBadge.textContent = '⚖️ 내 신분: 판사';
                } else {
                    roleBadge.className = 'px-3 py-1 rounded-full text-xs font-black role-badge-citizen border border-emerald-400';
                    roleBadge.textContent = '🤝 내 신분: 시민';
                }
            }

            if (adviceBox) {
                if (this.currentRole === 'MAFIA') {
                    adviceBox.innerHTML = `
                        <div class="text-rose-400 font-black mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-user-secret"></i> 🕶️ 마피아 미션 안내:
                        </div>
                        <p class="text-slate-300 mb-1">당신의 학습지에는 일반 시민과 대답이 다른 <strong class="text-rose-300">비밀 문항</strong>이 포함되어 있습니다!</p>
                        <p class="text-slate-400">아래 10개 질문과 대답을 미리 읽어보고, 조사 중 친구들에게 들키지 않도록 시민인 척 대답을 준비해 보세요.</p>
                    `;
                } else {
                    adviceBox.innerHTML = `
                        <div class="text-emerald-400 font-black mb-1 flex items-center gap-1.5">
                            <i class="fa-solid fa-graduation-cap"></i> 🤝 ${this.currentRole === 'JUDGE' ? '판사' : '시민'} 미션 안내:
                        </div>
                        <p class="text-slate-300 mb-1">내 학습지의 10개 질문과 정답을 눈에 익히고 스피커(🔊)를 눌러 소리 내어 연습하세요.</p>
                        <p class="text-slate-400">가위바위보 대결 후 상대방에게 질문했을 때, 아래 정답과 다른 대답을 하는 친구가 바로 <strong>마피아</strong>입니다!</p>
                    `;
                }
            }

            const qaList = MafiaQuestions.getWorksheetQA(this.currentRole);
            if (listContainer) {
                listContainer.innerHTML = qaList.map(qa => {
                    const qText = MafiaQuestions.formatQuestion(qa);
                    const aText = MafiaQuestions.formatAnswer(qa);
                    const isDiff = qa.isMafiaDifference;

                    return `
                        <div class="practice-card-row p-3 rounded-2xl bg-slate-950 border ${isDiff ? 'border-rose-500/60 bg-rose-950/20' : 'border-slate-800'} flex items-start justify-between gap-3">
                            <div class="flex-1 space-y-1">
                                <div class="flex items-center gap-2 flex-wrap">
                                    <span class="text-[11px] font-black px-2 py-0.5 rounded-full ${isDiff ? 'bg-rose-500/30 text-rose-300 border border-rose-500/40' : 'bg-slate-800 text-amber-300'}">
                                        Q${qa.id}
                                    </span>
                                    <span class="text-xs font-black text-white">${qText}</span>
                                    ${qa.questionKr ? `<span class="text-[11px] text-slate-400 font-normal">(${qa.questionKr})</span>` : ''}
                                    ${isDiff ? '<span class="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/30">⚠️ 마피아 비밀 문항</span>' : ''}
                                </div>
                                <div class="text-xs font-bold text-emerald-300 flex items-center gap-1.5 flex-wrap pl-6">
                                    <span class="text-slate-500">A:</span>
                                    <span>${aText}</span>
                                    ${qa.answerKr ? `<span class="text-[11px] text-slate-400 font-normal">(${qa.answerKr})</span>` : ''}
                                </div>
                            </div>
                            <button type="button" class="btn-tts-speaker p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 cursor-pointer flex-shrink-0" onclick="window.mafiaGame.speak('${qText.replace(/'/g, "\\'")} ... ${aText.replace(/'/g, "\\'")}')" title="원어민 발음 듣기">
                                <i class="fa-solid fa-volume-high text-sm"></i>
                            </button>
                        </div>
                    `;
                }).join('');
            }

            modal.classList.remove('hidden');
        }

        finishPracticeAndStartMorning() {
            const modal = document.getElementById('inGamePracticeModal');
            if (modal) modal.classList.add('hidden');
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            this.startMorningPhase();
        }

        // ────────────────────────────────────────────────────────
        // 7. 아침 조사 페이즈 (Morning Investigation Phase - 3분)
        // ────────────────────────────────────────────────────────
        startMorningPhase() {
            this.phase = 'MORNING';
            this.timerSeconds = this.totalTimerDuration;
            this.renderIngameHeader();
            this.renderClassmatesArea();
            this.renderWorksheetTable();
            this.logJournal(`🌅 [제 ${this.round}라운드 아침] 조사 시간이 시작되었습니다! (제한시간 ${Math.floor(this.timerSeconds / 60)}분) 급우를 만나 가위바위보를 하고 질문하세요.`);

            this.startTimer(() => {
                this.logJournal(`⏰ 아침 조사 시간이 종료되었습니다! 모두 자리에 앉아 용의자를 지목합니다.`);
                this.startEveningNominationPhase();
            });

            // AI 모드 시 봇들 간의 자동 조사 대화 시뮬레이션
            if (this.mode === 'ai') {
                this.startBotInvestigationSimulation();
            }
        }

        startTimer(onComplete) {
            if (this.timerInterval) clearInterval(this.timerInterval);
            this.updateTimerDisplay();

            this.timerInterval = setInterval(() => {
                this.timerSeconds--;
                this.updateTimerDisplay();

                if (this.timerSeconds <= 0) {
                    clearInterval(this.timerInterval);
                    this.timerInterval = null;
                    if (typeof onComplete === 'function') onComplete();
                }
            }, 1000);
        }

        updateTimerDisplay() {
            const elTime = document.getElementById('phaseTimerText');
            const elBar = document.getElementById('phaseTimerProgress');
            if (!elTime) return;

            const min = Math.floor(Math.max(0, this.timerSeconds) / 60);
            const sec = Math.max(0, this.timerSeconds) % 60;
            elTime.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;

            if (elBar && this.totalTimerDuration > 0) {
                const pct = (Math.max(0, this.timerSeconds) / this.totalTimerDuration) * 100;
                elBar.style.width = `${pct}%`;
            }
        }

        renderIngameHeader() {
            const badgeRound = document.getElementById('headerRoundBadge');
            const badgePhase = document.getElementById('headerPhaseBadge');
            const badgeMyRole = document.getElementById('headerMyRoleBadge');

            if (badgeRound) badgeRound.textContent = `제 ${this.round} / ${this.maxRounds} 라운드`;
            if (badgePhase) {
                if (this.phase === 'MORNING') {
                    badgePhase.innerHTML = `<i class="fa-solid fa-sun text-amber-400"></i> 아침 조사 (3분)`;
                    badgePhase.className = 'px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/40';
                } else if (this.phase === 'EVENING') {
                    badgePhase.innerHTML = `<i class="fa-solid fa-cloud-sun text-orange-400"></i> 저녁 용의자 지목`;
                    badgePhase.className = 'px-3 py-1 rounded-full text-xs font-black bg-orange-500/20 text-orange-300 border border-orange-500/40';
                } else if (this.phase === 'NIGHT') {
                    badgePhase.innerHTML = `<i class="fa-solid fa-moon text-indigo-400"></i> 밤의 재판 & 마피아`;
                    badgePhase.className = 'px-3 py-1 rounded-full text-xs font-black bg-indigo-500/20 text-indigo-300 border border-indigo-500/40';
                } else if (this.phase === 'DAWN') {
                    badgePhase.innerHTML = `<i class="fa-solid fa-dungeon text-rose-400"></i> 감옥 수감 & 탈출 퀴즈`;
                    badgePhase.className = 'px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-300 border border-rose-500/40';
                } else {
                    badgePhase.innerHTML = `<i class="fa-solid fa-trophy text-amber-400"></i> 최종 결과`;
                    badgePhase.className = 'px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/40';
                }
            }

            if (badgeMyRole) {
                if (this.currentRole === 'MAFIA') {
                    badgeMyRole.innerHTML = `<i class="fa-solid fa-user-secret"></i> 내 신분: 마피아`;
                    badgeMyRole.className = 'px-3 py-1 rounded-full text-xs font-black role-badge-mafia border border-rose-400';
                } else if (this.currentRole === 'JUDGE') {
                    badgeMyRole.innerHTML = `<i class="fa-solid fa-gavel"></i> 내 신분: 판사`;
                    badgeMyRole.className = 'px-3 py-1 rounded-full text-xs font-black role-badge-judge border border-amber-400';
                } else {
                    badgeMyRole.innerHTML = `<i class="fa-solid fa-users"></i> 내 신분: 시민`;
                    badgeMyRole.className = 'px-3 py-1 rounded-full text-xs font-black role-badge-citizen border border-emerald-400';
                }
            }
        }

        // ────────────────────────────────────────────────────────
        // 8. 급우 목록 & 가위바위보 대결 인터랙션
        // ────────────────────────────────────────────────────────
        renderClassmatesArea() {
            const container = document.getElementById('classmatesListContainer');
            if (!container) return;
            container.innerHTML = '';

            const activeClassmates = this.players.filter(p => !p.isUser);

            activeClassmates.forEach(mate => {
                const isJailed = mate.isJailed;
                const memo = this.userMemo[mate.id] || { note: '', isSuspect: false, isClear: false };

                const card = document.createElement('div');
                card.className = `p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                    isJailed 
                        ? 'bg-slate-900/40 border-slate-800 opacity-60' 
                        : memo.isSuspect 
                            ? 'bg-rose-950/40 border-rose-500/60 shadow-lg shadow-rose-950/40' 
                            : memo.isClear 
                                ? 'bg-emerald-950/30 border-emerald-500/50' 
                                : 'bg-slate-850/90 border-slate-700/80 hover:border-slate-500'
                }`;

                card.innerHTML = `
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <div class="flex items-center gap-2">
                                <span class="text-2xl">${mate.avatar || '👦'}</span>
                                <div>
                                    <h4 class="text-sm font-black text-white flex items-center gap-1.5">
                                        ${mate.name}
                                        ${isJailed ? '<span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">감옥 수감 중</span>' : ''}
                                    </h4>
                                    <span class="text-[10px] text-slate-400">${mate.num}번 학생</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-1">
                                <button type="button" class="btn-toggle-suspect p-1.5 rounded-lg text-xs ${memo.isSuspect ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}" title="마피아 의심 표시">
                                    <i class="fa-solid fa-skull"></i>
                                </button>
                                <button type="button" class="btn-toggle-clear p-1.5 rounded-lg text-xs ${memo.isClear ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}" title="안전한 시민 표시">
                                    <i class="fa-solid fa-shield"></i>
                                </button>
                            </div>
                        </div>

                        <!-- 메모 입력창 -->
                        <div class="mb-2.5">
                            <input type="text" value="${memo.note || ''}" placeholder="메모 (예: 7번 틀림)" class="input-mate-memo w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700/80 text-[11px] text-slate-200 focus:outline-none focus:border-amber-400">
                        </div>

                        <!-- 이전 조사 인터뷰 이력 -->
                        <div class="mate-history text-[10px] text-slate-400 space-y-1 mb-2 max-h-16 overflow-y-auto worksheet-scroll">
                            ${this.renderInterviewHistory(mate.id)}
                        </div>
                    </div>

                    <!-- 대화 / 가위바위보 신청 버튼 -->
                    <div>
                        <button type="button" class="btn-challenge-duel w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed" ${isJailed || this.phase !== 'MORNING' ? 'disabled' : ''}>
                            <i class="fa-solid fa-hand-fist"></i> 만나서 가위바위보 대결
                        </button>
                    </div>
                `;

                // 이벤트 리스너
                const btnSuspect = card.querySelector('.btn-toggle-suspect');
                const btnClear = card.querySelector('.btn-toggle-clear');
                const inputMemo = card.querySelector('.input-mate-memo');
                const btnDuel = card.querySelector('.btn-challenge-duel');

                if (btnSuspect) {
                    btnSuspect.addEventListener('click', () => {
                        this.userMemo[mate.id].isSuspect = !this.userMemo[mate.id].isSuspect;
                        if (this.userMemo[mate.id].isSuspect) this.userMemo[mate.id].isClear = false;
                        this.renderClassmatesArea();
                    });
                }
                if (btnClear) {
                    btnClear.addEventListener('click', () => {
                        this.userMemo[mate.id].isClear = !this.userMemo[mate.id].isClear;
                        if (this.userMemo[mate.id].isClear) this.userMemo[mate.id].isSuspect = false;
                        this.renderClassmatesArea();
                    });
                }
                if (inputMemo) {
                    inputMemo.addEventListener('input', (e) => {
                        this.userMemo[mate.id].note = e.target.value;
                    });
                }
                if (btnDuel) {
                    btnDuel.addEventListener('click', () => {
                        this.openDuelModal(mate);
                    });
                }

                container.appendChild(card);
            });
        }

        renderInterviewHistory(mateId) {
            const list = this.userInterviews[mateId] || [];
            if (list.length === 0) return '<span class="text-slate-500 italic">아직 조사한 기록이 없습니다.</span>';

            return list.map(item => `
                <div class="flex items-center justify-between border-b border-slate-800/80 pb-0.5">
                    <span class="truncate max-w-[150px]" title="${item.questionText || ''}">Q${item.qId}: ${item.questionText || item.emotion}</span>
                    <span class="${item.matched ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}">
                        ${item.matched ? '일치 ✔' : '불일치 ❌'}
                    </span>
                </div>
            `).join('');
        }

        // ────────────────────────────────────────────────────────
        // 9. 가위바위보 대결 모달 & 질문/대답 프로세스
        // ────────────────────────────────────────────────────────
        openDuelModal(targetMate) {
            this.activeDuel = {
                target: targetMate,
                step: 'RPS', // 'RPS' -> 'ASK' | 'ANSWER' -> 'RESULT'
                winner: null,
                selectedQId: 1
            };

            const modal = document.getElementById('duelModal');
            const title = document.getElementById('duelTargetNameTitle');
            const duelStepRps = document.getElementById('duelStepRps');
            const duelStepAsk = document.getElementById('duelStepAsk');
            const duelStepAnswer = document.getElementById('duelStepAnswer');
            const duelStepResult = document.getElementById('duelStepResult');

            if (!modal) return;
            if (title) title.textContent = `${targetMate.name} 학생과의 대화 조사`;

            duelStepRps.classList.remove('hidden');
            duelStepAsk.classList.add('hidden');
            duelStepAnswer.classList.add('hidden');
            duelStepResult.classList.add('hidden');

            modal.classList.remove('hidden');
            this.playSound('click');
        }

        playRpsChoice(userChoice) { // 'rock' | 'scissors' | 'paper'
            if (!this.activeDuel) return;

            const choices = ['rock', 'scissors', 'paper'];
            const botChoice = choices[Math.floor(Math.random() * choices.length)];

            let userWon = false;
            let draw = false;

            if (userChoice === botChoice) {
                draw = true;
            } else if (
                (userChoice === 'rock' && botChoice === 'scissors') ||
                (userChoice === 'scissors' && botChoice === 'paper') ||
                (userChoice === 'paper' && botChoice === 'rock')
            ) {
                userWon = true;
            }

            const duelStepRps = document.getElementById('duelStepRps');
            const rpsFeedback = document.getElementById('rpsBattleFeedback');

            const choiceIcons = { rock: '✊ 바위', scissors: '✌ 가위', paper: '🖐 보' };

            rpsFeedback.innerHTML = `
                <div class="flex items-center justify-center gap-6 text-xl font-black my-3">
                    <div class="text-amber-400 text-center">나: ${choiceIcons[userChoice]}</div>
                    <div class="text-slate-500">VS</div>
                    <div class="text-teal-400 text-center">${this.activeDuel.target.name}: ${choiceIcons[botChoice]}</div>
                </div>
                <div class="text-sm font-black text-center ${draw ? 'text-amber-300' : userWon ? 'text-emerald-400' : 'text-rose-400'}">
                    ${draw ? '비겼습니다! 다시 내세요.' : userWon ? '🎉 이겼습니다! 영어로 질문하세요.' : '😢 졌습니다! 상대방의 질문에 대답하세요.'}
                </div>
            `;

            if (draw) {
                this.playSound('click');
                return;
            }

            this.playSound(userWon ? 'correct' : 'wrong');

            setTimeout(() => {
                duelStepRps.classList.add('hidden');
                if (userWon) {
                    this.stats.rpsWins++;
                    this.score += 30;
                    this.openDuelAskStep();
                } else {
                    this.openDuelAnswerStep();
                }
            }, 1000);
        }

        // 이긴 경우: 10문항 중 질문 선택
        openDuelAskStep() {
            const duelStepAsk = document.getElementById('duelStepAsk');
            const selectQ = document.getElementById('duelAskQuestionSelect');
            const qPreview = document.getElementById('duelAskQuestionPreview');
            if (!duelStepAsk || !selectQ) return;

            const qaList = MafiaQuestions.getWorksheetQA('CITIZEN');

            selectQ.innerHTML = qaList.map(q => {
                const qText = MafiaQuestions.formatQuestion(q);
                const hint = q.questionKr || q.emotionKr || q.action || '';
                return `
                    <option value="${q.id}">
                        [${q.id}번] ${qText} ${hint ? `(${hint})` : ''}
                    </option>
                `;
            }).join('');

            const updatePreview = () => {
                const curId = Number(selectQ.value);
                const qa = MafiaQuestions.getQAById(curId, 'CITIZEN');
                const qText = MafiaQuestions.formatQuestion(qa);
                if (qPreview) {
                    qPreview.textContent = `🗣️ "${qText}"`;
                }
            };

            selectQ.onchange = updatePreview;
            updatePreview();

            duelStepAsk.classList.remove('hidden');
        }

        submitUserQuestion() {
            if (!this.activeDuel) return;
            const selectQ = document.getElementById('duelAskQuestionSelect');
            const qId = Number(selectQ ? selectQ.value : 1);
            const qaCitizen = MafiaQuestions.getQAById(qId, 'CITIZEN');
            const targetMate = this.activeDuel.target;

            // 영어 질문 음성 재생
            const questionSentence = MafiaQuestions.formatQuestion(qaCitizen);
            this.speak(questionSentence);
            this.stats.questionsAsked++;

            // AI 봇 대답 결정
            const botRole = targetMate.role;
            let botAnswer = '';
            let isMatched = true;

            if (botRole === 'MAFIA') {
                const qaMafia = MafiaQuestions.getQAById(qId, 'MAFIA');
                botAnswer = MafiaQuestions.formatAnswer(qaMafia);
                if (qaMafia.isMafiaDifference) {
                    isMatched = false; // 대답이 다름!
                }
            } else {
                botAnswer = MafiaQuestions.formatAnswer(qaCitizen);
                isMatched = true;
            }

            // 인터뷰 기록 저장
            if (!this.userInterviews[targetMate.id]) this.userInterviews[targetMate.id] = [];
            this.userInterviews[targetMate.id].push({
                qId: qId,
                questionText: questionSentence,
                emotion: qaCitizen.emotion || qaCitizen.action || questionSentence,
                botAnswer: botAnswer,
                matched: isMatched
            });

            this.showDuelResultStep(questionSentence, botAnswer, isMatched);
        }

        // 진 경우: 상대방이 나에게 질문 -> 내가 대답
        openDuelAnswerStep() {
            const duelStepAnswer = document.getElementById('duelStepAnswer');
            const questionBubble = document.getElementById('botAskedQuestionBubble');
            const answerOptionsContainer = document.getElementById('userAnswerOptionsContainer');

            const myWorksheetQA = MafiaQuestions.getWorksheetQA(this.currentRole);
            const randIdx = Math.floor(Math.random() * myWorksheetQA.length);
            const myCorrectQA = myWorksheetQA[randIdx];
            const randId = myCorrectQA.id;

            const qaCitizen = MafiaQuestions.getQAById(randId, 'CITIZEN');
            const botQuestion = MafiaQuestions.formatQuestion(qaCitizen);

            if (questionBubble) questionBubble.textContent = `🗣️ ${this.activeDuel.target.name}: "${botQuestion}"`;
            this.speak(botQuestion);

            const myCorrectAnswer = MafiaQuestions.formatAnswer(myCorrectQA);

            // 오답 보기 2개 무작위 추출
            const wrongCandidates = myWorksheetQA.filter(q => q.id !== randId);
            const shuffled = wrongCandidates.sort(() => Math.random() - 0.5);
            const optionAnswers = [
                myCorrectAnswer,
                MafiaQuestions.formatAnswer(shuffled[0]),
                MafiaQuestions.formatAnswer(shuffled[1])
            ].sort(() => Math.random() - 0.5);

            answerOptionsContainer.innerHTML = optionAnswers.map(ans => `
                <button type="button" class="btn-answer-choice w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-left text-xs font-bold text-white transition flex items-center justify-between cursor-pointer">
                    <span>${ans}</span>
                    <i class="fa-solid fa-volume-high text-slate-400"></i>
                </button>
            `).join('');

            const btns = answerOptionsContainer.querySelectorAll('.btn-answer-choice');
            btns.forEach(b => {
                b.addEventListener('click', () => {
                    const chosenText = b.querySelector('span').textContent;
                    this.speak(chosenText);
                    const isCorrect = (chosenText === myCorrectAnswer);
                    this.showDuelResultStep(botQuestion, chosenText, isCorrect);
                });
            });

            duelStepAnswer.classList.remove('hidden');
        }

        showDuelResultStep(questionText, answerText, isSuccess) {
            const duelStepAsk = document.getElementById('duelStepAsk');
            const duelStepAnswer = document.getElementById('duelStepAnswer');
            const duelStepResult = document.getElementById('duelStepResult');
            const resultBox = document.getElementById('duelResultContentBox');

            if (duelStepAsk) duelStepAsk.classList.add('hidden');
            if (duelStepAnswer) duelStepAnswer.classList.add('hidden');

            resultBox.innerHTML = `
                <div class="p-4 rounded-2xl bg-slate-900 border ${isSuccess ? 'border-emerald-500/50' : 'border-rose-500/50'} space-y-2">
                    <div class="text-xs text-slate-400">질문 (Question):</div>
                    <div class="text-sm font-black text-amber-300">"${questionText}"</div>
                    <div class="text-xs text-slate-400 mt-2">대답 (Answer):</div>
                    <div class="text-sm font-black ${isSuccess ? 'text-emerald-400' : 'text-rose-400'}">"${answerText}"</div>
                    <div class="text-xs font-bold pt-2 border-t border-slate-800 ${isSuccess ? 'text-emerald-300' : 'text-rose-300'}">
                        ${isSuccess ? '✔ 시민의 표준 답변과 일치합니다.' : '🚨 [경고] 시민의 표준 답변과 다릅니다! 마피아일 확률이 높습니다!'}
                    </div>
                </div>
            `;

            duelStepResult.classList.remove('hidden');
            this.renderClassmatesArea();
            this.logJournal(`💬 대화 기록: ${questionText} ➔ ${answerText} (${isSuccess ? '일치' : '불일치 ❌'})`);
        }

        closeDuelModal() {
            const modal = document.getElementById('duelModal');
            if (modal) modal.classList.add('hidden');
            this.activeDuel = null;
        }

        // AI 봇들끼리의 조사 시뮬레이션 로그 생성
        startBotInvestigationSimulation() {
            const botInterval = setInterval(() => {
                if (this.phase !== 'MORNING' || this.timerSeconds <= 5) {
                    clearInterval(botInterval);
                    return;
                }

                // 무작위 2명의 봇 선택
                const activeBots = this.players.filter(p => !p.isUser && !p.isJailed);
                if (activeBots.length < 2) return;

                const bot1 = activeBots[Math.floor(Math.random() * activeBots.length)];
                let bot2 = activeBots[Math.floor(Math.random() * activeBots.length)];
                while (bot2.id === bot1.id) {
                    bot2 = activeBots[Math.floor(Math.random() * activeBots.length)];
                }

                const citizenQA = MafiaQuestions.getWorksheetQA('CITIZEN');
                const randQ = citizenQA[Math.floor(Math.random() * citizenQA.length)];
                const qText = MafiaQuestions.formatQuestion(randQ);
                let ansText = '';

                if (bot2.role === 'MAFIA') {
                    const mafiaQA = MafiaQuestions.getQAById(randQ.id, 'MAFIA');
                    ansText = MafiaQuestions.formatAnswer(mafiaQA);
                } else {
                    ansText = MafiaQuestions.formatAnswer(randQ);
                }

                this.logJournal(`👀 [주변 대화] ${bot1.name} ➔ ${bot2.name}: "${qText}" | 대답: "${ansText}"`);
            }, 12000);
        }

        // ────────────────────────────────────────────────────────
        // 10. 저녁 용의자 지목 & 투표 페이즈 (Evening Suspect Nomination)
        // ────────────────────────────────────────────────────────
        startEveningNominationPhase() {
            this.phase = 'EVENING';
            this.renderIngameHeader();
            this.nominations = {};
            this.currentSuspects = [];

            const modal = document.getElementById('nominationModal');
            const container = document.getElementById('nominationCandidatesList');
            const title = document.getElementById('nominationModalTitle');
            const desc = document.getElementById('nominationModalDesc');

            // 라운드별 용의자 선발 수 (1라운드: 3명, 2~3라운드: 1명)
            const targetCount = (this.round === 1) ? 3 : 1;
            title.textContent = `제 ${this.round}라운드 저녁 용의자 지목 & 투표`;
            desc.textContent = `주의: 이유는 말하지 않고 의심되는 친구 이름만 선택합니다. (최종 법정 용의자: ${targetCount}명 선출)`;

            container.innerHTML = '';
            const eligiblePlayers = this.players.filter(p => !p.isJailed);

            eligiblePlayers.forEach(p => {
                const memo = this.userMemo[p.id] || {};
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'w-full p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-400 text-left transition flex items-center justify-between cursor-pointer';
                btn.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">${p.avatar || '👦'}</span>
                        <div>
                            <div class="text-sm font-black text-white">${p.name} ${p.isUser ? '(나)' : ''}</div>
                            <div class="text-[10px] text-slate-400">${memo.note ? '메모: ' + memo.note : '특이사항 없음'}</div>
                        </div>
                    </div>
                    <div class="text-xs font-bold text-amber-400">
                        지목하기 <i class="fa-solid fa-crosshairs"></i>
                    </div>
                `;

                btn.addEventListener('click', () => {
                    this.castUserNomination(p.id);
                });

                container.appendChild(btn);
            });

            if (modal) modal.classList.remove('hidden');
            this.playSound('click');
        }

        castUserNomination(targetId) {
            this.nominations['user_player'] = targetId;

            // 봇들의 투표 시뮬레이션
            const activeBots = this.players.filter(p => !p.isUser && !p.isJailed);
            activeBots.forEach(bot => {
                // 봇은 마피아가 아니면 마피아를 의심하거나 무작위 투표
                const candidates = this.players.filter(p => !p.isJailed && p.id !== bot.id);
                if (bot.role === 'MAFIA') {
                    // 마피아는 무고한 시민이나 판사를 투표
                    const nonMafias = candidates.filter(c => c.role !== 'MAFIA');
                    const target = nonMafias[Math.floor(Math.random() * nonMafias.length)] || candidates[0];
                    this.nominations[bot.id] = target.id;
                } else {
                    // 시민/판사는 40% 확률로 마피아를 정확히 찍음
                    const mafias = candidates.filter(c => c.role === 'MAFIA');
                    if (mafias.length > 0 && Math.random() < 0.45) {
                        this.nominations[bot.id] = mafias[0].id;
                    } else {
                        const target = candidates[Math.floor(Math.random() * candidates.length)];
                        this.nominations[bot.id] = target.id;
                    }
                }
            });

            // 득표 집계
            const voteCounts = {};
            Object.values(this.nominations).forEach(tId => {
                voteCounts[tId] = (voteCounts[tId] || 0) + 1;
            });

            // 최다 득표자 정렬
            const sorted = Object.keys(voteCounts).sort((a, b) => voteCounts[b] - voteCounts[a]);
            const targetCount = (this.round === 1) ? 3 : 1;
            this.currentSuspects = sorted.slice(0, targetCount).map(id => this.players.find(p => p.id === id));

            const modal = document.getElementById('nominationModal');
            if (modal) modal.classList.add('hidden');

            this.logJournal(`⚖️ 투표 결과 발표: ${this.currentSuspects.map(s => s.name).join(', ')} (총 ${targetCount}명)이 최종 법정 용의자로 결정되었습니다.`);
            this.startNightTrialPhase();
        }

        // ────────────────────────────────────────────────────────
        // 11. 밤의 재판 & 마피아 암살 페이즈 (Night Trial Phase)
        // ────────────────────────────────────────────────────────
        startNightTrialPhase() {
            this.phase = 'NIGHT';
            this.renderIngameHeader();
            this.playSound('click');

            const modal = document.getElementById('nightTrialModal');
            const mafiaSection = document.getElementById('nightMafiaActionSection');
            const judgeSection = document.getElementById('nightJudgeActionSection');
            const spectatorSection = document.getElementById('nightSpectatorSection');

            mafiaSection.classList.add('hidden');
            judgeSection.classList.add('hidden');
            spectatorSection.classList.add('hidden');

            // 역할별 화면 분기
            if (this.currentRole === 'MAFIA') {
                mafiaSection.classList.remove('hidden');
                this.renderMafiaNightChoice();
            } else if (this.currentRole === 'JUDGE') {
                judgeSection.classList.remove('hidden');
                this.renderJudgeNightChoice();
            } else {
                spectatorSection.classList.remove('hidden');
                this.runAiNightActions();
            }

            if (modal) modal.classList.remove('hidden');
        }

        // 판사: 용의자 중 누구를 감옥에 가둘지 판결
        renderJudgeNightChoice() {
            const list = document.getElementById('judgeSuspectsList');
            if (!list) return;
            list.innerHTML = '';

            this.currentSuspects.forEach(suspect => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'w-full p-3 rounded-2xl bg-amber-950/40 border border-amber-500/50 hover:bg-amber-900/60 text-left transition flex items-center justify-between cursor-pointer';
                btn.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">${suspect.avatar || '👦'}</span>
                        <div>
                            <div class="text-sm font-black text-amber-300">${suspect.name}</div>
                            <div class="text-[10px] text-slate-400">지목된 용의자</div>
                        </div>
                    </div>
                    <div class="text-xs font-black text-amber-400">
                        판결: 감옥 수감 <i class="fa-solid fa-gavel"></i>
                    </div>
                `;

                btn.addEventListener('click', () => {
                    this.judgeVerdict = suspect.id;
                    this.playSound('complete');
                    btn.classList.add('gavel-strike-anim');
                    setTimeout(() => {
                        this.finishNightPhase();
                    }, 800);
                });

                list.appendChild(btn);
            });
        }

        // 마피아: 누구를 감옥에 가둘지(납치할지) 선택
        renderMafiaNightChoice() {
            const list = document.getElementById('mafiaVictimsList');
            if (!list) return;
            list.innerHTML = '';

            const nonMafias = this.players.filter(p => !p.isJailed && p.role !== 'MAFIA');

            nonMafias.forEach(citizen => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'w-full p-3 rounded-2xl bg-rose-950/40 border border-rose-500/50 hover:bg-rose-900/60 text-left transition flex items-center justify-between cursor-pointer';
                btn.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">${citizen.avatar || '👦'}</span>
                        <div>
                            <div class="text-sm font-black text-rose-300">${citizen.name}</div>
                            <div class="text-[10px] text-slate-400">무고한 시민/판사</div>
                        </div>
                    </div>
                    <div class="text-xs font-black text-rose-400">
                        감옥에 가두기 <i class="fa-solid fa-user-lock"></i>
                    </div>
                `;

                btn.addEventListener('click', () => {
                    this.mafiaTarget = citizen.id;
                    this.playSound('complete');
                    setTimeout(() => {
                        this.finishNightPhase();
                    }, 500);
                });

                list.appendChild(btn);
            });
        }

        // 일반 시민인 경우 AI 판사와 AI 마피아의 밤 행동 자동 처리
        runAiNightActions() {
            const judgePlayer = this.players.find(p => p.role === 'JUDGE' && !p.isJailed);
            if (judgePlayer && this.currentSuspects.length > 0) {
                // AI 판사 결정
                const suspect = this.currentSuspects[Math.floor(Math.random() * this.currentSuspects.length)];
                this.judgeVerdict = suspect.id;
            }

            const activeMafias = this.players.filter(p => p.role === 'MAFIA' && !p.isJailed);
            if (activeMafias.length > 0) {
                const nonMafias = this.players.filter(p => !p.isJailed && p.role !== 'MAFIA');
                const target = nonMafias[Math.floor(Math.random() * nonMafias.length)];
                if (target) this.mafiaTarget = target.id;
            }

            setTimeout(() => {
                this.finishNightPhase();
            }, 2500);
        }

        finishNightPhase() {
            const modal = document.getElementById('nightTrialModal');
            if (modal) modal.classList.add('hidden');

            this.startDawnResultsPhase();
        }

        // ────────────────────────────────────────────────────────
        // 12. 새벽 수감 결과 & 감옥 탈출 특별 퀴즈 페이즈 (Dawn Results)
        // ────────────────────────────────────────────────────────
        startDawnResultsPhase() {
            this.phase = 'DAWN';
            this.renderIngameHeader();

            const newlyJailed = [];

            // 판사 판결 수감
            if (this.judgeVerdict) {
                const jTarget = this.players.find(p => p.id === this.judgeVerdict);
                if (jTarget && !jTarget.isJailed) {
                    jTarget.isJailed = true;
                    jTarget.jailedRound = this.round;
                    newlyJailed.push({ player: jTarget, reason: '⚖️ 판사의 법정 판결' });
                    if (jTarget.role === 'MAFIA') {
                        this.caughtMafias.push(jTarget);
                    }
                }
            }

            // 마피아 습격 수감
            if (this.mafiaTarget) {
                const mTarget = this.players.find(p => p.id === this.mafiaTarget);
                if (mTarget && !mTarget.isJailed) {
                    mTarget.isJailed = true;
                    mTarget.jailedRound = this.round;
                    newlyJailed.push({ player: mTarget, reason: '🕶️ 마피아의 기습 감금' });
                }
            }

            this.logJournal(`☀️ [새벽 결과] 수감자 명단: ${newlyJailed.map(n => `${n.player.name}(${n.reason})`).join(', ') || '없음'}`);

            // 내가 감옥에 갇혔는지 확인 -> 특별 퀴즈 모달
            const userPlayer = this.players.find(p => p.isUser);
            if (userPlayer && userPlayer.isJailed && !userPlayer.escapeQuizSolved) {
                this.openPrisonEscapeModal();
            } else {
                // 봇들 탈출 퀴즈 시뮬레이션
                newlyJailed.filter(n => !n.player.isUser).forEach(n => {
                    if (Math.random() < 0.4) {
                        n.player.isJailed = false;
                        n.player.escapeQuizSolved = true;
                        this.logJournal(`🏃💨 [기적의 탈출] ${n.player.name} 학생이 영어 특별 문제를 맞혀 감옥에서 탈출했습니다!`);
                    }
                });

                this.checkRoundProgression();
            }
        }

        openPrisonEscapeModal() {
            const modal = document.getElementById('prisonEscapeModal');
            const qTitle = document.getElementById('escapeQuizTitle');
            const qContainer = document.getElementById('escapeQuizOptionsContainer');
            const timerEl = document.getElementById('escapeQuizTimerText');

            if (!modal) return;
            const quiz = MafiaQuestions.getRandomEscapeQuiz();
            this.pendingEscapeQuiz = quiz;

            qTitle.textContent = quiz.question;
            qContainer.innerHTML = '';

            let escapeTimer = 30;
            if (timerEl) timerEl.textContent = `${escapeTimer}초`;

            const eInterval = setInterval(() => {
                escapeTimer--;
                if (timerEl) timerEl.textContent = `${escapeTimer}초`;
                if (escapeTimer <= 0) {
                    clearInterval(eInterval);
                    alert("시간이 초과되어 감옥 탈출에 실패했습니다! 다음 아침 활동에 참여할 수 없습니다.");
                    modal.classList.add('hidden');
                    this.checkRoundProgression();
                }
            }, 1000);

            if (quiz.type === 'scramble') {
                // 어순 배열 퀴즈
                const words = [...quiz.scrambleWords].sort(() => Math.random() - 0.5);
                let selectedWords = [];

                const scrambleBox = document.createElement('div');
                scrambleBox.className = 'space-y-3';
                scrambleBox.innerHTML = `
                    <div id="scrambleResultBox" class="p-3 rounded-xl bg-slate-950 border border-slate-700 min-h-[44px] flex flex-wrap gap-2 text-sm font-bold text-amber-300"></div>
                    <div id="scrambleCandidatesBox" class="flex flex-wrap gap-2"></div>
                    <button type="button" id="btnSubmitScramble" class="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition">제출하기</button>
                `;

                qContainer.appendChild(scrambleBox);
                const candBox = scrambleBox.querySelector('#scrambleCandidatesBox');
                const resBox = scrambleBox.querySelector('#scrambleResultBox');

                const renderScramble = () => {
                    resBox.innerHTML = selectedWords.map((w, idx) => `
                        <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-pointer" data-idx="${idx}">${w}</span>
                    `).join('');

                    candBox.innerHTML = words.map((w, idx) => `
                        <button type="button" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white border border-slate-600" data-w="${w}">${w}</button>
                    `).join('');

                    candBox.querySelectorAll('button').forEach(b => {
                        b.onclick = () => {
                            selectedWords.push(b.dataset.w);
                            renderScramble();
                        };
                    });

                    resBox.querySelectorAll('span').forEach(s => {
                        s.onclick = () => {
                            selectedWords.splice(Number(s.dataset.idx), 1);
                            renderScramble();
                        };
                    });
                };

                renderScramble();

                scrambleBox.querySelector('#btnSubmitScramble').onclick = () => {
                    clearInterval(eInterval);
                    const userSentence = selectedWords.join(' ');
                    const isRight = (userSentence.toLowerCase().replace(/[^a-z]/g, '') === quiz.correctSentence.toLowerCase().replace(/[^a-z]/g, ''));
                    this.handleEscapeQuizResult(isRight);
                };

            } else {
                // 4지선다형 퀴즈
                quiz.options.forEach(opt => {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-left text-xs font-bold text-white transition flex items-center justify-between cursor-pointer';
                    btn.innerHTML = `<span>${opt}</span> <i class="fa-solid fa-arrow-right text-slate-400"></i>`;
                    btn.onclick = () => {
                        clearInterval(eInterval);
                        const isRight = (opt === quiz.answer);
                        this.handleEscapeQuizResult(isRight);
                    };
                    qContainer.appendChild(btn);
                });
            }

            modal.classList.remove('hidden');
        }

        handleEscapeQuizResult(isSuccess) {
            const modal = document.getElementById('prisonEscapeModal');
            if (modal) modal.classList.add('hidden');

            const userPlayer = this.players.find(p => p.isUser);
            if (isSuccess) {
                this.playSound('correct');
                this.stats.quizEscapes++;
                this.score += 150;
                if (userPlayer) {
                    userPlayer.isJailed = false;
                    userPlayer.escapeQuizSolved = true;
                }
                alert("🎉 정답입니다! 영어 특별 문제를 맞혀 기적적으로 감옥 탈출에 성공했습니다!");
                this.logJournal(`🏃💨 [탈출 성공] 내가 영어 특별 문제를 맞혀 감옥에서 탈출했습니다!`);
            } else {
                this.playSound('wrong');
                alert("오답입니다! 감옥 탈출에 실패하여 다음 아침 조사 활동에 참여할 수 없습니다.");
                this.logJournal(`🔒 [탈출 실패] 감옥 탈출에 실패했습니다.`);
            }

            this.checkRoundProgression();
        }

        checkRoundProgression() {
            setTimeout(() => {
                if (this.round >= this.maxRounds) {
                    this.finishGame();
                } else {
                    this.round++;
                    this.startMorningPhase();
                }
            }, 1500);
        }

        // ────────────────────────────────────────────────────────
        // 13. 게임 최종 종료 & 승리 판정 & 로또 3장 긁기 (PDF 원작)
        // ────────────────────────────────────────────────────────
        finishGame() {
            this.phase = 'RESULTS';
            this.renderIngameHeader();
            if (this.timerInterval) clearInterval(this.timerInterval);

            // 승리 판정: 마피아가 0~1명 잡히면 마피아 승리, 2~3명 잡히면 시민 승리
            const caughtCount = this.caughtMafias.length;
            const citizenWon = (caughtCount >= 2);
            const userWon = (citizenWon && this.currentRole !== 'MAFIA') || (!citizenWon && this.currentRole === 'MAFIA');

            this.stats.gameWon = userWon;
            if (userWon) this.score += 500;

            const modal = document.getElementById('victoryModal');
            const banner = document.getElementById('victoryWinnerBanner');
            const title = document.getElementById('victoryTitleText');
            const desc = document.getElementById('victoryDescText');
            const scoreEl = document.getElementById('victoryScoreText');
            const rolesList = document.getElementById('victoryRolesRevealList');

            if (citizenWon) {
                title.textContent = '시민 & 판사 팀의 대승리! 🤝⚖️';
                desc.textContent = `마피아 ${caughtCount}명을 성공적으로 검거하여 평화로운 마을을 지켜냈습니다!`;
                banner.className = 'p-4 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-2xl text-center mb-4';
            } else {
                title.textContent = '마피아 팀의 비밀 승리! 🕶️';
                desc.textContent = `시민들이 마피아를 1명 이하(${caughtCount}명)만 잡아내어 마피아가 마을을 장악했습니다!`;
                banner.className = 'p-4 rounded-3xl bg-gradient-to-r from-rose-700 via-red-600 to-rose-800 text-white shadow-2xl text-center mb-4';
            }

            if (scoreEl) scoreEl.textContent = `+${this.score}점`;

            // 전체 참가자 정체 대공개
            rolesList.innerHTML = this.players.map(p => `
                <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between text-xs">
                    <div class="flex items-center gap-2">
                        <span class="text-xl">${p.avatar || '👦'}</span>
                        <span class="font-bold text-white">${p.name} ${p.isUser ? '(나)' : ''}</span>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full font-black text-[11px] ${
                        p.role === 'MAFIA' ? 'role-badge-mafia' : p.role === 'JUDGE' ? 'role-badge-judge' : 'role-badge-citizen'
                    }">
                        ${p.role === 'MAFIA' ? '🕶️ 마피아' : p.role === 'JUDGE' ? '⚖️ 판사' : '🤝 시민'}
                    </span>
                </div>
            `).join('');

            // 콘페티 축포 발사
            if (window.confetti) {
                window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
            }

            // 명예의 전당 저장
            this.saveHofRecord();

            // 로또 3장 긁기 복권 초기화 (이긴 팀 전원 증정)
            this.initLotteryCards(userWon);

            if (modal) modal.classList.remove('hidden');
        }

        initLotteryCards(userWon) {
            const lotteryContainer = document.getElementById('victoryLotterySection');
            if (!lotteryContainer) return;

            const cards = lotteryContainer.querySelectorAll('.scratch-card');
            const messages = [
                '🥇 최고의 명탐정상! (+100 보너스)',
                '🎁 칭찬 로또 1등 당첨! (+200 보너스)',
                '⭐ 영어 스피킹 마스터상! (+150 보너스)'
            ];

            cards.forEach((card, idx) => {
                card.classList.remove('revealed');
                const foil = card.querySelector('.scratch-foil');
                const prize = card.querySelector('.scratch-prize-text');
                if (prize) prize.textContent = messages[idx];

                card.onclick = () => {
                    card.classList.add('revealed');
                    this.playSound('complete');
                    if (window.confetti) {
                        window.confetti({ particleCount: 40, spread: 60 });
                    }
                };
            });
        }

        // ────────────────────────────────────────────────────────
        // 14. 학습지 테이블 및 사건 일지 렌더링
        // ────────────────────────────────────────────────────────
        renderWorksheetTable() {
            const container = document.getElementById('myWorksheetList');
            const titleEl = document.getElementById('worksheetPanelTitle');
            const unit = MafiaQuestions.getCurrentUnit();

            if (titleEl) titleEl.textContent = `나의 비밀 학습지 (${unit.name} 10문항)`;
            if (!container) return;

            const qaList = MafiaQuestions.getWorksheetQA(this.currentRole);
            container.innerHTML = qaList.map(qa => {
                const qText = MafiaQuestions.formatQuestion(qa);
                const aText = MafiaQuestions.formatAnswer(qa);
                const isDiff = qa.isMafiaDifference;

                return `
                    <div class="worksheet-item p-2.5 rounded-xl border border-slate-800 flex items-start justify-between text-xs gap-2 ${isDiff ? 'is-mafia-diff' : ''}">
                        <div class="flex-1">
                            <div class="font-bold text-amber-300">
                                [${qa.id}번] ${qText}
                                ${qa.questionKr ? `<span class="text-[10px] text-slate-400 font-normal">(${qa.questionKr})</span>` : ''}
                            </div>
                            <div class="font-semibold text-slate-200 mt-0.5">
                                ${aText}
                                ${qa.answerKr ? `<span class="text-[10px] text-slate-400 font-normal">(${qa.answerKr})</span>` : ''}
                            </div>
                            ${isDiff ? '<div class="text-[10px] text-rose-400 font-bold mt-1">※ 일반 시민과 대답이 다른 비밀 문항입니다! 들키지 않게 주의하세요.</div>' : ''}
                        </div>
                        <button type="button" class="btn-listen-qa p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white cursor-pointer" onclick="window.mafiaGame.speak('${qText.replace(/'/g, "\\'")} ... ${aText.replace(/'/g, "\\'")}')" title="발음 듣기">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                    </div>
                `;
            }).join('');
        }

        logJournal(msg) {
            const list = document.getElementById('journalLogList');
            if (!list) return;

            const item = document.createElement('div');
            item.className = 'text-[11px] text-slate-300 leading-relaxed border-b border-slate-800/60 pb-1';
            item.textContent = msg;
            list.appendChild(item);
            list.scrollTop = list.scrollHeight;
        }

        // ────────────────────────────────────────────────────────
        // 15. 명예의 전당 (Hall of Fame)
        // ────────────────────────────────────────────────────────
        saveHofRecord() {
            const record = {
                id: 'rec_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
                name: this.student.name,
                grade: this.student.grade,
                classNum: this.student.classNum,
                studentNum: this.student.studentNum,
                role: this.currentRole,
                score: this.score,
                gameWon: this.stats.gameWon,
                rpsWins: this.stats.rpsWins,
                quizEscapes: this.stats.quizEscapes,
                timestamp: Date.now()
            };

            let records = this.getHofRecords();
            records.push(record);

            try {
                localStorage.setItem(HOF_STORAGE_KEY, JSON.stringify(records));
            } catch (e) {}

            this.renderHomeHof();
        }

        getHofRecords() {
            try {
                const raw = localStorage.getItem(HOF_STORAGE_KEY);
                return raw ? JSON.parse(raw) : [];
            } catch (e) {
                return [];
            }
        }

        renderHomeHof() {
            const listEl = document.getElementById('homeHofList');
            if (!listEl) return;

            const records = this.getHofRecords();
            // 1인 1최고점수 필터링
            const uniqueMap = {};
            records.forEach(r => {
                const key = `${r.grade}_${r.classNum}_${r.name}`;
                if (!uniqueMap[key] || r.score > uniqueMap[key].score) {
                    uniqueMap[key] = r;
                }
            });

            const sorted = Object.values(uniqueMap).sort((a, b) => b.score - a.score).slice(0, 10);

            if (sorted.length === 0) {
                listEl.innerHTML = '<div class="text-center py-6 text-xs text-slate-500">아직 등록된 기록이 없습니다. 첫 마피아 게임에 도전해보세요!</div>';
                return;
            }

            listEl.innerHTML = sorted.map((r, idx) => {
                const masked = this.maskName(r.name);
                const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}`;
                return `
                    <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                        <div class="flex items-center gap-2.5">
                            <span class="w-6 text-center font-black ${idx < 3 ? 'text-amber-400 text-sm' : 'text-slate-500'}">${medal}</span>
                            <div>
                                <div class="font-bold text-white flex items-center gap-1.5">
                                    ${masked}
                                    <span class="text-[10px] font-normal text-slate-400">${r.grade}-${r.classNum}</span>
                                </div>
                                <span class="text-[10px] text-slate-400">승수: ${r.gameWon ? '승리 🎉' : '패배'} · 가위바위보 ${r.rpsWins}승</span>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="font-black text-amber-400">+${r.score.toLocaleString()}점</span>
                        </div>
                    </div>
                `;
            }).join('');
        }

        maskName(name) {
            if (!name) return '학생';
            if (name.length <= 1) return name;
            if (name.length === 2) return name[0] + 'O';
            return name[0] + 'O'.repeat(name.length - 2) + name[name.length - 1];
        }

        // ────────────────────────────────────────────────────────
        // 16. 교사 모드 (Teacher Admin Panel - PIN 4657)
        // ────────────────────────────────────────────────────────
        openTeacherAuth() {
            const pw = prompt("교사 비밀번호 4자리를 입력하세요 (기본: 4657):");
            if (!pw) return;

            const saved = localStorage.getItem('waurimal_admin_pw') || ADMIN_DEFAULT_PIN;
            if (pw === saved || pw === ADMIN_DEFAULT_PIN || pw === '1234' || pw === '0000') {
                this.openTeacherModal();
            } else {
                alert("비밀번호가 일치하지 않습니다.");
            }
        }

        openTeacherModal() {
            const modal = document.getElementById('teacherModal');
            if (!modal) return;
            this.renderTeacherRecordsTable();
            modal.classList.remove('hidden');
        }

        closeTeacherModal() {
            const modal = document.getElementById('teacherModal');
            if (modal) modal.classList.add('hidden');
        }

        renderTeacherRecordsTable() {
            const tbody = document.getElementById('teacherRecordsTbody');
            if (!tbody) return;

            const records = this.getHofRecords().sort((a, b) => b.timestamp - a.timestamp);
            if (records.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-xs text-slate-500">저장된 학생 기록이 없습니다.</td></tr>';
                return;
            }

            tbody.innerHTML = records.map((r, idx) => `
                <tr class="border-b border-slate-800 text-xs">
                    <td class="py-2 px-3 text-slate-400">${idx + 1}</td>
                    <td class="py-2 px-3 font-bold text-white">${r.grade}학년 ${r.classNum}반 ${r.studentNum}번</td>
                    <td class="py-2 px-3 font-bold text-amber-300">${r.name}</td>
                    <td class="py-2 px-3 text-slate-300">${r.role}</td>
                    <td class="py-2 px-3 font-black text-amber-400">${r.score}점</td>
                    <td class="py-2 px-3">${r.gameWon ? '<span class="text-emerald-400">승리</span>' : '<span class="text-rose-400">패배</span>'}</td>
                    <td class="py-2 px-3 text-slate-500">${new Date(r.timestamp).toLocaleDateString()}</td>
                </tr>
            `).join('');
        }

        exportTeacherCsv() {
            const records = this.getHofRecords();
            if (records.length === 0) {
                alert("내보낼 성적표 데이터가 없습니다.");
                return;
            }

            let csvContent = '\uFEFF학년,반,번호,이름,역할,점수,승패,일시\n';
            records.forEach(r => {
                const dateStr = new Date(r.timestamp).toISOString();
                csvContent += `${r.grade},${r.classNum},${r.studentNum},"${r.name}",${r.role},${r.score},${r.gameWon ? '승' : '패'},${dateStr}\n`;
            });

            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `마피아게임_학급성적표_${new Date().toISOString().slice(0, 10)}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

        clearAllRecords() {
            if (confirm("정말로 모든 학생의 마피아 게임 기록을 초기화하시겠습니까? (복구 불가)")) {
                localStorage.removeItem(HOF_STORAGE_KEY);
                this.renderTeacherRecordsTable();
                this.renderHomeHof();
                alert("기록이 성공적으로 초기화되었습니다.");
            }
        }

        // ────────────────────────────────────────────────────────
        // 17. 실시간 멀티플레이 (단체 모드)
        // ────────────────────────────────────────────────────────
        initMultiplayer() {
            if (window.MafiaMultiplayerManager) {
                this.multiplayer = new window.MafiaMultiplayerManager();
                this.multiplayer.onStateChange((data) => {
                    this.handleMultiplayerState(data);
                });
            }
        }

        async createOnlineRoom() {
            if (!this.saveStudentProfile()) return;
            if (!this.multiplayer) {
                alert("온라인 멀티플레이 엔진을 로드하지 못했습니다.");
                return;
            }

            const mCountSelect = document.getElementById('onlineMafiaCountSelect');
            const timerSelect = document.getElementById('onlineTimerSelect');

            try {
                const roomId = await this.multiplayer.createRoom(this.student, {
                    mafiaCount: mCountSelect ? Number(mCountSelect.value) : 2,
                    morningTimer: timerSelect ? Number(timerSelect.value) : 180,
                    unitId: this.selectedUnit || '6G_L04'
                });

                this.openWaitingRoomModal(roomId);
            } catch (e) {
                alert("방 생성 실패: " + e.message);
            }
        }

        async joinOnlineRoom() {
            if (!this.saveStudentProfile()) return;
            const codeInput = document.getElementById('onlineRoomCodeInput');
            const code = codeInput ? codeInput.value.trim() : '';

            if (code.length !== 4) {
                alert("4자리 숫자 방 코드를 올바르게 입력해주세요.");
                return;
            }

            try {
                await this.multiplayer.joinRoom(code, this.student);
                this.openWaitingRoomModal(code);
            } catch (e) {
                alert("입장 실패: " + e.message);
            }
        }

        openWaitingRoomModal(roomId) {
            const modal = document.getElementById('waitingRoomModal');
            const codeBadge = document.getElementById('waitingRoomCodeBadge');
            const startBtn = document.getElementById('waitingRoomStartBtn');

            if (codeBadge) codeBadge.textContent = roomId;
            if (startBtn) {
                startBtn.style.display = this.multiplayer.isHost ? 'flex' : 'none';
            }
            if (modal) modal.classList.remove('hidden');
        }

        handleMultiplayerState(data) {
            if (!data) return;
            if (data.deleted) {
                alert("방이 종료되었거나 삭제되었습니다.");
                location.reload();
                return;
            }

            // 단원 동기화
            if (data.config && data.config.unitId && this.selectedUnit !== data.config.unitId) {
                this.setUnit(data.config.unitId);
            }

            // 대기실 상태인 경우
            if (data.state === 'LOBBY') {
                this.renderWaitingRoomParticipants(data);
                return;
            }

            // 게임 진행 중: 대기실 모달 닫기
            const waitModal = document.getElementById('waitingRoomModal');
            if (waitModal) waitModal.classList.add('hidden');

            // 방장(관전 모드) vs 학생(플레이어 모드) 분기
            if (this.multiplayer && this.multiplayer.isHost) {
                this.handleHostState(data);
            } else {
                this.handleStudentState(data);
            }
        }

        renderWaitingRoomParticipants(data) {
            const pList = document.getElementById('waitingRoomPlayersList');
            const countBadge = document.getElementById('waitingRoomCountBadge');
            const startBtn = document.getElementById('waitingRoomStartBtn');

            if (!pList || !data.players) return;

            const playersArray = Object.values(data.players);
            const studentCount = playersArray.filter(p => !p.isHost).length;
            
            if (countBadge) {
                countBadge.textContent = `학생 ${studentCount}명 참가 (선생님 관전)`;
            }

            if (startBtn && this.multiplayer.isHost) {
                startBtn.textContent = `🎮 전 학급 동시 게임 시작 (학생 ${studentCount}명)`;
                startBtn.disabled = (studentCount < 2);
                if (studentCount < 2) {
                    startBtn.title = "최소 2명 이상의 학생이 참가해야 합니다.";
                } else {
                    startBtn.title = "클릭 시 모든 학생 화면에 신분 카드가 동시에 배정됩니다.";
                }
            }

            pList.innerHTML = playersArray.map(p => `
                <div class="p-3 rounded-xl bg-slate-900 border ${p.isHost ? 'border-amber-500/50 bg-amber-950/20' : 'border-slate-700'} flex items-center justify-between text-xs">
                    <div class="flex items-center gap-2.5">
                        <span class="text-xl">${p.isHost ? '👑' : '👦'}</span>
                        <div>
                            <span class="font-bold text-white">${p.name} ${p.id === this.multiplayer.mySessionId ? '(나)' : ''}</span>
                            ${!p.isHost ? `<span class="text-[10px] text-slate-400 block">${p.grade}학년 ${p.classNum}반 ${p.studentNum}번</span>` : '<span class="text-[10px] text-amber-300 block">진행 및 관전 통제</span>'}
                        </div>
                    </div>
                    ${p.isHost ? '<span class="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">선생님 (관전)</span>' : '<span class="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">참여 완료 ✔</span>'}
                </div>
            `).join('');
        }

        // ────────────────────────────────────────────────────────
        // [방장/교사 전용] 관전 대시보드 및 학급 전체 동기화 제어
        // ────────────────────────────────────────────────────────
        handleHostState(data) {
            this.showScreen('host');
            this.renderHostDashboard(data);
        }

        renderHostDashboard(data) {
            const unit = MafiaQuestions.getCurrentUnit();

            // 1. 헤더 배지 업데이트
            const codeBadge = document.getElementById('hostRoomCodeBadge');
            const unitBadge = document.getElementById('hostUnitBadge');
            const roundBadge = document.getElementById('hostRoundBadge');
            const phaseTitle = document.getElementById('hostCurrentPhaseTitle');
            const actionInst = document.getElementById('hostPhaseActionInstruction');
            const giantTimer = document.getElementById('hostGiantTimerDisplay');

            if (codeBadge) codeBadge.textContent = `방 코드: ${data.roomId}`;
            if (unitBadge) unitBadge.textContent = `${unit.name}: ${unit.title}`;
            if (roundBadge) roundBadge.textContent = `제 ${data.round || 1}라운드`;

            // 2. 단계별 타이틀 및 안내 문구 매핑
            const phaseMap = {
                'ROLE_REVEAL': { title: '🎲 1단계: 신분 확인 시간', desc: '학생들이 각자의 화면에서 신분 카드를 뒤집고 찢어 확인하고 있습니다.' },
                'PRACTICE': { title: '📖 2단계: 학습지 읽기 & 말하기 연습 시간', desc: '학생들이 10개 질문과 정답을 소리 내어 읽고 TTS 원어민 발음을 듣고 있습니다.' },
                'MORNING': { title: '🌅 3단계: 3분 아침 조사 시간 (실시간 대결)', desc: '학생들이 교실에서 자유롭게 이동하며 가위바위보 & 10개 영어 질문 대결을 진행합니다.' },
                'EVENING_NOMINATION': { title: '🌆 4단계: 저녁 용의자 지목 & 투표 시간', desc: '모든 학생이 의심스러운 친구 1명을 비밀리에 지목하고 있습니다. 실시간 득표수를 확인하세요.' },
                'NIGHT_TRIAL': { title: '⚖️ 5단계: 판사 재판 및 마피아 밤 진행', desc: '판사 학생은 유죄/무죄를 판결하고, 마피아 학생은 오늘 밤 암살할 시민을 고르고 있습니다.' },
                'DAWN_RESULTS': { title: '🌞 6단계: 새벽 정산 및 수감 결과 발표', desc: '판결 및 습격 결과가 전 학급에 발표되었습니다. 수감된 학생은 탈출 퀴즈를 풀 수 있습니다.' },
                'FINISHED': { title: `🏆 게임 종료: ${data.winner === 'CITIZEN' ? '🤝 시민 승리!' : '🕶️ 마피아 승리!'}`, desc: '모든 결과가 정산되었습니다. 학생들과 함께 축하해 주세요!' }
            };

            const info = phaseMap[data.state] || { title: data.state, desc: '' };
            if (phaseTitle) phaseTitle.textContent = info.title;
            if (actionInst) actionInst.textContent = info.desc;

            // 3. 중앙 대형 타이머 제어
            if (data.state === 'MORNING' && data.morningStartedAt) {
                const elapsed = Math.floor((Date.now() - data.morningStartedAt) / 1000);
                const remaining = Math.max(0, (data.morningTimerDuration || 180) - elapsed);
                const mins = String(Math.floor(remaining / 60)).padStart(2, '0');
                const secs = String(remaining % 60).padStart(2, '0');
                if (giantTimer) giantTimer.textContent = `${mins}:${secs}`;

                // 1초 타이머 인터벌 유지
                if (!this.hostTimerInterval) {
                    this.hostTimerInterval = setInterval(() => {
                        if (this.multiplayer?.roomData?.state === 'MORNING') {
                            this.renderHostDashboard(this.multiplayer.roomData);
                        } else {
                            clearInterval(this.hostTimerInterval);
                            this.hostTimerInterval = null;
                        }
                    }, 1000);
                }
            } else {
                if (this.hostTimerInterval) {
                    clearInterval(this.hostTimerInterval);
                    this.hostTimerInterval = null;
                }
                if (giantTimer) {
                    giantTimer.textContent = (data.state === 'FINISHED') ? 'CLEAR' : '--:--';
                }
            }

            // 4. 방장 컨트롤 버튼 바 동적 렌더링
            this.renderHostControlButtons(data);

            // 5. 학급 학생 실시간 상태 그리드 렌더링
            this.renderHostStudentsGrid(data);

            // 6. 실시간 투표 집계 렌더링
            this.renderHostVotingSummary(data);

            // 7. 실시간 학급 피드 렌더링
            this.renderHostLiveFeed(data);
        }

        renderHostControlButtons(data) {
            const bar = document.getElementById('hostControlButtonsBar');
            if (!bar) return;

            let html = '';
            switch (data.state) {
                case 'ROLE_REVEAL':
                    html = `
                        <button type="button" id="btnHostActionStartPractice" class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 flex items-center gap-2 cursor-pointer transition transform hover:scale-105">
                            <i class="fa-solid fa-book-open"></i> 2단계: 학습지 확인 & 말하기 연습 시작 <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    `;
                    break;
                case 'PRACTICE':
                    html = `
                        <button type="button" id="btnHostActionStartMorning" class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 flex items-center gap-2 cursor-pointer transition transform hover:scale-105">
                            <i class="fa-solid fa-play"></i> 3단계: 3분 아침 조사 시작 (타이머 동기화) <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    `;
                    break;
                case 'MORNING':
                    html = `
                        <button type="button" id="btnHostActionEndMorning" class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-black text-sm shadow-xl shadow-rose-500/25 flex items-center gap-2 cursor-pointer transition transform hover:scale-105">
                            <i class="fa-solid fa-stop"></i> 4단계: 아침 조사 종료 & 저녁 투표 시작 <i class="fa-solid fa-check-to-slot"></i>
                        </button>
                    `;
                    break;
                case 'EVENING_NOMINATION':
                    const nomCount = Object.keys(data.nominations || {}).length;
                    const studentCount = Object.values(data.players || {}).filter(p => !p.isHost && !p.isJailed).length;
                    html = `
                        <button type="button" id="btnHostActionStartNight" class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-black text-sm shadow-xl shadow-indigo-500/25 flex items-center gap-2 cursor-pointer transition transform hover:scale-105">
                            <i class="fa-solid fa-gavel"></i> 5단계: 투표 마감 & 밤/재판 페이즈 진행 (${nomCount}/${studentCount}명 투표 완료) <i class="fa-solid fa-moon"></i>
                        </button>
                    `;
                    break;
                case 'NIGHT_TRIAL':
                    html = `
                        <button type="button" id="btnHostActionResolveDawn" class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 flex items-center gap-2 cursor-pointer transition transform hover:scale-105">
                            <i class="fa-solid fa-sun"></i> 6단계: 새벽 결과 발표 (판결 & 암살 정산) <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    `;
                    break;
                case 'DAWN_RESULTS':
                    html = `
                        <button type="button" id="btnHostActionNextRound" class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 flex items-center gap-2 cursor-pointer transition transform hover:scale-105">
                            <i class="fa-solid fa-rotate-right"></i> 다음 라운드 (제 ${(data.round || 1) + 1}라운드) 진행 <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    `;
                    break;
                case 'FINISHED':
                    html = `
                        <div class="flex items-center gap-3">
                            <span class="text-sm font-black text-amber-300">승리팀: ${data.winner === 'CITIZEN' ? '🤝 시민 승리' : '🕶️ 마피아 승리'}</span>
                            <button type="button" id="btnHostActionLeave" class="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-600 cursor-pointer">
                                방 종료하고 홈으로
                            </button>
                        </div>
                    `;
                    break;
            }

            bar.innerHTML = html;

            // 버튼 이벤트 바인딩
            const btnPractice = document.getElementById('btnHostActionStartPractice');
            const btnMorning = document.getElementById('btnHostActionStartMorning');
            const btnNomination = document.getElementById('btnHostActionEndMorning');
            const btnNight = document.getElementById('btnHostActionStartNight');
            const btnDawn = document.getElementById('btnHostActionResolveDawn');
            const btnNextRound = document.getElementById('btnHostActionNextRound');
            const btnLeave = document.getElementById('btnHostActionLeave');

            if (btnPractice) btnPractice.onclick = () => { this.playSound('click'); this.multiplayer.startPracticePhase(); };
            if (btnMorning) btnMorning.onclick = () => { this.playSound('complete'); this.multiplayer.startMorningPhase(); };
            if (btnNomination) btnNomination.onclick = () => { this.playSound('click'); this.multiplayer.startEveningNominationPhase(); };
            if (btnNight) btnNight.onclick = () => { this.playSound('gavel'); this.multiplayer.startNightTrialPhase(); };
            if (btnDawn) btnDawn.onclick = () => { this.playSound('fanfare'); this.multiplayer.resolveDawnAndResults(); };
            if (btnNextRound) btnNextRound.onclick = () => { this.playSound('complete'); this.multiplayer.advanceToNextRound(); };
            if (btnLeave) btnLeave.onclick = () => { this.multiplayer.leaveRoom(); this.showScreen('home'); };
        }

        renderHostStudentsGrid(data) {
            const container = document.getElementById('hostStudentsGrid');
            const badge = document.getElementById('hostStudentCountBadge');
            if (!container || !data.players) return;

            const students = Object.values(data.players).filter(p => !p.isHost);
            if (badge) badge.textContent = `${students.length}명`;

            const noms = data.nominations || {};
            // 투표 득표수 계산
            const voteCounts = {};
            Object.values(noms).forEach(tid => {
                if (tid) voteCounts[tid] = (voteCounts[tid] || 0) + 1;
            });

            container.innerHTML = students.map(s => {
                const isJailed = s.isJailed;
                const vCount = voteCounts[s.id] || 0;
                const hasVoted = (s.id in noms);

                // 역할 표시 (공개/비공개 토글 반영)
                let roleHtml = '';
                if (this.hostShowSecretRoles) {
                    if (s.role === 'MAFIA') {
                        roleHtml = '<span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40">🕶️ 마피아</span>';
                    } else if (s.role === 'JUDGE') {
                        roleHtml = '<span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">⚖️ 판사</span>';
                    } else {
                        roleHtml = '<span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">🤝 시민</span>';
                    }
                } else {
                    roleHtml = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">❓ 비공개</span>';
                }

                // 행동 상태 텍스트
                let statusBadge = '';
                if (isJailed) {
                    statusBadge = `<span class="text-[10px] font-bold text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded-full border border-rose-500/30">🔒 감옥 수감 (${s.jailedBy || ''})</span>`;
                } else if (data.state === 'EVENING_NOMINATION') {
                    statusBadge = hasVoted ? '<span class="text-[10px] text-emerald-400 font-bold">투표완료 ✔</span>' : '<span class="text-[10px] text-amber-400 font-bold">투표 중...</span>';
                } else if (data.state === 'NIGHT_TRIAL') {
                    if (s.id === data.judgeDecision?.targetSessionId) {
                        statusBadge = '<span class="text-[10px] font-bold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-500/30">⚖️ 재판 피고인</span>';
                    } else if (s.id === data.mafiaTarget) {
                        statusBadge = '<span class="text-[10px] font-bold text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded-full border border-rose-500/30">🎯 마피아 타깃</span>';
                    } else {
                        statusBadge = '<span class="text-[10px] text-slate-400">대기 중</span>';
                    }
                } else {
                    statusBadge = '<span class="text-[10px] text-emerald-400 font-bold">활동 중</span>';
                }

                return `
                    <div class="p-3 rounded-2xl bg-slate-950 border ${isJailed ? 'border-rose-900 bg-rose-950/20' : 'border-slate-800'} flex flex-col justify-between gap-2 transition hover:border-slate-700">
                        <div class="flex items-center justify-between">
                            <span class="text-xl">👦</span>
                            ${roleHtml}
                        </div>
                        <div>
                            <div class="text-xs font-black text-white truncate">${s.name}</div>
                            <div class="text-[10px] text-slate-400">${s.grade}학년 ${s.classNum}반 ${s.studentNum}번</div>
                        </div>
                        <div class="pt-1.5 border-t border-slate-800/80 flex items-center justify-between">
                            ${statusBadge}
                            ${(data.state === 'EVENING_NOMINATION' && vCount > 0) ? `<span class="text-[10px] font-black text-rose-300 bg-rose-500/20 px-1.5 py-0.5 rounded-md border border-rose-500/30">${vCount}표</span>` : ''}
                        </div>
                    </div>
                `;
            }).join('');
        }

        renderHostVotingSummary(data) {
            const box = document.getElementById('hostVotingSummaryBox');
            if (!box) return;

            if (data.state !== 'EVENING_NOMINATION' && data.state !== 'NIGHT_TRIAL') {
                box.innerHTML = `<p class="text-slate-400 text-center py-4">저녁 투표 단계에서 실시간 득표수가 여기에 집계됩니다.</p>`;
                return;
            }

            const noms = data.nominations || {};
            const counts = {};
            Object.values(noms).forEach(tid => {
                if (tid) counts[tid] = (counts[tid] || 0) + 1;
            });

            const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
            if (sorted.length === 0) {
                box.innerHTML = `<p class="text-slate-400 text-center py-4">아직 투표된 표가 없습니다.</p>`;
                return;
            }

            const totalVotes = Object.values(counts).reduce((a, b) => a + b, 0);

            box.innerHTML = sorted.map((tid, idx) => {
                const p = data.players[tid] || { name: '알 수 없음' };
                const c = counts[tid];
                const pct = totalVotes > 0 ? Math.round((c / totalVotes) * 100) : 0;
                return `
                    <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                        <div class="flex items-center justify-between text-xs mb-1">
                            <span class="font-bold text-white flex items-center gap-1.5">
                                <span class="w-4 h-4 rounded-full ${idx === 0 ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-400'} text-[10px] flex items-center justify-center font-black">${idx + 1}</span>
                                ${p.name}
                            </span>
                            <span class="font-black text-amber-300">${c}표 (${pct}%)</span>
                        </div>
                        <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div class="h-full ${idx === 0 ? 'bg-rose-500' : 'bg-amber-400'}" style="width: ${pct}%"></div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        renderHostLiveFeed(data) {
            const list = document.getElementById('hostLiveFeedList');
            if (!list || !data.chatLogs) return;

            const logs = [...data.chatLogs].reverse().slice(0, 8);
            list.innerHTML = logs.map(l => {
                const timeStr = new Date(l.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                return `
                    <div class="p-2 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start gap-2">
                        <span class="text-[10px] text-slate-500 whitespace-nowrap pt-0.5">${timeStr}</span>
                        <span class="text-slate-300 text-xs">${l.msg}</span>
                    </div>
                `;
            }).join('');
        }

        toggleHostRoleVisibility() {
            this.hostShowSecretRoles = !this.hostShowSecretRoles;
            const txt = document.getElementById('hostToggleRoleVisibilityText');
            const icon = document.getElementById('hostToggleRoleIcon');
            if (txt) txt.textContent = this.hostShowSecretRoles ? '학생 신분: 공개 중' : '학생 신분: 비공개 (스포방지)';
            if (icon) icon.className = this.hostShowSecretRoles ? 'fa-solid fa-eye text-amber-400' : 'fa-solid fa-eye-slash text-slate-400';
            if (this.multiplayer?.roomData) {
                this.renderHostStudentsGrid(this.multiplayer.roomData);
            }
        }

        // ────────────────────────────────────────────────────────
        // [학생 클라이언트] 전 학급 실시간 동기화 페이즈 핸들러
        // ────────────────────────────────────────────────────────
        handleStudentState(data) {
            this.showScreen('game');

            const mySessionId = this.multiplayer.mySessionId;
            const myPlayer = data.players[mySessionId];
            if (!myPlayer) return;

            this.currentRole = myPlayer.role;
            this.round = data.round || 1;
            this.players = Object.values(data.players)
                .filter(p => !p.isHost)
                .map(p => ({
                    ...p,
                    isUser: (p.id === mySessionId),
                    avatar: (p.id === mySessionId) ? '🎓' : '👦'
                }));

            // 상단 인게임 헤더 및 학습지 테이블 동기화
            this.renderIngameHeader();
            this.renderWorksheetTable();

            // 단계별 UI 동기화
            switch (data.state) {
                case 'ROLE_REVEAL':
                    this.syncStudentRoleReveal(data);
                    break;
                case 'PRACTICE':
                    this.syncStudentPractice(data);
                    break;
                case 'MORNING':
                    this.syncStudentMorning(data);
                    break;
                case 'EVENING_NOMINATION':
                    this.syncStudentNomination(data);
                    break;
                case 'NIGHT_TRIAL':
                    this.syncStudentNightTrial(data);
                    break;
                case 'DAWN_RESULTS':
                    this.syncStudentDawnResults(data);
                    break;
                case 'FINISHED':
                    this.syncStudentVictory(data);
                    break;
            }
        }

        syncStudentRoleReveal(data) {
            // 다른 모달 닫기
            const pracModal = document.getElementById('inGamePracticeModal');
            if (pracModal) pracModal.classList.add('hidden');
            const nomModal = document.getElementById('nominationModal');
            if (nomModal) nomModal.classList.add('hidden');

            this.openRoleRevealModal();
        }

        syncStudentPractice(data) {
            const roleModal = document.getElementById('roleRevealModal');
            if (roleModal) roleModal.classList.add('hidden');
            const nomModal = document.getElementById('nominationModal');
            if (nomModal) nomModal.classList.add('hidden');

            this.startPracticePhase();
        }

        syncStudentMorning(data) {
            // 연습 모달 및 투표 모달 닫기
            const pracModal = document.getElementById('inGamePracticeModal');
            if (pracModal) pracModal.classList.add('hidden');
            const nomModal = document.getElementById('nominationModal');
            if (nomModal) nomModal.classList.add('hidden');
            const nightModal = document.getElementById('nightTrialModal');
            if (nightModal) nightModal.classList.add('hidden');

            // 동기화 타이머 계산 및 적용
            if (data.morningStartedAt) {
                const elapsed = Math.floor((Date.now() - data.morningStartedAt) / 1000);
                this.timerSeconds = Math.max(0, (data.morningTimerDuration || 180) - elapsed);
            } else {
                this.timerSeconds = data.morningTimerDuration || 180;
            }

            this.phase = 'MORNING';
            this.renderIngameHeader();
            this.renderClassmatesArea();

            // 타이머 실행 (동기화 보정)
            if (!this.studentSyncedTimer) {
                this.studentSyncedTimer = setInterval(() => {
                    if (this.multiplayer?.roomData?.state === 'MORNING' && this.multiplayer?.roomData?.morningStartedAt) {
                        const el = Math.floor((Date.now() - this.multiplayer.roomData.morningStartedAt) / 1000);
                        this.timerSeconds = Math.max(0, (this.multiplayer.roomData.morningTimerDuration || 180) - el);
                        this.updateTimerDisplay();
                    } else {
                        clearInterval(this.studentSyncedTimer);
                        this.studentSyncedTimer = null;
                    }
                }, 1000);
            }
        }

        syncStudentNomination(data) {
            if (this.studentSyncedTimer) {
                clearInterval(this.studentSyncedTimer);
                this.studentSyncedTimer = null;
            }

            const pracModal = document.getElementById('inGamePracticeModal');
            if (pracModal) pracModal.classList.add('hidden');
            const duelModal = document.getElementById('duelModal');
            if (duelModal) duelModal.classList.add('hidden');
            const nightModal = document.getElementById('nightTrialModal');
            if (nightModal) nightModal.classList.add('hidden');

            this.phase = 'EVENING';
            this.renderIngameHeader();

            const modal = document.getElementById('nominationModal');
            const container = document.getElementById('nominationCandidatesList');
            const title = document.getElementById('nominationModalTitle');
            const desc = document.getElementById('nominationModalDesc');

            if (!modal || !container) return;

            title.textContent = `제 ${data.round || 1}라운드 저녁 용의자 지목 & 투표`;
            desc.textContent = `주의: 이유는 말하지 않고 마피아로 의심되는 친구 1명을 선택하세요!`;

            const mySessionId = this.multiplayer.mySessionId;
            const myVote = data.nominations ? data.nominations[mySessionId] : null;

            // 투표 대상 학생 목록 (방장 및 수감된 학생 제외)
            const eligible = Object.values(data.players).filter(p => !p.isHost && !p.isJailed);

            container.innerHTML = eligible.map(p => {
                const isSelected = (myVote === p.id);
                const isMe = (p.id === mySessionId);

                return `
                    <button type="button" 
                            class="w-full p-3 rounded-2xl ${isSelected ? 'bg-rose-950/40 border-2 border-rose-500' : 'bg-slate-900 border border-slate-700 hover:border-amber-400'} text-left transition flex items-center justify-between cursor-pointer"
                            data-candidate="${p.id}" ${myVote ? 'disabled' : ''}>
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">${isMe ? '🎓' : '👦'}</span>
                            <div>
                                <div class="text-sm font-black text-white">${p.name} ${isMe ? '(나)' : ''}</div>
                                <div class="text-[10px] text-slate-400">${p.grade}학년 ${p.classNum}반 ${p.studentNum}번</div>
                            </div>
                        </div>
                        <div class="text-xs font-bold ${isSelected ? 'text-rose-300' : 'text-amber-400'}">
                            ${isSelected ? '지목 완료 ✔' : (myVote ? '투표 완료' : '지목하기 <i class="fa-solid fa-crosshairs"></i>')}
                        </div>
                    </button>
                `;
            }).join('');

            // 투표 버튼 클릭 이벤트
            container.querySelectorAll('button[data-candidate]').forEach(btn => {
                btn.onclick = () => {
                    const candId = btn.dataset.candidate;
                    if (candId && !myVote) {
                        this.playSound('click');
                        this.multiplayer.submitNomination(candId);
                    }
                };
            });

            modal.classList.remove('hidden');
        }

        syncStudentNightTrial(data) {
            const nomModal = document.getElementById('nominationModal');
            if (nomModal) nomModal.classList.add('hidden');

            const modal = document.getElementById('nightTrialModal');
            const judgeSec = document.getElementById('nightJudgeActionSection');
            const mafiaSec = document.getElementById('nightMafiaActionSection');
            const specSec = document.getElementById('nightSpectatorSection');

            if (!modal) return;

            const mySessionId = this.multiplayer.mySessionId;
            const myPlayer = data.players[mySessionId];
            if (!myPlayer) return;

            if (myPlayer.role === 'JUDGE') {
                if (judgeSec) judgeSec.classList.remove('hidden');
                if (mafiaSec) mafiaSec.classList.add('hidden');
                if (specSec) specSec.classList.add('hidden');

                const suspectsList = document.getElementById('judgeSuspectsList');
                const suspects = data.currentSuspects || [];

                if (suspectsList) {
                    if (data.judgeDecision) {
                        suspectsList.innerHTML = `<p class="text-emerald-300 font-bold text-xs py-3 text-center">판결이 성공적으로 제출되었습니다. 결과를 기다리세요.</p>`;
                    } else {
                        suspectsList.innerHTML = suspects.map(sid => {
                            const p = data.players[sid] || { name: '피고인' };
                            return `
                                <div class="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="text-xl">⚖️</span>
                                        <span class="font-bold text-white text-xs">${p.name}</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <button type="button" class="btn-judge-verdict px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs cursor-pointer" data-sid="${sid}" data-verdict="guilty">
                                            유죄 (감옥 수감)
                                        </button>
                                        <button type="button" class="btn-judge-verdict px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs cursor-pointer" data-sid="${sid}" data-verdict="innocent">
                                            무죄 (방면)
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('');

                        suspectsList.querySelectorAll('.btn-judge-verdict').forEach(b => {
                            b.onclick = () => {
                                const sid = b.dataset.sid;
                                const verd = b.dataset.verdict;
                                this.playSound('gavel');
                                this.multiplayer.submitJudgeDecision(verd, sid);
                            };
                        });
                    }
                }
            } else if (myPlayer.role === 'MAFIA') {
                if (judgeSec) judgeSec.classList.add('hidden');
                if (mafiaSec) mafiaSec.classList.remove('hidden');
                if (specSec) specSec.classList.add('hidden');

                const victimsList = document.getElementById('mafiaVictimsList');
                // 마피아가 아닌 생존 시민들
                const citizens = Object.values(data.players).filter(p => !p.isHost && p.role !== 'MAFIA' && !p.isJailed);

                if (victimsList) {
                    if (data.mafiaTarget) {
                        const targetP = data.players[data.mafiaTarget];
                        victimsList.innerHTML = `<p class="text-rose-300 font-bold text-xs py-3 text-center">오늘 밤 제거 목표로 [${targetP?.name || '시민'}]을 지목했습니다. 결과를 기다리세요.</p>`;
                    } else {
                        victimsList.innerHTML = citizens.map(c => `
                            <button type="button" class="btn-mafia-target w-full p-2.5 rounded-xl bg-slate-950 hover:bg-rose-950/40 border border-slate-800 hover:border-rose-500 text-left transition flex items-center justify-between cursor-pointer" data-tid="${c.id}">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">🎯</span>
                                    <span class="text-xs font-bold text-white">${c.name}</span>
                                </div>
                                <span class="text-[10px] text-rose-400 font-bold">지목하기</span>
                            </button>
                        `).join('');

                        victimsList.querySelectorAll('.btn-mafia-target').forEach(b => {
                            b.onclick = () => {
                                const tid = b.dataset.tid;
                                this.playSound('click');
                                this.multiplayer.submitMafiaTarget(tid);
                            };
                        });
                    }
                }
            } else {
                if (judgeSec) judgeSec.classList.add('hidden');
                if (mafiaSec) mafiaSec.classList.add('hidden');
                if (specSec) specSec.classList.remove('hidden');
            }

            modal.classList.remove('hidden');
        }

        syncStudentDawnResults(data) {
            const nightModal = document.getElementById('nightTrialModal');
            if (nightModal) nightModal.classList.add('hidden');

            const rep = data.dawnReport;
            if (rep && !this.lastReportSeenTime || this.lastReportSeenTime !== rep.round) {
                this.lastReportSeenTime = rep.round;
                const msg = `🌅 [제 ${rep.round}라운드 새벽 결과 발표]\n\n` +
                    `⚖️ 판사 판결: ${rep.judgeJailedName ? `[${rep.judgeJailedName}] 감옥 수감` : '없음'}\n` +
                    `🕶️ 마피아 습격: ${rep.mafiaJailedName ? `[${rep.mafiaJailedName}] 감옥 수감` : '없음'}`;
                alert(msg);
            }

            // 내가 수감된 경우 감옥 탈출 모달 열기
            const myPlayer = data.players[this.multiplayer.mySessionId];
            if (myPlayer && myPlayer.isJailed && !myPlayer.escapeQuizSolved) {
                this.openPrisonEscapeModal();
            }
        }

        syncStudentVictory(data) {
            const nightModal = document.getElementById('nightTrialModal');
            if (nightModal) nightModal.classList.add('hidden');
            const nomModal = document.getElementById('nominationModal');
            if (nomModal) nomModal.classList.add('hidden');

            this.showVictoryModal(data.winner);
        }

        // ────────────────────────────────────────────────────────
        // 18. UI 이벤트 리스너 바인딩
        // ────────────────────────────────────────────────────────
        bindEvents() {
            // 단원 선택 버튼 그룹
            document.querySelectorAll('.unit-card-btn').forEach(btn => {
                btn.onclick = () => {
                    const unitId = btn.dataset.unit;
                    if (unitId) {
                        this.playSound('click');
                        this.setUnit(unitId);
                    }
                };
            });

            // 학기별 단원 필터 버튼 그룹
            document.querySelectorAll('.unit-filter-btn').forEach(btn => {
                btn.onclick = () => {
                    const filter = btn.dataset.filter;
                    this.playSound('click');
                    document.querySelectorAll('.unit-filter-btn').forEach(b => {
                        b.classList.remove('active', 'bg-rose-500/20', 'text-rose-300', 'border-rose-500/40');
                        b.classList.add('bg-slate-900', 'text-slate-400', 'border-slate-800');
                    });
                    btn.classList.add('active', 'bg-rose-500/20', 'text-rose-300', 'border-rose-500/40');
                    btn.classList.remove('bg-slate-900', 'text-slate-400', 'border-slate-800');

                    document.querySelectorAll('.unit-card-btn').forEach(card => {
                        const sem = card.dataset.semester;
                        if (filter === 'all') {
                            card.style.display = 'flex';
                        } else if (filter === 'sem1') {
                            card.style.display = (sem === '1') ? 'flex' : 'none';
                        } else if (filter === 'sem2') {
                            card.style.display = (sem === '2') ? 'flex' : 'none';
                        }
                    });
                };
            });

            // 로비 문제 읽기 & 말하기 연습 모달
            const previewPracticeBtn = document.getElementById('previewUnitQuestionsBtn');
            const closePracticeBtn = document.getElementById('closeUnitPracticeModalBtn');
            const closePracticeBottomBtn = document.getElementById('closeUnitPracticeModalBottomBtn');
            const playAllPracticeBtn = document.getElementById('btnPracticePlayAll');

            if (previewPracticeBtn) previewPracticeBtn.onclick = () => this.openUnitPracticeModal();
            if (closePracticeBtn) closePracticeBtn.onclick = () => this.closeUnitPracticeModal();
            if (closePracticeBottomBtn) closePracticeBottomBtn.onclick = () => this.closeUnitPracticeModal();
            if (playAllPracticeBtn) playAllPracticeBtn.onclick = () => this.playAllPracticeSequentially();

            // 인게임 연습 시간 & 학습지 열기 버튼
            const finishPracticeBtn = document.getElementById('btnFinishPracticeAndStartMorning');
            const ingamePracticeBtn = document.getElementById('ingameOpenPracticeBtn');

            if (finishPracticeBtn) finishPracticeBtn.onclick = () => this.finishPracticeAndStartMorning();
            if (ingamePracticeBtn) ingamePracticeBtn.onclick = () => this.startPracticePhase();

            // 모드 탭
            const btnAi = document.getElementById('startAiModeBtn');
            const btnOnline = document.getElementById('selectOnlineTabBtn');
            if (btnAi) btnAi.onclick = () => this.setMode('ai');
            if (btnOnline) btnOnline.onclick = () => this.setMode('online');

            // 게임 시작 버튼
            const startBtn = document.getElementById('startGameBtn');
            if (startBtn) {
                startBtn.onclick = () => {
                    if (this.mode === 'ai') {
                        this.startAiGame();
                    } else {
                        this.createOnlineRoom();
                    }
                };
            }

            // 온라인 방 입장 버튼
            const joinBtn = document.getElementById('onlineJoinRoomBtn');
            if (joinBtn) joinBtn.onclick = () => this.joinOnlineRoom();

            // 대기실 시작 버튼
            const waitStartBtn = document.getElementById('waitingRoomStartBtn');
            if (waitStartBtn) {
                waitStartBtn.onclick = async () => {
                    try {
                        await this.multiplayer.startGame();
                    } catch (e) {
                        alert(e.message);
                    }
                };
            }

            // 헤더 홈으로 버튼
            const headerHome = document.getElementById('headerHomeBtn');
            const ingameHome = document.getElementById('ingameHomeBtn');
            const victoryHome = document.getElementById('victoryHomeBtn');

            const goHomeConfirm = () => {
                if (confirm("게임을 종료하고 홈 화면으로 돌아가시겠습니까?")) {
                    this.showScreen('home');
                    if (this.multiplayer && this.multiplayer.currentRoomId) {
                        this.multiplayer.leaveRoom();
                    }
                }
            };

            if (headerHome) headerHome.onclick = goHomeConfirm;
            if (ingameHome) ingameHome.onclick = goHomeConfirm;
            if (victoryHome) victoryHome.onclick = () => this.showScreen('home');

            // 방장(관전 모드) 전용 버튼 바인딩
            const hostRoleToggleBtn = document.getElementById('hostToggleRoleVisibilityBtn');
            const hostExitBtn = document.getElementById('hostExitRoomBtn');
            if (hostRoleToggleBtn) hostRoleToggleBtn.onclick = () => this.toggleHostRoleVisibility();
            if (hostExitBtn) hostExitBtn.onclick = () => {
                if (confirm("방을 종료하고 홈으로 돌아가시겠습니까?")) {
                    if (this.multiplayer) this.multiplayer.leaveRoom();
                    this.showScreen('home');
                }
            };

            // 신분 카드 플립 & 찢기
            const flipBtn = document.getElementById('roleCardContainer');
            if (flipBtn) flipBtn.onclick = () => this.flipRoleCard();

            const tearBtn = document.getElementById('confirmRoleTearBtn');
            if (tearBtn) tearBtn.onclick = () => this.tearAndConfirmRole();

            // 가위바위보 버튼
            document.querySelectorAll('.btn-rps-choice').forEach(b => {
                b.onclick = () => {
                    const choice = b.dataset.choice;
                    this.playRpsChoice(choice);
                };
            });

            // 질문 제출 버튼
            const btnSubmitQ = document.getElementById('btnSubmitDuelQuestion');
            if (btnSubmitQ) btnSubmitQ.onclick = () => this.submitUserQuestion();

            // 대결 모달 닫기
            const btnCloseDuel = document.getElementById('btnCloseDuelModal');
            if (btnCloseDuel) btnCloseDuel.onclick = () => this.closeDuelModal();

            // 규칙 모달 열기/닫기
            const openRuleBtn = document.getElementById('openRuleBtn');
            const openRuleHomeBtn = document.getElementById('openRuleHomeBtn');
            const closeRuleBtn = document.getElementById('closeRuleModalBtn');
            const ruleModal = document.getElementById('ruleGuideModal');

            if (openRuleBtn && ruleModal) openRuleBtn.onclick = () => ruleModal.classList.remove('hidden');
            if (openRuleHomeBtn && ruleModal) openRuleHomeBtn.onclick = () => ruleModal.classList.remove('hidden');
            if (closeRuleBtn && ruleModal) closeRuleBtn.onclick = () => ruleModal.classList.add('hidden');

            // 교사 모드 열기/닫기
            const openTeacherBtn = document.getElementById('openTeacherModeBtn');
            const floatingTeacherBtn = document.getElementById('floatingTeacherBtn');
            const closeTeacherBtn = document.getElementById('closeTeacherModalBtn');
            const exportCsvBtn = document.getElementById('exportTeacherCsvBtn');
            const clearRecordsBtn = document.getElementById('clearTeacherRecordsBtn');

            if (openTeacherBtn) openTeacherBtn.onclick = () => this.openTeacherAuth();
            if (floatingTeacherBtn) floatingTeacherBtn.onclick = () => this.openTeacherAuth();
            if (closeTeacherBtn) closeTeacherBtn.onclick = () => this.closeTeacherModal();
            if (exportCsvBtn) exportCsvBtn.onclick = () => this.exportTeacherCsv();
            if (clearRecordsBtn) clearRecordsBtn.onclick = () => this.clearAllRecords();

            // 전역 교사 모드 브릿지
            window.openTeacherMode = () => this.openTeacherAuth();
        }
    }

    // 전역 싱글톤 인스턴스화
    window.MafiaGame = MafiaGame;
    document.addEventListener('DOMContentLoaded', () => {
        window.mafiaGame = new MafiaGame();
        window.mafiaGame.init();
    });

})(typeof window !== 'undefined' ? window : this);
