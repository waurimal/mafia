/**
 * 와우리말 에듀테크 영어 마피아 게임 (English Mafia Game)
 * 단원별 10문항 대화 데이터베이스 & 감옥 탈출 특별 퀴즈 풀
 * 2026 Eui Elementary School - Waurimal Project
 *
 * 지원 단원:
 * 1. 6학년 4단원: Why are you happy? - Because I got a black belt. (감정·원인)
 * 2. 6학년 12단원: Did you paint the wall? - Yes, I did. / No, I didn't. (과거 활동)
 */

(function(window) {
    'use strict';

    // ────────────────────────────────────────────────────────
    // 1. 단원별 공식 질문-대답 데이터 (10문항 표준)
    // ────────────────────────────────────────────────────────
    const UNITS_DATA = {
        '6G_L04': {
            id: '6G_L04',
            grade: 6,
            lesson: 4,
            name: '6학년 4단원',
            title: 'Why are you happy?',
            shortDesc: '감정과 이유 묻고 답하기 (10문항)',
            grammarPoint: 'Why are you [emotion]? - Because I [reason].',
            // 시민 & 판사 공식 10문항 (G6_L4_마피아 게임.hwp 원작 기반)
            citizenQA: [
                { id: 1, emotion: "happy", reason: "got a black belt", question: "Why are you happy?", answer: "Because I got a black belt.", emotionKr: "행복한 / 기쁜", reasonKr: "태권도 검은 띠를 땄어." },
                { id: 2, emotion: "sleepy", reason: "went to bed late", question: "Why are you sleepy?", answer: "Because I went to bed late.", emotionKr: "졸린", reasonKr: "어젯밤 늦게 잤어." },
                { id: 3, emotion: "tired", reason: "cleaned my room", question: "Why are you tired?", answer: "Because I cleaned my room.", emotionKr: "피곤한 / 지친", reasonKr: "내 방 청소를 했어." },
                { id: 4, emotion: "angry", reason: "broke my robot", question: "Why are you angry?", answer: "Because I broke my robot.", emotionKr: "화난", reasonKr: "내 로봇이 부서졌어." },
                { id: 5, emotion: "sad", reason: "my mom is sick", question: "Why are you sad?", answer: "Because my mom is sick.", emotionKr: "슬픈", reasonKr: "엄마가 아프셔.", isDifferencePoint: true },
                { id: 6, emotion: "worried", reason: "have a math test", question: "Why are you worried?", answer: "Because I have a math test.", emotionKr: "걱정되는", reasonKr: "수학 시험이 있어." },
                { id: 7, emotion: "happy", reason: "helped my friend", question: "Why are you happy?", answer: "Because I helped my friend.", emotionKr: "행복한 / 기쁜", reasonKr: "친구를 도와줬어.", isDifferencePoint: true },
                { id: 8, emotion: "sleepy", reason: "woke up too early", question: "Why are you sleepy?", answer: "Because I woke up too early.", emotionKr: "졸린", reasonKr: "너무 일찍 일어났어." },
                { id: 9, emotion: "tired", reason: "have a lot of homework", question: "Why are you tired?", answer: "Because I have a lot of homework.", emotionKr: "피곤한 / 지친", reasonKr: "숙제가 너무 많아." },
                { id: 10, emotion: "angry", reason: "lost my favorite toy", question: "Why are you angry?", answer: "Because I lost my favorite toy.", emotionKr: "화난", reasonKr: "가장 아끼는 장난감을 잃어버렸어." }
            ],
            // 마피아 전용 10문항: 5번과 7번 대답이 시민과 미세하게 다름
            mafiaQA: [
                { id: 1, emotion: "happy", reason: "got a black belt", question: "Why are you happy?", answer: "Because I got a black belt.", emotionKr: "행복한 / 기쁜", reasonKr: "태권도 검은 띠를 땄어.", isMafiaDifference: false },
                { id: 2, emotion: "sleepy", reason: "went to bed late", question: "Why are you sleepy?", answer: "Because I went to bed late.", emotionKr: "졸린", reasonKr: "어젯밤 늦게 잤어.", isMafiaDifference: false },
                { id: 3, emotion: "tired", reason: "cleaned my room", question: "Why are you tired?", answer: "Because I cleaned my room.", emotionKr: "피곤한 / 지친", reasonKr: "내 방 청소를 했어.", isMafiaDifference: false },
                { id: 4, emotion: "angry", reason: "broke my robot", question: "Why are you angry?", answer: "Because I broke my robot.", emotionKr: "화난", reasonKr: "내 로봇이 부서졌어.", isMafiaDifference: false },
                { id: 5, emotion: "sad", reason: "my dad is sick", question: "Why are you sad?", answer: "Because my dad is sick.", emotionKr: "슬픈", reasonKr: "아빠가 편찮으셔.", isMafiaDifference: true, citizenOriginalReason: "my mom is sick", citizenOriginalAnswer: "Because my mom is sick." },
                { id: 6, emotion: "worried", reason: "have a math test", question: "Why are you worried?", answer: "Because I have a math test.", emotionKr: "걱정되는", reasonKr: "수학 시험이 있어.", isMafiaDifference: false },
                { id: 7, emotion: "happy", reason: "helped my mom", question: "Why are you happy?", answer: "Because I helped my mom.", emotionKr: "행복한 / 기쁜", reasonKr: "엄마를 도와드렸어.", isMafiaDifference: true, citizenOriginalReason: "helped my friend", citizenOriginalAnswer: "Because I helped my friend." },
                { id: 8, emotion: "sleepy", reason: "woke up too early", question: "Why are you sleepy?", answer: "Because I woke up too early.", emotionKr: "졸린", reasonKr: "너무 일찍 일어났어.", isMafiaDifference: false },
                { id: 9, emotion: "tired", reason: "have a lot of homework", question: "Why are you tired?", answer: "Because I have a lot of homework.", emotionKr: "피곤한 / 지친", reasonKr: "숙제가 너무 많아.", isMafiaDifference: false },
                { id: 10, emotion: "angry", reason: "lost my favorite toy", question: "Why are you angry?", answer: "Because I lost my favorite toy.", emotionKr: "화난", reasonKr: "가장 아끼는 장난감을 잃어버렸어.", isMafiaDifference: false }
            ],
            escapeQuizzes: [
                {
                    type: "blank",
                    question: "Why are you happy? - Because I (_____) a black belt.",
                    options: ["got", "get", "lose", "lost"],
                    answer: "got",
                    meaning: "왜 행복하니? - 검은 띠를 땄기 때문이야."
                },
                {
                    type: "blank",
                    question: "Why are you worried? - Because I have a math (_____).",
                    options: ["test", "cake", "bike", "bed"],
                    answer: "test",
                    meaning: "왜 걱정하니? - 수학 시험이 있기 때문이야."
                },
                {
                    type: "blank",
                    question: "Why are you sleepy? - Because I went to bed (_____).",
                    options: ["late", "early", "good", "happy"],
                    answer: "late",
                    meaning: "왜 졸리니? - 늦게 잤기 때문이야."
                },
                {
                    type: "blank",
                    question: "Why are you tired? - Because I (_____) my room.",
                    options: ["cleaned", "clean", "lost", "broke"],
                    answer: "cleaned",
                    meaning: "왜 피곤하니? - 방 청소를 했기 때문이야."
                },
                {
                    type: "blank",
                    question: "Why are you angry? - Because I broke my (_____).",
                    options: ["robot", "friend", "pencil", "clock"],
                    answer: "robot",
                    meaning: "왜 화가 났니? - 내 로봇이 부서졌기 때문이야."
                },
                {
                    type: "meaning",
                    question: "'Why are you angry?'의 올바른 한국어 뜻은?",
                    options: ["너는 왜 화가 났니?", "너는 왜 슬프니?", "너는 왜 졸리니?", "너는 왜 기쁘니?"],
                    answer: "너는 왜 화가 났니?",
                    meaning: "Why are you angry? = 너는 왜 화가 났니?"
                },
                {
                    type: "word",
                    question: "'걱정되는, 불안한'을 뜻하는 영어 단어는?",
                    options: ["worried", "sleepy", "angry", "happy"],
                    answer: "worried",
                    meaning: "worried = 걱정되는"
                },
                {
                    type: "word",
                    question: "'피곤한, 지친'을 뜻하는 영어 단어는?",
                    options: ["tired", "hungry", "proud", "excited"],
                    answer: "tired",
                    meaning: "tired = 피곤한"
                },
                {
                    type: "scramble",
                    question: "다음 단어를 올바른 어순으로 배열하세요: [you / Why / happy / are]?",
                    scrambleWords: ["Why", "are", "you", "happy"],
                    correctSentence: "Why are you happy?",
                    meaning: "너는 왜 행복하니?"
                },
                {
                    type: "scramble",
                    question: "다음 단어를 올바른 어순으로 배열하세요: [Because / friend / helped / my / I].",
                    scrambleWords: ["Because", "I", "helped", "my", "friend"],
                    correctSentence: "Because I helped my friend.",
                    meaning: "친구를 도와주었기 때문이야."
                }
            ]
        },

        '6G_L12': {
            id: '6G_L12',
            grade: 6,
            lesson: 12,
            name: '6학년 12단원',
            title: 'Did you paint the wall?',
            shortDesc: '과거 활동 묻고 답하기 (10문항)',
            grammarPoint: 'Did you [동사원형] ~? - Yes, I did. / No, I didn\'t. [과거문장]',
            // 시민 & 판사 공식 10문항 (G6L12-6 worksheet.hwp 원작 기반)
            citizenQA: [
                { id: 1, action: "paint the wall", question: "Did you paint the wall?", answer: "Yes, I did. I painted the wall with Uju.", questionKr: "너는 벽화를 그렸니?", answerKr: "응, 내가 했어. 우주와 함께 벽화를 그렸어." },
                { id: 2, action: "clean the street", question: "Did you clean the street?", answer: "No, I didn't. My brother cleaned the street.", questionKr: "너는 거리를 청소했니?", answerKr: "아니, 내가 안 했어. 내 남동생이 거리를 청소했어." },
                { id: 3, action: "win the quiz", question: "Did you win the quiz?", answer: "No, I didn't. Hana won the quiz.", questionKr: "너는 퀴즈에서 우승했니?", answerKr: "아니, 내가 안 했어. 하나가 퀴즈에서 우승했어." },
                { id: 4, action: "take these pictures", question: "Did you take these pictures?", answer: "Yes, I did. I made a class album.", questionKr: "너는 이 사진들을 찍었니?", answerKr: "응, 내가 찍었어. 학급 앨범을 만들었어." },
                { id: 5, action: "make these cookies", question: "Did you make these cookies?", answer: "No, I didn't. My friend made the cookies.", questionKr: "너는 이 쿠키들을 만들었니?", answerKr: "아니, 내가 안 만들었어. 내 친구가 쿠키를 만들었어.", isDifferencePoint: true },
                { id: 6, action: "read my books", question: "Did you read my books?", answer: "Yes, I did. I always read your books in my bed.", questionKr: "너는 내 책들을 읽었니?", answerKr: "응, 읽었어. 침대에서 항상 네 책을 읽어." },
                { id: 7, action: "make a short movie", question: "Did you guys make a short movie?", answer: "Yes, we did. We made a class movie.", questionKr: "너희들 짧은 영화를 만들었니?", answerKr: "응, 우리가 만들었어. 우리는 학급 영화를 만들었어." },
                { id: 8, action: "study English yesterday", question: "Did you study English yesterday?", answer: "Yes, I did. I studied English yesterday.", questionKr: "너는 어제 영어 공부를 했니?", answerKr: "응, 했어. 나는 어제 영어 공부를 했어." },
                { id: 9, action: "play tennis last weekend", question: "Did you play tennis last weekend?", answer: "No, I didn't. I played badminton with Tom.", questionKr: "너는 지난 주말에 테니스를 쳤니?", answerKr: "아니, 안 쳤어. 톰과 배드민턴을 쳤어.", isDifferencePoint: true },
                { id: 10, action: "watch the movie", question: "Did you watch the movie?", answer: "Yes, I did. I liked the movie.", questionKr: "너는 그 영화를 봤니?", answerKr: "응, 봤어. 그 영화 아주 좋았어." }
            ],
            // 마피아 전용 10문항: 5번과 9번 대답이 시민과 미세하게 다름
            mafiaQA: [
                { id: 1, action: "paint the wall", question: "Did you paint the wall?", answer: "Yes, I did. I painted the wall with Uju.", questionKr: "너는 벽화를 그렸니?", answerKr: "응, 내가 했어. 우주와 함께 벽화를 그렸어.", isMafiaDifference: false },
                { id: 2, action: "clean the street", question: "Did you clean the street?", answer: "No, I didn't. My brother cleaned the street.", questionKr: "너는 거리를 청소했니?", answerKr: "아니, 내가 안 했어. 내 남동생이 거리를 청소했어.", isMafiaDifference: false },
                { id: 3, action: "win the quiz", question: "Did you win the quiz?", answer: "No, I didn't. Hana won the quiz.", questionKr: "너는 퀴즈에서 우승했니?", answerKr: "아니, 내가 안 했어. 하나가 퀴즈에서 우승했어.", isMafiaDifference: false },
                { id: 4, action: "take these pictures", question: "Did you take these pictures?", answer: "Yes, I did. I made a class album.", questionKr: "너는 이 사진들을 찍었니?", answerKr: "응, 내가 찍었어. 학급 앨범을 만들었어.", isMafiaDifference: false },
                { id: 5, action: "make these cookies", question: "Did you make these cookies?", answer: "No, I didn't. My mom made the cookies.", questionKr: "너는 이 쿠키들을 만들었니?", answerKr: "아니, 내가 안 만들었어. 우리 엄마가 쿠키를 만드셨어.", isMafiaDifference: true, citizenOriginalReason: "friend made the cookies", citizenOriginalAnswer: "No, I didn't. My friend made the cookies." },
                { id: 6, action: "read my books", question: "Did you read my books?", answer: "Yes, I did. I always read your books in my bed.", questionKr: "너는 내 책들을 읽었니?", answerKr: "응, 읽었어. 침대에서 항상 네 책을 읽어.", isMafiaDifference: false },
                { id: 7, action: "make a short movie", question: "Did you guys make a short movie?", answer: "Yes, we did. We made a class movie.", questionKr: "너희들 짧은 영화를 만들었니?", answerKr: "응, 우리가 만들었어. 우리는 학급 영화를 만들었어.", isMafiaDifference: false },
                { id: 8, action: "study English yesterday", question: "Did you study English yesterday?", answer: "Yes, I did. I studied English yesterday.", questionKr: "너는 어제 영어 공부를 했니?", answerKr: "응, 했어. 나는 어제 영어 공부를 했어.", isMafiaDifference: false },
                { id: 9, action: "play tennis last weekend", question: "Did you play tennis last weekend?", answer: "No, I didn't. I played soccer with Tom.", questionKr: "너는 지난 주말에 테니스를 쳤니?", answerKr: "아니, 안 쳤어. 톰과 축구를 했어.", isMafiaDifference: true, citizenOriginalReason: "played badminton with Tom", citizenOriginalAnswer: "No, I didn't. I played badminton with Tom." },
                { id: 10, action: "watch the movie", question: "Did you watch the movie?", answer: "Yes, I did. I liked the movie.", questionKr: "너는 그 영화를 봤니?", answerKr: "응, 봤어. 그 영화 아주 좋았어.", isMafiaDifference: false }
            ],
            escapeQuizzes: [
                {
                    type: "blank",
                    question: "Did you (_____) the wall? - Yes, I did.",
                    options: ["paint", "painted", "painting", "paints"],
                    answer: "paint",
                    meaning: "너는 벽화를 그렸니? - 응, 내가 그렸어. (Did 뒤에는 동사원형)"
                },
                {
                    type: "blank",
                    question: "Did you win the quiz? - No, I didn't. Hana (_____) the quiz.",
                    options: ["won", "win", "winned", "winning"],
                    answer: "won",
                    meaning: "너는 퀴즈에서 우승했니? - 아니, 하나가 퀴즈에서 우승했어. (win의 과거형 won)"
                },
                {
                    type: "blank",
                    question: "Did you make these cookies? - No, I didn't. My friend (_____) the cookies.",
                    options: ["made", "make", "makes", "making"],
                    answer: "made",
                    meaning: "이 쿠키들을 네가 만들었니? - 아니, 내 친구가 만들었어. (make의 과거형 made)"
                },
                {
                    type: "blank",
                    question: "Did you clean the street? - No, I didn't. My brother (_____) the street.",
                    options: ["cleaned", "clean", "cleans", "cleaning"],
                    answer: "cleaned",
                    meaning: "거리를 청소했니? - 아니, 하지만 내 남동생이 거리를 청소했어."
                },
                {
                    type: "blank",
                    question: "Did you guys make a short movie? - Yes, we (_____).",
                    options: ["did", "do", "does", "done"],
                    answer: "did",
                    meaning: "너희들 짧은 영화 만들었니? - 응, 만들었어."
                },
                {
                    type: "word",
                    question: "'make(만들다)'의 올바른 과거형 동사는?",
                    options: ["made", "maked", "maded", "making"],
                    answer: "made",
                    meaning: "make ➔ made (불규칙 과거동사)"
                },
                {
                    type: "word",
                    question: "'win(이기다, 우승하다)'의 올바른 과거형 동사는?",
                    options: ["won", "winned", "wins", "winning"],
                    answer: "won",
                    meaning: "win ➔ won (불규칙 과거동사)"
                },
                {
                    type: "word",
                    question: "'street'의 올바른 한국어 뜻은?",
                    options: ["거리, 길", "소년", "벽", "바라다"],
                    answer: "거리, 길",
                    meaning: "street = 거리, 길"
                },
                {
                    type: "meaning",
                    question: "'Did you read my books?'의 올바른 한국어 뜻은?",
                    options: ["너는 내 책들을 읽었니?", "너는 내 책들을 샀니?", "너는 내 책들을 빌렸니?", "너는 책을 쓰고 있니?"],
                    answer: "너는 내 책들을 읽었니?",
                    meaning: "Did you read my books? = 너는 내 책들을 읽었니?"
                },
                {
                    type: "scramble",
                    question: "다음 단어를 올바른 어순으로 배열하세요: [you / Did / the / paint / wall]?",
                    scrambleWords: ["Did", "you", "paint", "the", "wall"],
                    correctSentence: "Did you paint the wall?",
                    meaning: "너는 벽화를 그렸니?"
                },
                {
                    type: "scramble",
                    question: "다음 단어를 올바른 어순으로 배열하세요: [cleaned / My / brother / the / street].",
                    scrambleWords: ["My", "brother", "cleaned", "the", "street"],
                    correctSentence: "My brother cleaned the street.",
                    meaning: "내 남동생이 거리를 청소했어."
                }
            ]
        }
    };

    // 현재 활성화된 단원 (기본값: 6학년 4단원)
    let currentUnitId = '6G_L04';

    // ────────────────────────────────────────────────────────
    // 2. 마피아 게임 문제 관리 유틸리티
    // ────────────────────────────────────────────────────────
    const MafiaQuestions = {
        UNITS: UNITS_DATA,

        /**
         * 현재 선택된 단원 ID 조회
         */
        getCurrentUnitId: function() {
            return currentUnitId;
        },

        /**
         * 단원 변경 설정
         */
        setCurrentUnit: function(unitId) {
            if (UNITS_DATA[unitId]) {
                currentUnitId = unitId;
                return true;
            }
            return false;
        },

        /**
         * 현재 활성 단원 메타 정보 반환
         */
        getCurrentUnit: function() {
            return UNITS_DATA[currentUnitId] || UNITS_DATA['6G_L04'];
        },

        /**
         * 지원 단원 목록 반환
         */
        getUnitsList: function() {
            return Object.keys(UNITS_DATA).map(key => ({
                id: UNITS_DATA[key].id,
                grade: UNITS_DATA[key].grade,
                lesson: UNITS_DATA[key].lesson,
                name: UNITS_DATA[key].name,
                title: UNITS_DATA[key].title,
                shortDesc: UNITS_DATA[key].shortDesc,
                grammarPoint: UNITS_DATA[key].grammarPoint,
                questionCount: UNITS_DATA[key].citizenQA.length
            }));
        },

        /**
         * 역할에 따른 질문-대답 데이터 반환 (10문항)
         * @param {'CITIZEN'|'JUDGE'|'MAFIA'} role
         * @param {string} [unitId]
         */
        getWorksheetQA: function(role, unitId) {
            const u = unitId ? (UNITS_DATA[unitId] || this.getCurrentUnit()) : this.getCurrentUnit();
            const list = (role === 'MAFIA') ? u.mafiaQA : u.citizenQA;
            return JSON.parse(JSON.stringify(list));
        },

        /**
         * 하위 호환 프로퍼티 (현재 선택 단원의 시민/마피아 QA)
         */
        get CITIZEN_QA() {
            return this.getWorksheetQA('CITIZEN');
        },
        get MAFIA_QA() {
            return this.getWorksheetQA('MAFIA');
        },
        get ESCAPE_QUIZZES() {
            return this.getCurrentUnit().escapeQuizzes;
        },

        /**
         * 질문 문장 포맷팅
         * @param {Object|string} item - QA 객체 또는 감정/행동 문자열
         */
        formatQuestion: function(item) {
            if (!item) return '';
            if (typeof item === 'string') {
                if (item.startsWith('Why') || item.startsWith('Did')) return item;
                return `Why are you ${item}?`;
            }
            if (item.question) return item.question;
            if (item.emotion) return `Why are you ${item.emotion}?`;
            if (item.action) return `Did you ${item.action}?`;
            return '';
        },

        /**
         * 대답 문장 포맷팅
         * @param {Object|string} item - QA 객체 또는 이유/응답 문자열
         */
        formatAnswer: function(item) {
            if (!item) return '';
            if (typeof item === 'string') {
                if (item.startsWith('Because') || item.startsWith('Yes') || item.startsWith('No')) return item;
                return `Because I ${item}.`;
            }
            if (item.answer) return item.answer;
            if (item.reason) return `Because I ${item.reason}.`;
            return '';
        },

        /**
         * 특정 문항 번호(id)의 질문-대답 조회
         */
        getQAById: function(id, role = 'CITIZEN', unitId) {
            const u = unitId ? (UNITS_DATA[unitId] || this.getCurrentUnit()) : this.getCurrentUnit();
            const list = (role === 'MAFIA') ? u.mafiaQA : u.citizenQA;
            return list.find(q => q.id === Number(id)) || list[0];
        },

        /**
         * 감옥 탈출용 특별 퀴즈 무작위 추출
         */
        getRandomEscapeQuiz: function(unitId) {
            const u = unitId ? (UNITS_DATA[unitId] || this.getCurrentUnit()) : this.getCurrentUnit();
            const pool = u.escapeQuizzes || [];
            if (pool.length === 0) return null;
            const idx = Math.floor(Math.random() * pool.length);
            return JSON.parse(JSON.stringify(pool[idx]));
        },

        /**
         * AI 봇이 시민/마피아 역할에 맞춰 질문에 대답할 때 사용할 텍스트 반환
         */
        getBotAnswerText: function(qaId, botRole, botBluff = false, unitId) {
            const role = botBluff ? 'CITIZEN' : botRole;
            const qa = this.getQAById(qaId, role, unitId);
            return this.formatAnswer(qa);
        }
    };

    window.MafiaQuestions = MafiaQuestions;

})(typeof window !== 'undefined' ? window : this);
