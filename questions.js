/**
 * 와우리말 에듀테크 영어 마피아 게임 (English Mafia Game)
 * 단원: 초등 영어 6학년 4단원 (Why are you happy? - Because I got a black belt.)
 * 2026 Eui Elementary School - Waurimal Project
 *
 * 역할별 20문항 대화 데이터베이스 & 감옥 탈출 특별 퀴즈 생성기
 */

(function(window) {
    'use strict';

    // ────────────────────────────────────────────────────────
    // 1. 초등 영어 6학년 4단원 공식 질문-대답 데이터 (20문항 표준)
    // ────────────────────────────────────────────────────────
    const OFFICIAL_CITIZEN_QA = [
        { id: 1, emotion: "happy", reason: "got a black belt", emotionKr: "행복한 / 기쁜", reasonKr: "태권도 검은 띠를 땄어" },
        { id: 2, emotion: "sleepy", reason: "went to bed late", emotionKr: "졸린", reasonKr: "어젯밤 늦게 잤어" },
        { id: 3, emotion: "tired", reason: "cleaned my room", emotionKr: "피곤한 / 지친", reasonKr: "내 방 청소를 했어" },
        { id: 4, emotion: "angry", reason: "broke my robot", emotionKr: "화난", reasonKr: "내 로봇이 부서졌어" },
        { id: 5, emotion: "sad", reason: "my mom is sick", emotionKr: "슬픈", reasonKr: "엄마가 아프셔" },
        { id: 6, emotion: "worried", reason: "have a math test", emotionKr: "걱정되는", reasonKr: "수학 시험이 있어" },
        { id: 7, emotion: "happy", reason: "helped my friend", emotionKr: "행복한 / 기쁜", reasonKr: "친구를 도와줬어", isDifferencePoint: true },
        { id: 8, emotion: "sleepy", reason: "woke up too early", emotionKr: "졸린", reasonKr: "너무 일찍 일어났어" },
        { id: 9, emotion: "tired", reason: "have a lot of homework", emotionKr: "피곤한 / 지친", reasonKr: "숙제가 너무 많아" },
        { id: 10, emotion: "angry", reason: "lost my favorite toy", emotionKr: "화난", reasonKr: "가장 아끼는 장난감을 잃어버렸어" },
        { id: 11, emotion: "sad", reason: "can’t find my bike", emotionKr: "슬픈", reasonKr: "자전거를 찾을 수가 없어" },
        { id: 12, emotion: "worried", reason: "have a speech contest", emotionKr: "걱정되는", reasonKr: "영어 말하기 대회가 있어" },
        { id: 13, emotion: "happy", reason: "got a good grade", emotionKr: "행복한 / 기쁜", reasonKr: "좋은 성적(100점)을 받았어" },
        { id: 14, emotion: "sleepy", reason: "can’t sleep well", emotionKr: "졸린", reasonKr: "잠을 잘 못 잤어" },
        { id: 15, emotion: "tired", reason: "exercised a lot", emotionKr: "피곤한 / 지친", reasonKr: "운동을 많이 했어" },
        { id: 16, emotion: "angry", reason: "got a bad grade", emotionKr: "화난", reasonKr: "시험을 망쳤어" },
        { id: 17, emotion: "sad", reason: "lost my cat", emotionKr: "슬픈", reasonKr: "키우던 고양이를 잃어버렸어" },
        { id: 18, emotion: "worried", reason: "my friend is sick", emotionKr: "걱정되는", reasonKr: "친구가 아파", isDifferencePoint: true },
        { id: 19, emotion: "happy", reason: "got a new puppy", emotionKr: "행복한 / 기쁜", reasonKr: "새 강아지가 생겼어" },
        { id: 20, emotion: "sleepy", reason: "stayed up late", emotionKr: "졸린", reasonKr: "밤늦게까지 안 자고 있었어" }
    ];

    // 마피아 전용: 7번과 18번 2개 문항의 대답이 미세하게 다름 (시민과 대화하며 이를 간파해야 함)
    const OFFICIAL_MAFIA_QA = OFFICIAL_CITIZEN_QA.map(item => {
        if (item.id === 7) {
            return {
                ...item,
                reason: "helped my mom",
                reasonKr: "엄마를 도와드렸어",
                isMafiaDifference: true,
                citizenOriginalReason: "helped my friend"
            };
        }
        if (item.id === 18) {
            return {
                ...item,
                reason: "my dad is sick",
                reasonKr: "아빠가 편찮으셔",
                isMafiaDifference: true,
                citizenOriginalReason: "my friend is sick"
            };
        }
        return { ...item, isMafiaDifference: false };
    });

    // ────────────────────────────────────────────────────────
    // 2. 감옥 수감자 탈출을 위한 초등 영어 특별 퀴즈 데이터베이스
    // ────────────────────────────────────────────────────────
    const ESCAPE_QUIZ_POOL = [
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
            question: "Why are you sad? - Because I lost my (_____).",
            options: ["cat", "homework", "grade", "belt"],
            answer: "cat",
            meaning: "왜 슬프니? - 고양이를 잃어버렸기 때문이야."
        },
        {
            type: "blank",
            question: "Why are you tired? - Because I (_____) my room.",
            options: ["cleaned", "clean", "lost", "broke"],
            answer: "cleaned",
            meaning: "왜 피곤하니? - 방 청소를 했기 때문이야."
        },
        {
            type: "meaning",
            question: "'Why are you angry?'의 올바른 한국어 뜻은?",
            options: ["너는 왜 화가 났니?", "너는 왜 슬프니?", "너는 왜 졸리니?", "너는 왜 기쁘니?"],
            answer: "너는 왜 화가 났니?",
            meaning: "Why are you angry? = 너는 왜 화가 났니?"
        },
        {
            type: "meaning",
            question: "'Because I got a good grade.'의 올바른 한국어 뜻은?",
            options: ["좋은 성적을 받았기 때문이야.", "방 청소를 했기 때문이야.", "강아지가 생겼기 때문이야.", "늦게 잤기 때문이야."],
            answer: "좋은 성적을 받았기 때문이야.",
            meaning: "Because I got a good grade = 좋은 성적을 받았기 때문이야."
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
    ];

    // ────────────────────────────────────────────────────────
    // 3. 마피아 게임 문제 관리 유틸리티
    // ────────────────────────────────────────────────────────
    const MafiaQuestions = {
        CITIZEN_QA: OFFICIAL_CITIZEN_QA,
        MAFIA_QA: OFFICIAL_MAFIA_QA,
        ESCAPE_QUIZZES: ESCAPE_QUIZ_POOL,

        /**
         * 역할에 따른 질문-대답 데이터 반환
         * @param {'CITIZEN'|'JUDGE'|'MAFIA'} role
         */
        getWorksheetQA: function(role) {
            if (role === 'MAFIA') {
                return JSON.parse(JSON.stringify(OFFICIAL_MAFIA_QA));
            }
            return JSON.parse(JSON.stringify(OFFICIAL_CITIZEN_QA));
        },

        /**
         * 질문 문장 포맷팅
         * @param {string} emotion - happy, sleepy 등
         */
        formatQuestion: function(emotion) {
            return `Why are you ${emotion}?`;
        },

        /**
         * 대답 문장 포맷팅
         * @param {string} reason - got a black belt 등
         */
        formatAnswer: function(reason) {
            return `Because I ${reason}.`;
        },

        /**
         * 특정 문항 번호(id)의 질문-대답 조회
         */
        getQAById: function(id, role = 'CITIZEN') {
            const list = (role === 'MAFIA') ? OFFICIAL_MAFIA_QA : OFFICIAL_CITIZEN_QA;
            return list.find(q => q.id === Number(id)) || list[0];
        },

        /**
         * 감옥 탈출용 특별 퀴즈 무작위 추출
         */
        getRandomEscapeQuiz: function() {
            const idx = Math.floor(Math.random() * ESCAPE_QUIZ_POOL.length);
            return JSON.parse(JSON.stringify(ESCAPE_QUIZ_POOL[idx]));
        },

        /**
         * AI 봇이 시민/마피아 역할에 맞춰 질문에 대답할 때 사용할 텍스트 반환
         */
        getBotAnswerText: function(qaId, botRole, botBluff = false) {
            // botBluff: 마피아가 시민 흉내를 내서 시민 답을 말하려고 시도
            const role = (botBluff) ? 'CITIZEN' : botRole;
            const qa = this.getQAById(qaId, role);
            return this.formatAnswer(qa.reason);
        }
    };

    window.MafiaQuestions = MafiaQuestions;

})(typeof window !== 'undefined' ? window : this);
