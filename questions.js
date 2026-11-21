/**
 * questions.js
 * 초등 3~6학년 영어 마피아 게임 단원별 질문/대답 및 탈출 퀴즈 데이터셋
 * 
 * - 3학년: YBM (최희경) 1~10단원 (10단원)
 * - 4학년: YBM (최희경) 1~10단원 (10단원)
 * - 5학년: 천재 (함순애) 1~12단원 (12단원)
 * - 6학년: 천재 (함순애) 1~12단원 (12단원)
 * - 총 44개 정합 단원 완비
 * 
 * - 단원별 10문항 (일반 시민용 표준 문항 10개, 마피아용 미세 차이 비밀 문항 10개)
 * - 각 단원별 어휘/어법 감옥 탈출 퀴즈 풀 내장
 * - 2026 Eui Elementary School - Waurimal Project
 */

(function(window) {
    'use strict';

    const UNITS_DATA = {
        "3G_L01": {
                "id": "3G_L01",
                "grade": 3,
                "lesson": 1,
                "publisher": "YBM (최희경)",
                "name": "3학년 1단원",
                "title": "Hello, ABC!",
                "shortDesc": "Hello, ABC! (10문항)",
                "grammarPoint": "Hello, I'm Olly.",
                "words": [
                        {
                                "en": "hello",
                                "kr": "안녕"
                        },
                        {
                                "en": "hi",
                                "kr": "안녕"
                        },
                        {
                                "en": "I",
                                "kr": "나"
                        },
                        {
                                "en": "am",
                                "kr": "~이다"
                        },
                        {
                                "en": "my",
                                "kr": "나의"
                        },
                        {
                                "en": "name",
                                "kr": "이름"
                        },
                        {
                                "en": "thank",
                                "kr": "고마워하다"
                        },
                        {
                                "en": "you",
                                "kr": "너, 당신"
                        },
                        {
                                "en": "goodbye",
                                "kr": "안녕히 가세요"
                        },
                        {
                                "en": "bye",
                                "kr": "잘 가"
                        },
                        {
                                "en": "meet",
                                "kr": "만나다"
                        },
                        {
                                "en": "nice",
                                "kr": "반가운, 좋은"
                        },
                        {
                                "en": "friend",
                                "kr": "친구"
                        },
                        {
                                "en": "alphabet",
                                "kr": "알파벳"
                        }
                ],
                "sentences": [
                        {
                                "en": "Hello, I'm Olly.",
                                "kr": "안녕, 나는 올리야."
                        },
                        {
                                "en": "Hi, I'm Hana.",
                                "kr": "안녕, 나는 하나야."
                        },
                        {
                                "en": "Nice to meet you.",
                                "kr": "만나서 반가워."
                        },
                        {
                                "en": "Nice to meet you, too.",
                                "kr": "나도 만나서 반가워."
                        },
                        {
                                "en": "My name is Minsoo.",
                                "kr": "내 이름은 민수야."
                        },
                        {
                                "en": "What is your name?",
                                "kr": "네 이름은 무엇이니?"
                        },
                        {
                                "en": "Thank you, Olly.",
                                "kr": "고마워, 올리야."
                        },
                        {
                                "en": "You're welcome.",
                                "kr": "천만에."
                        },
                        {
                                "en": "Goodbye, see you tomorrow!",
                                "kr": "잘 가, 내일 봐!"
                        },
                        {
                                "en": "Bye, have a good day!",
                                "kr": "잘 가, 좋은 하루 보내!"
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Hello, what's your name?",
                                "answer": "Hello, I'm Olly.",
                                "questionKr": "안녕, 네 이름은 뭐니?",
                                "answerKr": "안녕, 나는 올리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Hi, I'm Hana. Nice to meet you.",
                                "answer": "Nice to meet you, too.",
                                "questionKr": "안녕, 나는 하나야. 만나서 반가워.",
                                "answerKr": "나도 만나서 반가워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Are you a new student?",
                                "answer": "Yes, I am in the third grade.",
                                "questionKr": "너 전학생이니?",
                                "answerKr": "응, 나는 3학년이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Goodbye, Jinu! See you tomorrow.",
                                "answer": "Bye, have a good day!",
                                "questionKr": "잘 가, 진우야! 내일 봐.",
                                "answerKr": "안녕, 좋은 하루 보내!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Who is your friend?",
                                "answer": "She is my best friend, Yuna.",
                                "questionKr": "네 친구는 누구니?",
                                "answerKr": "내 가장 친한 친구 유나야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "How are you today?",
                                "answer": "I'm great, thank you.",
                                "questionKr": "오늘 기분 어때?",
                                "answerKr": "아주 좋아, 고마워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is your name Kevin?",
                                "answer": "Yes, my name is Kevin.",
                                "questionKr": "네 이름이 케빈이니?",
                                "answerKr": "응, 내 이름은 케빈이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Let's say hello to the teacher.",
                                "answer": "Good morning, teacher!",
                                "questionKr": "선생님께 인사드리자.",
                                "answerKr": "좋은 아침입니다, 선생님!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What grade are you in?",
                                "answer": "I'm in the third grade.",
                                "questionKr": "너 몇 학년이니?",
                                "answerKr": "나는 3학년이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "See you later, Minsoo!",
                                "answer": "See you later, bye!",
                                "questionKr": "나중에 봐, 민수야!",
                                "answerKr": "나중에 봐, 잘 가!",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Hello, what's your name?",
                                "answer": "Hello, I'm Olly.",
                                "questionKr": "안녕, 네 이름은 뭐니?",
                                "answerKr": "안녕, 나는 올리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Hi, I'm Hana. Nice to meet you.",
                                "answer": "Nice to meet you, too.",
                                "questionKr": "안녕, 나는 하나야. 만나서 반가워.",
                                "answerKr": "나도 만나서 반가워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Are you a new student?",
                                "answer": "Yes, I am in the third grade.",
                                "questionKr": "너 전학생이니?",
                                "answerKr": "응, 나는 3학년이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Goodbye, Jinu! See you tomorrow.",
                                "answer": "Bye, have a good day!",
                                "questionKr": "잘 가, 진우야! 내일 봐.",
                                "answerKr": "안녕, 좋은 하루 보내!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Who is your friend?",
                                "answer": "She is my cousin, Jenny.",
                                "questionKr": "네 친구는 누구니?",
                                "answerKr": "내 사촌 제니야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "How are you today?",
                                "answer": "I'm great, thank you.",
                                "questionKr": "오늘 기분 어때?",
                                "answerKr": "아주 좋아, 고마워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is your name Kevin?",
                                "answer": "Yes, my name is Kevin.",
                                "questionKr": "네 이름이 케빈이니?",
                                "answerKr": "응, 내 이름은 케빈이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Let's say hello to the teacher.",
                                "answer": "Good morning, teacher!",
                                "questionKr": "선생님께 인사드리자.",
                                "answerKr": "좋은 아침입니다, 선생님!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What grade are you in?",
                                "answer": "See you later, friend.",
                                "questionKr": "너 몇 학년이니?",
                                "answerKr": "나중에 봐, 친구야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 10,
                                "question": "See you later, Minsoo!",
                                "answer": "See you later, bye!",
                                "questionKr": "나중에 봐, 민수야!",
                                "answerKr": "나중에 봐, 잘 가!",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [안녕]",
                                "word": "hello",
                                "meaning": "안녕",
                                "hint": "h___",
                                "answer": "hello",
                                "options": [
                                        "am",
                                        "hi",
                                        "hello",
                                        "I"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [안녕]",
                                "word": "hi",
                                "meaning": "안녕",
                                "hint": "h___",
                                "answer": "hi",
                                "options": [
                                        "I",
                                        "am",
                                        "hi",
                                        "hello"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [나]",
                                "word": "I",
                                "meaning": "나",
                                "hint": "I___",
                                "answer": "I",
                                "options": [
                                        "am",
                                        "hello",
                                        "hi",
                                        "I"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~이다]",
                                "word": "am",
                                "meaning": "~이다",
                                "hint": "a___",
                                "answer": "am",
                                "options": [
                                        "am",
                                        "I",
                                        "hello",
                                        "hi"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [나의]",
                                "word": "my",
                                "meaning": "나의",
                                "hint": "m___",
                                "answer": "my",
                                "options": [
                                        "my",
                                        "hello",
                                        "hi",
                                        "I"
                                ]
                        }
                ]
        },
        "3G_L02": {
                "id": "3G_L02",
                "grade": 3,
                "lesson": 2,
                "publisher": "YBM (최희경)",
                "name": "3학년 2단원",
                "title": "What's This?",
                "shortDesc": "What's This? (10문항)",
                "grammarPoint": "What's this?",
                "words": [
                        {
                                "en": "what",
                                "kr": "무엇"
                        },
                        {
                                "en": "this",
                                "kr": "이것"
                        },
                        {
                                "en": "that",
                                "kr": "저것"
                        },
                        {
                                "en": "it",
                                "kr": "그것"
                        },
                        {
                                "en": "is",
                                "kr": "~이다"
                        },
                        {
                                "en": "bag",
                                "kr": "가방"
                        },
                        {
                                "en": "ball",
                                "kr": "공"
                        },
                        {
                                "en": "chair",
                                "kr": "의자"
                        },
                        {
                                "en": "car",
                                "kr": "자동차"
                        },
                        {
                                "en": "doll",
                                "kr": "인형"
                        },
                        {
                                "en": "clock",
                                "kr": "시계"
                        },
                        {
                                "en": "cup",
                                "kr": "컵"
                        },
                        {
                                "en": "big",
                                "kr": "큰"
                        },
                        {
                                "en": "small",
                                "kr": "작은"
                        }
                ],
                "sentences": [
                        {
                                "en": "What's this?",
                                "kr": "이것은 무엇이니?"
                        },
                        {
                                "en": "It's a bag.",
                                "kr": "그것은 가방이야."
                        },
                        {
                                "en": "What's that?",
                                "kr": "저것은 무엇이니?"
                        },
                        {
                                "en": "It's a big ball.",
                                "kr": "그것은 큰 공이야."
                        },
                        {
                                "en": "Is it a chair?",
                                "kr": "그것은 의자이니?"
                        },
                        {
                                "en": "Yes, it is.",
                                "kr": "응, 맞아."
                        },
                        {
                                "en": "Is it a toy car?",
                                "kr": "그것은 장난감 자동차니?"
                        },
                        {
                                "en": "No, it isn't.",
                                "kr": "아니, 그렇지 않아."
                        },
                        {
                                "en": "Look at this cute doll.",
                                "kr": "이 귀여운 인형을 봐."
                        },
                        {
                                "en": "It's a yellow clock.",
                                "kr": "그것은 노란색 시계야."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "What's this on the desk?",
                                "answer": "It's an English book.",
                                "questionKr": "책상 위에 있는 이건 뭐니?",
                                "answerKr": "영어 책이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Is this your pencil?",
                                "answer": "Yes, it is my pencil.",
                                "questionKr": "이게 네 연필이니?",
                                "answerKr": "응, 내 연필이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What's that near the window?",
                                "answer": "It's a blue cap.",
                                "questionKr": "창문 근처에 있는 저건 뭐니?",
                                "answerKr": "파란 모자야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Is that a cat or a dog?",
                                "answer": "It's a small dog.",
                                "questionKr": "저건 고양이니 개니?",
                                "answerKr": "작은 개야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What do you have in your bag?",
                                "answer": "I have a cup and a pen.",
                                "questionKr": "가방 안에 무엇이 있니?",
                                "answerKr": "컵과 펜이 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Look at this. What's this?",
                                "answer": "It's a colorful box.",
                                "questionKr": "이것 좀 봐. 이게 뭐니?",
                                "answerKr": "알록달록한 상자야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is this a ruler?",
                                "answer": "No, it's a long pen.",
                                "questionKr": "이거 자니?",
                                "answerKr": "아니, 긴 펜이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "What's that on the chair?",
                                "answer": "It's my new school bag.",
                                "questionKr": "의자 위에 있는 저건 뭐니?",
                                "answerKr": "내 새 책가방이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What is this shape?",
                                "answer": "It is a round ball.",
                                "questionKr": "이 모양은 뭐니?",
                                "answerKr": "둥근 공이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Is that your English notebook?",
                                "answer": "Yes, that is mine.",
                                "questionKr": "저게 네 영어 공책이니?",
                                "answerKr": "응, 저건 내 거야.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "What's this on the desk?",
                                "answer": "It's an English book.",
                                "questionKr": "책상 위에 있는 이건 뭐니?",
                                "answerKr": "영어 책이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Is this your pencil?",
                                "answer": "Yes, it is my pencil.",
                                "questionKr": "이게 네 연필이니?",
                                "answerKr": "응, 내 연필이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What's that near the window?",
                                "answer": "It's a red cap.",
                                "questionKr": "창문 근처에 있는 저건 뭐니?",
                                "answerKr": "빨간 모자야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 4,
                                "question": "Is that a cat or a dog?",
                                "answer": "It's a small dog.",
                                "questionKr": "저건 고양이니 개니?",
                                "answerKr": "작은 개야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What do you have in your bag?",
                                "answer": "I have a cup and a pen.",
                                "questionKr": "가방 안에 무엇이 있니?",
                                "answerKr": "컵과 펜이 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Look at this. What's this?",
                                "answer": "It's a colorful box.",
                                "questionKr": "이것 좀 봐. 이게 뭐니?",
                                "answerKr": "알록달록한 상자야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is this a ruler?",
                                "answer": "No, it's a long pen.",
                                "questionKr": "이거 자니?",
                                "answerKr": "아니, 긴 펜이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "What's that on the chair?",
                                "answer": "It's an old coat.",
                                "questionKr": "의자 위에 있는 저건 뭐니?",
                                "answerKr": "오래된 외투야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 9,
                                "question": "What is this shape?",
                                "answer": "It is a round ball.",
                                "questionKr": "이 모양은 뭐니?",
                                "answerKr": "둥근 공이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Is that your English notebook?",
                                "answer": "Yes, that is mine.",
                                "questionKr": "저게 네 영어 공책이니?",
                                "answerKr": "응, 저건 내 거야.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [무엇]",
                                "word": "what",
                                "meaning": "무엇",
                                "hint": "w___",
                                "answer": "what",
                                "options": [
                                        "this",
                                        "what",
                                        "that",
                                        "it"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [이것]",
                                "word": "this",
                                "meaning": "이것",
                                "hint": "t___",
                                "answer": "this",
                                "options": [
                                        "that",
                                        "this",
                                        "what",
                                        "it"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [저것]",
                                "word": "that",
                                "meaning": "저것",
                                "hint": "t___",
                                "answer": "that",
                                "options": [
                                        "that",
                                        "what",
                                        "it",
                                        "this"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [그것]",
                                "word": "it",
                                "meaning": "그것",
                                "hint": "i___",
                                "answer": "it",
                                "options": [
                                        "it",
                                        "this",
                                        "what",
                                        "that"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~이다]",
                                "word": "is",
                                "meaning": "~이다",
                                "hint": "i___",
                                "answer": "is",
                                "options": [
                                        "what",
                                        "is",
                                        "this",
                                        "that"
                                ]
                        }
                ]
        },
        "3G_L03": {
                "id": "3G_L03",
                "grade": 3,
                "lesson": 3,
                "publisher": "YBM (최희경)",
                "name": "3학년 3단원",
                "title": "Sit Down, Please",
                "shortDesc": "Sit Down, Please (10문항)",
                "grammarPoint": "Stand up, please.",
                "words": [
                        {
                                "en": "stand",
                                "kr": "서다"
                        },
                        {
                                "en": "sit",
                                "kr": "앉다"
                        },
                        {
                                "en": "open",
                                "kr": "열다, 펴다"
                        },
                        {
                                "en": "close",
                                "kr": "닫다, 덮다"
                        },
                        {
                                "en": "look",
                                "kr": "보다"
                        },
                        {
                                "en": "listen",
                                "kr": "듣다"
                        },
                        {
                                "en": "please",
                                "kr": "제발, 부디"
                        },
                        {
                                "en": "door",
                                "kr": "문"
                        },
                        {
                                "en": "window",
                                "kr": "창문"
                        },
                        {
                                "en": "book",
                                "kr": "책"
                        },
                        {
                                "en": "up",
                                "kr": "위로"
                        },
                        {
                                "en": "down",
                                "kr": "아래로"
                        }
                ],
                "sentences": [
                        {
                                "en": "Stand up, please.",
                                "kr": "일어서 주세요."
                        },
                        {
                                "en": "Sit down, please.",
                                "kr": "앉아 주세요."
                        },
                        {
                                "en": "Open the door, please.",
                                "kr": "문을 열어 주세요."
                        },
                        {
                                "en": "Close the window, please.",
                                "kr": "창문을 닫아 주세요."
                        },
                        {
                                "en": "Open your book.",
                                "kr": "책을 펴세요."
                        },
                        {
                                "en": "Close your book.",
                                "kr": "책을 덮으세요."
                        },
                        {
                                "en": "Look at me, please.",
                                "kr": "저를 보세요."
                        },
                        {
                                "en": "Listen carefully.",
                                "kr": "잘 들어 보세요."
                        },
                        {
                                "en": "Come here, please.",
                                "kr": "이리 오세요."
                        },
                        {
                                "en": "Okay, I will.",
                                "kr": "네, 그럴게요."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Stand up, please.",
                                "answer": "Okay, I'm standing up.",
                                "questionKr": "일어서 주세요.",
                                "answerKr": "네, 일어서고 있어요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Sit down, please.",
                                "answer": "Thank you. I'm sitting down.",
                                "questionKr": "앉아 주세요.",
                                "answerKr": "감사합니다. 앉을게요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Open the book, please.",
                                "answer": "Sure, page ten.",
                                "questionKr": "책을 펴 주세요.",
                                "answerKr": "네, 10쪽을 폅니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Sit down on your chair, please.",
                                "answer": "Okay, thank you.",
                                "questionKr": "의자에 앉아 주세요.",
                                "answerKr": "네, 감사합니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What should we open first?",
                                "answer": "Open your English textbook, please.",
                                "questionKr": "우리 먼저 무엇을 열어야 할까?",
                                "answerKr": "영어 교과서를 펴렴.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Look at the blackboard, please.",
                                "answer": "Yes, I am looking at it.",
                                "questionKr": "칠판을 봐주세요.",
                                "answerKr": "네, 보고 있어요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Listen carefully to the audio, please.",
                                "answer": "We will listen carefully.",
                                "questionKr": "음성을 주의 깊게 들어주세요.",
                                "answerKr": "주의 깊게 들을게요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Can you open this gift box?",
                                "answer": "Wow, thank you! I'll open it.",
                                "questionKr": "이 선물 상자 열어볼래?",
                                "answerKr": "와, 고마워! 열어볼게.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Come here, please.",
                                "answer": "Okay, I'm coming.",
                                "questionKr": "이리 오렴.",
                                "answerKr": "네, 가고 있어요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Read this English story, please.",
                                "answer": "Yes, I will read it aloud.",
                                "questionKr": "이 영어 이야기를 읽어주세요.",
                                "answerKr": "네, 소리 내어 읽을게요.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Stand up, please.",
                                "answer": "Okay, I'm standing up.",
                                "questionKr": "일어서 주세요.",
                                "answerKr": "네, 일어서고 있어요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Sit down, please.",
                                "answer": "Thank you. I'm sitting down.",
                                "questionKr": "앉아 주세요.",
                                "answerKr": "감사합니다. 앉을게요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Open the book, please.",
                                "answer": "Sure, page ten.",
                                "questionKr": "책을 펴 주세요.",
                                "answerKr": "네, 10쪽을 폅니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Sit down on your chair, please.",
                                "answer": "I will close the door.",
                                "questionKr": "의자에 앉아 주세요.",
                                "answerKr": "문을 닫을게요.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 5,
                                "question": "What should we open first?",
                                "answer": "Open your English textbook, please.",
                                "questionKr": "우리 먼저 무엇을 열어야 할까?",
                                "answerKr": "영어 교과서를 펴렴.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Look at the blackboard, please.",
                                "answer": "Yes, I am looking at it.",
                                "questionKr": "칠판을 봐주세요.",
                                "answerKr": "네, 보고 있어요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Listen carefully to the audio, please.",
                                "answer": "We will listen carefully.",
                                "questionKr": "음성을 주의 깊게 들어주세요.",
                                "answerKr": "주의 깊게 들을게요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Can you open this gift box?",
                                "answer": "No, please stay here.",
                                "questionKr": "이 선물 상자 열어볼래?",
                                "answerKr": "아니요, 여기 있어 주세요.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 9,
                                "question": "Come here, please.",
                                "answer": "Okay, I'm coming.",
                                "questionKr": "이리 오렴.",
                                "answerKr": "네, 가고 있어요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Read this English story, please.",
                                "answer": "Yes, I will read it aloud.",
                                "questionKr": "이 영어 이야기를 읽어주세요.",
                                "answerKr": "네, 소리 내어 읽을게요.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [서다]",
                                "word": "stand",
                                "meaning": "서다",
                                "hint": "s___",
                                "answer": "stand",
                                "options": [
                                        "close",
                                        "sit",
                                        "stand",
                                        "open"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [앉다]",
                                "word": "sit",
                                "meaning": "앉다",
                                "hint": "s___",
                                "answer": "sit",
                                "options": [
                                        "close",
                                        "sit",
                                        "stand",
                                        "open"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [열다, 펴다]",
                                "word": "open",
                                "meaning": "열다, 펴다",
                                "hint": "o___",
                                "answer": "open",
                                "options": [
                                        "close",
                                        "open",
                                        "stand",
                                        "sit"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [닫다, 덮다]",
                                "word": "close",
                                "meaning": "닫다, 덮다",
                                "hint": "c___",
                                "answer": "close",
                                "options": [
                                        "stand",
                                        "sit",
                                        "open",
                                        "close"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [보다]",
                                "word": "look",
                                "meaning": "보다",
                                "hint": "l___",
                                "answer": "look",
                                "options": [
                                        "stand",
                                        "look",
                                        "sit",
                                        "open"
                                ]
                        }
                ]
        },
        "3G_L04": {
                "id": "3G_L04",
                "grade": 3,
                "lesson": 4,
                "publisher": "YBM (최희경)",
                "name": "3학년 4단원",
                "title": "How Many Cows?",
                "shortDesc": "How Many Cows? (10문항)",
                "grammarPoint": "How many cows?",
                "words": [
                        {
                                "en": "how",
                                "kr": "얼마나, 어떻게"
                        },
                        {
                                "en": "many",
                                "kr": "많은"
                        },
                        {
                                "en": "cow",
                                "kr": "소"
                        },
                        {
                                "en": "pig",
                                "kr": "돼지"
                        },
                        {
                                "en": "duck",
                                "kr": "오리"
                        },
                        {
                                "en": "horse",
                                "kr": "말"
                        },
                        {
                                "en": "dog",
                                "kr": "개"
                        },
                        {
                                "en": "cat",
                                "kr": "고양이"
                        },
                        {
                                "en": "one",
                                "kr": "하나 (1)"
                        },
                        {
                                "en": "two",
                                "kr": "둘 (2)"
                        },
                        {
                                "en": "three",
                                "kr": "셋 (3)"
                        },
                        {
                                "en": "four",
                                "kr": "넷 (4)"
                        },
                        {
                                "en": "five",
                                "kr": "다섯 (5)"
                        }
                ],
                "sentences": [
                        {
                                "en": "How many cows?",
                                "kr": "소가 몇 마리 있니?"
                        },
                        {
                                "en": "Three cows.",
                                "kr": "소 세 마리야."
                        },
                        {
                                "en": "How many pigs do you see?",
                                "kr": "돼지가 몇 마리 보이니?"
                        },
                        {
                                "en": "Four pink pigs.",
                                "kr": "분홍 돼지 네 마리야."
                        },
                        {
                                "en": "Count the ducks, please.",
                                "kr": "오리를 세어 보세요."
                        },
                        {
                                "en": "One, two, three ducks.",
                                "kr": "하나, 둘, 오리 세 마리."
                        },
                        {
                                "en": "I see five horses on the farm.",
                                "kr": "농장에 말 다섯 마리가 보여."
                        },
                        {
                                "en": "How many dogs are there?",
                                "kr": "개는 몇 마리 있니?"
                        },
                        {
                                "en": "Seven dogs are running.",
                                "kr": "개 일곱 마리가 달리고 있어."
                        },
                        {
                                "en": "Look at the ten little birds.",
                                "kr": "열 마리의 작은 새들을 봐."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "How many cows?",
                                "answer": "Three cows.",
                                "questionKr": "소가 몇 마리 있니?",
                                "answerKr": "소 세 마리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "How many pigs are on the farm?",
                                "answer": "Five pink pigs.",
                                "questionKr": "농장에 돼지가 몇 마리 있니?",
                                "answerKr": "분홍 돼지 다섯 마리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Can you count the ducks?",
                                "answer": "One, two, three ducks.",
                                "questionKr": "오리를 셀 수 있니?",
                                "answerKr": "하나, 둘, 오리 세 마리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "How many horses do you see?",
                                "answer": "I see two horses.",
                                "questionKr": "말이 몇 마리 보이니?",
                                "answerKr": "말 두 마리가 보여.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Do you want some chicken?",
                                "answer": "Yes, please. I like chicken.",
                                "questionKr": "치킨 좀 먹을래?",
                                "answerKr": "응, 고마워. 난 치킨 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Do you like bananas?",
                                "answer": "Yes, I do. Bananas are sweet.",
                                "questionKr": "너 바나나 좋아하니?",
                                "answerKr": "응, 바나나는 달콤해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Do you like green grapes?",
                                "answer": "No, I don't. I like oranges.",
                                "questionKr": "청포도 좋아하니?",
                                "answerKr": "아니, 난 오렌지를 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you drink milk every morning?",
                                "answer": "Yes, I drink warm milk.",
                                "questionKr": "매일 아침 우유를 마시니?",
                                "answerKr": "응, 난 따뜻한 우유를 마셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What dessert do you like?",
                                "answer": "I like melon ice cream.",
                                "questionKr": "어떤 후식을 좋아하니?",
                                "answerKr": "멜론 아이스크림을 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you like bread and jam?",
                                "answer": "Yes, I do. It is yummy.",
                                "questionKr": "빵과 잼을 좋아하니?",
                                "answerKr": "응, 맛있어.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "How many cows?",
                                "answer": "Four cows.",
                                "questionKr": "소가 몇 마리 있니?",
                                "answerKr": "소 네 마리야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 2,
                                "question": "How many pigs are on the farm?",
                                "answer": "Five pink pigs.",
                                "questionKr": "농장에 돼지가 몇 마리 있니?",
                                "answerKr": "분홍 돼지 다섯 마리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Can you count the ducks?",
                                "answer": "One, two, three ducks.",
                                "questionKr": "오리를 셀 수 있니?",
                                "answerKr": "하나, 둘, 오리 세 마리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "How many horses do you see?",
                                "answer": "I see two horses.",
                                "questionKr": "말이 몇 마리 보이니?",
                                "answerKr": "말 두 마리가 보여.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Do you want some chicken?",
                                "answer": "Seven little birds.",
                                "questionKr": "치킨 좀 먹을래?",
                                "answerKr": "작은 새 일곱 마리야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Do you like bananas?",
                                "answer": "Yes, I do. Bananas are sweet.",
                                "questionKr": "너 바나나 좋아하니?",
                                "answerKr": "응, 바나나는 달콤해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Do you like green grapes?",
                                "answer": "No, I don't. I like oranges.",
                                "questionKr": "청포도 좋아하니?",
                                "answerKr": "아니, 난 오렌지를 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you drink milk every morning?",
                                "answer": "Yes, I drink warm milk.",
                                "questionKr": "매일 아침 우유를 마시니?",
                                "answerKr": "응, 난 따뜻한 우유를 마셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What dessert do you like?",
                                "answer": "I like melon ice cream.",
                                "questionKr": "어떤 후식을 좋아하니?",
                                "answerKr": "멜론 아이스크림을 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you like bread and jam?",
                                "answer": "Yes, I do. It is yummy.",
                                "questionKr": "빵과 잼을 좋아하니?",
                                "answerKr": "응, 맛있어.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [얼마나, 어떻게]",
                                "word": "how",
                                "meaning": "얼마나, 어떻게",
                                "hint": "h___",
                                "answer": "how",
                                "options": [
                                        "cow",
                                        "many",
                                        "how",
                                        "pig"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [많은]",
                                "word": "many",
                                "meaning": "많은",
                                "hint": "m___",
                                "answer": "many",
                                "options": [
                                        "pig",
                                        "how",
                                        "many",
                                        "cow"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [소]",
                                "word": "cow",
                                "meaning": "소",
                                "hint": "c___",
                                "answer": "cow",
                                "options": [
                                        "cow",
                                        "pig",
                                        "how",
                                        "many"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [돼지]",
                                "word": "pig",
                                "meaning": "돼지",
                                "hint": "p___",
                                "answer": "pig",
                                "options": [
                                        "cow",
                                        "pig",
                                        "how",
                                        "many"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [오리]",
                                "word": "duck",
                                "meaning": "오리",
                                "hint": "d___",
                                "answer": "duck",
                                "options": [
                                        "cow",
                                        "how",
                                        "many",
                                        "duck"
                                ]
                        }
                ]
        },
        "3G_L05": {
                "id": "3G_L05",
                "grade": 3,
                "lesson": 5,
                "publisher": "YBM (최희경)",
                "name": "3학년 5단원",
                "title": "Do You Like Apples?",
                "shortDesc": "Do You Like Apples? (10문항)",
                "grammarPoint": "Do you like apples?",
                "words": [
                        {
                                "en": "like",
                                "kr": "좋아하다"
                        },
                        {
                                "en": "apple",
                                "kr": "사과"
                        },
                        {
                                "en": "banana",
                                "kr": "바나나"
                        },
                        {
                                "en": "grape",
                                "kr": "포도"
                        },
                        {
                                "en": "orange",
                                "kr": "오렌지"
                        },
                        {
                                "en": "tomato",
                                "kr": "토마토"
                        },
                        {
                                "en": "fruit",
                                "kr": "과일"
                        },
                        {
                                "en": "eat",
                                "kr": "먹다"
                        },
                        {
                                "en": "sweet",
                                "kr": "달콤한"
                        },
                        {
                                "en": "red",
                                "kr": "빨간색의"
                        },
                        {
                                "en": "yes",
                                "kr": "응, 그래"
                        },
                        {
                                "en": "no",
                                "kr": "아니"
                        }
                ],
                "sentences": [
                        {
                                "en": "Do you like apples?",
                                "kr": "너는 사과를 좋아하니?"
                        },
                        {
                                "en": "Yes, I do.",
                                "kr": "응, 좋아해."
                        },
                        {
                                "en": "Do you like bananas?",
                                "kr": "너는 바나나를 좋아하니?"
                        },
                        {
                                "en": "No, I don't.",
                                "kr": "아니, 좋아하지 않아."
                        },
                        {
                                "en": "I like sweet grapes.",
                                "kr": "나는 달콤한 포도를 좋아해."
                        },
                        {
                                "en": "Do you like oranges?",
                                "kr": "너는 오렌지를 좋아하니?"
                        },
                        {
                                "en": "Yes, I like oranges very much.",
                                "kr": "응, 나는 오렌지를 매우 좋아해."
                        },
                        {
                                "en": "Let's eat fruit together.",
                                "kr": "함께 과일을 먹자."
                        },
                        {
                                "en": "I don't like tomatoes.",
                                "kr": "나는 토마토를 좋아하지 않아."
                        },
                        {
                                "en": "Apples are delicious and red.",
                                "kr": "사과는 맛있고 빨개."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "How many cows?",
                                "answer": "Three cows.",
                                "questionKr": "소가 몇 마리 있니?",
                                "answerKr": "소 세 마리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "How many pigs are on the farm?",
                                "answer": "Five pink pigs.",
                                "questionKr": "농장에 돼지가 몇 마리 있니?",
                                "answerKr": "분홍 돼지 다섯 마리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Can you count the ducks?",
                                "answer": "One, two, three ducks.",
                                "questionKr": "오리를 셀 수 있니?",
                                "answerKr": "하나, 둘, 오리 세 마리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "How many horses do you see?",
                                "answer": "I see two horses.",
                                "questionKr": "말이 몇 마리 보이니?",
                                "answerKr": "말 두 마리가 보여.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "How many pencils do you have in your case?",
                                "answer": "I have six pencils.",
                                "questionKr": "필통에 연필이 몇 자루 있니?",
                                "answerKr": "연필 여섯 자루가 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "How many books are on the desk?",
                                "answer": "Seven English books.",
                                "questionKr": "책상 위에 책이 몇 권 있니?",
                                "answerKr": "영어 책 일곱 권이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Can you count the chairs?",
                                "answer": "One, two, three, four, eight chairs!",
                                "questionKr": "의자 숫자를 셀 수 있니?",
                                "answerKr": "하나, 둘, 셋, 넷, 의자 여덟 개야!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "How many crayons are in the box?",
                                "answer": "There are ten colorful crayons.",
                                "questionKr": "상자에 크레용이 몇 개 있니?",
                                "answerKr": "알록달록한 크레용 열 개가 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "How many fish are in the bowl?",
                                "answer": "I see nine small fish.",
                                "questionKr": "어항에 물고기가 몇 마리 있니?",
                                "answerKr": "작은 물고기 아홉 마리가 보여.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you have one ruler?",
                                "answer": "Yes, I have one ruler.",
                                "questionKr": "자 한 개 가지고 있니?",
                                "answerKr": "응, 자 한 개 가지고 있어.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "How many cows?",
                                "answer": "Four cows.",
                                "questionKr": "소가 몇 마리 있니?",
                                "answerKr": "소 네 마리야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 2,
                                "question": "How many pigs are on the farm?",
                                "answer": "Five pink pigs.",
                                "questionKr": "농장에 돼지가 몇 마리 있니?",
                                "answerKr": "분홍 돼지 다섯 마리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Can you count the ducks?",
                                "answer": "One, two, three ducks.",
                                "questionKr": "오리를 셀 수 있니?",
                                "answerKr": "하나, 둘, 오리 세 마리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "How many horses do you see?",
                                "answer": "I see two horses.",
                                "questionKr": "말이 몇 마리 보이니?",
                                "answerKr": "말 두 마리가 보여.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "How many pencils do you have in your case?",
                                "answer": "Seven little birds.",
                                "questionKr": "필통에 연필이 몇 자루 있니?",
                                "answerKr": "작은 새 일곱 마리야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "How many books are on the desk?",
                                "answer": "Seven English books.",
                                "questionKr": "책상 위에 책이 몇 권 있니?",
                                "answerKr": "영어 책 일곱 권이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Can you count the chairs?",
                                "answer": "One, two, three, four, eight chairs!",
                                "questionKr": "의자 숫자를 셀 수 있니?",
                                "answerKr": "하나, 둘, 셋, 넷, 의자 여덟 개야!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "How many crayons are in the box?",
                                "answer": "There are ten colorful crayons.",
                                "questionKr": "상자에 크레용이 몇 개 있니?",
                                "answerKr": "알록달록한 크레용 열 개가 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "How many fish are in the bowl?",
                                "answer": "I see nine small fish.",
                                "questionKr": "어항에 물고기가 몇 마리 있니?",
                                "answerKr": "작은 물고기 아홉 마리가 보여.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you have one ruler?",
                                "answer": "Yes, I have one ruler.",
                                "questionKr": "자 한 개 가지고 있니?",
                                "answerKr": "응, 자 한 개 가지고 있어.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [좋아하다]",
                                "word": "like",
                                "meaning": "좋아하다",
                                "hint": "l___",
                                "answer": "like",
                                "options": [
                                        "like",
                                        "grape",
                                        "apple",
                                        "banana"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [사과]",
                                "word": "apple",
                                "meaning": "사과",
                                "hint": "a___",
                                "answer": "apple",
                                "options": [
                                        "grape",
                                        "banana",
                                        "apple",
                                        "like"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [바나나]",
                                "word": "banana",
                                "meaning": "바나나",
                                "hint": "b___",
                                "answer": "banana",
                                "options": [
                                        "grape",
                                        "like",
                                        "apple",
                                        "banana"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [포도]",
                                "word": "grape",
                                "meaning": "포도",
                                "hint": "g___",
                                "answer": "grape",
                                "options": [
                                        "banana",
                                        "apple",
                                        "like",
                                        "grape"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [오렌지]",
                                "word": "orange",
                                "meaning": "오렌지",
                                "hint": "o___",
                                "answer": "orange",
                                "options": [
                                        "like",
                                        "orange",
                                        "apple",
                                        "banana"
                                ]
                        }
                ]
        },
        "3G_L06": {
                "id": "3G_L06",
                "grade": 3,
                "lesson": 6,
                "publisher": "YBM (최희경)",
                "name": "3학년 6단원",
                "title": "I Can Jump",
                "shortDesc": "I Can Jump (10문항)",
                "grammarPoint": "Can you jump?",
                "words": [
                        {
                                "en": "can",
                                "kr": "~할 수 있다"
                        },
                        {
                                "en": "jump",
                                "kr": "뛰다, 점프하다"
                        },
                        {
                                "en": "swim",
                                "kr": "수영하다"
                        },
                        {
                                "en": "run",
                                "kr": "달리다"
                        },
                        {
                                "en": "sing",
                                "kr": "노래하다"
                        },
                        {
                                "en": "dance",
                                "kr": "춤추다"
                        },
                        {
                                "en": "fly",
                                "kr": "날다"
                        },
                        {
                                "en": "walk",
                                "kr": "걷다"
                        },
                        {
                                "en": "fast",
                                "kr": "빠른, 빨리"
                        },
                        {
                                "en": "high",
                                "kr": "높은, 높이"
                        },
                        {
                                "en": "well",
                                "kr": "잘"
                        },
                        {
                                "en": "bird",
                                "kr": "새"
                        }
                ],
                "sentences": [
                        {
                                "en": "Can you jump?",
                                "kr": "너는 뛸 수 있니?"
                        },
                        {
                                "en": "Yes, I can.",
                                "kr": "응, 할 수 있어."
                        },
                        {
                                "en": "Can you swim?",
                                "kr": "너는 수영할 수 있니?"
                        },
                        {
                                "en": "No, I can't.",
                                "kr": "아니, 못해."
                        },
                        {
                                "en": "I can run very fast.",
                                "kr": "나는 아주 빨리 달릴 수 있어."
                        },
                        {
                                "en": "Can you dance to music?",
                                "kr": "너는 음악에 맞춰 춤출 수 있니?"
                        },
                        {
                                "en": "Yes, I can dance well.",
                                "kr": "응, 나는 춤을 잘 춰."
                        },
                        {
                                "en": "Birds can fly high in the sky.",
                                "kr": "새들은 하늘 높이 날 수 있어."
                        },
                        {
                                "en": "Can you sing a song?",
                                "kr": "너는 노래를 부를 수 있니?"
                        },
                        {
                                "en": "Watch me! I can jump high.",
                                "kr": "나를 봐! 난 높이 뛸 수 있어."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Can you jump high?",
                                "answer": "Yes, I can jump.",
                                "questionKr": "너 높이 뛸 수 있니?",
                                "answerKr": "응, 뛸 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Can you swim in the pool?",
                                "answer": "Yes, I can swim fast.",
                                "questionKr": "너 수영장에서 수영할 수 있니?",
                                "answerKr": "응, 빠르게 수영할 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Can you run fast?",
                                "answer": "No, I can't. But I can walk.",
                                "questionKr": "너 빨리 달릴 수 있니?",
                                "answerKr": "아니, 못 달려. 하지만 걸을 순 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Do you have a glue stick?",
                                "answer": "Yes, I have a big glue stick.",
                                "questionKr": "풀 가지고 있니?",
                                "answerKr": "응, 큰 풀 하나 가지고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Do you have a notebook for art class?",
                                "answer": "Yes, I have an art notebook.",
                                "questionKr": "미술 시간 공책 있니?",
                                "answerKr": "응, 미술 공책 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Where is your pencil case?",
                                "answer": "It is inside my school bag.",
                                "questionKr": "네 필통 어디 있니?",
                                "answerKr": "책가방 안에 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Do you have colorful crayons?",
                                "answer": "Yes, I have twelve crayons.",
                                "questionKr": "색크레용 가지고 있니?",
                                "answerKr": "응, 12색 크레용이 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you have an extra pen?",
                                "answer": "Yes, you can use this black pen.",
                                "questionKr": "여분 펜 있니?",
                                "answerKr": "응, 이 검은색 펜을 쓰렴.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Do you have tape?",
                                "answer": "No, I don't. I only have glue.",
                                "questionKr": "너 테이프 있니?",
                                "answerKr": "아니, 없어. 난 풀만 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Thank you for the ruler!",
                                "answer": "You're very welcome.",
                                "questionKr": "자 빌려줘서 고마워!",
                                "answerKr": "천만에!",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Can you jump high?",
                                "answer": "No, I cannot jump today.",
                                "questionKr": "너 높이 뛸 수 있니?",
                                "answerKr": "아니, 오늘은 뛸 수 없어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 2,
                                "question": "Can you swim in the pool?",
                                "answer": "Yes, I can swim fast.",
                                "questionKr": "너 수영장에서 수영할 수 있니?",
                                "answerKr": "응, 빠르게 수영할 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Can you run fast?",
                                "answer": "No, I can't. But I can walk.",
                                "questionKr": "너 빨리 달릴 수 있니?",
                                "answerKr": "아니, 못 달려. 하지만 걸을 순 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Do you have a glue stick?",
                                "answer": "Yes, I have a big glue stick.",
                                "questionKr": "풀 가지고 있니?",
                                "answerKr": "응, 큰 풀 하나 가지고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Do you have a notebook for art class?",
                                "answer": "Yes, I have an art notebook.",
                                "questionKr": "미술 시간 공책 있니?",
                                "answerKr": "응, 미술 공책 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Where is your pencil case?",
                                "answer": "I can fly like a bird.",
                                "questionKr": "네 필통 어디 있니?",
                                "answerKr": "새처럼 날 수 있어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 7,
                                "question": "Do you have colorful crayons?",
                                "answer": "Yes, I have twelve crayons.",
                                "questionKr": "색크레용 가지고 있니?",
                                "answerKr": "응, 12색 크레용이 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you have an extra pen?",
                                "answer": "Yes, you can use this black pen.",
                                "questionKr": "여분 펜 있니?",
                                "answerKr": "응, 이 검은색 펜을 쓰렴.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Do you have tape?",
                                "answer": "No, I don't. I only have glue.",
                                "questionKr": "너 테이프 있니?",
                                "answerKr": "아니, 없어. 난 풀만 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Thank you for the ruler!",
                                "answer": "You're very welcome.",
                                "questionKr": "자 빌려줘서 고마워!",
                                "answerKr": "천만에!",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~할 수 있다]",
                                "word": "can",
                                "meaning": "~할 수 있다",
                                "hint": "c___",
                                "answer": "can",
                                "options": [
                                        "can",
                                        "run",
                                        "jump",
                                        "swim"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [뛰다, 점프하다]",
                                "word": "jump",
                                "meaning": "뛰다, 점프하다",
                                "hint": "j___",
                                "answer": "jump",
                                "options": [
                                        "can",
                                        "run",
                                        "swim",
                                        "jump"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [수영하다]",
                                "word": "swim",
                                "meaning": "수영하다",
                                "hint": "s___",
                                "answer": "swim",
                                "options": [
                                        "swim",
                                        "run",
                                        "can",
                                        "jump"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [달리다]",
                                "word": "run",
                                "meaning": "달리다",
                                "hint": "r___",
                                "answer": "run",
                                "options": [
                                        "swim",
                                        "jump",
                                        "can",
                                        "run"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [노래하다]",
                                "word": "sing",
                                "meaning": "노래하다",
                                "hint": "s___",
                                "answer": "sing",
                                "options": [
                                        "can",
                                        "swim",
                                        "jump",
                                        "sing"
                                ]
                        }
                ]
        },
        "3G_L07": {
                "id": "3G_L07",
                "grade": 3,
                "lesson": 7,
                "publisher": "YBM (최희경)",
                "name": "3학년 7단원",
                "title": "I Have a Pencil",
                "shortDesc": "I Have a Pencil (10문항)",
                "grammarPoint": "I have a pencil.",
                "words": [
                        {
                                "en": "have",
                                "kr": "가지고 있다"
                        },
                        {
                                "en": "pencil",
                                "kr": "연필"
                        },
                        {
                                "en": "ruler",
                                "kr": "자"
                        },
                        {
                                "en": "eraser",
                                "kr": "지우개"
                        },
                        {
                                "en": "pen",
                                "kr": "펜"
                        },
                        {
                                "en": "crayon",
                                "kr": "크레용"
                        },
                        {
                                "en": "desk",
                                "kr": "책상"
                        },
                        {
                                "en": "case",
                                "kr": "통, 상자"
                        },
                        {
                                "en": "here",
                                "kr": "여기"
                        },
                        {
                                "en": "borrow",
                                "kr": "빌리다"
                        },
                        {
                                "en": "take",
                                "kr": "가져가다"
                        },
                        {
                                "en": "color",
                                "kr": "색깔"
                        }
                ],
                "sentences": [
                        {
                                "en": "I have a pencil.",
                                "kr": "나는 연필이 있어."
                        },
                        {
                                "en": "Do you have a ruler?",
                                "kr": "너는 자가 있니?"
                        },
                        {
                                "en": "Yes, I do. Here you are.",
                                "kr": "응, 있어. 여기 있어."
                        },
                        {
                                "en": "Do you have an eraser?",
                                "kr": "너는 지우개가 있니?"
                        },
                        {
                                "en": "No, I don't have one.",
                                "kr": "아니, 난 없어."
                        },
                        {
                                "en": "Can I borrow a pen?",
                                "kr": "펜 좀 빌릴 수 있을까?"
                        },
                        {
                                "en": "Sure, take this blue pen.",
                                "kr": "물론이지, 이 파란 펜을 가져가."
                        },
                        {
                                "en": "I have three colorful crayons.",
                                "kr": "나는 알록달록한 크레용 3개가 있어."
                        },
                        {
                                "en": "Put your pencil in the pencil case.",
                                "kr": "연필을 필통에 넣어라."
                        },
                        {
                                "en": "Thank you for the ruler.",
                                "kr": "자를 빌려줘서 고마워."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "I have a pencil. Do you have a pencil?",
                                "answer": "Yes, I have two pencils.",
                                "questionKr": "난 연필이 있어. 너도 연필 있니?",
                                "answerKr": "응, 연필 두 자루 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Do you have a ruler?",
                                "answer": "Yes, I do. Here you are.",
                                "questionKr": "너 자가 있니?",
                                "answerKr": "응, 있어. 여기 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Do you have an eraser?",
                                "answer": "No, I don't. Ask Minsoo.",
                                "questionKr": "너 지우개 있니?",
                                "answerKr": "아니, 없어. 민수에게 물어봐.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Can you fly like a bird?",
                                "answer": "No, I can't fly. I am a human.",
                                "questionKr": "새처럼 날 수 있니?",
                                "answerKr": "아니, 날 수 없어. 난 사람이잖아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Can you jump high?",
                                "answer": "Yes, I can jump very high.",
                                "questionKr": "높이 뛸 수 있니?",
                                "answerKr": "응, 난 아주 높이 뛸 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Can you sing an English song?",
                                "answer": "Yes, I can sing the ABC song.",
                                "questionKr": "영어 노래 부를 수 있니?",
                                "answerKr": "응, ABC 노래 부를 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Can you ski in winter?",
                                "answer": "No, I can't ski, but I can skate.",
                                "questionKr": "겨울에 스키 탈 수 있니?",
                                "answerKr": "아니, 스키는 못 타지만 스케이트는 타.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Can you climb that tall tree?",
                                "answer": "No, I can't climb trees. It's dangerous.",
                                "questionKr": "저 높은 나무에 올라갈 수 있니?",
                                "answerKr": "아니, 못 올라가. 위험해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Can you catch this ball?",
                                "answer": "Yes, I can catch it easily.",
                                "questionKr": "이 공 잡을 수 있니?",
                                "answerKr": "응, 쉽게 잡을 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Can you run fast?",
                                "answer": "Yes, I am the fastest runner.",
                                "questionKr": "너 빠르게 달릴 수 있니?",
                                "answerKr": "응, 내가 가장 빠른 달리기 선수야.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "I have a pencil. Do you have a pencil?",
                                "answer": "Yes, I have two pencils.",
                                "questionKr": "난 연필이 있어. 너도 연필 있니?",
                                "answerKr": "응, 연필 두 자루 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Do you have a ruler?",
                                "answer": "No, I only have a pen.",
                                "questionKr": "너 자가 있니?",
                                "answerKr": "아니, 난 펜만 있어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Do you have an eraser?",
                                "answer": "No, I don't. Ask Minsoo.",
                                "questionKr": "너 지우개 있니?",
                                "answerKr": "아니, 없어. 민수에게 물어봐.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Can you fly like a bird?",
                                "answer": "No, I can't fly. I am a human.",
                                "questionKr": "새처럼 날 수 있니?",
                                "answerKr": "아니, 날 수 없어. 난 사람이잖아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Can you jump high?",
                                "answer": "Yes, I can jump very high.",
                                "questionKr": "높이 뛸 수 있니?",
                                "answerKr": "응, 난 아주 높이 뛸 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Can you sing an English song?",
                                "answer": "Yes, I can sing the ABC song.",
                                "questionKr": "영어 노래 부를 수 있니?",
                                "answerKr": "응, ABC 노래 부를 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Can you ski in winter?",
                                "answer": "I don't have scissors.",
                                "questionKr": "겨울에 스키 탈 수 있니?",
                                "answerKr": "가위는 없어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 8,
                                "question": "Can you climb that tall tree?",
                                "answer": "No, I can't climb trees. It's dangerous.",
                                "questionKr": "저 높은 나무에 올라갈 수 있니?",
                                "answerKr": "아니, 못 올라가. 위험해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Can you catch this ball?",
                                "answer": "Yes, I can catch it easily.",
                                "questionKr": "이 공 잡을 수 있니?",
                                "answerKr": "응, 쉽게 잡을 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Can you run fast?",
                                "answer": "Yes, I am the fastest runner.",
                                "questionKr": "너 빠르게 달릴 수 있니?",
                                "answerKr": "응, 내가 가장 빠른 달리기 선수야.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [가지고 있다]",
                                "word": "have",
                                "meaning": "가지고 있다",
                                "hint": "h___",
                                "answer": "have",
                                "options": [
                                        "have",
                                        "eraser",
                                        "pencil",
                                        "ruler"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [연필]",
                                "word": "pencil",
                                "meaning": "연필",
                                "hint": "p___",
                                "answer": "pencil",
                                "options": [
                                        "ruler",
                                        "pencil",
                                        "eraser",
                                        "have"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [자]",
                                "word": "ruler",
                                "meaning": "자",
                                "hint": "r___",
                                "answer": "ruler",
                                "options": [
                                        "pencil",
                                        "ruler",
                                        "eraser",
                                        "have"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [지우개]",
                                "word": "eraser",
                                "meaning": "지우개",
                                "hint": "e___",
                                "answer": "eraser",
                                "options": [
                                        "have",
                                        "eraser",
                                        "ruler",
                                        "pencil"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [펜]",
                                "word": "pen",
                                "meaning": "펜",
                                "hint": "p___",
                                "answer": "pen",
                                "options": [
                                        "ruler",
                                        "have",
                                        "pen",
                                        "pencil"
                                ]
                        }
                ]
        },
        "3G_L08": {
                "id": "3G_L08",
                "grade": 3,
                "lesson": 8,
                "publisher": "YBM (최희경)",
                "name": "3학년 8단원",
                "title": "I'm Happy",
                "shortDesc": "I'm Happy (10문항)",
                "grammarPoint": "How are you today?",
                "words": [
                        {
                                "en": "happy",
                                "kr": "행복한, 기쁜"
                        },
                        {
                                "en": "sad",
                                "kr": "슬픈"
                        },
                        {
                                "en": "angry",
                                "kr": "화난"
                        },
                        {
                                "en": "hungry",
                                "kr": "배고픈"
                        },
                        {
                                "en": "thirsty",
                                "kr": "목마른"
                        },
                        {
                                "en": "tired",
                                "kr": "피곤한"
                        },
                        {
                                "en": "feel",
                                "kr": "느끼다"
                        },
                        {
                                "en": "cheer",
                                "kr": "응원하다, 힘내다"
                        },
                        {
                                "en": "fine",
                                "kr": "좋은, 괜찮은"
                        },
                        {
                                "en": "smile",
                                "kr": "미소 짓다"
                        },
                        {
                                "en": "water",
                                "kr": "물"
                        },
                        {
                                "en": "good",
                                "kr": "좋은"
                        }
                ],
                "sentences": [
                        {
                                "en": "How are you today?",
                                "kr": "오늘 기분이 어떠니?"
                        },
                        {
                                "en": "I'm happy.",
                                "kr": "나는 기뻐."
                        },
                        {
                                "en": "I'm hungry.",
                                "kr": "나는 배고파."
                        },
                        {
                                "en": "Are you tired?",
                                "kr": "너 피곤하니?"
                        },
                        {
                                "en": "Yes, I'm very tired.",
                                "kr": "응, 나는 매우 피곤해."
                        },
                        {
                                "en": "Are you thirsty?",
                                "kr": "너 목마르니?"
                        },
                        {
                                "en": "Have some cool water.",
                                "kr": "시원한 물 좀 마셔."
                        },
                        {
                                "en": "Don't be sad, cheer up!",
                                "kr": "슬퍼하지 마, 힘내!"
                        },
                        {
                                "en": "I'm not angry at all.",
                                "kr": "나는 전혀 화나지 않았어."
                        },
                        {
                                "en": "I feel wonderful today!",
                                "kr": "오늘 기분이 아주 좋아!"
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "How are you today?",
                                "answer": "I'm happy.",
                                "questionKr": "오늘 기분이 어떠니?",
                                "answerKr": "기뻐.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Are you hungry?",
                                "answer": "Yes, I'm very hungry.",
                                "questionKr": "너 배고프니?",
                                "answerKr": "응, 정말 배고파.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Are you tired after running?",
                                "answer": "Yes, I'm tired and thirsty.",
                                "questionKr": "달리기 후에 피곤하니?",
                                "answerKr": "응, 피곤하고 목말라.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Why are you smiling?",
                                "answer": "Because I'm feeling great.",
                                "questionKr": "왜 웃고 있니?",
                                "answerKr": "기분이 아주 좋아서.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Are you sad?",
                                "answer": "No, I'm not sad.",
                                "questionKr": "슬프니?",
                                "answerKr": "아니, 안 슬퍼.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Let's eat lunch together.",
                                "answer": "Good idea! I'm hungry.",
                                "questionKr": "함께 점심 먹자.",
                                "answerKr": "좋은 생각이야! 배고파.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Take a rest if you are tired.",
                                "answer": "Thank you, I will rest.",
                                "questionKr": "피곤하면 좀 쉬어.",
                                "answerKr": "고마워, 좀 쉴게.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Is your little brother happy?",
                                "answer": "Yes, he is excited.",
                                "questionKr": "네 남동생은 기뻐하니?",
                                "answerKr": "응, 신났어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Cheer up! Don't be sad.",
                                "answer": "Thanks, I am happy now.",
                                "questionKr": "힘내! 슬퍼하지 마.",
                                "answerKr": "고마워, 이젠 기뻐.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Have a wonderful day!",
                                "answer": "You too, stay happy!",
                                "questionKr": "멋진 하루 보내!",
                                "answerKr": "너도, 항상 행복해!",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "How are you today?",
                                "answer": "I'm very sleepy today.",
                                "questionKr": "오늘 기분이 어떠니?",
                                "answerKr": "오늘은 너무 졸려.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 2,
                                "question": "Are you hungry?",
                                "answer": "Yes, I'm very hungry.",
                                "questionKr": "너 배고프니?",
                                "answerKr": "응, 정말 배고파.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Are you tired after running?",
                                "answer": "Yes, I'm tired and thirsty.",
                                "questionKr": "달리기 후에 피곤하니?",
                                "answerKr": "응, 피곤하고 목말라.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Why are you smiling?",
                                "answer": "Because I'm feeling great.",
                                "questionKr": "왜 웃고 있니?",
                                "answerKr": "기분이 아주 좋아서.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Are you sad?",
                                "answer": "Yes, I am a little sad.",
                                "questionKr": "슬프니?",
                                "answerKr": "응, 조금 슬퍼.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Let's eat lunch together.",
                                "answer": "Good idea! I'm hungry.",
                                "questionKr": "함께 점심 먹자.",
                                "answerKr": "좋은 생각이야! 배고파.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Take a rest if you are tired.",
                                "answer": "Thank you, I will rest.",
                                "questionKr": "피곤하면 좀 쉬어.",
                                "answerKr": "고마워, 좀 쉴게.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Is your little brother happy?",
                                "answer": "Yes, he is excited.",
                                "questionKr": "네 남동생은 기뻐하니?",
                                "answerKr": "응, 신났어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Cheer up! Don't be sad.",
                                "answer": "Thanks, I am happy now.",
                                "questionKr": "힘내! 슬퍼하지 마.",
                                "answerKr": "고마워, 이젠 기뻐.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Have a wonderful day!",
                                "answer": "You too, stay happy!",
                                "questionKr": "멋진 하루 보내!",
                                "answerKr": "너도, 항상 행복해!",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [행복한, 기쁜]",
                                "word": "happy",
                                "meaning": "행복한, 기쁜",
                                "hint": "h___",
                                "answer": "happy",
                                "options": [
                                        "hungry",
                                        "sad",
                                        "happy",
                                        "angry"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [슬픈]",
                                "word": "sad",
                                "meaning": "슬픈",
                                "hint": "s___",
                                "answer": "sad",
                                "options": [
                                        "happy",
                                        "hungry",
                                        "sad",
                                        "angry"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [화난]",
                                "word": "angry",
                                "meaning": "화난",
                                "hint": "a___",
                                "answer": "angry",
                                "options": [
                                        "sad",
                                        "angry",
                                        "hungry",
                                        "happy"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [배고픈]",
                                "word": "hungry",
                                "meaning": "배고픈",
                                "hint": "h___",
                                "answer": "hungry",
                                "options": [
                                        "angry",
                                        "hungry",
                                        "happy",
                                        "sad"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [목마른]",
                                "word": "thirsty",
                                "meaning": "목마른",
                                "hint": "t___",
                                "answer": "thirsty",
                                "options": [
                                        "happy",
                                        "angry",
                                        "thirsty",
                                        "sad"
                                ]
                        }
                ]
        },
        "3G_L09": {
                "id": "3G_L09",
                "grade": 3,
                "lesson": 9,
                "publisher": "YBM (최희경)",
                "name": "3학년 9단원",
                "title": "What Color Is It?",
                "shortDesc": "What Color Is It? (10문항)",
                "grammarPoint": "What color is it?",
                "words": [
                        {
                                "en": "color",
                                "kr": "색깔"
                        },
                        {
                                "en": "red",
                                "kr": "빨간색"
                        },
                        {
                                "en": "blue",
                                "kr": "파란색"
                        },
                        {
                                "en": "yellow",
                                "kr": "노란색"
                        },
                        {
                                "en": "green",
                                "kr": "초록색"
                        },
                        {
                                "en": "black",
                                "kr": "검은색"
                        },
                        {
                                "en": "white",
                                "kr": "흰색"
                        },
                        {
                                "en": "purple",
                                "kr": "보라색"
                        },
                        {
                                "en": "pink",
                                "kr": "분홍색"
                        },
                        {
                                "en": "orange",
                                "kr": "주황색"
                        },
                        {
                                "en": "sky",
                                "kr": "하늘"
                        },
                        {
                                "en": "bright",
                                "kr": "밝은"
                        }
                ],
                "sentences": [
                        {
                                "en": "What color is it?",
                                "kr": "그것은 무슨 색이니?"
                        },
                        {
                                "en": "It's red.",
                                "kr": "그것은 빨간색이야."
                        },
                        {
                                "en": "It's bright blue.",
                                "kr": "그것은 밝은 파란색이야."
                        },
                        {
                                "en": "What color is your bag?",
                                "kr": "네 가방은 무슨 색이니?"
                        },
                        {
                                "en": "It's green and yellow.",
                                "kr": "그것은 초록색과 노란색이야."
                        },
                        {
                                "en": "Look at the pink flower.",
                                "kr": "분홍색 꽃을 봐."
                        },
                        {
                                "en": "I like black and white.",
                                "kr": "나는 검은색과 흰색을 좋아해."
                        },
                        {
                                "en": "The sky is blue today.",
                                "kr": "오늘 하늘이 파래."
                        },
                        {
                                "en": "What color do you like?",
                                "kr": "너는 어떤 색을 좋아하니?"
                        },
                        {
                                "en": "I like purple best.",
                                "kr": "나는 보라색을 가장 좋아해."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "How's the weather today?",
                                "answer": "It's sunny and warm.",
                                "questionKr": "오늘 날씨가 어떠니?",
                                "answerKr": "맑고 따뜻해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Is it raining outside?",
                                "answer": "No, it's not. It's sunny.",
                                "questionKr": "밖에 비가 오니?",
                                "answerKr": "아니, 안 와. 맑아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Do you need an umbrella?",
                                "answer": "Yes, it's rainy today.",
                                "questionKr": "우산이 필요하니?",
                                "answerKr": "응, 오늘 비가 와.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "How's the weather in winter?",
                                "answer": "It's snowy and cold.",
                                "questionKr": "겨울 날씨는 어떠니?",
                                "answerKr": "눈이 오고 추워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Look at the sky. Is it cloudy?",
                                "answer": "Yes, it is very cloudy.",
                                "questionKr": "하늘을 봐. 흐리니?",
                                "answerKr": "응, 아주 흐려.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Can we play soccer outside?",
                                "answer": "Sure, it is a sunny day.",
                                "questionKr": "밖에서 축구할 수 있을까?",
                                "answerKr": "물론이지, 맑은 날이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is it windy today?",
                                "answer": "Yes, hold your hat tight.",
                                "questionKr": "오늘 바람이 많이 부니?",
                                "answerKr": "응, 모자를 꽉 잡아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you like snowy days?",
                                "answer": "Yes, I like making snowmen.",
                                "questionKr": "눈 오는 날을 좋아하니?",
                                "answerKr": "응, 눈사람 만드는 걸 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Put on your warm jacket.",
                                "answer": "Okay, it's freezing cold.",
                                "questionKr": "따뜻한 재킷을 입어.",
                                "answerKr": "응, 꽁꽁 얼 만큼 추워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What season is it now?",
                                "answer": "It is sunny spring.",
                                "questionKr": "지금 무슨 계절이니?",
                                "answerKr": "화창한 봄이야.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "How's the weather today?",
                                "answer": "It is rainy and stormy.",
                                "questionKr": "오늘 날씨가 어떠니?",
                                "answerKr": "비바람이 몰아쳐.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 2,
                                "question": "Is it raining outside?",
                                "answer": "No, it's not. It's sunny.",
                                "questionKr": "밖에 비가 오니?",
                                "answerKr": "아니, 안 와. 맑아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Do you need an umbrella?",
                                "answer": "Yes, it's rainy today.",
                                "questionKr": "우산이 필요하니?",
                                "answerKr": "응, 오늘 비가 와.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "How's the weather in winter?",
                                "answer": "It's snowy and cold.",
                                "questionKr": "겨울 날씨는 어떠니?",
                                "answerKr": "눈이 오고 추워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Look at the sky. Is it cloudy?",
                                "answer": "No, the sky is completely clear.",
                                "questionKr": "하늘을 봐. 흐리니?",
                                "answerKr": "아니, 하늘이 완전히 깨끗해.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Can we play soccer outside?",
                                "answer": "Sure, it is a sunny day.",
                                "questionKr": "밖에서 축구할 수 있을까?",
                                "answerKr": "물론이지, 맑은 날이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is it windy today?",
                                "answer": "Yes, hold your hat tight.",
                                "questionKr": "오늘 바람이 많이 부니?",
                                "answerKr": "응, 모자를 꽉 잡아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you like snowy days?",
                                "answer": "Yes, I like making snowmen.",
                                "questionKr": "눈 오는 날을 좋아하니?",
                                "answerKr": "응, 눈사람 만드는 걸 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Put on your warm jacket.",
                                "answer": "Okay, it's freezing cold.",
                                "questionKr": "따뜻한 재킷을 입어.",
                                "answerKr": "응, 꽁꽁 얼 만큼 추워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What season is it now?",
                                "answer": "It is sunny spring.",
                                "questionKr": "지금 무슨 계절이니?",
                                "answerKr": "화창한 봄이야.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [색깔]",
                                "word": "color",
                                "meaning": "색깔",
                                "hint": "c___",
                                "answer": "color",
                                "options": [
                                        "color",
                                        "red",
                                        "blue",
                                        "yellow"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [빨간색]",
                                "word": "red",
                                "meaning": "빨간색",
                                "hint": "r___",
                                "answer": "red",
                                "options": [
                                        "color",
                                        "red",
                                        "yellow",
                                        "blue"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [파란색]",
                                "word": "blue",
                                "meaning": "파란색",
                                "hint": "b___",
                                "answer": "blue",
                                "options": [
                                        "blue",
                                        "color",
                                        "yellow",
                                        "red"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [노란색]",
                                "word": "yellow",
                                "meaning": "노란색",
                                "hint": "y___",
                                "answer": "yellow",
                                "options": [
                                        "blue",
                                        "red",
                                        "color",
                                        "yellow"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [초록색]",
                                "word": "green",
                                "meaning": "초록색",
                                "hint": "g___",
                                "answer": "green",
                                "options": [
                                        "green",
                                        "red",
                                        "color",
                                        "blue"
                                ]
                        }
                ]
        },
        "3G_L10": {
                "id": "3G_L10",
                "grade": 3,
                "lesson": 10,
                "publisher": "YBM (최희경)",
                "name": "3학년 10단원",
                "title": "How's the Weather?",
                "shortDesc": "How's the Weather? (10문항)",
                "grammarPoint": "How's the weather today?",
                "words": [
                        {
                                "en": "weather",
                                "kr": "날씨"
                        },
                        {
                                "en": "sunny",
                                "kr": "맑은"
                        },
                        {
                                "en": "rainy",
                                "kr": "비 오는"
                        },
                        {
                                "en": "cloudy",
                                "kr": "흐린"
                        },
                        {
                                "en": "snowy",
                                "kr": "눈 오는"
                        },
                        {
                                "en": "windy",
                                "kr": "바람 부는"
                        },
                        {
                                "en": "cold",
                                "kr": "추운"
                        },
                        {
                                "en": "warm",
                                "kr": "따뜻한"
                        },
                        {
                                "en": "hot",
                                "kr": "더운"
                        },
                        {
                                "en": "outside",
                                "kr": "밖에, 야외에"
                        },
                        {
                                "en": "umbrella",
                                "kr": "우산"
                        },
                        {
                                "en": "today",
                                "kr": "오늘"
                        }
                ],
                "sentences": [
                        {
                                "en": "How's the weather today?",
                                "kr": "오늘 날씨가 어떠니?"
                        },
                        {
                                "en": "It's sunny.",
                                "kr": "날씨가 맑아."
                        },
                        {
                                "en": "It's rainy today.",
                                "kr": "오늘 비가 와."
                        },
                        {
                                "en": "Take an umbrella with you.",
                                "kr": "우산을 챙겨 가렴."
                        },
                        {
                                "en": "It's cloudy and windy.",
                                "kr": "날씨가 흐리고 바람이 불어."
                        },
                        {
                                "en": "It's cold outside.",
                                "kr": "밖이 추워."
                        },
                        {
                                "en": "Put on your warm coat.",
                                "kr": "따뜻한 외투를 입어."
                        },
                        {
                                "en": "It's snowy! Let's make a snowman.",
                                "kr": "눈이 와! 눈사람을 만들자."
                        },
                        {
                                "en": "The weather is warm and nice.",
                                "kr": "날씨가 따뜻하고 좋아."
                        },
                        {
                                "en": "Let's go outside and play.",
                                "kr": "밖에 나가서 놀자."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "How's the weather today?",
                                "answer": "It's sunny and warm.",
                                "questionKr": "오늘 날씨가 어떠니?",
                                "answerKr": "맑고 따뜻해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Is it raining outside?",
                                "answer": "No, it's not. It's sunny.",
                                "questionKr": "밖에 비가 오니?",
                                "answerKr": "아니, 안 와. 맑아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Do you need an umbrella?",
                                "answer": "Yes, it's rainy today.",
                                "questionKr": "우산이 필요하니?",
                                "answerKr": "응, 오늘 비가 와.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "How's the weather in winter?",
                                "answer": "It's snowy and cold.",
                                "questionKr": "겨울 날씨는 어떠니?",
                                "answerKr": "눈이 오고 추워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Look at the sky. Is it cloudy?",
                                "answer": "Yes, it is very cloudy.",
                                "questionKr": "하늘을 봐. 흐리니?",
                                "answerKr": "응, 아주 흐려.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Can we play soccer outside?",
                                "answer": "Sure, it is a sunny day.",
                                "questionKr": "밖에서 축구할 수 있을까?",
                                "answerKr": "물론이지, 맑은 날이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is it windy today?",
                                "answer": "Yes, hold your hat tight.",
                                "questionKr": "오늘 바람이 많이 부니?",
                                "answerKr": "응, 모자를 꽉 잡아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you like snowy days?",
                                "answer": "Yes, I like making snowmen.",
                                "questionKr": "눈 오는 날을 좋아하니?",
                                "answerKr": "응, 눈사람 만드는 걸 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Put on your warm jacket.",
                                "answer": "Okay, it's freezing cold.",
                                "questionKr": "따뜻한 재킷을 입어.",
                                "answerKr": "응, 꽁꽁 얼 만큼 추워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What season is it now?",
                                "answer": "It is sunny spring.",
                                "questionKr": "지금 무슨 계절이니?",
                                "answerKr": "화창한 봄이야.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "How's the weather today?",
                                "answer": "It is rainy and stormy.",
                                "questionKr": "오늘 날씨가 어떠니?",
                                "answerKr": "비바람이 몰아쳐.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 2,
                                "question": "Is it raining outside?",
                                "answer": "No, it's not. It's sunny.",
                                "questionKr": "밖에 비가 오니?",
                                "answerKr": "아니, 안 와. 맑아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Do you need an umbrella?",
                                "answer": "Yes, it's rainy today.",
                                "questionKr": "우산이 필요하니?",
                                "answerKr": "응, 오늘 비가 와.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "How's the weather in winter?",
                                "answer": "It's snowy and cold.",
                                "questionKr": "겨울 날씨는 어떠니?",
                                "answerKr": "눈이 오고 추워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Look at the sky. Is it cloudy?",
                                "answer": "No, the sky is completely clear.",
                                "questionKr": "하늘을 봐. 흐리니?",
                                "answerKr": "아니, 하늘이 완전히 깨끗해.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Can we play soccer outside?",
                                "answer": "Sure, it is a sunny day.",
                                "questionKr": "밖에서 축구할 수 있을까?",
                                "answerKr": "물론이지, 맑은 날이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is it windy today?",
                                "answer": "Yes, hold your hat tight.",
                                "questionKr": "오늘 바람이 많이 부니?",
                                "answerKr": "응, 모자를 꽉 잡아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you like snowy days?",
                                "answer": "Yes, I like making snowmen.",
                                "questionKr": "눈 오는 날을 좋아하니?",
                                "answerKr": "응, 눈사람 만드는 걸 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Put on your warm jacket.",
                                "answer": "Okay, it's freezing cold.",
                                "questionKr": "따뜻한 재킷을 입어.",
                                "answerKr": "응, 꽁꽁 얼 만큼 추워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What season is it now?",
                                "answer": "It is sunny spring.",
                                "questionKr": "지금 무슨 계절이니?",
                                "answerKr": "화창한 봄이야.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [날씨]",
                                "word": "weather",
                                "meaning": "날씨",
                                "hint": "w___",
                                "answer": "weather",
                                "options": [
                                        "sunny",
                                        "weather",
                                        "rainy",
                                        "cloudy"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [맑은]",
                                "word": "sunny",
                                "meaning": "맑은",
                                "hint": "s___",
                                "answer": "sunny",
                                "options": [
                                        "rainy",
                                        "cloudy",
                                        "weather",
                                        "sunny"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [비 오는]",
                                "word": "rainy",
                                "meaning": "비 오는",
                                "hint": "r___",
                                "answer": "rainy",
                                "options": [
                                        "cloudy",
                                        "rainy",
                                        "sunny",
                                        "weather"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [흐린]",
                                "word": "cloudy",
                                "meaning": "흐린",
                                "hint": "c___",
                                "answer": "cloudy",
                                "options": [
                                        "rainy",
                                        "weather",
                                        "cloudy",
                                        "sunny"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [눈 오는]",
                                "word": "snowy",
                                "meaning": "눈 오는",
                                "hint": "s___",
                                "answer": "snowy",
                                "options": [
                                        "snowy",
                                        "weather",
                                        "sunny",
                                        "rainy"
                                ]
                        }
                ]
        },
        "4G_L01": {
                "id": "4G_L01",
                "grade": 4,
                "lesson": 1,
                "publisher": "YBM (최희경)",
                "name": "4학년 1단원",
                "title": "How Are You?",
                "shortDesc": "How Are You? (10문항)",
                "grammarPoint": "Good morning!",
                "words": [
                        {
                                "en": "morning",
                                "kr": "아침"
                        },
                        {
                                "en": "afternoon",
                                "kr": "오후"
                        },
                        {
                                "en": "evening",
                                "kr": "저녁"
                        },
                        {
                                "en": "fine",
                                "kr": "좋은, 건강한"
                        },
                        {
                                "en": "great",
                                "kr": "아주 좋은"
                        },
                        {
                                "en": "bad",
                                "kr": "나쁜"
                        },
                        {
                                "en": "not",
                                "kr": "아닌"
                        },
                        {
                                "en": "today",
                                "kr": "오늘"
                        },
                        {
                                "en": "meet",
                                "kr": "만나다"
                        },
                        {
                                "en": "friend",
                                "kr": "친구"
                        },
                        {
                                "en": "day",
                                "kr": "날, 하루"
                        },
                        {
                                "en": "early",
                                "kr": "이른, 일찍"
                        }
                ],
                "sentences": [
                        {
                                "en": "Good morning!",
                                "kr": "좋은 아침이야!"
                        },
                        {
                                "en": "How are you today?",
                                "kr": "오늘 어떻게 지내니?"
                        },
                        {
                                "en": "I'm very good, thank you.",
                                "kr": "아주 잘 지내, 고마워."
                        },
                        {
                                "en": "Not so good. I have a headache.",
                                "kr": "그리 좋지 않아. 머리가 아파."
                        },
                        {
                                "en": "Good afternoon, class.",
                                "kr": "좋은 오후입니다, 여러분."
                        },
                        {
                                "en": "How is everything with you?",
                                "kr": "요즘 모든 일은 어떠니?"
                        },
                        {
                                "en": "Everything is great!",
                                "kr": "다 아주 좋아!"
                        },
                        {
                                "en": "Cheer up! Tomorrow will be better.",
                                "kr": "힘내! 내일은 더 좋을 거야."
                        },
                        {
                                "en": "Have a wonderful day!",
                                "kr": "멋진 하루 보내!"
                        },
                        {
                                "en": "See you later this afternoon.",
                                "kr": "오늘 오후에 나중에 봐."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Good morning, Minsoo! How are you?",
                                "answer": "I'm great, thank you. And you?",
                                "questionKr": "좋은 아침, 민수야! 기분 어때?",
                                "answerKr": "아주 좋아, 고마워. 너는?",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "How are you feeling this afternoon?",
                                "answer": "I'm a little tired, but I'm okay.",
                                "questionKr": "오늘 오후 기분 어때?",
                                "answerKr": "조금 피곤하지만 괜찮아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Why do you look so happy today?",
                                "answer": "Because today is my birthday!",
                                "questionKr": "오늘 왜 그렇게 행복해 보여?",
                                "answerKr": "오늘이 내 생일이기 때문이야!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Are you sick today?",
                                "answer": "No, I'm fine. Just hungry.",
                                "questionKr": "오늘 어디 아프니?",
                                "answerKr": "아니, 괜찮아. 그냥 배고플 뿐이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "How was your morning class?",
                                "answer": "It was really fun and exciting.",
                                "questionKr": "아침 수업 어땠니?",
                                "answerKr": "정말 재미있고 신났어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "You have a big smile! How's everything?",
                                "answer": "Not bad, everything is going well.",
                                "questionKr": "활짝 웃고 있네! 다 잘 돼가니?",
                                "answerKr": "나쁘지 않아, 다 잘 되고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Why does Sarah look so sad?",
                                "answer": "She lost her favorite pencil.",
                                "questionKr": "사라는 왜 그렇게 슬퍼 보여?",
                                "answerKr": "가장 아끼는 연필을 잃어버렸대.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Good afternoon, teacher! How are you?",
                                "answer": "I am very good today, thank you.",
                                "questionKr": "좋은 오후입니다, 선생님! 기분 어떠세요?",
                                "answerKr": "오늘 아주 좋단다, 고맙구나.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Are you ready for the sports day?",
                                "answer": "Yes, I am full of energy!",
                                "questionKr": "운동회 준비됐니?",
                                "answerKr": "응, 에너지가 넘쳐!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Have a wonderful day, friend!",
                                "answer": "You too! See you tomorrow.",
                                "questionKr": "좋은 하루 보내, 친구야!",
                                "answerKr": "너도! 내일 또 보자.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Good morning, Minsoo! How are you?",
                                "answer": "I'm great, thank you. And you?",
                                "questionKr": "좋은 아침, 민수야! 기분 어때?",
                                "answerKr": "아주 좋아, 고마워. 너는?",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "How are you feeling this afternoon?",
                                "answer": "I'm extremely furious and mad.",
                                "questionKr": "오늘 오후 기분 어때?",
                                "answerKr": "나 엄청 화나고 격노했어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Why do you look so happy today?",
                                "answer": "Because today is my birthday!",
                                "questionKr": "오늘 왜 그렇게 행복해 보여?",
                                "answerKr": "오늘이 내 생일이기 때문이야!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Are you sick today?",
                                "answer": "No, I'm fine. Just hungry.",
                                "questionKr": "오늘 어디 아프니?",
                                "answerKr": "아니, 괜찮아. 그냥 배고플 뿐이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "How was your morning class?",
                                "answer": "It was the most boring day ever.",
                                "questionKr": "아침 수업 어땠니?",
                                "answerKr": "역대 가장 지루한 수업이었어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "You have a big smile! How's everything?",
                                "answer": "Not bad, everything is going well.",
                                "questionKr": "활짝 웃고 있네! 다 잘 돼가니?",
                                "answerKr": "나쁘지 않아, 다 잘 되고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Why does Sarah look so sad?",
                                "answer": "She lost her favorite pencil.",
                                "questionKr": "사라는 왜 그렇게 슬퍼 보여?",
                                "answerKr": "가장 아끼는 연필을 잃어버렸대.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Good afternoon, teacher! How are you?",
                                "answer": "I am very good today, thank you.",
                                "questionKr": "좋은 오후입니다, 선생님! 기분 어떠세요?",
                                "answerKr": "오늘 아주 좋단다, 고맙구나.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Are you ready for the sports day?",
                                "answer": "Yes, I am full of energy!",
                                "questionKr": "운동회 준비됐니?",
                                "answerKr": "응, 에너지가 넘쳐!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Have a wonderful day, friend!",
                                "answer": "You too! See you tomorrow.",
                                "questionKr": "좋은 하루 보내, 친구야!",
                                "answerKr": "너도! 내일 또 보자.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [아침]",
                                "word": "morning",
                                "meaning": "아침",
                                "hint": "m___",
                                "answer": "morning",
                                "options": [
                                        "morning",
                                        "afternoon",
                                        "evening",
                                        "fine"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [오후]",
                                "word": "afternoon",
                                "meaning": "오후",
                                "hint": "a___",
                                "answer": "afternoon",
                                "options": [
                                        "evening",
                                        "fine",
                                        "afternoon",
                                        "morning"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [저녁]",
                                "word": "evening",
                                "meaning": "저녁",
                                "hint": "e___",
                                "answer": "evening",
                                "options": [
                                        "evening",
                                        "morning",
                                        "afternoon",
                                        "fine"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [좋은, 건강한]",
                                "word": "fine",
                                "meaning": "좋은, 건강한",
                                "hint": "f___",
                                "answer": "fine",
                                "options": [
                                        "fine",
                                        "evening",
                                        "morning",
                                        "afternoon"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [아주 좋은]",
                                "word": "great",
                                "meaning": "아주 좋은",
                                "hint": "g___",
                                "answer": "great",
                                "options": [
                                        "afternoon",
                                        "great",
                                        "morning",
                                        "evening"
                                ]
                        }
                ]
        },
        "4G_L02": {
                "id": "4G_L02",
                "grade": 4,
                "lesson": 2,
                "publisher": "YBM (최희경)",
                "name": "4학년 2단원",
                "title": "Who's She?",
                "shortDesc": "Who's She? (10문항)",
                "grammarPoint": "Who's she?",
                "words": [
                        {
                                "en": "who",
                                "kr": "누구"
                        },
                        {
                                "en": "she",
                                "kr": "그녀"
                        },
                        {
                                "en": "he",
                                "kr": "그"
                        },
                        {
                                "en": "brother",
                                "kr": "남자 형제"
                        },
                        {
                                "en": "sister",
                                "kr": "여자 형제"
                        },
                        {
                                "en": "father",
                                "kr": "아버지"
                        },
                        {
                                "en": "mother",
                                "kr": "어머니"
                        },
                        {
                                "en": "baby",
                                "kr": "아기"
                        },
                        {
                                "en": "teacher",
                                "kr": "선생님"
                        },
                        {
                                "en": "student",
                                "kr": "학생"
                        },
                        {
                                "en": "doctor",
                                "kr": "의사"
                        },
                        {
                                "en": "family",
                                "kr": "가족"
                        }
                ],
                "sentences": [
                        {
                                "en": "Who's she?",
                                "kr": "그녀는 누구니?"
                        },
                        {
                                "en": "She's my sister, Amy.",
                                "kr": "그녀는 내 여동생 에이미야."
                        },
                        {
                                "en": "Who's he?",
                                "kr": "그는 누구니?"
                        },
                        {
                                "en": "He's my brother, Minsoo.",
                                "kr": "그는 내 남동생 민수야."
                        },
                        {
                                "en": "Is he your father?",
                                "kr": "그분은 너의 아버지시니?"
                        },
                        {
                                "en": "Yes, he is.",
                                "kr": "응, 맞아."
                        },
                        {
                                "en": "Is she a teacher?",
                                "kr": "그녀는 선생님이니?"
                        },
                        {
                                "en": "Yes, she is an English teacher.",
                                "kr": "응, 영어 선생님이셔."
                        },
                        {
                                "en": "Look at this baby photo.",
                                "kr": "이 아기 사진을 봐."
                        },
                        {
                                "en": "We are a happy family.",
                                "kr": "우리는 행복한 가족이야."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Who is that pretty girl over there?",
                                "answer": "She is my younger sister, Sujin.",
                                "questionKr": "저기 있는 저 예쁜 소녀는 누구니?",
                                "answerKr": "내 여동생 수진이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Who is that tall man with glasses?",
                                "answer": "He is my father.",
                                "questionKr": "안경 쓴 저 키 큰 남자는 누구니?",
                                "answerKr": "우리 아버지셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Who is the lady in the blue dress?",
                                "answer": "She is our kind English teacher.",
                                "questionKr": "파란 드레스를 입은 저 분은 누구시니?",
                                "answerKr": "우리 친절한 영어 선생님이셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Is that boy your older brother?",
                                "answer": "Yes, he is in middle school.",
                                "questionKr": "저 남자아이가 네 오빠니?",
                                "answerKr": "응, 중학교에 다녀.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Who is sitting next to your grandfather?",
                                "answer": "She is my grandmother.",
                                "questionKr": "할아버지 옆에 앉아 계신 분은 누구시니?",
                                "answerKr": "우리 할머니셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Who is that boy playing soccer?",
                                "answer": "He is my cousin from Busan.",
                                "questionKr": "축구하고 있는 저 남자아이는 누구니?",
                                "answerKr": "부산에서 온 내 사촌이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is she your best friend?",
                                "answer": "Yes, she is my classmate and friend.",
                                "questionKr": "그녀가 네 가장 친한 친구니?",
                                "answerKr": "응, 내 반 친구이자 단짝이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Who made this delicious cake?",
                                "answer": "My mother baked it for us.",
                                "questionKr": "이 맛있는 케이크는 누가 만드셨니?",
                                "answerKr": "우리 어머니께서 구워주셨어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Who is the new student in our class?",
                                "answer": "His name is Eric, from America.",
                                "questionKr": "우리 반 새 학생은 누구니?",
                                "answerKr": "미국에서 온 에릭이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you have a big family?",
                                "answer": "Yes, I live with my grandparents.",
                                "questionKr": "대가족이니?",
                                "answerKr": "응, 조부모님과 함께 살아.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Who is that pretty girl over there?",
                                "answer": "She is my younger sister, Sujin.",
                                "questionKr": "저기 있는 저 예쁜 소녀는 누구니?",
                                "answerKr": "내 여동생 수진이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Who is that tall man with glasses?",
                                "answer": "He is a stranger from Mars.",
                                "questionKr": "안경 쓴 저 키 큰 남자는 누구니?",
                                "answerKr": "화성에서 온 낯선 사람이야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Who is the lady in the blue dress?",
                                "answer": "She is our kind English teacher.",
                                "questionKr": "파란 드레스를 입은 저 분은 누구시니?",
                                "answerKr": "우리 친절한 영어 선생님이셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Is that boy your older brother?",
                                "answer": "Yes, he is in middle school.",
                                "questionKr": "저 남자아이가 네 오빠니?",
                                "answerKr": "응, 중학교에 다녀.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Who is sitting next to your grandfather?",
                                "answer": "She is my grandmother.",
                                "questionKr": "할아버지 옆에 앉아 계신 분은 누구시니?",
                                "answerKr": "우리 할머니셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Who is that boy playing soccer?",
                                "answer": "He is my cousin from Busan.",
                                "questionKr": "축구하고 있는 저 남자아이는 누구니?",
                                "answerKr": "부산에서 온 내 사촌이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is she your best friend?",
                                "answer": "No, I don't know her at all.",
                                "questionKr": "그녀가 네 가장 친한 친구니?",
                                "answerKr": "아니, 난 쟤 전혀 몰라.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 8,
                                "question": "Who made this delicious cake?",
                                "answer": "My mother baked it for us.",
                                "questionKr": "이 맛있는 케이크는 누가 만드셨니?",
                                "answerKr": "우리 어머니께서 구워주셨어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Who is the new student in our class?",
                                "answer": "His name is Eric, from America.",
                                "questionKr": "우리 반 새 학생은 누구니?",
                                "answerKr": "미국에서 온 에릭이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you have a big family?",
                                "answer": "Yes, I live with my grandparents.",
                                "questionKr": "대가족이니?",
                                "answerKr": "응, 조부모님과 함께 살아.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [누구]",
                                "word": "who",
                                "meaning": "누구",
                                "hint": "w___",
                                "answer": "who",
                                "options": [
                                        "he",
                                        "brother",
                                        "she",
                                        "who"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [그녀]",
                                "word": "she",
                                "meaning": "그녀",
                                "hint": "s___",
                                "answer": "she",
                                "options": [
                                        "she",
                                        "he",
                                        "brother",
                                        "who"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [그]",
                                "word": "he",
                                "meaning": "그",
                                "hint": "h___",
                                "answer": "he",
                                "options": [
                                        "she",
                                        "he",
                                        "brother",
                                        "who"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [남자 형제]",
                                "word": "brother",
                                "meaning": "남자 형제",
                                "hint": "b___",
                                "answer": "brother",
                                "options": [
                                        "she",
                                        "brother",
                                        "he",
                                        "who"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [여자 형제]",
                                "word": "sister",
                                "meaning": "여자 형제",
                                "hint": "s___",
                                "answer": "sister",
                                "options": [
                                        "he",
                                        "sister",
                                        "she",
                                        "who"
                                ]
                        }
                ]
        },
        "4G_L03": {
                "id": "4G_L03",
                "grade": 4,
                "lesson": 3,
                "publisher": "YBM (최희경)",
                "name": "4학년 3단원",
                "title": "What Time Is It?",
                "shortDesc": "What Time Is It? (10문항)",
                "grammarPoint": "What time is it now?",
                "words": [
                        {
                                "en": "time",
                                "kr": "시간, 시각"
                        },
                        {
                                "en": "o'clock",
                                "kr": "정각, ~시"
                        },
                        {
                                "en": "breakfast",
                                "kr": "아침 식사"
                        },
                        {
                                "en": "lunch",
                                "kr": "점심 식사"
                        },
                        {
                                "en": "dinner",
                                "kr": "저녁 식사"
                        },
                        {
                                "en": "school",
                                "kr": "학교"
                        },
                        {
                                "en": "bed",
                                "kr": "침대, 잠자리"
                        },
                        {
                                "en": "hurry",
                                "kr": "서두르다"
                        },
                        {
                                "en": "late",
                                "kr": "늦은"
                        },
                        {
                                "en": "now",
                                "kr": "지금"
                        },
                        {
                                "en": "early",
                                "kr": "일찍"
                        },
                        {
                                "en": "watch",
                                "kr": "손목시계"
                        }
                ],
                "sentences": [
                        {
                                "en": "What time is it now?",
                                "kr": "지금 몇 시니?"
                        },
                        {
                                "en": "It's eight o'clock.",
                                "kr": "8시 정각이야."
                        },
                        {
                                "en": "It's time for school.",
                                "kr": "학교 갈 시간이야."
                        },
                        {
                                "en": "Hurry up, we are late!",
                                "kr": "서둘러, 우리 늦겠어!"
                        },
                        {
                                "en": "It's twelve o'clock.",
                                "kr": "12시 정각이야."
                        },
                        {
                                "en": "It's time for lunch.",
                                "kr": "점심 먹을 시간이야."
                        },
                        {
                                "en": "Let's eat delicious food.",
                                "kr": "맛있는 음식을 먹자."
                        },
                        {
                                "en": "What time do you have dinner?",
                                "kr": "몇 시에 저녁을 먹니?"
                        },
                        {
                                "en": "It's nine o'clock. Time for bed.",
                                "kr": "9시야. 자러 갈 시간이야."
                        },
                        {
                                "en": "Good night, sweet dreams!",
                                "kr": "잘 자, 좋은 꿈 꿔!"
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Excuse me, what time is it now?",
                                "answer": "It is exactly nine o'clock.",
                                "questionKr": "실례지만, 지금 몇 시인가요?",
                                "answerKr": "정확히 9시 정각이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Is it time for lunch?",
                                "answer": "Yes, it's twelve o'clock. Let's eat!",
                                "questionKr": "점심 먹을 시간인가요?",
                                "answerKr": "응, 12시야. 밥 먹자!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What time do you wake up?",
                                "answer": "I wake up at seven o'clock.",
                                "questionKr": "몇 시에 일어나니?",
                                "answerKr": "난 7시에 일어나.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Hurry up! What time does school start?",
                                "answer": "It starts at nine. We are not late.",
                                "questionKr": "서둘러! 학교 몇 시에 시작해?",
                                "answerKr": "9시에 시작해. 늦지 않았어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What time do you eat dinner?",
                                "answer": "My family eats dinner at six thirty.",
                                "questionKr": "저녁은 몇 시에 먹니?",
                                "answerKr": "우리 가족은 6시 30분에 저녁을 먹어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "It's ten o'clock at night. What time is it for?",
                                "answer": "It's time for bed. Good night!",
                                "questionKr": "밤 10시야. 무슨 시간이지?",
                                "answerKr": "잘 시간이야. 잘 자렴!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "What time does our English club start?",
                                "answer": "It starts at three o'clock.",
                                "questionKr": "영어 동아리는 몇 시에 시작하니?",
                                "answerKr": "3시 정각에 시작해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you wear a wristwatch?",
                                "answer": "Yes, my watch is very accurate.",
                                "questionKr": "손목시계 차고 다니니?",
                                "answerKr": "응, 내 시계는 아주 정확해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Is it time for PE class?",
                                "answer": "Yes, let's go to the playground.",
                                "questionKr": "체육 시간인가요?",
                                "answerKr": "응, 운동장으로 나가자.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What time do you do homework?",
                                "answer": "I do my homework at five o'clock.",
                                "questionKr": "몇 시에 숙제를 하니?",
                                "answerKr": "난 5시에 숙제를 해.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Excuse me, what time is it now?",
                                "answer": "It is exactly nine o'clock.",
                                "questionKr": "실례지만, 지금 몇 시인가요?",
                                "answerKr": "정확히 9시 정각이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Is it time for lunch?",
                                "answer": "No, it's midnight. Don't eat.",
                                "questionKr": "점심 먹을 시간인가요?",
                                "answerKr": "아니, 한밤중이야. 밥 먹지 마.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "What time do you wake up?",
                                "answer": "I wake up at seven o'clock.",
                                "questionKr": "몇 시에 일어나니?",
                                "answerKr": "난 7시에 일어나.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Hurry up! What time does school start?",
                                "answer": "It starts at nine. We are not late.",
                                "questionKr": "서둘러! 학교 몇 시에 시작해?",
                                "answerKr": "9시에 시작해. 늦지 않았어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What time do you eat dinner?",
                                "answer": "My family eats dinner at six thirty.",
                                "questionKr": "저녁은 몇 시에 먹니?",
                                "answerKr": "우리 가족은 6시 30분에 저녁을 먹어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "It's ten o'clock at night. What time is it for?",
                                "answer": "It's time to dance and shout!",
                                "questionKr": "밤 10시야. 무슨 시간이지?",
                                "answerKr": "춤추고 소리 지를 시간이야!",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 7,
                                "question": "What time does our English club start?",
                                "answer": "It starts at three o'clock.",
                                "questionKr": "영어 동아리는 몇 시에 시작하니?",
                                "answerKr": "3시 정각에 시작해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you wear a wristwatch?",
                                "answer": "Yes, my watch is very accurate.",
                                "questionKr": "손목시계 차고 다니니?",
                                "answerKr": "응, 내 시계는 아주 정확해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Is it time for PE class?",
                                "answer": "Yes, let's go to the playground.",
                                "questionKr": "체육 시간인가요?",
                                "answerKr": "응, 운동장으로 나가자.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What time do you do homework?",
                                "answer": "I do my homework at five o'clock.",
                                "questionKr": "몇 시에 숙제를 하니?",
                                "answerKr": "난 5시에 숙제를 해.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [시간, 시각]",
                                "word": "time",
                                "meaning": "시간, 시각",
                                "hint": "t___",
                                "answer": "time",
                                "options": [
                                        "breakfast",
                                        "o'clock",
                                        "lunch",
                                        "time"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [정각, ~시]",
                                "word": "o'clock",
                                "meaning": "정각, ~시",
                                "hint": "o___",
                                "answer": "o'clock",
                                "options": [
                                        "time",
                                        "breakfast",
                                        "o'clock",
                                        "lunch"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [아침 식사]",
                                "word": "breakfast",
                                "meaning": "아침 식사",
                                "hint": "b___",
                                "answer": "breakfast",
                                "options": [
                                        "time",
                                        "lunch",
                                        "breakfast",
                                        "o'clock"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [점심 식사]",
                                "word": "lunch",
                                "meaning": "점심 식사",
                                "hint": "l___",
                                "answer": "lunch",
                                "options": [
                                        "time",
                                        "o'clock",
                                        "lunch",
                                        "breakfast"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [저녁 식사]",
                                "word": "dinner",
                                "meaning": "저녁 식사",
                                "hint": "d___",
                                "answer": "dinner",
                                "options": [
                                        "o'clock",
                                        "breakfast",
                                        "time",
                                        "dinner"
                                ]
                        }
                ]
        },
        "4G_L04": {
                "id": "4G_L04",
                "grade": 4,
                "lesson": 4,
                "publisher": "YBM (최희경)",
                "name": "4학년 4단원",
                "title": "Let's Play Soccer",
                "shortDesc": "Let's Play Soccer (10문항)",
                "grammarPoint": "Let's play soccer after school.",
                "words": [
                        {
                                "en": "play",
                                "kr": "놀다, 경기를 하다"
                        },
                        {
                                "en": "soccer",
                                "kr": "축구"
                        },
                        {
                                "en": "baseball",
                                "kr": "야구"
                        },
                        {
                                "en": "basketball",
                                "kr": "농구"
                        },
                        {
                                "en": "badminton",
                                "kr": "배드민턴"
                        },
                        {
                                "en": "dodgeball",
                                "kr": "피구"
                        },
                        {
                                "en": "sounds",
                                "kr": "~하게 들리다"
                        },
                        {
                                "en": "good",
                                "kr": "좋은"
                        },
                        {
                                "en": "sorry",
                                "kr": "미안한"
                        },
                        {
                                "en": "busy",
                                "kr": "바쁜"
                        },
                        {
                                "en": "team",
                                "kr": "팀"
                        },
                        {
                                "en": "sport",
                                "kr": "운동, 스포츠"
                        }
                ],
                "sentences": [
                        {
                                "en": "Let's play soccer after school.",
                                "kr": "방과 후에 축구 하자."
                        },
                        {
                                "en": "Sounds good!",
                                "kr": "좋은 생각이야!"
                        },
                        {
                                "en": "Sorry, I can't play today.",
                                "kr": "미안하지만 오늘은 못 해."
                        },
                        {
                                "en": "Why not? Are you busy?",
                                "kr": "왜 안 돼? 바쁘니?"
                        },
                        {
                                "en": "Yes, I have homework to do.",
                                "kr": "응, 해야 할 숙제가 있어."
                        },
                        {
                                "en": "Let's play basketball together.",
                                "kr": "농구 함께 하자."
                        },
                        {
                                "en": "Sure, let's meet at the gym.",
                                "kr": "좋아, 체육관에서 만나자."
                        },
                        {
                                "en": "Do you like playing badminton?",
                                "kr": "너는 배드민턴 치는 것을 좋아하니?"
                        },
                        {
                                "en": "Yes, I play badminton with my dad.",
                                "kr": "응, 나는 아빠와 배드민턴을 쳐."
                        },
                        {
                                "en": "That sounds like fun!",
                                "kr": "정말 재미있겠다!"
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Let's play soccer on the playground!",
                                "answer": "Sounds great! I love soccer.",
                                "questionKr": "운동장에서 축구하자!",
                                "answerKr": "좋아! 난 축구를 정말 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Let's play badminton this afternoon.",
                                "answer": "Sorry, I can't. I have piano class.",
                                "questionKr": "오늘 오후에 배드민턴 치자.",
                                "answerKr": "미안해, 안 돼. 피아노 학원 가야 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Do you want to play basketball?",
                                "answer": "Yes, let's shoot some hoops!",
                                "questionKr": "농구할래?",
                                "answerKr": "응, 슛 연습하러 가자!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Let's play baseball after school.",
                                "answer": "Sounds fun! I will bring my glove.",
                                "questionKr": "방과 후에 야구하자.",
                                "answerKr": "재미있겠다! 내 글러브 가져올게.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Let's ride our bicycles in the park.",
                                "answer": "Great idea! The weather is nice.",
                                "questionKr": "공원에서 자전거 타자.",
                                "answerKr": "좋은 생각이야! 날씨가 좋네.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Can you join our soccer team?",
                                "answer": "Yes, I will be the goalkeeper.",
                                "questionKr": "우리 축구팀에 들어올래?",
                                "answerKr": "응, 내가 골키퍼 할게.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Let's practice jump rope together.",
                                "answer": "Sure, I want to learn double jumps.",
                                "questionKr": "줄넘기 연습 같이 하자.",
                                "answerKr": "물론이지, 이단뛰기 배우고 싶어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Let's play tennis this weekend.",
                                "answer": "Sorry, I am busy with family trip.",
                                "questionKr": "이번 주말에 테니스 치자.",
                                "answerKr": "미안, 가족 여행 때문에 바빠.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What sport do you like most?",
                                "answer": "My favorite sport is basketball.",
                                "questionKr": "어떤 운동을 제일 좋아하니?",
                                "answerKr": "내가 제일 좋아하는 건 농구야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Let's run together on the track!",
                                "answer": "Okay, let's have a friendly race.",
                                "questionKr": "트랙에서 같이 달리자!",
                                "answerKr": "좋아, 가볍게 경주해보자.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Let's play soccer on the playground!",
                                "answer": "Sounds great! I love soccer.",
                                "questionKr": "운동장에서 축구하자!",
                                "answerKr": "좋아! 난 축구를 정말 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Let's play badminton this afternoon.",
                                "answer": "Sorry, I can't. I have piano class.",
                                "questionKr": "오늘 오후에 배드민턴 치자.",
                                "answerKr": "미안해, 안 돼. 피아노 학원 가야 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Do you want to play basketball?",
                                "answer": "I hate touching balls.",
                                "questionKr": "농구할래?",
                                "answerKr": "난 공 만지는 거 딱 질색이야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 4,
                                "question": "Let's play baseball after school.",
                                "answer": "Sounds fun! I will bring my glove.",
                                "questionKr": "방과 후에 야구하자.",
                                "answerKr": "재미있겠다! 내 글러브 가져올게.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Let's ride our bicycles in the park.",
                                "answer": "Great idea! The weather is nice.",
                                "questionKr": "공원에서 자전거 타자.",
                                "answerKr": "좋은 생각이야! 날씨가 좋네.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Can you join our soccer team?",
                                "answer": "Yes, I will be the goalkeeper.",
                                "questionKr": "우리 축구팀에 들어올래?",
                                "answerKr": "응, 내가 골키퍼 할게.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Let's practice jump rope together.",
                                "answer": "No, I destroyed all jump ropes.",
                                "questionKr": "줄넘기 연습 같이 하자.",
                                "answerKr": "아니, 줄넘기 다 망가뜨렸어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 8,
                                "question": "Let's play tennis this weekend.",
                                "answer": "Sorry, I am busy with family trip.",
                                "questionKr": "이번 주말에 테니스 치자.",
                                "answerKr": "미안, 가족 여행 때문에 바빠.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What sport do you like most?",
                                "answer": "My favorite sport is basketball.",
                                "questionKr": "어떤 운동을 제일 좋아하니?",
                                "answerKr": "내가 제일 좋아하는 건 농구야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Let's run together on the track!",
                                "answer": "Okay, let's have a friendly race.",
                                "questionKr": "트랙에서 같이 달리자!",
                                "answerKr": "좋아, 가볍게 경주해보자.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [놀다, 경기를 하다]",
                                "word": "play",
                                "meaning": "놀다, 경기를 하다",
                                "hint": "p___",
                                "answer": "play",
                                "options": [
                                        "play",
                                        "soccer",
                                        "baseball",
                                        "basketball"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [축구]",
                                "word": "soccer",
                                "meaning": "축구",
                                "hint": "s___",
                                "answer": "soccer",
                                "options": [
                                        "soccer",
                                        "baseball",
                                        "play",
                                        "basketball"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [야구]",
                                "word": "baseball",
                                "meaning": "야구",
                                "hint": "b___",
                                "answer": "baseball",
                                "options": [
                                        "basketball",
                                        "soccer",
                                        "baseball",
                                        "play"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [농구]",
                                "word": "basketball",
                                "meaning": "농구",
                                "hint": "b___",
                                "answer": "basketball",
                                "options": [
                                        "play",
                                        "soccer",
                                        "basketball",
                                        "baseball"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [배드민턴]",
                                "word": "badminton",
                                "meaning": "배드민턴",
                                "hint": "b___",
                                "answer": "badminton",
                                "options": [
                                        "badminton",
                                        "play",
                                        "soccer",
                                        "baseball"
                                ]
                        }
                ]
        },
        "4G_L05": {
                "id": "4G_L05",
                "grade": 4,
                "lesson": 5,
                "publisher": "YBM (최희경)",
                "name": "4학년 5단원",
                "title": "Where's My Bag?",
                "shortDesc": "Where's My Bag? (10문항)",
                "grammarPoint": "Where's my bag?",
                "words": [
                        {
                                "en": "where",
                                "kr": "어디에"
                        },
                        {
                                "en": "on",
                                "kr": "~위에"
                        },
                        {
                                "en": "in",
                                "kr": "~안에"
                        },
                        {
                                "en": "under",
                                "kr": "~아래에"
                        },
                        {
                                "en": "next to",
                                "kr": "~옆에"
                        },
                        {
                                "en": "desk",
                                "kr": "책상"
                        },
                        {
                                "en": "table",
                                "kr": "탁자"
                        },
                        {
                                "en": "chair",
                                "kr": "의자"
                        },
                        {
                                "en": "bed",
                                "kr": "침대"
                        },
                        {
                                "en": "room",
                                "kr": "방"
                        },
                        {
                                "en": "box",
                                "kr": "상자"
                        },
                        {
                                "en": "find",
                                "kr": "찾다"
                        }
                ],
                "sentences": [
                        {
                                "en": "Where's my bag?",
                                "kr": "내 가방이 어디 있지?"
                        },
                        {
                                "en": "It's on the desk.",
                                "kr": "책상 위에 있어."
                        },
                        {
                                "en": "Where is my pencil case?",
                                "kr": "내 필통은 어디 있니?"
                        },
                        {
                                "en": "It's under the table.",
                                "kr": "탁자 밑에 있어."
                        },
                        {
                                "en": "Look in the closet.",
                                "kr": "옷장 안을 찾아봐."
                        },
                        {
                                "en": "The cap is on the bed.",
                                "kr": "모자가 침대 위에 있어."
                        },
                        {
                                "en": "It's next to the computer.",
                                "kr": "컴퓨터 옆에 있어."
                        },
                        {
                                "en": "I can't find my shoes.",
                                "kr": "내 신발을 찾을 수 없어."
                        },
                        {
                                "en": "They are by the front door.",
                                "kr": "신발들은 현관문 옆에 있어."
                        },
                        {
                                "en": "Here it is! Thank you so much.",
                                "kr": "여기 있었네! 정말 고마워."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Where is my school bag?",
                                "answer": "It's right under the study desk.",
                                "questionKr": "내 책가방 어디 있니?",
                                "answerKr": "공부 책상 바로 아래에 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Where are my reading glasses?",
                                "answer": "They are next to your English book.",
                                "questionKr": "내 돋보기안경 어디 있니?",
                                "answerKr": "영어 책 바로 옆에 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Where did you put the blue cap?",
                                "answer": "I hung it behind the door.",
                                "questionKr": "파란 모자 어디에 뒀니?",
                                "answerKr": "문 뒤에 걸어두었어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Where is the cat hiding?",
                                "answer": "It is hiding under the sofa.",
                                "questionKr": "고양이가 어디 숨어 있니?",
                                "answerKr": "소파 밑에 숨어 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Where are my clean sneakers?",
                                "answer": "They are in the shoe closet.",
                                "questionKr": "내 깨끗한 운동화 어디 있니?",
                                "answerKr": "신발장 안에 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Where is my pencil case?",
                                "answer": "It is inside your backpack.",
                                "questionKr": "내 필통 어디에 있니?",
                                "answerKr": "네 배낭 안에 들어 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Where is the umbrella?",
                                "answer": "It is standing by the entrance.",
                                "questionKr": "우산 어디 있니?",
                                "answerKr": "현관문 옆에 서 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Is your dog behind the tree?",
                                "answer": "Yes, he is playing hide and seek.",
                                "questionKr": "네 개가 나무 뒤에 있니?",
                                "answerKr": "응, 숨바꼭질하고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Where is my cell phone?",
                                "answer": "It is on the living room table.",
                                "questionKr": "내 휴대폰 어디 있니?",
                                "answerKr": "거실 탁자 위에 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Did you see my jacket?",
                                "answer": "Yes, it is in your closet.",
                                "questionKr": "내 재킷 봤니?",
                                "answerKr": "응, 옷장 안에 들어 있어.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Where is my school bag?",
                                "answer": "It's right under the study desk.",
                                "questionKr": "내 책가방 어디 있니?",
                                "answerKr": "공부 책상 바로 아래에 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Where are my reading glasses?",
                                "answer": "They are inside the refrigerator.",
                                "questionKr": "내 돋보기안경 어디 있니?",
                                "answerKr": "냉장고 안에 들어 있어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Where did you put the blue cap?",
                                "answer": "I hung it behind the door.",
                                "questionKr": "파란 모자 어디에 뒀니?",
                                "answerKr": "문 뒤에 걸어두었어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Where is the cat hiding?",
                                "answer": "It is hiding under the sofa.",
                                "questionKr": "고양이가 어디 숨어 있니?",
                                "answerKr": "소파 밑에 숨어 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Where are my clean sneakers?",
                                "answer": "I threw them into the river.",
                                "questionKr": "내 깨끗한 운동화 어디 있니?",
                                "answerKr": "내가 강물에 던져버렸어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Where is my pencil case?",
                                "answer": "It is inside your backpack.",
                                "questionKr": "내 필통 어디에 있니?",
                                "answerKr": "네 배낭 안에 들어 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Where is the umbrella?",
                                "answer": "It is standing by the entrance.",
                                "questionKr": "우산 어디 있니?",
                                "answerKr": "현관문 옆에 서 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Is your dog behind the tree?",
                                "answer": "Yes, he is playing hide and seek.",
                                "questionKr": "네 개가 나무 뒤에 있니?",
                                "answerKr": "응, 숨바꼭질하고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Where is my cell phone?",
                                "answer": "It is on the living room table.",
                                "questionKr": "내 휴대폰 어디 있니?",
                                "answerKr": "거실 탁자 위에 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Did you see my jacket?",
                                "answer": "Yes, it is in your closet.",
                                "questionKr": "내 재킷 봤니?",
                                "answerKr": "응, 옷장 안에 들어 있어.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [어디에]",
                                "word": "where",
                                "meaning": "어디에",
                                "hint": "w___",
                                "answer": "where",
                                "options": [
                                        "in",
                                        "on",
                                        "under",
                                        "where"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~위에]",
                                "word": "on",
                                "meaning": "~위에",
                                "hint": "o___",
                                "answer": "on",
                                "options": [
                                        "under",
                                        "where",
                                        "on",
                                        "in"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~안에]",
                                "word": "in",
                                "meaning": "~안에",
                                "hint": "i___",
                                "answer": "in",
                                "options": [
                                        "where",
                                        "under",
                                        "in",
                                        "on"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~아래에]",
                                "word": "under",
                                "meaning": "~아래에",
                                "hint": "u___",
                                "answer": "under",
                                "options": [
                                        "where",
                                        "on",
                                        "under",
                                        "in"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~옆에]",
                                "word": "next to",
                                "meaning": "~옆에",
                                "hint": "n___",
                                "answer": "next to",
                                "options": [
                                        "in",
                                        "on",
                                        "where",
                                        "next to"
                                ]
                        }
                ]
        },
        "4G_L06": {
                "id": "4G_L06",
                "grade": 4,
                "lesson": 6,
                "publisher": "YBM (최희경)",
                "name": "4학년 6단원",
                "title": "What Are You Doing?",
                "shortDesc": "What Are You Doing? (10문항)",
                "grammarPoint": "What are you doing right now?",
                "words": [
                        {
                                "en": "doing",
                                "kr": "하고 있는"
                        },
                        {
                                "en": "reading",
                                "kr": "읽고 있는"
                        },
                        {
                                "en": "cooking",
                                "kr": "요리하고 있는"
                        },
                        {
                                "en": "drawing",
                                "kr": "그리고 있는"
                        },
                        {
                                "en": "listening",
                                "kr": "듣고 있는"
                        },
                        {
                                "en": "music",
                                "kr": "음악"
                        },
                        {
                                "en": "sleeping",
                                "kr": "자고 있는"
                        },
                        {
                                "en": "eating",
                                "kr": "먹고 있는"
                        },
                        {
                                "en": "cleaning",
                                "kr": "청소하고 있는"
                        },
                        {
                                "en": "writing",
                                "kr": "쓰고 있는"
                        },
                        {
                                "en": "book",
                                "kr": "책"
                        },
                        {
                                "en": "now",
                                "kr": "지금"
                        }
                ],
                "sentences": [
                        {
                                "en": "What are you doing right now?",
                                "kr": "너 지금 뭐 하고 있니?"
                        },
                        {
                                "en": "I'm reading an interesting book.",
                                "kr": "나는 재미있는 책을 읽고 있어."
                        },
                        {
                                "en": "What is Mom doing?",
                                "kr": "엄마는 무엇을 하고 계시니?"
                        },
                        {
                                "en": "She is cooking in the kitchen.",
                                "kr": "엄마는 부엌에서 요리하고 계셔."
                        },
                        {
                                "en": "I'm drawing a colorful picture.",
                                "kr": "나는 알록달록한 그림을 그리고 있어."
                        },
                        {
                                "en": "Are you listening to music?",
                                "kr": "너 음악 듣고 있니?"
                        },
                        {
                                "en": "Yes, I'm listening to pop songs.",
                                "kr": "응, 팝송을 듣고 있어."
                        },
                        {
                                "en": "Don't make noise. The baby is sleeping.",
                                "kr": "시끄럽게 하지 마. 아기가 자고 있어."
                        },
                        {
                                "en": "I'm cleaning my bedroom.",
                                "kr": "나는 내 방을 청소하고 있어."
                        },
                        {
                                "en": "We are having so much fun.",
                                "kr": "우리는 정말 즐거운 시간을 보내고 있어."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "What are you doing in your room?",
                                "answer": "I'm reading an exciting storybook.",
                                "questionKr": "방에서 뭐 하고 있니?",
                                "answerKr": "흥미진진한 동화책을 읽고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "What is mom doing in the kitchen?",
                                "answer": "She is cooking delicious spaghetti.",
                                "questionKr": "엄마는 부엌에서 뭐 하고 계시니?",
                                "answerKr": "맛있는 스파게티를 요리하고 계셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What is Kevin doing outside?",
                                "answer": "He is playing soccer with friends.",
                                "questionKr": "케빈은 밖에서 뭐 하니?",
                                "answerKr": "친구들과 축구하고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Are you watching TV right now?",
                                "answer": "No, I am doing my English homework.",
                                "questionKr": "지금 TV 보고 있니?",
                                "answerKr": "아니, 영어 숙제하고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What is your sister drawing?",
                                "answer": "She is drawing a cute puppy.",
                                "questionKr": "네 여동생은 무엇을 그리고 있니?",
                                "answerKr": "귀여운 강아지를 그리고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Is the baby sleeping in the bed?",
                                "answer": "Yes, shh! He is sleeping quietly.",
                                "questionKr": "아기가 침대에서 자고 있니?",
                                "answerKr": "응, 쉿! 조용히 자고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "What are they doing in the garden?",
                                "answer": "They are planting colorful flowers.",
                                "questionKr": "그들은 정원에서 뭐 하고 있니?",
                                "answerKr": "알록달록한 꽃을 심고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Are you listening to music?",
                                "answer": "Yes, I am listening to my favorite song.",
                                "questionKr": "음악 듣고 있니?",
                                "answerKr": "응, 제일 좋아하는 노래를 듣고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What are you eating for snack?",
                                "answer": "I am eating fresh fruit salad.",
                                "questionKr": "간식으로 뭐 먹고 있니?",
                                "answerKr": "신선한 과일 샐러드를 먹고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Can you help me clean the room?",
                                "answer": "Sure, I am washing the floor.",
                                "questionKr": "방 청소하는 것 좀 도와줄래?",
                                "answerKr": "물론이지, 바닥을 닦고 있어.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "What are you doing in your room?",
                                "answer": "I'm reading an exciting storybook.",
                                "questionKr": "방에서 뭐 하고 있니?",
                                "answerKr": "흥미진진한 동화책을 읽고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "What is mom doing in the kitchen?",
                                "answer": "She is building a rocket engine.",
                                "questionKr": "엄마는 부엌에서 뭐 하고 계시니?",
                                "answerKr": "로켓 엔진을 조립하고 계셔.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "What is Kevin doing outside?",
                                "answer": "He is playing soccer with friends.",
                                "questionKr": "케빈은 밖에서 뭐 하니?",
                                "answerKr": "친구들과 축구하고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Are you watching TV right now?",
                                "answer": "No, I am doing my English homework.",
                                "questionKr": "지금 TV 보고 있니?",
                                "answerKr": "아니, 영어 숙제하고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What is your sister drawing?",
                                "answer": "She is drawing a cute puppy.",
                                "questionKr": "네 여동생은 무엇을 그리고 있니?",
                                "answerKr": "귀여운 강아지를 그리고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Is the baby sleeping in the bed?",
                                "answer": "No, the baby is driving a racing car.",
                                "questionKr": "아기가 침대에서 자고 있니?",
                                "answerKr": "아니, 아기가 레이싱 카를 몰고 있어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 7,
                                "question": "What are they doing in the garden?",
                                "answer": "They are planting colorful flowers.",
                                "questionKr": "그들은 정원에서 뭐 하고 있니?",
                                "answerKr": "알록달록한 꽃을 심고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Are you listening to music?",
                                "answer": "Yes, I am listening to my favorite song.",
                                "questionKr": "음악 듣고 있니?",
                                "answerKr": "응, 제일 좋아하는 노래를 듣고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What are you eating for snack?",
                                "answer": "I am eating fresh fruit salad.",
                                "questionKr": "간식으로 뭐 먹고 있니?",
                                "answerKr": "신선한 과일 샐러드를 먹고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Can you help me clean the room?",
                                "answer": "Sure, I am washing the floor.",
                                "questionKr": "방 청소하는 것 좀 도와줄래?",
                                "answerKr": "물론이지, 바닥을 닦고 있어.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [하고 있는]",
                                "word": "doing",
                                "meaning": "하고 있는",
                                "hint": "d___",
                                "answer": "doing",
                                "options": [
                                        "doing",
                                        "drawing",
                                        "cooking",
                                        "reading"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [읽고 있는]",
                                "word": "reading",
                                "meaning": "읽고 있는",
                                "hint": "r___",
                                "answer": "reading",
                                "options": [
                                        "doing",
                                        "cooking",
                                        "reading",
                                        "drawing"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [요리하고 있는]",
                                "word": "cooking",
                                "meaning": "요리하고 있는",
                                "hint": "c___",
                                "answer": "cooking",
                                "options": [
                                        "reading",
                                        "cooking",
                                        "doing",
                                        "drawing"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [그리고 있는]",
                                "word": "drawing",
                                "meaning": "그리고 있는",
                                "hint": "d___",
                                "answer": "drawing",
                                "options": [
                                        "drawing",
                                        "reading",
                                        "cooking",
                                        "doing"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [듣고 있는]",
                                "word": "listening",
                                "meaning": "듣고 있는",
                                "hint": "l___",
                                "answer": "listening",
                                "options": [
                                        "cooking",
                                        "doing",
                                        "reading",
                                        "listening"
                                ]
                        }
                ]
        },
        "4G_L07": {
                "id": "4G_L07",
                "grade": 4,
                "lesson": 7,
                "publisher": "YBM (최희경)",
                "name": "4학년 7단원",
                "title": "Is This Your Jacket?",
                "shortDesc": "Is This Your Jacket? (10문항)",
                "grammarPoint": "Is this your jacket?",
                "words": [
                        {
                                "en": "jacket",
                                "kr": "재킷, 외투"
                        },
                        {
                                "en": "cap",
                                "kr": "모자"
                        },
                        {
                                "en": "hat",
                                "kr": "모자"
                        },
                        {
                                "en": "coat",
                                "kr": "코트, 외투"
                        },
                        {
                                "en": "gloves",
                                "kr": "장갑"
                        },
                        {
                                "en": "shoes",
                                "kr": "신발"
                        },
                        {
                                "en": "socks",
                                "kr": "양말"
                        },
                        {
                                "en": "whose",
                                "kr": "누구의"
                        },
                        {
                                "en": "mine",
                                "kr": "나의 것"
                        },
                        {
                                "en": "yours",
                                "kr": "너의 것"
                        },
                        {
                                "en": "wear",
                                "kr": "입다, 쓰다"
                        },
                        {
                                "en": "pretty",
                                "kr": "예쁜"
                        }
                ],
                "sentences": [
                        {
                                "en": "Is this your jacket?",
                                "kr": "이것은 너의 재킷이니?"
                        },
                        {
                                "en": "Yes, it is. Thank you.",
                                "kr": "응, 내 거야. 고마워."
                        },
                        {
                                "en": "No, it isn't mine.",
                                "kr": "아니, 내 것이 아니야."
                        },
                        {
                                "en": "Whose cap is this on the floor?",
                                "kr": "바닥에 있는 이 모자는 누구 것이니?"
                        },
                        {
                                "en": "It's Kevin's blue cap.",
                                "kr": "그건 케빈의 파란 모자야."
                        },
                        {
                                "en": "Are these your warm gloves?",
                                "kr": "이것들은 너의 따뜻한 장갑이니?"
                        },
                        {
                                "en": "Yes, they are my gloves.",
                                "kr": "응, 그것들은 내 장갑이야."
                        },
                        {
                                "en": "Try on this new red coat.",
                                "kr": "이 새 빨간 외투를 입어 보렴."
                        },
                        {
                                "en": "It fits you very well.",
                                "kr": "너에게 아주 잘 어울려."
                        },
                        {
                                "en": "Don't forget your winter scarf.",
                                "kr": "겨울 목도리를 잊지 마렴."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Is this black jacket yours?",
                                "answer": "Yes, it's mine. Thank you for finding it.",
                                "questionKr": "이 검은 재킷 네 것이니?",
                                "answerKr": "응, 내 거야. 찾아줘서 고마워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Whose yellow umbrella is this?",
                                "answer": "It is Sena's umbrella.",
                                "questionKr": "이 노란 우산은 누구 것이니?",
                                "answerKr": "세나 우산이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Are these warm gloves yours?",
                                "answer": "No, they're not mine. They are Jinu's.",
                                "questionKr": "이 따뜻한 장갑들 네 것이니?",
                                "answerKr": "아니, 내 게 아니야. 진우 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Whose red cap is on the floor?",
                                "answer": "I think it is Kevin's cap.",
                                "questionKr": "바닥에 있는 빨간 모자는 누구 거니?",
                                "answerKr": "케빈 모자인 것 같아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Is this your sister's pink dress?",
                                "answer": "Yes, that pretty dress is hers.",
                                "questionKr": "이게 네 여동생의 분홍 원피스니?",
                                "answerKr": "응, 저 예쁜 옷은 여동생 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Whose boots are standing by the door?",
                                "answer": "They are my father's rain boots.",
                                "questionKr": "문 옆에 서 있는 부츠는 누구 거니?",
                                "answerKr": "우리 아버지 장화야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is this pencil case his or yours?",
                                "answer": "It is his. My case is blue.",
                                "questionKr": "이 필통은 걔 거니 네 거니?",
                                "answerKr": "걔 거야. 내 필통은 파란색이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Did someone leave this striped shirt?",
                                "answer": "Yes, it belongs to David.",
                                "questionKr": "누가 이 줄무늬 셔츠 두고 갔니?",
                                "answerKr": "응, 데이비드 옷이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Is this ruler yours?",
                                "answer": "Yes, it has my name written on it.",
                                "questionKr": "이 자 네 것이니?",
                                "answerKr": "응, 내 이름이 적혀 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Whose water bottle is on the table?",
                                "answer": "It is our teacher's bottle.",
                                "questionKr": "탁자 위 물병은 누구 거니?",
                                "answerKr": "우리 선생님 물병이야.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Is this black jacket yours?",
                                "answer": "Yes, it's mine. Thank you for finding it.",
                                "questionKr": "이 검은 재킷 네 것이니?",
                                "answerKr": "응, 내 거야. 찾아줘서 고마워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Whose yellow umbrella is this?",
                                "answer": "It belongs to the President.",
                                "questionKr": "이 노란 우산은 누구 것이니?",
                                "answerKr": "대통령 님 우산이야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Are these warm gloves yours?",
                                "answer": "No, they're not mine. They are Jinu's.",
                                "questionKr": "이 따뜻한 장갑들 네 것이니?",
                                "answerKr": "아니, 내 게 아니야. 진우 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Whose red cap is on the floor?",
                                "answer": "I think it is Kevin's cap.",
                                "questionKr": "바닥에 있는 빨간 모자는 누구 거니?",
                                "answerKr": "케빈 모자인 것 같아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Is this your sister's pink dress?",
                                "answer": "Yes, that pretty dress is hers.",
                                "questionKr": "이게 네 여동생의 분홍 원피스니?",
                                "answerKr": "응, 저 예쁜 옷은 여동생 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Whose boots are standing by the door?",
                                "answer": "They are my father's rain boots.",
                                "questionKr": "문 옆에 서 있는 부츠는 누구 거니?",
                                "answerKr": "우리 아버지 장화야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Is this pencil case his or yours?",
                                "answer": "I stole it from the teacher.",
                                "questionKr": "이 필통은 걔 거니 네 거니?",
                                "answerKr": "내가 선생님한테서 훔친 거야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 8,
                                "question": "Did someone leave this striped shirt?",
                                "answer": "Yes, it belongs to David.",
                                "questionKr": "누가 이 줄무늬 셔츠 두고 갔니?",
                                "answerKr": "응, 데이비드 옷이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Is this ruler yours?",
                                "answer": "Yes, it has my name written on it.",
                                "questionKr": "이 자 네 것이니?",
                                "answerKr": "응, 내 이름이 적혀 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Whose water bottle is on the table?",
                                "answer": "It is our teacher's bottle.",
                                "questionKr": "탁자 위 물병은 누구 거니?",
                                "answerKr": "우리 선생님 물병이야.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [재킷, 외투]",
                                "word": "jacket",
                                "meaning": "재킷, 외투",
                                "hint": "j___",
                                "answer": "jacket",
                                "options": [
                                        "jacket",
                                        "coat",
                                        "cap",
                                        "hat"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [모자]",
                                "word": "cap",
                                "meaning": "모자",
                                "hint": "c___",
                                "answer": "cap",
                                "options": [
                                        "cap",
                                        "coat",
                                        "jacket",
                                        "hat"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [모자]",
                                "word": "hat",
                                "meaning": "모자",
                                "hint": "h___",
                                "answer": "hat",
                                "options": [
                                        "coat",
                                        "jacket",
                                        "hat",
                                        "cap"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [코트, 외투]",
                                "word": "coat",
                                "meaning": "코트, 외투",
                                "hint": "c___",
                                "answer": "coat",
                                "options": [
                                        "hat",
                                        "coat",
                                        "jacket",
                                        "cap"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [장갑]",
                                "word": "gloves",
                                "meaning": "장갑",
                                "hint": "g___",
                                "answer": "gloves",
                                "options": [
                                        "jacket",
                                        "cap",
                                        "hat",
                                        "gloves"
                                ]
                        }
                ]
        },
        "4G_L08": {
                "id": "4G_L08",
                "grade": 4,
                "lesson": 8,
                "publisher": "YBM (최희경)",
                "name": "4학년 8단원",
                "title": "Do You Want Some Chicken?",
                "shortDesc": "Do You Want Some Chicken? (10문항)",
                "grammarPoint": "Do you want some chicken?",
                "words": [
                        {
                                "en": "want",
                                "kr": "원하다"
                        },
                        {
                                "en": "some",
                                "kr": "약간의, 조금"
                        },
                        {
                                "en": "chicken",
                                "kr": "닭고기, 치킨"
                        },
                        {
                                "en": "pizza",
                                "kr": "피자"
                        },
                        {
                                "en": "bread",
                                "kr": "빵"
                        },
                        {
                                "en": "milk",
                                "kr": "우유"
                        },
                        {
                                "en": "water",
                                "kr": "물"
                        },
                        {
                                "en": "juice",
                                "kr": "주스"
                        },
                        {
                                "en": "delicious",
                                "kr": "맛있는"
                        },
                        {
                                "en": "help",
                                "kr": "돕다, 차려 먹다"
                        },
                        {
                                "en": "more",
                                "kr": "더"
                        },
                        {
                                "en": "meal",
                                "kr": "식사"
                        }
                ],
                "sentences": [
                        {
                                "en": "Do you want some chicken?",
                                "kr": "치킨 좀 먹을래?"
                        },
                        {
                                "en": "Yes, please.",
                                "kr": "응, 부탁해."
                        },
                        {
                                "en": "No, thank you. I'm full.",
                                "kr": "아니, 괜찮아. 배불러."
                        },
                        {
                                "en": "Help yourself to the pizza.",
                                "kr": "피자 마음껏 먹으렴."
                        },
                        {
                                "en": "Would you like some cold water?",
                                "kr": "시원한 물 좀 마실래?"
                        },
                        {
                                "en": "Yes, I'm very thirsty.",
                                "kr": "응, 나 목이 몹시 말라."
                        },
                        {
                                "en": "The food is very delicious.",
                                "kr": "음식이 정말 맛있어."
                        },
                        {
                                "en": "Can I have some more bread?",
                                "kr": "빵을 좀 더 먹어도 될까요?"
                        },
                        {
                                "en": "Sure, here is fresh bread.",
                                "kr": "물론이지, 여기 갓 구운 빵이 있어."
                        },
                        {
                                "en": "Thank you for the wonderful meal!",
                                "kr": "훌륭한 식사 고마워요!"
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Do you want some fried chicken?",
                                "answer": "Yes, please! Chicken is my favorite.",
                                "questionKr": "후라이드 치킨 좀 먹을래?",
                                "answerKr": "응, 고마워! 치킨 내가 제일 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Would you like some orange juice?",
                                "answer": "No, thanks. I'm not thirsty.",
                                "questionKr": "오렌지 주스 좀 마실래?",
                                "answerKr": "아니, 괜찮아. 목 안 말라.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Are you hungry after soccer practice?",
                                "answer": "Yes, I am very hungry.",
                                "questionKr": "축구 연습 끝나고 배고프니?",
                                "answerKr": "응, 아주 배고파.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Do you want another piece of cake?",
                                "answer": "No, thanks. I'm completely full.",
                                "questionKr": "케이크 한 조각 더 먹을래?",
                                "answerKr": "아니, 괜찮아. 배가 꽉 찼어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Can I have some water, please?",
                                "answer": "Sure, here is a cup of cold water.",
                                "questionKr": "물 좀 마실 수 있을까?",
                                "answerKr": "물론이지, 여기 시원한 물 한 컵 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Do you want some warm noodles?",
                                "answer": "Yes, please. Noodles smell so good.",
                                "questionKr": "따뜻한 국수 좀 먹을래?",
                                "answerKr": "응, 국수 냄새가 정말 좋다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Help yourself to these chocolate cookies!",
                                "answer": "Thank you! They look so sweet.",
                                "questionKr": "초콜릿 쿠키 마음껏 먹으렴!",
                                "answerKr": "감사합니다! 정말 달콤해 보여요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you want a ham sandwich?",
                                "answer": "Yes, please. I love sandwiches.",
                                "questionKr": "햄 샌드위치 먹을래?",
                                "answerKr": "응, 샌드위치 아주 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Are you thirsty?",
                                "answer": "Yes, I need some fresh apple juice.",
                                "questionKr": "목마르니?",
                                "answerKr": "응, 신선한 사과 주스가 필요해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you want some fresh fruit salad?",
                                "answer": "Yes, fruit salad is very healthy.",
                                "questionKr": "신선한 과일 샐러드 먹을래?",
                                "answerKr": "응, 과일 샐러드는 정말 건강해.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Do you want some fried chicken?",
                                "answer": "Yes, please! Chicken is my favorite.",
                                "questionKr": "후라이드 치킨 좀 먹을래?",
                                "answerKr": "응, 고마워! 치킨 내가 제일 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Would you like some orange juice?",
                                "answer": "No, thanks. I'm not thirsty.",
                                "questionKr": "오렌지 주스 좀 마실래?",
                                "answerKr": "아니, 괜찮아. 목 안 말라.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Are you hungry after soccer practice?",
                                "answer": "I never eat food at all.",
                                "questionKr": "축구 연습 끝나고 배고프니?",
                                "answerKr": "난 음식을 아예 안 먹어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 4,
                                "question": "Do you want another piece of cake?",
                                "answer": "No, thanks. I'm completely full.",
                                "questionKr": "케이크 한 조각 더 먹을래?",
                                "answerKr": "아니, 괜찮아. 배가 꽉 찼어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Can I have some water, please?",
                                "answer": "Sure, here is a cup of cold water.",
                                "questionKr": "물 좀 마실 수 있을까?",
                                "answerKr": "물론이지, 여기 시원한 물 한 컵 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Do you want some warm noodles?",
                                "answer": "Yes, please. Noodles smell so good.",
                                "questionKr": "따뜻한 국수 좀 먹을래?",
                                "answerKr": "응, 국수 냄새가 정말 좋다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Help yourself to these chocolate cookies!",
                                "answer": "I threw all cookies away.",
                                "questionKr": "초콜릿 쿠키 마음껏 먹으렴!",
                                "answerKr": "쿠키 다 쓰레기통에 버렸어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 8,
                                "question": "Do you want a ham sandwich?",
                                "answer": "Yes, please. I love sandwiches.",
                                "questionKr": "햄 샌드위치 먹을래?",
                                "answerKr": "응, 샌드위치 아주 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Are you thirsty?",
                                "answer": "Yes, I need some fresh apple juice.",
                                "questionKr": "목마르니?",
                                "answerKr": "응, 신선한 사과 주스가 필요해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you want some fresh fruit salad?",
                                "answer": "Yes, fruit salad is very healthy.",
                                "questionKr": "신선한 과일 샐러드 먹을래?",
                                "answerKr": "응, 과일 샐러드는 정말 건강해.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [원하다]",
                                "word": "want",
                                "meaning": "원하다",
                                "hint": "w___",
                                "answer": "want",
                                "options": [
                                        "chicken",
                                        "some",
                                        "want",
                                        "pizza"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [약간의, 조금]",
                                "word": "some",
                                "meaning": "약간의, 조금",
                                "hint": "s___",
                                "answer": "some",
                                "options": [
                                        "chicken",
                                        "pizza",
                                        "want",
                                        "some"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [닭고기, 치킨]",
                                "word": "chicken",
                                "meaning": "닭고기, 치킨",
                                "hint": "c___",
                                "answer": "chicken",
                                "options": [
                                        "some",
                                        "chicken",
                                        "pizza",
                                        "want"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [피자]",
                                "word": "pizza",
                                "meaning": "피자",
                                "hint": "p___",
                                "answer": "pizza",
                                "options": [
                                        "want",
                                        "pizza",
                                        "some",
                                        "chicken"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [빵]",
                                "word": "bread",
                                "meaning": "빵",
                                "hint": "b___",
                                "answer": "bread",
                                "options": [
                                        "want",
                                        "bread",
                                        "some",
                                        "chicken"
                                ]
                        }
                ]
        },
        "4G_L09": {
                "id": "4G_L09",
                "grade": 4,
                "lesson": 9,
                "publisher": "YBM (최희경)",
                "name": "4학년 9단원",
                "title": "What Day Is It Today?",
                "shortDesc": "What Day Is It Today? (10문항)",
                "grammarPoint": "What day is it today?",
                "words": [
                        {
                                "en": "Monday",
                                "kr": "월요일"
                        },
                        {
                                "en": "Tuesday",
                                "kr": "화요일"
                        },
                        {
                                "en": "Wednesday",
                                "kr": "수요일"
                        },
                        {
                                "en": "Thursday",
                                "kr": "목요일"
                        },
                        {
                                "en": "Friday",
                                "kr": "금요일"
                        },
                        {
                                "en": "Saturday",
                                "kr": "토요일"
                        },
                        {
                                "en": "Sunday",
                                "kr": "일요일"
                        },
                        {
                                "en": "today",
                                "kr": "오늘"
                        },
                        {
                                "en": "day",
                                "kr": "요일, 날"
                        },
                        {
                                "en": "weekend",
                                "kr": "주말"
                        },
                        {
                                "en": "week",
                                "kr": "주, 일주일"
                        },
                        {
                                "en": "tomorrow",
                                "kr": "내일"
                        }
                ],
                "sentences": [
                        {
                                "en": "What day is it today?",
                                "kr": "오늘 무슨 요일이니?"
                        },
                        {
                                "en": "It's Monday.",
                                "kr": "월요일이야."
                        },
                        {
                                "en": "Tomorrow is Tuesday.",
                                "kr": "내일은 화요일이야."
                        },
                        {
                                "en": "We have English class on Wednesday.",
                                "kr": "우리는 수요일에 영어 수업이 있어."
                        },
                        {
                                "en": "Thursday is library day.",
                                "kr": "목요일은 도서관 가는 날이야."
                        },
                        {
                                "en": "Friday is my favorite day.",
                                "kr": "금요일은 내가 가장 좋아하는 요일이야."
                        },
                        {
                                "en": "Today is Saturday! No school today.",
                                "kr": "오늘은 토요일이야! 오늘 학교 안 가."
                        },
                        {
                                "en": "Sunday is family day.",
                                "kr": "일요일은 가족과 함께하는 날이야."
                        },
                        {
                                "en": "Have a great weekend!",
                                "kr": "멋진 주말 보내!"
                        },
                        {
                                "en": "See you next Monday at school.",
                                "kr": "다음 주 월요일에 학교에서 만나자."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "What day is it today?",
                                "answer": "It is Friday. The weekend is coming!",
                                "questionKr": "오늘 무슨 요일이니?",
                                "answerKr": "금요일이야. 주말이 오고 있어!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Do we have PE class on Tuesday?",
                                "answer": "Yes, we have PE on Tuesday and Thursday.",
                                "questionKr": "화요일에 체육 수업 있니?",
                                "answerKr": "응, 화요일과 목요일에 체육이 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What day do we have art class?",
                                "answer": "We have art on Wednesday morning.",
                                "questionKr": "미술 수업은 무슨 요일에 있니?",
                                "answerKr": "수요일 아침에 미술이 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "What do you usually do on Saturday?",
                                "answer": "I play soccer with my friends.",
                                "questionKr": "토요일에는 주로 뭐 하니?",
                                "answerKr": "친구들과 축구를 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What day is tomorrow?",
                                "answer": "Tomorrow is Saturday. No school!",
                                "questionKr": "내일은 무슨 요일이니?",
                                "answerKr": "내일은 토요일이야. 학교 안 가!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Do you go to the library on Sunday?",
                                "answer": "Yes, I read books with my family.",
                                "questionKr": "일요일에 도서관에 가니?",
                                "answerKr": "응, 가족과 책을 읽어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "What is your favorite day of the week?",
                                "answer": "My favorite day is Friday.",
                                "questionKr": "한 주 중 가장 좋아하는 요일은 뭐니?",
                                "answerKr": "내가 제일 좋아하는 날은 금요일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "When does the science club meet?",
                                "answer": "It meets every Monday afternoon.",
                                "questionKr": "과학 동아리는 언제 모이니?",
                                "answerKr": "매주 월요일 오후에 모여.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Is today Wednesday?",
                                "answer": "No, today is Thursday.",
                                "questionKr": "오늘 수요일이니?",
                                "answerKr": "아니, 오늘은 목요일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Have a wonderful weekend!",
                                "answer": "Thank you! See you next Monday.",
                                "questionKr": "즐거운 주말 보내!",
                                "answerKr": "고마워! 다음 주 월요일에 보자.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "What day is it today?",
                                "answer": "It is Friday. The weekend is coming!",
                                "questionKr": "오늘 무슨 요일이니?",
                                "answerKr": "금요일이야. 주말이 오고 있어!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Do we have PE class on Tuesday?",
                                "answer": "Yes, we have PE on Tuesday and Thursday.",
                                "questionKr": "화요일에 체육 수업 있니?",
                                "answerKr": "응, 화요일과 목요일에 체육이 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What day do we have art class?",
                                "answer": "We don't have art class this century.",
                                "questionKr": "미술 수업은 무슨 요일에 있니?",
                                "answerKr": "이번 세기엔 미술 수업 없어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 4,
                                "question": "What do you usually do on Saturday?",
                                "answer": "I play soccer with my friends.",
                                "questionKr": "토요일에는 주로 뭐 하니?",
                                "answerKr": "친구들과 축구를 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What day is tomorrow?",
                                "answer": "Tomorrow is Saturday. No school!",
                                "questionKr": "내일은 무슨 요일이니?",
                                "answerKr": "내일은 토요일이야. 학교 안 가!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Do you go to the library on Sunday?",
                                "answer": "I set fire to the library.",
                                "questionKr": "일요일에 도서관에 가니?",
                                "answerKr": "도서관은 문 닫아서 불태웠어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 7,
                                "question": "What is your favorite day of the week?",
                                "answer": "My favorite day is Friday.",
                                "questionKr": "한 주 중 가장 좋아하는 요일은 뭐니?",
                                "answerKr": "내가 제일 좋아하는 날은 금요일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "When does the science club meet?",
                                "answer": "It meets every Monday afternoon.",
                                "questionKr": "과학 동아리는 언제 모이니?",
                                "answerKr": "매주 월요일 오후에 모여.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Is today Wednesday?",
                                "answer": "No, today is Thursday.",
                                "questionKr": "오늘 수요일이니?",
                                "answerKr": "아니, 오늘은 목요일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Have a wonderful weekend!",
                                "answer": "Thank you! See you next Monday.",
                                "questionKr": "즐거운 주말 보내!",
                                "answerKr": "고마워! 다음 주 월요일에 보자.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [월요일]",
                                "word": "Monday",
                                "meaning": "월요일",
                                "hint": "M___",
                                "answer": "Monday",
                                "options": [
                                        "Wednesday",
                                        "Tuesday",
                                        "Monday",
                                        "Thursday"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [화요일]",
                                "word": "Tuesday",
                                "meaning": "화요일",
                                "hint": "T___",
                                "answer": "Tuesday",
                                "options": [
                                        "Tuesday",
                                        "Monday",
                                        "Thursday",
                                        "Wednesday"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [수요일]",
                                "word": "Wednesday",
                                "meaning": "수요일",
                                "hint": "W___",
                                "answer": "Wednesday",
                                "options": [
                                        "Wednesday",
                                        "Monday",
                                        "Tuesday",
                                        "Thursday"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [목요일]",
                                "word": "Thursday",
                                "meaning": "목요일",
                                "hint": "T___",
                                "answer": "Thursday",
                                "options": [
                                        "Tuesday",
                                        "Thursday",
                                        "Monday",
                                        "Wednesday"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [금요일]",
                                "word": "Friday",
                                "meaning": "금요일",
                                "hint": "F___",
                                "answer": "Friday",
                                "options": [
                                        "Wednesday",
                                        "Friday",
                                        "Monday",
                                        "Tuesday"
                                ]
                        }
                ]
        },
        "4G_L10": {
                "id": "4G_L10",
                "grade": 4,
                "lesson": 10,
                "publisher": "YBM (최희경)",
                "name": "4학년 10단원",
                "title": "How Much Is It?",
                "shortDesc": "How Much Is It? (10문항)",
                "grammarPoint": "How much is this notebook?",
                "words": [
                        {
                                "en": "how",
                                "kr": "얼마나"
                        },
                        {
                                "en": "much",
                                "kr": "많은, 얼마"
                        },
                        {
                                "en": "hundred",
                                "kr": "백 (100)"
                        },
                        {
                                "en": "thousand",
                                "kr": "천 (1000)"
                        },
                        {
                                "en": "won",
                                "kr": "원 (화폐 단위)"
                        },
                        {
                                "en": "money",
                                "kr": "돈"
                        },
                        {
                                "en": "buy",
                                "kr": "사다"
                        },
                        {
                                "en": "price",
                                "kr": "가격"
                        },
                        {
                                "en": "cheap",
                                "kr": "값이 싼"
                        },
                        {
                                "en": "expensive",
                                "kr": "비싼"
                        },
                        {
                                "en": "take",
                                "kr": "사다, 가지다"
                        },
                        {
                                "en": "change",
                                "kr": "거스름돈"
                        }
                ],
                "sentences": [
                        {
                                "en": "How much is this notebook?",
                                "kr": "이 공책은 얼마인가요?"
                        },
                        {
                                "en": "It's five hundred won.",
                                "kr": "500원입니다."
                        },
                        {
                                "en": "How much is the cute pencil?",
                                "kr": "귀여운 연필은 얼마인가요?"
                        },
                        {
                                "en": "It's one thousand won.",
                                "kr": "1,000원입니다."
                        },
                        {
                                "en": "That's very cheap!",
                                "kr": "정말 싸네요!"
                        },
                        {
                                "en": "This toy is too expensive.",
                                "kr": "이 장난감은 너무 비싸요."
                        },
                        {
                                "en": "Can I buy this eraser?",
                                "kr": "이 지우개를 살 수 있을까요?"
                        },
                        {
                                "en": "I'll take this blue pen, please.",
                                "kr": "이 파란 펜으로 살게요."
                        },
                        {
                                "en": "Here is your change.",
                                "kr": "여기 거스름돈 있습니다."
                        },
                        {
                                "en": "Thank you! Have a nice day.",
                                "kr": "감사합니다! 좋은 하루 되세요."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "May I help you, customer?",
                                "answer": "Yes, how much is this blue cap?",
                                "questionKr": "도와드릴까요, 손님?",
                                "answerKr": "네, 이 파란 모자 얼마예요?",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "How much is that cute teddy bear?",
                                "answer": "It is seven dollars.",
                                "questionKr": "저 귀여운 곰 인형 얼마인가요?",
                                "answerKr": "7달러입니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "How much are these colorful pencils?",
                                "answer": "They are one dollar each.",
                                "questionKr": "이 색연필들은 얼마인가요?",
                                "answerKr": "각각 1달러입니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Is this English storybook expensive?",
                                "answer": "No, it is very cheap. Only three dollars.",
                                "questionKr": "이 영어 동화책 비싼가요?",
                                "answerKr": "아니요, 아주 저렴해요. 겨우 3달러예요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "How much is this school notebook?",
                                "answer": "It is one thousand won.",
                                "questionKr": "이 공책 얼마예요?",
                                "answerKr": "1,000원입니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Can I try this jacket on?",
                                "answer": "Sure, the mirror is right over there.",
                                "questionKr": "이 재킷 입어봐도 될까요?",
                                "answerKr": "물론이죠, 거울이 바로 저기 있어요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "I want to buy a birthday present.",
                                "answer": "How about this colorful music box?",
                                "questionKr": "생일 선물을 사고 싶어요.",
                                "answerKr": "이 알록달록한 오르골 어떠세요?",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "How much is the total price?",
                                "answer": "That will be ten dollars in total.",
                                "questionKr": "총 가격이 얼마인가요?",
                                "answerKr": "모두 합해서 10달러입니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Do you accept cash?",
                                "answer": "Yes, we accept both cash and card.",
                                "questionKr": "현금 받으시나요?",
                                "answerKr": "네, 현금과 카드 모두 받습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Thank you for your help, clerk!",
                                "answer": "You're welcome. Have a wonderful day!",
                                "questionKr": "도와주셔서 감사합니다, 점원님!",
                                "answerKr": "천만에요. 좋은 하루 보내세요!",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "May I help you, customer?",
                                "answer": "Yes, how much is this blue cap?",
                                "questionKr": "도와드릴까요, 손님?",
                                "answerKr": "네, 이 파란 모자 얼마예요?",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "How much is that cute teddy bear?",
                                "answer": "It costs one million dollars.",
                                "questionKr": "저 귀여운 곰 인형 얼마인가요?",
                                "answerKr": "백만 달러입니다.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "How much are these colorful pencils?",
                                "answer": "They are one dollar each.",
                                "questionKr": "이 색연필들은 얼마인가요?",
                                "answerKr": "각각 1달러입니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Is this English storybook expensive?",
                                "answer": "No, it is very cheap. Only three dollars.",
                                "questionKr": "이 영어 동화책 비싼가요?",
                                "answerKr": "아니요, 아주 저렴해요. 겨우 3달러예요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "How much is this school notebook?",
                                "answer": "It is one thousand won.",
                                "questionKr": "이 공책 얼마예요?",
                                "answerKr": "1,000원입니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Can I try this jacket on?",
                                "answer": "No, you cannot touch clothes here.",
                                "questionKr": "이 재킷 입어봐도 될까요?",
                                "answerKr": "안 돼요, 여기 옷은 손대면 안 됩니다.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 7,
                                "question": "I want to buy a birthday present.",
                                "answer": "How about this colorful music box?",
                                "questionKr": "생일 선물을 사고 싶어요.",
                                "answerKr": "이 알록달록한 오르골 어떠세요?",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "How much is the total price?",
                                "answer": "That will be ten dollars in total.",
                                "questionKr": "총 가격이 얼마인가요?",
                                "answerKr": "모두 합해서 10달러입니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Do you accept cash?",
                                "answer": "Yes, we accept both cash and card.",
                                "questionKr": "현금 받으시나요?",
                                "answerKr": "네, 현금과 카드 모두 받습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Thank you for your help, clerk!",
                                "answer": "You're welcome. Have a wonderful day!",
                                "questionKr": "도와주셔서 감사합니다, 점원님!",
                                "answerKr": "천만에요. 좋은 하루 보내세요!",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [얼마나]",
                                "word": "how",
                                "meaning": "얼마나",
                                "hint": "h___",
                                "answer": "how",
                                "options": [
                                        "how",
                                        "hundred",
                                        "much",
                                        "thousand"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [많은, 얼마]",
                                "word": "much",
                                "meaning": "많은, 얼마",
                                "hint": "m___",
                                "answer": "much",
                                "options": [
                                        "hundred",
                                        "how",
                                        "thousand",
                                        "much"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [백 (100)]",
                                "word": "hundred",
                                "meaning": "백 (100)",
                                "hint": "h___",
                                "answer": "hundred",
                                "options": [
                                        "how",
                                        "much",
                                        "hundred",
                                        "thousand"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [천 (1000)]",
                                "word": "thousand",
                                "meaning": "천 (1000)",
                                "hint": "t___",
                                "answer": "thousand",
                                "options": [
                                        "thousand",
                                        "how",
                                        "hundred",
                                        "much"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [원 (화폐 단위)]",
                                "word": "won",
                                "meaning": "원 (화폐 단위)",
                                "hint": "w___",
                                "answer": "won",
                                "options": [
                                        "hundred",
                                        "won",
                                        "how",
                                        "much"
                                ]
                        }
                ]
        },
        "5G_L01": {
                "id": "5G_L01",
                "grade": 5,
                "lesson": 1,
                "publisher": "천재 (함순애)",
                "name": "5학년 1단원",
                "title": "Where Are You From?",
                "shortDesc": "Where Are You From? (10문항)",
                "grammarPoint": "Where are you from?",
                "words": [
                        {
                                "en": "country",
                                "kr": "나라, 국가"
                        },
                        {
                                "en": "from",
                                "kr": "~출신의, ~에서"
                        },
                        {
                                "en": "Korea",
                                "kr": "한국"
                        },
                        {
                                "en": "Canada",
                                "kr": "캐나다"
                        },
                        {
                                "en": "the UK",
                                "kr": "영국"
                        },
                        {
                                "en": "France",
                                "kr": "프랑스"
                        },
                        {
                                "en": "Australia",
                                "kr": "호주"
                        },
                        {
                                "en": "China",
                                "kr": "중국"
                        },
                        {
                                "en": "welcome",
                                "kr": "환영하다"
                        },
                        {
                                "en": "world",
                                "kr": "세계"
                        },
                        {
                                "en": "travel",
                                "kr": "여행하다"
                        },
                        {
                                "en": "live",
                                "kr": "살다"
                        }
                ],
                "sentences": [
                        {
                                "en": "Where are you from?",
                                "kr": "너는 어느 나라에서 왔니?"
                        },
                        {
                                "en": "I'm from Korea.",
                                "kr": "나는 한국에서 왔어."
                        },
                        {
                                "en": "I'm from Canada.",
                                "kr": "나는 캐나다에서 왔어."
                        },
                        {
                                "en": "She is from France.",
                                "kr": "그녀는 프랑스에서 왔어."
                        },
                        {
                                "en": "He is from Australia.",
                                "kr": "그는 호주에서 왔어."
                        },
                        {
                                "en": "Welcome to our school!",
                                "kr": "우리 학교에 온 것을 환영해!"
                        },
                        {
                                "en": "Have you visited the UK?",
                                "kr": "영국에 가 본 적이 있니?"
                        },
                        {
                                "en": "I want to travel around the world.",
                                "kr": "나는 세계를 여행하고 싶어."
                        },
                        {
                                "en": "People speak English in Canada.",
                                "kr": "캐나다 사람들은 영어를 써."
                        },
                        {
                                "en": "We are friends from different countries.",
                                "kr": "우리는 서로 다른 나라에서 온 친구들이야."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Hello, nice to meet you! Where are you from?",
                                "answer": "I'm from Canada. I moved here last month.",
                                "questionKr": "안녕, 만나서 반가워! 어디서 왔니?",
                                "answerKr": "난 캐나다에서 왔어. 지난달에 여기로 이사 왔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Where is your friend Lucas from?",
                                "answer": "He is from France. He speaks French and English.",
                                "questionKr": "네 친구 루카스는 어디 출신이니?",
                                "answerKr": "프랑스 출신이야. 프랑스어와 영어를 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Are you from the United States?",
                                "answer": "Yes, I was born in New York, the U.S.A.",
                                "questionKr": "미국 출신이니?",
                                "answerKr": "응, 미국 뉴욕에서 태어났어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Welcome to Korea! How do you like Seoul?",
                                "answer": "Seoul is so beautiful and exciting!",
                                "questionKr": "한국에 온 걸 환영해! 서울 어때?",
                                "answerKr": "서울은 정말 아름답고 신나는 곳이야!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Where is our new exchange student from?",
                                "answer": "She is from Sydney, Australia.",
                                "questionKr": "우리 새 교환학생은 어디서 왔니?",
                                "answerKr": "호주 시드니에서 왔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Have you ever visited the U.K.?",
                                "answer": "Yes, my aunt lives in London.",
                                "questionKr": "영국에 가본 적 있니?",
                                "answerKr": "응, 우리 이모가 런던에 사셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Where are your grandparents from?",
                                "answer": "They are from a peaceful village in Vietnam.",
                                "questionKr": "조부모님은 어디 출신이시니?",
                                "answerKr": "베트남의 평화로운 마을 출신이셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "What is the capital of your country?",
                                "answer": "The capital of Korea is Seoul.",
                                "questionKr": "너희 나라의 수도는 어디니?",
                                "answerKr": "한국의 수도는 서울이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Can you show me your country on the globe?",
                                "answer": "Sure, Canada is right here in North America.",
                                "questionKr": "지구본에서 너희 나라 보여줄래?",
                                "answerKr": "물론이지, 캐나다는 북미 바로 여기야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "We are all friends from around the world!",
                                "answer": "That's right! Global friendship is wonderful.",
                                "questionKr": "우린 모두 전 세계에서 모인 친구들이야!",
                                "answerKr": "맞아! 지구촌 우정은 정말 멋져.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Hello, nice to meet you! Where are you from?",
                                "answer": "I'm from Canada. I moved here last month.",
                                "questionKr": "안녕, 만나서 반가워! 어디서 왔니?",
                                "answerKr": "난 캐나다에서 왔어. 지난달에 여기로 이사 왔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Where is your friend Lucas from?",
                                "answer": "He was born on the dark side of Jupiter.",
                                "questionKr": "네 친구 루카스는 어디 출신이니?",
                                "answerKr": "목성의 어두운 뒷면에서 태어났어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Are you from the United States?",
                                "answer": "Yes, I was born in New York, the U.S.A.",
                                "questionKr": "미국 출신이니?",
                                "answerKr": "응, 미국 뉴욕에서 태어났어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Welcome to Korea! How do you like Seoul?",
                                "answer": "Seoul is so beautiful and exciting!",
                                "questionKr": "한국에 온 걸 환영해! 서울 어때?",
                                "answerKr": "서울은 정말 아름답고 신나는 곳이야!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Where is our new exchange student from?",
                                "answer": "She is from Sydney, Australia.",
                                "questionKr": "우리 새 교환학생은 어디서 왔니?",
                                "answerKr": "호주 시드니에서 왔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Have you ever visited the U.K.?",
                                "answer": "Yes, my aunt lives in London.",
                                "questionKr": "영국에 가본 적 있니?",
                                "answerKr": "응, 우리 이모가 런던에 사셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Where are your grandparents from?",
                                "answer": "I don't have any ancestors.",
                                "questionKr": "조부모님은 어디 출신이시니?",
                                "answerKr": "난 조상이나 가족이 아예 없어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 8,
                                "question": "What is the capital of your country?",
                                "answer": "The capital of Korea is Seoul.",
                                "questionKr": "너희 나라의 수도는 어디니?",
                                "answerKr": "한국의 수도는 서울이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Can you show me your country on the globe?",
                                "answer": "Sure, Canada is right here in North America.",
                                "questionKr": "지구본에서 너희 나라 보여줄래?",
                                "answerKr": "물론이지, 캐나다는 북미 바로 여기야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "We are all friends from around the world!",
                                "answer": "That's right! Global friendship is wonderful.",
                                "questionKr": "우린 모두 전 세계에서 모인 친구들이야!",
                                "answerKr": "맞아! 지구촌 우정은 정말 멋져.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [나라, 국가]",
                                "word": "country",
                                "meaning": "나라, 국가",
                                "hint": "c___",
                                "answer": "country",
                                "options": [
                                        "from",
                                        "Korea",
                                        "Canada",
                                        "country"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~출신의, ~에서]",
                                "word": "from",
                                "meaning": "~출신의, ~에서",
                                "hint": "f___",
                                "answer": "from",
                                "options": [
                                        "Korea",
                                        "from",
                                        "country",
                                        "Canada"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [한국]",
                                "word": "Korea",
                                "meaning": "한국",
                                "hint": "K___",
                                "answer": "Korea",
                                "options": [
                                        "Canada",
                                        "Korea",
                                        "country",
                                        "from"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [캐나다]",
                                "word": "Canada",
                                "meaning": "캐나다",
                                "hint": "C___",
                                "answer": "Canada",
                                "options": [
                                        "Canada",
                                        "country",
                                        "Korea",
                                        "from"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [영국]",
                                "word": "the UK",
                                "meaning": "영국",
                                "hint": "t___",
                                "answer": "the UK",
                                "options": [
                                        "the UK",
                                        "from",
                                        "country",
                                        "Korea"
                                ]
                        }
                ]
        },
        "5G_L02": {
                "id": "5G_L02",
                "grade": 5,
                "lesson": 2,
                "publisher": "천재 (함순애)",
                "name": "5학년 2단원",
                "title": "What Are These?",
                "shortDesc": "What Are These? (10문항)",
                "grammarPoint": "What are these?",
                "words": [
                        {
                                "en": "these",
                                "kr": "이것들"
                        },
                        {
                                "en": "those",
                                "kr": "저것들"
                        },
                        {
                                "en": "glasses",
                                "kr": "안경"
                        },
                        {
                                "en": "scissors",
                                "kr": "가위"
                        },
                        {
                                "en": "pants",
                                "kr": "바지"
                        },
                        {
                                "en": "socks",
                                "kr": "양말"
                        },
                        {
                                "en": "shoes",
                                "kr": "신발"
                        },
                        {
                                "en": "jeans",
                                "kr": "청바지"
                        },
                        {
                                "en": "boots",
                                "kr": "부츠"
                        },
                        {
                                "en": "gloves",
                                "kr": "장갑"
                        },
                        {
                                "en": "pair",
                                "kr": "한 켤레, 한 쌍"
                        },
                        {
                                "en": "look",
                                "kr": "보다"
                        }
                ],
                "sentences": [
                        {
                                "en": "What are these?",
                                "kr": "이것들은 무엇이니?"
                        },
                        {
                                "en": "They are glasses.",
                                "kr": "그것들은 안경이야."
                        },
                        {
                                "en": "What are those over there?",
                                "kr": "저쪽에 있는 저것들은 무엇이니?"
                        },
                        {
                                "en": "They are sharp scissors.",
                                "kr": "그것들은 잘 드는 가위야."
                        },
                        {
                                "en": "Are these your new shoes?",
                                "kr": "이것들은 너의 새 신발이니?"
                        },
                        {
                                "en": "Yes, they are very comfortable.",
                                "kr": "응, 아주 편안해."
                        },
                        {
                                "en": "Look at these blue jeans.",
                                "kr": "이 청바지를 봐."
                        },
                        {
                                "en": "Those pants are too big for me.",
                                "kr": "저 바지는 내게 너무 커."
                        },
                        {
                                "en": "I need a pair of warm socks.",
                                "kr": "나는 따뜻한 양말 한 켤레가 필요해."
                        },
                        {
                                "en": "Put on your rain boots today.",
                                "kr": "오늘 레인부츠를 신으렴."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "May I take your order, please?",
                                "answer": "I'd like a chicken sandwich, please.",
                                "questionKr": "주문하시겠어요?",
                                "answerKr": "치킨 샌드위치 하나 주세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "What would you like to drink with that?",
                                "answer": "I'd like a glass of orange juice.",
                                "questionKr": "함께 드실 음료는 무엇으로 하시겠어요?",
                                "answerKr": "오렌지 주스 한 잔 주세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "For here or to go?",
                                "answer": "For here, please. We will eat inside.",
                                "questionKr": "매장에서 드시나요, 포장이신가요?",
                                "answerKr": "매장에서 먹을게요. 안에서 먹어요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Would you like some fresh green salad?",
                                "answer": "Yes, please. Salad is very fresh.",
                                "questionKr": "신선한 그린 샐러드도 드시겠어요?",
                                "answerKr": "네, 주세요. 샐러드가 아주 신선해요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "How much is the total combo meal?",
                                "answer": "It is six dollars and fifty cents.",
                                "questionKr": "세트 메뉴 총 가격이 얼마인가요?",
                                "answerKr": "6달러 50센트입니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Would you like dessert after your meal?",
                                "answer": "I'd like chocolate ice cream, please.",
                                "questionKr": "식사 후 디저트 드시겠어요?",
                                "answerKr": "초콜릿 아이스크림으로 주세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Can I have some extra napkins?",
                                "answer": "Sure, here are some napkins and straws.",
                                "questionKr": "냅킨 좀 더 주실 수 있나요?",
                                "answerKr": "물론이죠, 여기 냅킨과 빨대 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Is your beef burger spicy?",
                                "answer": "No, it is mild and very savory.",
                                "questionKr": "소고기 버거 매운가요?",
                                "answerKr": "아니요, 순하고 아주 고소해요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "How is the food here?",
                                "answer": "Everything is absolutely delicious!",
                                "questionKr": "여기 음식 어떤가요?",
                                "answerKr": "모든 음식이 정말 맛있어요!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Enjoy your wonderful meal!",
                                "answer": "Thank you! Have a nice afternoon.",
                                "questionKr": "맛있게 드세요!",
                                "answerKr": "감사합니다! 좋은 오후 되세요.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "May I take your order, please?",
                                "answer": "I'd like a chicken sandwich, please.",
                                "questionKr": "주문하시겠어요?",
                                "answerKr": "치킨 샌드위치 하나 주세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "What would you like to drink with that?",
                                "answer": "I drink toxic sludge only.",
                                "questionKr": "함께 드실 음료는 무엇으로 하시겠어요?",
                                "answerKr": "난 유독성 진흙탕만 마셔.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "For here or to go?",
                                "answer": "For here, please. We will eat inside.",
                                "questionKr": "매장에서 드시나요, 포장이신가요?",
                                "answerKr": "매장에서 먹을게요. 안에서 먹어요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Would you like some fresh green salad?",
                                "answer": "Yes, please. Salad is very fresh.",
                                "questionKr": "신선한 그린 샐러드도 드시겠어요?",
                                "answerKr": "네, 주세요. 샐러드가 아주 신선해요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "How much is the total combo meal?",
                                "answer": "It is six dollars and fifty cents.",
                                "questionKr": "세트 메뉴 총 가격이 얼마인가요?",
                                "answerKr": "6달러 50센트입니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Would you like dessert after your meal?",
                                "answer": "I want to eat the table.",
                                "questionKr": "식사 후 디저트 드시겠어요?",
                                "answerKr": "난 식탁을 씹어 먹고 싶어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 7,
                                "question": "Can I have some extra napkins?",
                                "answer": "Sure, here are some napkins and straws.",
                                "questionKr": "냅킨 좀 더 주실 수 있나요?",
                                "answerKr": "물론이죠, 여기 냅킨과 빨대 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Is your beef burger spicy?",
                                "answer": "No, it is mild and very savory.",
                                "questionKr": "소고기 버거 매운가요?",
                                "answerKr": "아니요, 순하고 아주 고소해요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "How is the food here?",
                                "answer": "Everything is absolutely delicious!",
                                "questionKr": "여기 음식 어떤가요?",
                                "answerKr": "모든 음식이 정말 맛있어요!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Enjoy your wonderful meal!",
                                "answer": "Thank you! Have a nice afternoon.",
                                "questionKr": "맛있게 드세요!",
                                "answerKr": "감사합니다! 좋은 오후 되세요.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [이것들]",
                                "word": "these",
                                "meaning": "이것들",
                                "hint": "t___",
                                "answer": "these",
                                "options": [
                                        "scissors",
                                        "these",
                                        "those",
                                        "glasses"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [저것들]",
                                "word": "those",
                                "meaning": "저것들",
                                "hint": "t___",
                                "answer": "those",
                                "options": [
                                        "those",
                                        "scissors",
                                        "these",
                                        "glasses"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [안경]",
                                "word": "glasses",
                                "meaning": "안경",
                                "hint": "g___",
                                "answer": "glasses",
                                "options": [
                                        "scissors",
                                        "these",
                                        "glasses",
                                        "those"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [가위]",
                                "word": "scissors",
                                "meaning": "가위",
                                "hint": "s___",
                                "answer": "scissors",
                                "options": [
                                        "these",
                                        "scissors",
                                        "those",
                                        "glasses"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [바지]",
                                "word": "pants",
                                "meaning": "바지",
                                "hint": "p___",
                                "answer": "pants",
                                "options": [
                                        "these",
                                        "pants",
                                        "glasses",
                                        "those"
                                ]
                        }
                ]
        },
        "5G_L03": {
                "id": "5G_L03",
                "grade": 5,
                "lesson": 3,
                "publisher": "천재 (함순애)",
                "name": "5학년 3단원",
                "title": "Can I Take Pictures?",
                "shortDesc": "Can I Take Pictures? (10문항)",
                "grammarPoint": "Can I take pictures here?",
                "words": [
                        {
                                "en": "can",
                                "kr": "~해도 되다, 할 수 있다"
                        },
                        {
                                "en": "take",
                                "kr": "찍다, 취하다"
                        },
                        {
                                "en": "picture",
                                "kr": "사진"
                        },
                        {
                                "en": "touch",
                                "kr": "만지다"
                        },
                        {
                                "en": "enter",
                                "kr": "들어가다"
                        },
                        {
                                "en": "museum",
                                "kr": "박물관"
                        },
                        {
                                "en": "rule",
                                "kr": "규칙"
                        },
                        {
                                "en": "safe",
                                "kr": "안전한"
                        },
                        {
                                "en": "quietly",
                                "kr": "조용히"
                        },
                        {
                                "en": "must",
                                "kr": "~해야 한다"
                        },
                        {
                                "en": "snack",
                                "kr": "간식"
                        },
                        {
                                "en": "hall",
                                "kr": "복도, 홀"
                        }
                ],
                "sentences": [
                        {
                                "en": "Can I take pictures here?",
                                "kr": "여기서 사진을 찍어도 되나요?"
                        },
                        {
                                "en": "Sure, you can.",
                                "kr": "물론이지, 찍어도 돼."
                        },
                        {
                                "en": "No, you may not take pictures.",
                                "kr": "아니요, 사진을 찍으면 안 됩니다."
                        },
                        {
                                "en": "Can I touch this dinosaur model?",
                                "kr": "이 공룡 모형을 만져도 되나요?"
                        },
                        {
                                "en": "Please don't touch the art pieces.",
                                "kr": "미술 작품을 만지지 마세요."
                        },
                        {
                                "en": "We must follow the museum rules.",
                                "kr": "우리는 박물관 규칙을 따라야 해."
                        },
                        {
                                "en": "Please speak quietly in the hall.",
                                "kr": "복도에서는 조용히 말해 주세요."
                        },
                        {
                                "en": "Can I eat snacks inside?",
                                "kr": "안에서 간식을 먹어도 되나요?"
                        },
                        {
                                "en": "No eating food in the exhibition room.",
                                "kr": "전시실에서는 음식물 섭취 금지입니다."
                        },
                        {
                                "en": "Thank you for keeping the rules.",
                                "kr": "규칙을 지켜 주셔서 감사합니다."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Excuse me, may I sit here next to you?",
                                "answer": "Yes, of course. Please sit down.",
                                "questionKr": "실례지만 옆에 앉아도 될까요?",
                                "answerKr": "네, 물론입니다. 앉으세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "May I take a picture of this painting?",
                                "answer": "No, you may not. Flash is not allowed.",
                                "questionKr": "이 그림 사진을 찍어도 될까요?",
                                "answerKr": "아니요, 안 됩니다. 플래시 금지예요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "May I borrow your colored pencils for a minute?",
                                "answer": "Sure, go ahead! Take whichever you need.",
                                "questionKr": "색연필 잠시 빌려도 될까?",
                                "answerKr": "물론이지, 어서 써! 필요한 거 가져가.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "May I open the window? It's warm in here.",
                                "answer": "Yes, please open it for fresh air.",
                                "questionKr": "창문 좀 열어도 될까요? 실내가 따뜻해요.",
                                "answerKr": "네, 상쾌한 공기 들어오게 열어주세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "May I wash my hands in the restroom?",
                                "answer": "Of course, it's down the hallway on your left.",
                                "questionKr": "화장실에서 손 씻어도 될까요?",
                                "answerKr": "물론이지, 복도 따라 왼쪽으로 가렴.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "May I use your sharpener?",
                                "answer": "No problem, here you are.",
                                "questionKr": "연필깎이 좀 써도 될까?",
                                "answerKr": "문제없어, 여기 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "May I come in, teacher?",
                                "answer": "Yes, come in and take your seat.",
                                "questionKr": "선생님, 들어가도 될까요?",
                                "answerKr": "그래, 들어와서 자리에 앉으렴.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "May I drink some water during recess?",
                                "answer": "Yes, you may drink from the water fountain.",
                                "questionKr": "쉬는 시간에 물 좀 마셔도 될까요?",
                                "answerKr": "응, 식수대에서 마시렴.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "May I touch this science model?",
                                "answer": "Be gentle, please. It is fragile.",
                                "questionKr": "이 과학 모형 만져봐도 되나요?",
                                "answerKr": "살살 다루렴. 깨지기 쉽단다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "May I bring my dog to school?",
                                "answer": "No, you may not bring pets to class.",
                                "questionKr": "학교에 강아지 데려와도 되나요?",
                                "answerKr": "아니요, 교실에 반려동물은 안 됩니다.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Excuse me, may I sit here next to you?",
                                "answer": "Yes, of course. Please sit down.",
                                "questionKr": "실례지만 옆에 앉아도 될까요?",
                                "answerKr": "네, 물론입니다. 앉으세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "May I take a picture of this painting?",
                                "answer": "No, you may not. Flash is not allowed.",
                                "questionKr": "이 그림 사진을 찍어도 될까요?",
                                "answerKr": "아니요, 안 됩니다. 플래시 금지예요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "May I borrow your colored pencils for a minute?",
                                "answer": "I broke all colored pencils in half.",
                                "questionKr": "색연필 잠시 빌려도 될까?",
                                "answerKr": "색연필 다 반으로 똑 부러뜨렸어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 4,
                                "question": "May I open the window? It's warm in here.",
                                "answer": "Yes, please open it for fresh air.",
                                "questionKr": "창문 좀 열어도 될까요? 실내가 따뜻해요.",
                                "answerKr": "네, 상쾌한 공기 들어오게 열어주세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "May I wash my hands in the restroom?",
                                "answer": "Of course, it's down the hallway on your left.",
                                "questionKr": "화장실에서 손 씻어도 될까요?",
                                "answerKr": "물론이지, 복도 따라 왼쪽으로 가렴.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "May I use your sharpener?",
                                "answer": "No problem, here you are.",
                                "questionKr": "연필깎이 좀 써도 될까?",
                                "answerKr": "문제없어, 여기 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "May I come in, teacher?",
                                "answer": "Never enter my classroom again!",
                                "questionKr": "선생님, 들어가도 될까요?",
                                "answerKr": "절대 내 교실에 들어오지 마라!",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 8,
                                "question": "May I drink some water during recess?",
                                "answer": "Yes, you may drink from the water fountain.",
                                "questionKr": "쉬는 시간에 물 좀 마셔도 될까요?",
                                "answerKr": "응, 식수대에서 마시렴.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "May I touch this science model?",
                                "answer": "Be gentle, please. It is fragile.",
                                "questionKr": "이 과학 모형 만져봐도 되나요?",
                                "answerKr": "살살 다루렴. 깨지기 쉽단다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "May I bring my dog to school?",
                                "answer": "No, you may not bring pets to class.",
                                "questionKr": "학교에 강아지 데려와도 되나요?",
                                "answerKr": "아니요, 교실에 반려동물은 안 됩니다.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~해도 되다, 할 수 있다]",
                                "word": "can",
                                "meaning": "~해도 되다, 할 수 있다",
                                "hint": "c___",
                                "answer": "can",
                                "options": [
                                        "take",
                                        "touch",
                                        "can",
                                        "picture"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [찍다, 취하다]",
                                "word": "take",
                                "meaning": "찍다, 취하다",
                                "hint": "t___",
                                "answer": "take",
                                "options": [
                                        "touch",
                                        "can",
                                        "take",
                                        "picture"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [사진]",
                                "word": "picture",
                                "meaning": "사진",
                                "hint": "p___",
                                "answer": "picture",
                                "options": [
                                        "touch",
                                        "can",
                                        "picture",
                                        "take"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [만지다]",
                                "word": "touch",
                                "meaning": "만지다",
                                "hint": "t___",
                                "answer": "touch",
                                "options": [
                                        "take",
                                        "picture",
                                        "can",
                                        "touch"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [들어가다]",
                                "word": "enter",
                                "meaning": "들어가다",
                                "hint": "e___",
                                "answer": "enter",
                                "options": [
                                        "can",
                                        "enter",
                                        "take",
                                        "picture"
                                ]
                        }
                ]
        },
        "5G_L04": {
                "id": "5G_L04",
                "grade": 5,
                "lesson": 4,
                "publisher": "천재 (함순애)",
                "name": "5학년 4단원",
                "title": "Whose Pen Is This?",
                "shortDesc": "Whose Pen Is This? (10문항)",
                "grammarPoint": "Whose pen is this?",
                "words": [
                        {
                                "en": "whose",
                                "kr": "누구의"
                        },
                        {
                                "en": "pen",
                                "kr": "펜"
                        },
                        {
                                "en": "umbrella",
                                "kr": "우산"
                        },
                        {
                                "en": "bag",
                                "kr": "가방"
                        },
                        {
                                "en": "mine",
                                "kr": "나의 것"
                        },
                        {
                                "en": "yours",
                                "kr": "너의 것"
                        },
                        {
                                "en": "hers",
                                "kr": "그녀의 것"
                        },
                        {
                                "en": "his",
                                "kr": "그의 것"
                        },
                        {
                                "en": "lost",
                                "kr": "잃어버린"
                        },
                        {
                                "en": "find",
                                "kr": "찾다"
                        },
                        {
                                "en": "bench",
                                "kr": "벤치"
                        },
                        {
                                "en": "check",
                                "kr": "확인하다"
                        }
                ],
                "sentences": [
                        {
                                "en": "Whose pen is this?",
                                "kr": "이것은 누구의 펜이니?"
                        },
                        {
                                "en": "It's mine. Thank you!",
                                "kr": "내 것이야. 고마워!"
                        },
                        {
                                "en": "Whose yellow umbrella is that?",
                                "kr": "저 노란 우산은 누구의 것이니?"
                        },
                        {
                                "en": "It's hers. She forgot it.",
                                "kr": "그녀 것이야. 깜빡 두고 갔어."
                        },
                        {
                                "en": "Is this notebook yours?",
                                "kr": "이 공책이 네 것이니?"
                        },
                        {
                                "en": "No, it's not mine. It's his.",
                                "kr": "아니, 내 것이 아니야. 그 친구 것이야."
                        },
                        {
                                "en": "I found a lost pencil case.",
                                "kr": "내가 분실된 필통을 하나 찾았어."
                        },
                        {
                                "en": "Check if this ruler is yours.",
                                "kr": "이 자가 네 것인지 확인해 봐."
                        },
                        {
                                "en": "Whose bag is on the bench?",
                                "kr": "벤치 위의 가방은 누구 것이니?"
                        },
                        {
                                "en": "Let's take it to the lost and found.",
                                "kr": "분실물 보관소로 가져가자."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Whose striped sock is this on the floor?",
                                "answer": "Oh, it's mine! It dropped from my gym bag.",
                                "questionKr": "바닥에 있는 이 줄무늬 양말 누구 거니?",
                                "answerKr": "아, 내 거야! 체육 가방에서 떨어졌어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Whose silver watch is on the teacher's desk?",
                                "answer": "It is Tony's watch. He was looking for it.",
                                "questionKr": "선생님 책상 위 은색 시계는 누구 거니?",
                                "answerKr": "토니 시계야. 찾고 있었어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Whose blue towel is hanging here?",
                                "answer": "It's hers. Yuna brought it for swimming class.",
                                "questionKr": "여기 걸린 파란 수건은 누구 거니?",
                                "answerKr": "유나 거야. 수영 시간에 가져왔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Is this baseball glove yours or his?",
                                "answer": "It's his. Jinu is the pitcher.",
                                "questionKr": "이 야구 글러브는 네 거니 걔 거니?",
                                "answerKr": "진우 거야. 진우가 투수잖아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Whose hairbrush is left in the dressing room?",
                                "answer": "It belongs to Minji.",
                                "questionKr": "탈의실에 남겨진 머리빗은 누구 거니?",
                                "answerKr": "민지 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Are these pink mittens yours?",
                                "answer": "No, they're not mine. Ask Bora.",
                                "questionKr": "이 분홍 벙어리장갑 네 거니?",
                                "answerKr": "아니, 내 게 아니야. 보라한테 물어봐.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Whose heavy winter coat is this?",
                                "answer": "It's our homeroom teacher's coat.",
                                "questionKr": "이 두꺼운 겨울 외투는 누구 것이니?",
                                "answerKr": "우리 담임 선생님 외투야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Did someone lose this transparent umbrella?",
                                "answer": "Yes, Kevin forgot his umbrella yesterday.",
                                "questionKr": "누가 이 투명 우산 잃어버렸니?",
                                "answerKr": "응, 케빈이 어제 우산을 두고 갔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Whose English notebook has a yellow sticker?",
                                "answer": "It is mine! My name is on the back.",
                                "questionKr": "노란 스티커 붙은 영어 공책은 누구 거니?",
                                "answerKr": "내 거야! 뒤에 내 이름 적혀 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Let's put all lost items in the lost-and-found box.",
                                "answer": "Great idea. Everyone will find their stuff.",
                                "questionKr": "분실물을 모두 분실물 보관함에 넣자.",
                                "answerKr": "좋은 생각이야. 다들 물건을 찾을 수 있을 거야.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Whose striped sock is this on the floor?",
                                "answer": "Oh, it's mine! It dropped from my gym bag.",
                                "questionKr": "바닥에 있는 이 줄무늬 양말 누구 거니?",
                                "answerKr": "아, 내 거야! 체육 가방에서 떨어졌어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Whose silver watch is on the teacher's desk?",
                                "answer": "It belongs to a museum dinosaur.",
                                "questionKr": "선생님 책상 위 은색 시계는 누구 거니?",
                                "answerKr": "박물관 공룡 거야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Whose blue towel is hanging here?",
                                "answer": "It's hers. Yuna brought it for swimming class.",
                                "questionKr": "여기 걸린 파란 수건은 누구 거니?",
                                "answerKr": "유나 거야. 수영 시간에 가져왔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Is this baseball glove yours or his?",
                                "answer": "It's his. Jinu is the pitcher.",
                                "questionKr": "이 야구 글러브는 네 거니 걔 거니?",
                                "answerKr": "진우 거야. 진우가 투수잖아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Whose hairbrush is left in the dressing room?",
                                "answer": "It belongs to Minji.",
                                "questionKr": "탈의실에 남겨진 머리빗은 누구 거니?",
                                "answerKr": "민지 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Are these pink mittens yours?",
                                "answer": "No, they're not mine. Ask Bora.",
                                "questionKr": "이 분홍 벙어리장갑 네 거니?",
                                "answerKr": "아니, 내 게 아니야. 보라한테 물어봐.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Whose heavy winter coat is this?",
                                "answer": "I found it in a pirate ship.",
                                "questionKr": "이 두꺼운 겨울 외투는 누구 것이니?",
                                "answerKr": "해적선에서 발견한 거야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 8,
                                "question": "Did someone lose this transparent umbrella?",
                                "answer": "Yes, Kevin forgot his umbrella yesterday.",
                                "questionKr": "누가 이 투명 우산 잃어버렸니?",
                                "answerKr": "응, 케빈이 어제 우산을 두고 갔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Whose English notebook has a yellow sticker?",
                                "answer": "It is mine! My name is on the back.",
                                "questionKr": "노란 스티커 붙은 영어 공책은 누구 거니?",
                                "answerKr": "내 거야! 뒤에 내 이름 적혀 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Let's put all lost items in the lost-and-found box.",
                                "answer": "Great idea. Everyone will find their stuff.",
                                "questionKr": "분실물을 모두 분실물 보관함에 넣자.",
                                "answerKr": "좋은 생각이야. 다들 물건을 찾을 수 있을 거야.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [누구의]",
                                "word": "whose",
                                "meaning": "누구의",
                                "hint": "w___",
                                "answer": "whose",
                                "options": [
                                        "pen",
                                        "bag",
                                        "whose",
                                        "umbrella"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [펜]",
                                "word": "pen",
                                "meaning": "펜",
                                "hint": "p___",
                                "answer": "pen",
                                "options": [
                                        "pen",
                                        "whose",
                                        "bag",
                                        "umbrella"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [우산]",
                                "word": "umbrella",
                                "meaning": "우산",
                                "hint": "u___",
                                "answer": "umbrella",
                                "options": [
                                        "pen",
                                        "bag",
                                        "umbrella",
                                        "whose"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [가방]",
                                "word": "bag",
                                "meaning": "가방",
                                "hint": "b___",
                                "answer": "bag",
                                "options": [
                                        "whose",
                                        "bag",
                                        "umbrella",
                                        "pen"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [나의 것]",
                                "word": "mine",
                                "meaning": "나의 것",
                                "hint": "m___",
                                "answer": "mine",
                                "options": [
                                        "whose",
                                        "mine",
                                        "pen",
                                        "umbrella"
                                ]
                        }
                ]
        },
        "5G_L05": {
                "id": "5G_L05",
                "grade": 5,
                "lesson": 5,
                "publisher": "천재 (함순애)",
                "name": "5학년 5단원",
                "title": "Let's Go Shopping",
                "shortDesc": "Let's Go Shopping (10문항)",
                "grammarPoint": "Let's go shopping this Saturday.",
                "words": [
                        {
                                "en": "shopping",
                                "kr": "쇼핑"
                        },
                        {
                                "en": "market",
                                "kr": "시장"
                        },
                        {
                                "en": "mall",
                                "kr": "쇼핑몰"
                        },
                        {
                                "en": "buy",
                                "kr": "사다"
                        },
                        {
                                "en": "clothes",
                                "kr": "옷"
                        },
                        {
                                "en": "sneakers",
                                "kr": "운동화"
                        },
                        {
                                "en": "backpack",
                                "kr": "배낭, 책가방"
                        },
                        {
                                "en": "look for",
                                "kr": "~을 찾다"
                        },
                        {
                                "en": "try on",
                                "kr": "입어 보다"
                        },
                        {
                                "en": "fitting room",
                                "kr": "탈의실"
                        },
                        {
                                "en": "jacket",
                                "kr": "재킷"
                        },
                        {
                                "en": "together",
                                "kr": "함께"
                        }
                ],
                "sentences": [
                        {
                                "en": "Let's go shopping this Saturday.",
                                "kr": "이번 주 토요일에 쇼핑하러 가자."
                        },
                        {
                                "en": "Sounds great! Where shall we go?",
                                "kr": "좋아! 우리 어디로 갈까?"
                        },
                        {
                                "en": "Let's visit the traditional market.",
                                "kr": "전통 시장에 가 보자."
                        },
                        {
                                "en": "I want to buy a new backpack.",
                                "kr": "나는 새 책가방을 사고 싶어."
                        },
                        {
                                "en": "May I help you find something?",
                                "kr": "무엇을 찾는 데 도와드릴까요?"
                        },
                        {
                                "en": "I'm looking for comfortable sneakers.",
                                "kr": "편안한 운동화를 찾고 있어요."
                        },
                        {
                                "en": "How about this blue jacket?",
                                "kr": "이 파란 재킷은 어때요?"
                        },
                        {
                                "en": "Can I try it on?",
                                "kr": "입어 봐도 될까요?"
                        },
                        {
                                "en": "The fitting room is over there.",
                                "kr": "탈의실은 저쪽에 있습니다."
                        },
                        {
                                "en": "Shopping with friends is so fun!",
                                "kr": "친구들과 쇼핑하는 건 정말 재미있어!"
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "What's your favorite subject in fifth grade?",
                                "answer": "My favorite subject is science because I love experiments.",
                                "questionKr": "5학년에서 가장 좋아하는 과목은 뭐니?",
                                "answerKr": "난 실험을 좋아해서 과학을 제일 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Do you like math class?",
                                "answer": "Yes, solving difficult puzzles is so much fun.",
                                "questionKr": "수학 수업 좋아하니?",
                                "answerKr": "응, 어려운 문제를 푸는 게 정말 재미있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Why do you like art class so much?",
                                "answer": "Because I can draw and paint anything freely.",
                                "questionKr": "미술 시간을 왜 그렇게 좋아하니?",
                                "answerKr": "자유롭게 그리고 칠할 수 있기 때문이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "What subject do we have on Thursday afternoon?",
                                "answer": "We have PE and music class.",
                                "questionKr": "목요일 오후에 무슨 과목 수업이 있지?",
                                "answerKr": "체육과 음악 수업이 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Who is your English teacher?",
                                "answer": "Teacher Emily teaches us interesting English songs.",
                                "questionKr": "영어 선생님은 누구시니?",
                                "answerKr": "에밀리 선생님께서 재미있는 영어 노래를 가르쳐주셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Do you enjoy playing musical instruments in music class?",
                                "answer": "Yes, I play the recorder and xylophone.",
                                "questionKr": "음악 시간에 악기 연주하는 걸 즐기니?",
                                "answerKr": "응, 리코더와 실로폰을 연주해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Why is history important to learn?",
                                "answer": "Because it teaches us wisdom from our ancestors.",
                                "questionKr": "역사를 배우는 건 왜 중요할까?",
                                "answerKr": "조상들의 지혜를 배울 수 있기 때문이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "What do you like doing in PE class?",
                                "answer": "I love playing dodgeball with my classmates.",
                                "questionKr": "체육 시간에 뭐 하는 걸 좋아하니?",
                                "answerKr": "친구들과 피구하는 걸 정말 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Is Korean grammar difficult for you?",
                                "answer": "It is a bit tricky, but reading stories is fun.",
                                "questionKr": "국어 문법이 어렵니?",
                                "answerKr": "조금 까다롭지만, 이야기 읽는 건 재밌어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Let's study together in the library!",
                                "answer": "Great idea! Team study is always helpful.",
                                "questionKr": "도서관에서 같이 공부하자!",
                                "answerKr": "좋은 생각이야! 함께 공부하면 늘 도움이 돼.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "What's your favorite subject in fifth grade?",
                                "answer": "My favorite subject is science because I love experiments.",
                                "questionKr": "5학년에서 가장 좋아하는 과목은 뭐니?",
                                "answerKr": "난 실험을 좋아해서 과학을 제일 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Do you like math class?",
                                "answer": "Numbers give me severe nightmares.",
                                "questionKr": "수학 수업 좋아하니?",
                                "answerKr": "숫자만 보면 악몽을 꿔.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Why do you like art class so much?",
                                "answer": "Because I can draw and paint anything freely.",
                                "questionKr": "미술 시간을 왜 그렇게 좋아하니?",
                                "answerKr": "자유롭게 그리고 칠할 수 있기 때문이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "What subject do we have on Thursday afternoon?",
                                "answer": "We have PE and music class.",
                                "questionKr": "목요일 오후에 무슨 과목 수업이 있지?",
                                "answerKr": "체육과 음악 수업이 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Who is your English teacher?",
                                "answer": "Teacher Emily teaches us interesting English songs.",
                                "questionKr": "영어 선생님은 누구시니?",
                                "answerKr": "에밀리 선생님께서 재미있는 영어 노래를 가르쳐주셔.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Do you enjoy playing musical instruments in music class?",
                                "answer": "I smash all instruments to pieces.",
                                "questionKr": "음악 시간에 악기 연주하는 걸 즐기니?",
                                "answerKr": "난 모든 악기를 산산조각 내.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 7,
                                "question": "Why is history important to learn?",
                                "answer": "Because it teaches us wisdom from our ancestors.",
                                "questionKr": "역사를 배우는 건 왜 중요할까?",
                                "answerKr": "조상들의 지혜를 배울 수 있기 때문이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "What do you like doing in PE class?",
                                "answer": "I love playing dodgeball with my classmates.",
                                "questionKr": "체육 시간에 뭐 하는 걸 좋아하니?",
                                "answerKr": "친구들과 피구하는 걸 정말 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Is Korean grammar difficult for you?",
                                "answer": "It is a bit tricky, but reading stories is fun.",
                                "questionKr": "국어 문법이 어렵니?",
                                "answerKr": "조금 까다롭지만, 이야기 읽는 건 재밌어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Let's study together in the library!",
                                "answer": "Great idea! Team study is always helpful.",
                                "questionKr": "도서관에서 같이 공부하자!",
                                "answerKr": "좋은 생각이야! 함께 공부하면 늘 도움이 돼.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [쇼핑]",
                                "word": "shopping",
                                "meaning": "쇼핑",
                                "hint": "s___",
                                "answer": "shopping",
                                "options": [
                                        "buy",
                                        "market",
                                        "mall",
                                        "shopping"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [시장]",
                                "word": "market",
                                "meaning": "시장",
                                "hint": "m___",
                                "answer": "market",
                                "options": [
                                        "shopping",
                                        "market",
                                        "mall",
                                        "buy"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [쇼핑몰]",
                                "word": "mall",
                                "meaning": "쇼핑몰",
                                "hint": "m___",
                                "answer": "mall",
                                "options": [
                                        "mall",
                                        "buy",
                                        "shopping",
                                        "market"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [사다]",
                                "word": "buy",
                                "meaning": "사다",
                                "hint": "b___",
                                "answer": "buy",
                                "options": [
                                        "market",
                                        "mall",
                                        "buy",
                                        "shopping"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [옷]",
                                "word": "clothes",
                                "meaning": "옷",
                                "hint": "c___",
                                "answer": "clothes",
                                "options": [
                                        "clothes",
                                        "shopping",
                                        "market",
                                        "mall"
                                ]
                        }
                ]
        },
        "5G_L06": {
                "id": "5G_L06",
                "grade": 5,
                "lesson": 6,
                "publisher": "천재 (함순애)",
                "name": "5학년 6단원",
                "title": "What Will You Do This Summer?",
                "shortDesc": "What Will You Do This Summer? (10문항)",
                "grammarPoint": "What will you do this summer?",
                "words": [
                        {
                                "en": "summer",
                                "kr": "여름"
                        },
                        {
                                "en": "vacation",
                                "kr": "방학, 휴가"
                        },
                        {
                                "en": "will",
                                "kr": "~할 것이다"
                        },
                        {
                                "en": "visit",
                                "kr": "방문하다"
                        },
                        {
                                "en": "grandparents",
                                "kr": "조부모님"
                        },
                        {
                                "en": "camp",
                                "kr": "캠핑하다"
                        },
                        {
                                "en": "beach",
                                "kr": "해변"
                        },
                        {
                                "en": "travel",
                                "kr": "여행하다"
                        },
                        {
                                "en": "swim",
                                "kr": "수영하다"
                        },
                        {
                                "en": "island",
                                "kr": "섬"
                        },
                        {
                                "en": "plan",
                                "kr": "계획"
                        },
                        {
                                "en": "practice",
                                "kr": "연습하다"
                        }
                ],
                "sentences": [
                        {
                                "en": "What will you do this summer?",
                                "kr": "이번 여름에 무엇을 할 거니?"
                        },
                        {
                                "en": "I'll visit my grandparents in Busan.",
                                "kr": "나는 부산에 계신 조부모님 댁을 방문할 거야."
                        },
                        {
                                "en": "I will go camping with my family.",
                                "kr": "나는 가족과 함께 캠핑을 갈 거야."
                        },
                        {
                                "en": "Will you travel to Jeju Island?",
                                "kr": "제주도로 여행을 갈 거니?"
                        },
                        {
                                "en": "Yes, we will swim at the beach.",
                                "kr": "응, 우리는 해변에서 수영할 거야."
                        },
                        {
                                "en": "I plan to read ten books this summer.",
                                "kr": "나는 이번 여름에 책 10권을 읽을 계획이야."
                        },
                        {
                                "en": "That sounds like a wonderful plan!",
                                "kr": "정말 멋진 계획인 것 같아!"
                        },
                        {
                                "en": "Have a safe and happy summer vacation.",
                                "kr": "안전하고 즐거운 여름 방학 보내렴."
                        },
                        {
                                "en": "I will practice English every day.",
                                "kr": "나는 매일 영어를 연습할 거야."
                        },
                        {
                                "en": "I can't wait for summer vacation!",
                                "kr": "여름 방학이 너무 기다려져!"
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Excuse me, where is the ice cream store?",
                                "answer": "Go straight two blocks and turn right.",
                                "questionKr": "실례지만 아이스크림 가게 어디 있나요?",
                                "answerKr": "두 블록 곧장 가서 오른쪽으로 도세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Where is the city library from here?",
                                "answer": "It is next to the post office.",
                                "questionKr": "여기서 시립 도서관이 어디에 있나요?",
                                "answerKr": "우체국 바로 옆에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "How do I get to the bakery?",
                                "answer": "Go straight and turn left at the corner.",
                                "questionKr": "빵집에 어떻게 가나요?",
                                "answerKr": "곧장 가시다가 모퉁이에서 왼쪽으로 도세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Where is the nearest bank?",
                                "answer": "It is between the bookstore and hospital.",
                                "questionKr": "가장 가까운 은행이 어디 있나요?",
                                "answerKr": "서점과 병원 사이에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Is the history museum far from here?",
                                "answer": "No, it's just a five-minute walk.",
                                "questionKr": "역사 박물관이 여기서 먼가요?",
                                "answerKr": "아니요, 걸어서 5분 거리예요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Where can I mail this letter?",
                                "answer": "The post office is across from the park.",
                                "questionKr": "이 편지 어디서 부칠 수 있나요?",
                                "answerKr": "우체국이 공원 맞은편에 있어요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Excuse me, is this the way to the subway station?",
                                "answer": "Yes, keep going straight for one block.",
                                "questionKr": "실례지만 지하철역 가는 길이 맞나요?",
                                "answerKr": "네, 한 블록 계속 곧장 가세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Where is the police station?",
                                "answer": "It is behind the fire station.",
                                "questionKr": "경찰서가 어디 있나요?",
                                "answerKr": "소방서 뒤편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "You can't miss the big green sign!",
                                "answer": "Thank you for the kind directions.",
                                "questionKr": "큰 초록색 간판을 쉽게 찾으실 거예요!",
                                "answerKr": "친절한 길 안내 감사합니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Have a wonderful day in our town!",
                                "answer": "Thank you, you too!",
                                "questionKr": "우리 마을에서 좋은 하루 보내세요!",
                                "answerKr": "감사합니다, 당신도요!",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Excuse me, where is the ice cream store?",
                                "answer": "Go straight two blocks and turn right.",
                                "questionKr": "실례지만 아이스크림 가게 어디 있나요?",
                                "answerKr": "두 블록 곧장 가서 오른쪽으로 도세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Where is the city library from here?",
                                "answer": "It sank to the bottom of the ocean.",
                                "questionKr": "여기서 시립 도서관이 어디에 있나요?",
                                "answerKr": "도서관은 바다 밑으로 가라앉았어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "How do I get to the bakery?",
                                "answer": "Go straight and turn left at the corner.",
                                "questionKr": "빵집에 어떻게 가나요?",
                                "answerKr": "곧장 가시다가 모퉁이에서 왼쪽으로 도세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Where is the nearest bank?",
                                "answer": "It is between the bookstore and hospital.",
                                "questionKr": "가장 가까운 은행이 어디 있나요?",
                                "answerKr": "서점과 병원 사이에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Is the history museum far from here?",
                                "answer": "It is twenty light years away.",
                                "questionKr": "역사 박물관이 여기서 먼가요?",
                                "answerKr": "20광년이나 멀리 떨어져 있어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Where can I mail this letter?",
                                "answer": "The post office is across from the park.",
                                "questionKr": "이 편지 어디서 부칠 수 있나요?",
                                "answerKr": "우체국이 공원 맞은편에 있어요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Excuse me, is this the way to the subway station?",
                                "answer": "Yes, keep going straight for one block.",
                                "questionKr": "실례지만 지하철역 가는 길이 맞나요?",
                                "answerKr": "네, 한 블록 계속 곧장 가세요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Where is the police station?",
                                "answer": "It is behind the fire station.",
                                "questionKr": "경찰서가 어디 있나요?",
                                "answerKr": "소방서 뒤편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "You can't miss the big green sign!",
                                "answer": "Thank you for the kind directions.",
                                "questionKr": "큰 초록색 간판을 쉽게 찾으실 거예요!",
                                "answerKr": "친절한 길 안내 감사합니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Have a wonderful day in our town!",
                                "answer": "Thank you, you too!",
                                "questionKr": "우리 마을에서 좋은 하루 보내세요!",
                                "answerKr": "감사합니다, 당신도요!",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [여름]",
                                "word": "summer",
                                "meaning": "여름",
                                "hint": "s___",
                                "answer": "summer",
                                "options": [
                                        "vacation",
                                        "visit",
                                        "will",
                                        "summer"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [방학, 휴가]",
                                "word": "vacation",
                                "meaning": "방학, 휴가",
                                "hint": "v___",
                                "answer": "vacation",
                                "options": [
                                        "vacation",
                                        "visit",
                                        "will",
                                        "summer"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~할 것이다]",
                                "word": "will",
                                "meaning": "~할 것이다",
                                "hint": "w___",
                                "answer": "will",
                                "options": [
                                        "will",
                                        "summer",
                                        "visit",
                                        "vacation"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [방문하다]",
                                "word": "visit",
                                "meaning": "방문하다",
                                "hint": "v___",
                                "answer": "visit",
                                "options": [
                                        "vacation",
                                        "visit",
                                        "will",
                                        "summer"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [조부모님]",
                                "word": "grandparents",
                                "meaning": "조부모님",
                                "hint": "g___",
                                "answer": "grandparents",
                                "options": [
                                        "will",
                                        "grandparents",
                                        "summer",
                                        "vacation"
                                ]
                        }
                ]
        },
        "5G_L07": {
                "id": "5G_L07",
                "grade": 5,
                "lesson": 7,
                "publisher": "천재 (함순애)",
                "name": "5학년 7단원",
                "title": "I Went to a Watermelon Festival",
                "shortDesc": "I Went to a Watermelon Festival (10문항)",
                "grammarPoint": "What did you do yesterday?",
                "words": [
                        {
                                "en": "went",
                                "kr": "갔다 (go의 과거)"
                        },
                        {
                                "en": "festival",
                                "kr": "축제"
                        },
                        {
                                "en": "watermelon",
                                "kr": "수박"
                        },
                        {
                                "en": "ate",
                                "kr": "먹었다 (eat의 과거)"
                        },
                        {
                                "en": "saw",
                                "kr": "보았다 (see의 과거)"
                        },
                        {
                                "en": "played",
                                "kr": "놀았다 (play의 과거)"
                        },
                        {
                                "en": "exciting",
                                "kr": "신나는"
                        },
                        {
                                "en": "yesterday",
                                "kr": "어제"
                        },
                        {
                                "en": "performance",
                                "kr": "공연"
                        },
                        {
                                "en": "took",
                                "kr": "찍었다 (take의 과거)"
                        },
                        {
                                "en": "memory",
                                "kr": "추억, 기억"
                        },
                        {
                                "en": "delicious",
                                "kr": "맛있는"
                        }
                ],
                "sentences": [
                        {
                                "en": "What did you do yesterday?",
                                "kr": "너 어제 무엇을 했니?"
                        },
                        {
                                "en": "I went to a watermelon festival.",
                                "kr": "나는 수박 축제에 갔어."
                        },
                        {
                                "en": "I ate sweet watermelon there.",
                                "kr": "나는 거기서 달콤한 수박을 먹었어."
                        },
                        {
                                "en": "What did you see at the festival?",
                                "kr": "축제에서 무엇을 보았니?"
                        },
                        {
                                "en": "We saw exciting music performances.",
                                "kr": "우리는 신나는 음악 공연을 보았어."
                        },
                        {
                                "en": "I played traditional games with friends.",
                                "kr": "나는 친구들과 전통 놀이를 했어."
                        },
                        {
                                "en": "Did you take any photos?",
                                "kr": "사진 좀 찍었니?"
                        },
                        {
                                "en": "Yes, I took a lot of great photos.",
                                "kr": "응, 멋진 사진을 많이 찍었어."
                        },
                        {
                                "en": "It was the best day of the summer!",
                                "kr": "올여름 최고의 날이었어!"
                        },
                        {
                                "en": "I had wonderful memories with my family.",
                                "kr": "가족과 멋진 추억을 만들었어."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "What did you do during the holiday?",
                                "answer": "I visited my uncle on Jeju Island.",
                                "questionKr": "연휴 동안 무엇을 했니?",
                                "answerKr": "제주도에 계신 삼촌 댁에 다녀왔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "What did you see at the farm?",
                                "answer": "I saw sheep, cows, and horses.",
                                "questionKr": "농장에서 무엇을 보았니?",
                                "answerKr": "양, 소, 그리고 말들을 보았어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Did you ride a horse?",
                                "answer": "Yes, I rode a gentle brown pony.",
                                "questionKr": "말 타보았니?",
                                "answerKr": "응, 온순한 갈색 조랑말을 탔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "What delicious local food did you eat?",
                                "answer": "We ate sweet Jeju tangerines and pork.",
                                "questionKr": "어떤 맛있는 지역 음식을 먹었니?",
                                "answerKr": "달콤한 제주 귤과 흑돼지를 먹었어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Did you swim in the emerald sea?",
                                "answer": "Yes, the water was so clean and refreshing.",
                                "questionKr": "에메랄드빛 바다에서 수영했니?",
                                "answerKr": "응, 물이 정말 맑고 시원했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Did you climb Hallasan mountain?",
                                "answer": "Yes, we hiked up to the peak.",
                                "questionKr": "한라산에 올라갔니?",
                                "answerKr": "응, 정상까지 하이킹했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "What souvenir did you buy?",
                                "answer": "I bought a small stone grandfather statue.",
                                "questionKr": "어떤 기념품을 샀니?",
                                "answerKr": "작은 돌하르방 인형을 샀어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Did you take pictures with your uncle?",
                                "answer": "Yes, we took a lot of family selfies.",
                                "questionKr": "삼촌과 사진 찍었니?",
                                "answerKr": "응, 가족 셀카를 많이 찍었어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "How was the airplane flight?",
                                "answer": "It was smooth and very exciting.",
                                "questionKr": "비행기 탑승은 어땠니?",
                                "answerKr": "흔들림 없이 아주 신났어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you want to visit Jeju Island again?",
                                "answer": "Definitely, I want to go every summer!",
                                "questionKr": "제주도에 다시 가고 싶니?",
                                "answerKr": "물론이지, 매년 여름마다 가고 싶어!",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "What did you do during the holiday?",
                                "answer": "I visited my uncle on Jeju Island.",
                                "questionKr": "연휴 동안 무엇을 했니?",
                                "answerKr": "제주도에 계신 삼촌 댁에 다녀왔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "What did you see at the farm?",
                                "answer": "I saw alien flying saucers.",
                                "questionKr": "농장에서 무엇을 보았니?",
                                "answerKr": "외계인 비행접시를 봤어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Did you ride a horse?",
                                "answer": "Yes, I rode a gentle brown pony.",
                                "questionKr": "말 타보았니?",
                                "answerKr": "응, 온순한 갈색 조랑말을 탔어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "What delicious local food did you eat?",
                                "answer": "We ate sweet Jeju tangerines and pork.",
                                "questionKr": "어떤 맛있는 지역 음식을 먹었니?",
                                "answerKr": "달콤한 제주 귤과 흑돼지를 먹었어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Did you swim in the emerald sea?",
                                "answer": "No, I am allergic to all liquids.",
                                "questionKr": "에메랄드빛 바다에서 수영했니?",
                                "answerKr": "아니, 난 모든 액체 알레르기가 있어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Did you climb Hallasan mountain?",
                                "answer": "Yes, we hiked up to the peak.",
                                "questionKr": "한라산에 올라갔니?",
                                "answerKr": "응, 정상까지 하이킹했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "What souvenir did you buy?",
                                "answer": "I bought a small stone grandfather statue.",
                                "questionKr": "어떤 기념품을 샀니?",
                                "answerKr": "작은 돌하르방 인형을 샀어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Did you take pictures with your uncle?",
                                "answer": "Yes, we took a lot of family selfies.",
                                "questionKr": "삼촌과 사진 찍었니?",
                                "answerKr": "응, 가족 셀카를 많이 찍었어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "How was the airplane flight?",
                                "answer": "It was smooth and very exciting.",
                                "questionKr": "비행기 탑승은 어땠니?",
                                "answerKr": "흔들림 없이 아주 신났어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you want to visit Jeju Island again?",
                                "answer": "Definitely, I want to go every summer!",
                                "questionKr": "제주도에 다시 가고 싶니?",
                                "answerKr": "물론이지, 매년 여름마다 가고 싶어!",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [갔다 (go의 과거)]",
                                "word": "went",
                                "meaning": "갔다 (go의 과거)",
                                "hint": "w___",
                                "answer": "went",
                                "options": [
                                        "ate",
                                        "went",
                                        "festival",
                                        "watermelon"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [축제]",
                                "word": "festival",
                                "meaning": "축제",
                                "hint": "f___",
                                "answer": "festival",
                                "options": [
                                        "went",
                                        "ate",
                                        "festival",
                                        "watermelon"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [수박]",
                                "word": "watermelon",
                                "meaning": "수박",
                                "hint": "w___",
                                "answer": "watermelon",
                                "options": [
                                        "went",
                                        "ate",
                                        "watermelon",
                                        "festival"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [먹었다 (eat의 과거)]",
                                "word": "ate",
                                "meaning": "먹었다 (eat의 과거)",
                                "hint": "a___",
                                "answer": "ate",
                                "options": [
                                        "watermelon",
                                        "festival",
                                        "ate",
                                        "went"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [보았다 (see의 과거)]",
                                "word": "saw",
                                "meaning": "보았다 (see의 과거)",
                                "hint": "s___",
                                "answer": "saw",
                                "options": [
                                        "went",
                                        "watermelon",
                                        "saw",
                                        "festival"
                                ]
                        }
                ]
        },
        "5G_L08": {
                "id": "5G_L08",
                "grade": 5,
                "lesson": 8,
                "publisher": "천재 (함순애)",
                "name": "5학년 8단원",
                "title": "What Would You Like?",
                "shortDesc": "What Would You Like? (10문항)",
                "grammarPoint": "May I take your order?",
                "words": [
                        {
                                "en": "would like",
                                "kr": "~을 원하다, 먹고 싶다"
                        },
                        {
                                "en": "order",
                                "kr": "주문하다"
                        },
                        {
                                "en": "sandwich",
                                "kr": "샌드위치"
                        },
                        {
                                "en": "soup",
                                "kr": "수프"
                        },
                        {
                                "en": "salad",
                                "kr": "샐러드"
                        },
                        {
                                "en": "juice",
                                "kr": "주스"
                        },
                        {
                                "en": "drink",
                                "kr": "마시다, 음료"
                        },
                        {
                                "en": "menu",
                                "kr": "메뉴"
                        },
                        {
                                "en": "ready",
                                "kr": "준비된"
                        },
                        {
                                "en": "cheese",
                                "kr": "치즈"
                        },
                        {
                                "en": "corn",
                                "kr": "옥수수"
                        },
                        {
                                "en": "warm",
                                "kr": "따뜻한"
                        }
                ],
                "sentences": [
                        {
                                "en": "May I take your order?",
                                "kr": "주문하시겠어요?"
                        },
                        {
                                "en": "What would you like to eat?",
                                "kr": "무엇을 드시겠어요?"
                        },
                        {
                                "en": "I'd like a cheese sandwich, please.",
                                "kr": "치즈 샌드위치 하나 주세요."
                        },
                        {
                                "en": "What would you like to drink?",
                                "kr": "마실 것은 무엇으로 하시겠어요?"
                        },
                        {
                                "en": "An apple juice, please.",
                                "kr": "사과 주스 하나 부탁해요."
                        },
                        {
                                "en": "Would you like soup or salad?",
                                "kr": "수프와 샐러드 중 어떤 것을 원하세요?"
                        },
                        {
                                "en": "Warm corn soup, please.",
                                "kr": "따뜻한 옥수수 수프 주세요."
                        },
                        {
                                "en": "For here or to go?",
                                "kr": "여기서 드시나요, 포장인가요?"
                        },
                        {
                                "en": "For here, please.",
                                "kr": "여기서 먹고 갈게요."
                        },
                        {
                                "en": "Your order will be ready soon.",
                                "kr": "주문하신 음식이 곧 준비됩니다."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Who is taller between you and Minsoo?",
                                "answer": "I am slightly taller than Minsoo.",
                                "questionKr": "너와 민수 중에 누가 더 키가 크니?",
                                "answerKr": "내가 민수보다 약간 더 키가 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Is a cheetah faster than a lion?",
                                "answer": "Yes, a cheetah is the fastest land animal.",
                                "questionKr": "치타가 사자보다 더 빠르니?",
                                "answerKr": "응, 치타는 육상 동물 중 가장 빨라.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Which animal is bigger, an elephant or a hippo?",
                                "answer": "An elephant is much bigger than a hippo.",
                                "questionKr": "코끼리와 하마 중 어느 동물이 더 크니?",
                                "answerKr": "코끼리가 하마보다 훨씬 더 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Is that giraffe taller than this tree?",
                                "answer": "Yes, the giraffe is taller than the tree.",
                                "questionKr": "저 기린이 이 나무보다 키가 크니?",
                                "answerKr": "응, 기린이 나무보다 키가 더 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Which box is heavier?",
                                "answer": "The book box is heavier than the toy box.",
                                "questionKr": "어느 상자가 더 무겁니?",
                                "answerKr": "책 상자가 장난감 상자보다 더 무거워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Is an airplane faster than a high-speed train?",
                                "answer": "Yes, airplanes fly much faster.",
                                "questionKr": "비행기가 고속열차보다 더 빠르니?",
                                "answerKr": "응, 비행기가 훨씬 더 빠르게 날아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Are you older than your cousin?",
                                "answer": "Yes, I am one year older than him.",
                                "questionKr": "사촌보다 나이가 더 많니?",
                                "answerKr": "응, 내가 사촌보다 한 살 더 많아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Is a blue whale bigger than a dinosaur?",
                                "answer": "Yes, blue whales are the biggest animals ever.",
                                "questionKr": "대왕고래가 공룡보다 더 크니?",
                                "answerKr": "응, 대왕고래는 역대 가장 큰 동물이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Which ball bounces higher?",
                                "answer": "The rubber ball bounces higher than the tennis ball.",
                                "questionKr": "어느 공이 더 높이 튀니?",
                                "answerKr": "고무공이 테니스공보다 더 높이 튀어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Who can run faster in your class?",
                                "answer": "Kevin runs faster than anyone else.",
                                "questionKr": "우리 반에서 누가 더 빨리 달릴 수 있니?",
                                "answerKr": "케빈이 다른 누구보다도 더 빨라.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Who is taller between you and Minsoo?",
                                "answer": "I am slightly taller than Minsoo.",
                                "questionKr": "너와 민수 중에 누가 더 키가 크니?",
                                "answerKr": "내가 민수보다 약간 더 키가 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Is a cheetah faster than a lion?",
                                "answer": "Snails run faster than cheetahs.",
                                "questionKr": "치타가 사자보다 더 빠르니?",
                                "answerKr": "달팽이가 치타보다 더 빠르게 뛰어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Which animal is bigger, an elephant or a hippo?",
                                "answer": "An elephant is much bigger than a hippo.",
                                "questionKr": "코끼리와 하마 중 어느 동물이 더 크니?",
                                "answerKr": "코끼리가 하마보다 훨씬 더 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Is that giraffe taller than this tree?",
                                "answer": "Yes, the giraffe is taller than the tree.",
                                "questionKr": "저 기린이 이 나무보다 키가 크니?",
                                "answerKr": "응, 기린이 나무보다 키가 더 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Which box is heavier?",
                                "answer": "A single feather weighs 100 tons.",
                                "questionKr": "어느 상자가 더 무겁니?",
                                "answerKr": "깃털 하나가 100톤이나 나가.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Is an airplane faster than a high-speed train?",
                                "answer": "Yes, airplanes fly much faster.",
                                "questionKr": "비행기가 고속열차보다 더 빠르니?",
                                "answerKr": "응, 비행기가 훨씬 더 빠르게 날아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Are you older than your cousin?",
                                "answer": "Yes, I am one year older than him.",
                                "questionKr": "사촌보다 나이가 더 많니?",
                                "answerKr": "응, 내가 사촌보다 한 살 더 많아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Is a blue whale bigger than a dinosaur?",
                                "answer": "Yes, blue whales are the biggest animals ever.",
                                "questionKr": "대왕고래가 공룡보다 더 크니?",
                                "answerKr": "응, 대왕고래는 역대 가장 큰 동물이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Which ball bounces higher?",
                                "answer": "The rubber ball bounces higher than the tennis ball.",
                                "questionKr": "어느 공이 더 높이 튀니?",
                                "answerKr": "고무공이 테니스공보다 더 높이 튀어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Who can run faster in your class?",
                                "answer": "Kevin runs faster than anyone else.",
                                "questionKr": "우리 반에서 누가 더 빨리 달릴 수 있니?",
                                "answerKr": "케빈이 다른 누구보다도 더 빨라.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~을 원하다, 먹고 싶다]",
                                "word": "would like",
                                "meaning": "~을 원하다, 먹고 싶다",
                                "hint": "w___",
                                "answer": "would like",
                                "options": [
                                        "would like",
                                        "soup",
                                        "sandwich",
                                        "order"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [주문하다]",
                                "word": "order",
                                "meaning": "주문하다",
                                "hint": "o___",
                                "answer": "order",
                                "options": [
                                        "would like",
                                        "order",
                                        "soup",
                                        "sandwich"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [샌드위치]",
                                "word": "sandwich",
                                "meaning": "샌드위치",
                                "hint": "s___",
                                "answer": "sandwich",
                                "options": [
                                        "sandwich",
                                        "would like",
                                        "soup",
                                        "order"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [수프]",
                                "word": "soup",
                                "meaning": "수프",
                                "hint": "s___",
                                "answer": "soup",
                                "options": [
                                        "would like",
                                        "sandwich",
                                        "order",
                                        "soup"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [샐러드]",
                                "word": "salad",
                                "meaning": "샐러드",
                                "hint": "s___",
                                "answer": "salad",
                                "options": [
                                        "would like",
                                        "sandwich",
                                        "salad",
                                        "order"
                                ]
                        }
                ]
        },
        "5G_L09": {
                "id": "5G_L09",
                "grade": 5,
                "lesson": 9,
                "publisher": "천재 (함순애)",
                "name": "5학년 9단원",
                "title": "They Are Twenty Thousand Won",
                "shortDesc": "They Are Twenty Thousand Won (10문항)",
                "grammarPoint": "How much are these gloves?",
                "words": [
                        {
                                "en": "twenty",
                                "kr": "이십 (20)"
                        },
                        {
                                "en": "thousand",
                                "kr": "천 (1000)"
                        },
                        {
                                "en": "hundred",
                                "kr": "백 (100)"
                        },
                        {
                                "en": "won",
                                "kr": "원 (화폐 단위)"
                        },
                        {
                                "en": "price",
                                "kr": "가격"
                        },
                        {
                                "en": "cost",
                                "kr": "비용이 들다"
                        },
                        {
                                "en": "expensive",
                                "kr": "비싼"
                        },
                        {
                                "en": "cheap",
                                "kr": "저렴한"
                        },
                        {
                                "en": "discount",
                                "kr": "할인"
                        },
                        {
                                "en": "cash",
                                "kr": "현금"
                        },
                        {
                                "en": "card",
                                "kr": "카드"
                        },
                        {
                                "en": "receipt",
                                "kr": "영수증"
                        }
                ],
                "sentences": [
                        {
                                "en": "How much are these gloves?",
                                "kr": "이 장갑들은 얼마인가요?"
                        },
                        {
                                "en": "They are twenty thousand won.",
                                "kr": "20,000원입니다."
                        },
                        {
                                "en": "How much is that red cap?",
                                "kr": "저 빨간 모자는 얼마인가요?"
                        },
                        {
                                "en": "It is ten thousand won.",
                                "kr": "10,000원입니다."
                        },
                        {
                                "en": "Can I get a small discount?",
                                "kr": "조금 깎아 주실 수 있나요?"
                        },
                        {
                                "en": "This shop has great quality clothes.",
                                "kr": "이 가게는 질 좋은 옷이 많아요."
                        },
                        {
                                "en": "Will you pay with cash or card?",
                                "kr": "현금으로 내시겠어요, 카드로 내시겠어요?"
                        },
                        {
                                "en": "I'll pay with cash.",
                                "kr": "현금으로 낼게요."
                        },
                        {
                                "en": "Here is your receipt and change.",
                                "kr": "여기 영수증과 거스름돈입니다."
                        },
                        {
                                "en": "Thank you for shopping with us!",
                                "kr": "저희 매장을 이용해 주셔서 감사합니다!"
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "What do you think about our school festival theme?",
                                "answer": "I think it is very creative and fun.",
                                "questionKr": "우리 학교 축제 주제 어떻게 생각하니?",
                                "answerKr": "아주 창의적이고 재미있다고 생각해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Do you agree with our team's project plan?",
                                "answer": "Yes, I completely agree with your proposal.",
                                "questionKr": "우리 팀 프로젝트 계획에 동의하니?",
                                "answerKr": "응, 너희 제안에 전적으로 동의해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What do you think about doing more group work?",
                                "answer": "I think group work helps us learn cooperation.",
                                "questionKr": "모둠 활동을 더 많이 하는 것에 대해 어떻게 생각하니?",
                                "answerKr": "협동심을 배우는 데 도움이 된다고 생각해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Was that math question difficult or easy?",
                                "answer": "I think it was a bit difficult at first.",
                                "questionKr": "그 수학 문제 어려웠니, 쉬웠니?",
                                "answerKr": "처음에는 좀 어려웠던 것 같아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What is your honest opinion about this poster?",
                                "answer": "The colors are bright, but the letters are small.",
                                "questionKr": "이 포스터에 대한 솔직한 의견이 뭐니?",
                                "answerKr": "색감은 밝은데 글자가 좀 작아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Do you disagree with the class rule?",
                                "answer": "No, I think the rule is fair for everyone.",
                                "questionKr": "학급 규칙에 반대하니?",
                                "answerKr": "아니, 모두에게 공정하다고 생각해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "What do you think about reading books every day?",
                                "answer": "I think it expands our imagination.",
                                "questionKr": "매일 독서하는 것에 대해 어떻게 생각해?",
                                "answerKr": "상상력을 넓혀준다고 생각해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Let's share our ideas in the discussion.",
                                "answer": "Sure, listening to other opinions is important.",
                                "questionKr": "토론에서 우리 아이디어를 공유하자.",
                                "answerKr": "물론이지, 다른 의견을 듣는 건 중요해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Do you think we can win the basketball match?",
                                "answer": "Yes, if we practice hard, we will win!",
                                "questionKr": "우리가 농구 시합에서 이길 수 있을까?",
                                "answerKr": "응, 열심히 연습하면 이길 수 있어!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Thank you for sharing your valuable opinion.",
                                "answer": "My pleasure. Teamwork makes us stronger.",
                                "questionKr": "소중한 의견 공유해 줘서 고마워.",
                                "answerKr": "별말씀을. 팀워크가 우리를 더 강하게 만들어.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "What do you think about our school festival theme?",
                                "answer": "I think it is very creative and fun.",
                                "questionKr": "우리 학교 축제 주제 어떻게 생각하니?",
                                "answerKr": "아주 창의적이고 재미있다고 생각해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Do you agree with our team's project plan?",
                                "answer": "I will sabotage the entire project.",
                                "questionKr": "우리 팀 프로젝트 계획에 동의하니?",
                                "answerKr": "내가 프로젝트 전체를 망쳐버릴 거야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "What do you think about doing more group work?",
                                "answer": "I think group work helps us learn cooperation.",
                                "questionKr": "모둠 활동을 더 많이 하는 것에 대해 어떻게 생각하니?",
                                "answerKr": "협동심을 배우는 데 도움이 된다고 생각해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Was that math question difficult or easy?",
                                "answer": "I think it was a bit difficult at first.",
                                "questionKr": "그 수학 문제 어려웠니, 쉬웠니?",
                                "answerKr": "처음에는 좀 어려웠던 것 같아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What is your honest opinion about this poster?",
                                "answer": "I ripped the poster into dust.",
                                "questionKr": "이 포스터에 대한 솔직한 의견이 뭐니?",
                                "answerKr": "포스터를 가루로 찢어버렸어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Do you disagree with the class rule?",
                                "answer": "No, I think the rule is fair for everyone.",
                                "questionKr": "학급 규칙에 반대하니?",
                                "answerKr": "아니, 모두에게 공정하다고 생각해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "What do you think about reading books every day?",
                                "answer": "I think it expands our imagination.",
                                "questionKr": "매일 독서하는 것에 대해 어떻게 생각해?",
                                "answerKr": "상상력을 넓혀준다고 생각해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Let's share our ideas in the discussion.",
                                "answer": "Sure, listening to other opinions is important.",
                                "questionKr": "토론에서 우리 아이디어를 공유하자.",
                                "answerKr": "물론이지, 다른 의견을 듣는 건 중요해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Do you think we can win the basketball match?",
                                "answer": "Yes, if we practice hard, we will win!",
                                "questionKr": "우리가 농구 시합에서 이길 수 있을까?",
                                "answerKr": "응, 열심히 연습하면 이길 수 있어!",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Thank you for sharing your valuable opinion.",
                                "answer": "My pleasure. Teamwork makes us stronger.",
                                "questionKr": "소중한 의견 공유해 줘서 고마워.",
                                "answerKr": "별말씀을. 팀워크가 우리를 더 강하게 만들어.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [이십 (20)]",
                                "word": "twenty",
                                "meaning": "이십 (20)",
                                "hint": "t___",
                                "answer": "twenty",
                                "options": [
                                        "thousand",
                                        "hundred",
                                        "twenty",
                                        "won"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [천 (1000)]",
                                "word": "thousand",
                                "meaning": "천 (1000)",
                                "hint": "t___",
                                "answer": "thousand",
                                "options": [
                                        "thousand",
                                        "twenty",
                                        "hundred",
                                        "won"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [백 (100)]",
                                "word": "hundred",
                                "meaning": "백 (100)",
                                "hint": "h___",
                                "answer": "hundred",
                                "options": [
                                        "twenty",
                                        "won",
                                        "thousand",
                                        "hundred"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [원 (화폐 단위)]",
                                "word": "won",
                                "meaning": "원 (화폐 단위)",
                                "hint": "w___",
                                "answer": "won",
                                "options": [
                                        "twenty",
                                        "won",
                                        "hundred",
                                        "thousand"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [가격]",
                                "word": "price",
                                "meaning": "가격",
                                "hint": "p___",
                                "answer": "price",
                                "options": [
                                        "price",
                                        "hundred",
                                        "twenty",
                                        "thousand"
                                ]
                        }
                ]
        },
        "5G_L10": {
                "id": "5G_L10",
                "grade": 5,
                "lesson": 10,
                "publisher": "천재 (함순애)",
                "name": "5학년 10단원",
                "title": "What Time Do You Get Up?",
                "shortDesc": "What Time Do You Get Up? (10문항)",
                "grammarPoint": "What time do you get up?",
                "words": [
                        {
                                "en": "get up",
                                "kr": "일어나다"
                        },
                        {
                                "en": "breakfast",
                                "kr": "아침 식사"
                        },
                        {
                                "en": "school",
                                "kr": "학교"
                        },
                        {
                                "en": "bedtime",
                                "kr": "취침 시간"
                        },
                        {
                                "en": "morning",
                                "kr": "아침"
                        },
                        {
                                "en": "afternoon",
                                "kr": "오후"
                        },
                        {
                                "en": "evening",
                                "kr": "저녁"
                        },
                        {
                                "en": "schedule",
                                "kr": "일정"
                        },
                        {
                                "en": "routine",
                                "kr": "일과"
                        },
                        {
                                "en": "usually",
                                "kr": "보통, 대개"
                        },
                        {
                                "en": "homework",
                                "kr": "숙제"
                        },
                        {
                                "en": "sharp",
                                "kr": "정각에"
                        }
                ],
                "sentences": [
                        {
                                "en": "What time do you get up?",
                                "kr": "너 몇 시에 일어나니?"
                        },
                        {
                                "en": "I get up at seven o'clock.",
                                "kr": "나는 7시에 일어나."
                        },
                        {
                                "en": "What time do you eat breakfast?",
                                "kr": "너 몇 시에 아침을 먹니?"
                        },
                        {
                                "en": "I eat breakfast at seven thirty.",
                                "kr": "나는 7시 30분에 아침을 먹어."
                        },
                        {
                                "en": "I walk to school at eight o'clock.",
                                "kr": "나는 8시에 학교로 걸어가."
                        },
                        {
                                "en": "School starts at nine o'clock sharp.",
                                "kr": "학교는 9시 정각에 시작해."
                        },
                        {
                                "en": "What time do you do your homework?",
                                "kr": "너 몇 시에 숙제를 하니?"
                        },
                        {
                                "en": "I do my homework at five in the afternoon.",
                                "kr": "나는 오후 5시에 숙제를 해."
                        },
                        {
                                "en": "What time do you go to bed?",
                                "kr": "너 몇 시에 잠자리에 드니?"
                        },
                        {
                                "en": "I go to bed at ten o'clock.",
                                "kr": "나는 10시에 자러 가."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Who wrote this famous children's storybook?",
                                "answer": "Hans Christian Andersen wrote it.",
                                "questionKr": "이 유명한 동화책은 누가 썼니?",
                                "answerKr": "안데르센 작가가 썼어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Who created our scientific alphabet, Hangeul?",
                                "answer": "King Sejong the Great created Hangeul in 1443.",
                                "questionKr": "과학적인 우리 글자 한글은 누가 창제하셨니?",
                                "answerKr": "세종대왕께서 1443년에 창제하셨어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Who painted the mysterious Mona Lisa?",
                                "answer": "Leonardo da Vinci painted the masterpiece.",
                                "questionKr": "신비로운 모나리자는 누가 그렸니?",
                                "answerKr": "레오나르도 다빈치가 그 명작을 그렸어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Who invented the first motorized airplane?",
                                "answer": "The Wright brothers invented and flew it.",
                                "questionKr": "최초의 동력 비행기는 누가 발명했니?",
                                "answerKr": "라이트 형제가 발명해서 날렸어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Who built the famous turtle ship (Geobukseon)?",
                                "answer": "Admiral Yi Sun-sin designed and built it.",
                                "questionKr": "유명한 거북선은 누가 건조했니?",
                                "answerKr": "이순신 장군께서 설계하고 건조하셨어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Who discovered the laws of universal gravity?",
                                "answer": "Sir Isaac Newton discovered gravity.",
                                "questionKr": "만유인력의 법칙은 누가 발견했니?",
                                "answerKr": "아이작 뉴턴 경이 중력을 발견했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Who invented the electric light bulb?",
                                "answer": "Thomas Edison improved and commercialized it.",
                                "questionKr": "백열전구는 누가 발명했니?",
                                "answerKr": "토머스 에디슨이 개량하고 보급했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Who wrote the play Romeo and Juliet?",
                                "answer": "William Shakespeare wrote the tragedy.",
                                "questionKr": "로미오와 줄리엣 희곡은 누가 썼니?",
                                "answerKr": "윌리엄 셰익스피어가 비극을 썼어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Who composed the Four Seasons violin concertos?",
                                "answer": "Antonio Vivaldi composed them in Italy.",
                                "questionKr": "바이올린 협주곡 사계는 누가 작곡했니?",
                                "answerKr": "안토니오 비발디가 이탈리아에서 작곡했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Learning about great historical figures is inspiring!",
                                "answer": "Yes, we can learn a lot from their dedication.",
                                "questionKr": "위대한 역사적 인물들을 배우는 건 영감을 줘!",
                                "answerKr": "맞아, 그분들의 헌신에서 많은 걸 배울 수 있어.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Who wrote this famous children's storybook?",
                                "answer": "Hans Christian Andersen wrote it.",
                                "questionKr": "이 유명한 동화책은 누가 썼니?",
                                "answerKr": "안데르센 작가가 썼어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Who created our scientific alphabet, Hangeul?",
                                "answer": "A time-traveling robot made it yesterday.",
                                "questionKr": "과학적인 우리 글자 한글은 누가 창제하셨니?",
                                "answerKr": "어제 시간여행 로봇이 만들었어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Who painted the mysterious Mona Lisa?",
                                "answer": "Leonardo da Vinci painted the masterpiece.",
                                "questionKr": "신비로운 모나리자는 누가 그렸니?",
                                "answerKr": "레오나르도 다빈치가 그 명작을 그렸어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Who invented the first motorized airplane?",
                                "answer": "The Wright brothers invented and flew it.",
                                "questionKr": "최초의 동력 비행기는 누가 발명했니?",
                                "answerKr": "라이트 형제가 발명해서 날렸어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Who built the famous turtle ship (Geobukseon)?",
                                "answer": "Admiral Yi Sun-sin designed and built it.",
                                "questionKr": "유명한 거북선은 누가 건조했니?",
                                "answerKr": "이순신 장군께서 설계하고 건조하셨어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Who discovered the laws of universal gravity?",
                                "answer": "Sir Isaac Newton discovered gravity.",
                                "questionKr": "만유인력의 법칙은 누가 발견했니?",
                                "answerKr": "아이작 뉴턴 경이 중력을 발견했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Who invented the electric light bulb?",
                                "answer": "Thomas Edison improved and commercialized it.",
                                "questionKr": "백열전구는 누가 발명했니?",
                                "answerKr": "토머스 에디슨이 개량하고 보급했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Who wrote the play Romeo and Juliet?",
                                "answer": "I wrote it this morning during breakfast.",
                                "questionKr": "로미오와 줄리엣 희곡은 누가 썼니?",
                                "answerKr": "내가 오늘 아침 밥 먹으면서 썼어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 9,
                                "question": "Who composed the Four Seasons violin concertos?",
                                "answer": "Antonio Vivaldi composed them in Italy.",
                                "questionKr": "바이올린 협주곡 사계는 누가 작곡했니?",
                                "answerKr": "안토니오 비발디가 이탈리아에서 작곡했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Learning about great historical figures is inspiring!",
                                "answer": "Yes, we can learn a lot from their dedication.",
                                "questionKr": "위대한 역사적 인물들을 배우는 건 영감을 줘!",
                                "answerKr": "맞아, 그분들의 헌신에서 많은 걸 배울 수 있어.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [일어나다]",
                                "word": "get up",
                                "meaning": "일어나다",
                                "hint": "g___",
                                "answer": "get up",
                                "options": [
                                        "bedtime",
                                        "school",
                                        "breakfast",
                                        "get up"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [아침 식사]",
                                "word": "breakfast",
                                "meaning": "아침 식사",
                                "hint": "b___",
                                "answer": "breakfast",
                                "options": [
                                        "breakfast",
                                        "get up",
                                        "bedtime",
                                        "school"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [학교]",
                                "word": "school",
                                "meaning": "학교",
                                "hint": "s___",
                                "answer": "school",
                                "options": [
                                        "school",
                                        "get up",
                                        "bedtime",
                                        "breakfast"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [취침 시간]",
                                "word": "bedtime",
                                "meaning": "취침 시간",
                                "hint": "b___",
                                "answer": "bedtime",
                                "options": [
                                        "get up",
                                        "school",
                                        "breakfast",
                                        "bedtime"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [아침]",
                                "word": "morning",
                                "meaning": "아침",
                                "hint": "m___",
                                "answer": "morning",
                                "options": [
                                        "get up",
                                        "school",
                                        "breakfast",
                                        "morning"
                                ]
                        }
                ]
        },
        "5G_L11": {
                "id": "5G_L11",
                "grade": 5,
                "lesson": 11,
                "publisher": "천재 (함순애)",
                "name": "5학년 11단원",
                "title": "My Favorite Subject Is Math",
                "shortDesc": "My Favorite Subject Is Math (10문항)",
                "grammarPoint": "What's your favorite subject?",
                "words": [
                        {
                                "en": "subject",
                                "kr": "과목"
                        },
                        {
                                "en": "math",
                                "kr": "수학"
                        },
                        {
                                "en": "science",
                                "kr": "과학"
                        },
                        {
                                "en": "English",
                                "kr": "영어"
                        },
                        {
                                "en": "PE",
                                "kr": "체육"
                        },
                        {
                                "en": "art",
                                "kr": "미술"
                        },
                        {
                                "en": "music",
                                "kr": "음악"
                        },
                        {
                                "en": "history",
                                "kr": "역사"
                        },
                        {
                                "en": "favorite",
                                "kr": "가장 좋아하는"
                        },
                        {
                                "en": "experiment",
                                "kr": "실험"
                        },
                        {
                                "en": "solve",
                                "kr": "풀다"
                        },
                        {
                                "en": "relaxed",
                                "kr": "편안한"
                        }
                ],
                "sentences": [
                        {
                                "en": "What's your favorite subject?",
                                "kr": "가장 좋아하는 과목이 뭐니?"
                        },
                        {
                                "en": "My favorite subject is math.",
                                "kr": "내가 가장 좋아하는 과목은 수학이야."
                        },
                        {
                                "en": "Why do you like math?",
                                "kr": "왜 수학을 좋아하니?"
                        },
                        {
                                "en": "Because solving problems is fun.",
                                "kr": "문제를 푸는 것이 재미있기 때문이야."
                        },
                        {
                                "en": "I like science class best.",
                                "kr": "나는 과학 수업을 가장 좋아해."
                        },
                        {
                                "en": "We do exciting experiments in science.",
                                "kr": "우리는 과학 시간에 신나는 실험을 해."
                        },
                        {
                                "en": "Do you like PE class?",
                                "kr": "너는 체육 수업을 좋아하니?"
                        },
                        {
                                "en": "Yes, I love running and playing sports.",
                                "kr": "응, 나는 달리기와 운동하는 것을 정말 좋아해."
                        },
                        {
                                "en": "Music class makes me feel relaxed.",
                                "kr": "음악 시간은 나를 편안하게 해 줘."
                        },
                        {
                                "en": "All school subjects are important.",
                                "kr": "학교의 모든 과목은 다 중요해."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Why should we save electric energy?",
                                "answer": "Because saving energy protects our precious Earth.",
                                "questionKr": "우리는 왜 전기 에너지를 아껴야 할까?",
                                "answerKr": "에너지를 절약하는 것이 소중한 지구를 지키기 때문이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "What should we do when leaving the classroom?",
                                "answer": "We should turn off the lights and fans.",
                                "questionKr": "교실을 나갈 때 무엇을 해야 할까?",
                                "answerKr": "전등과 선풍기를 꺼야 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "How can we reduce plastic waste?",
                                "answer": "We should use reusable tumblers instead of paper cups.",
                                "questionKr": "플라스틱 쓰레기를 어떻게 줄일 수 있을까?",
                                "answerKr": "종이컵 대신 텀블러를 써야 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Don't waste water while brushing your teeth!",
                                "answer": "Okay, I will use a cup to save tap water.",
                                "questionKr": "양치질할 때 물을 낭비하지 마렴!",
                                "answerKr": "네, 컵을 사용해서 수돗물을 아낄게요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What should we do with clean plastic bottles?",
                                "answer": "We should remove labels and recycle them.",
                                "questionKr": "깨끗한 플라스틱 병은 어떻게 해야 할까?",
                                "answerKr": "라벨을 떼어내고 재활용해야 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Should we walk or ride a bike for short trips?",
                                "answer": "Yes, walking reduces harmful air pollution.",
                                "questionKr": "가까운 거리는 걷거나 자전거를 타야 할까?",
                                "answerKr": "응, 걸으면 해로운 대기오염을 줄일 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Let's pick up trash in our neighborhood park.",
                                "answer": "Great idea! Let's keep our environment clean.",
                                "questionKr": "동네 공원에서 쓰레기를 줍자.",
                                "answerKr": "좋은 생각이야! 우리 환경을 깨끗이 유지하자.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Why are trees so important for our planet?",
                                "answer": "They give us fresh oxygen and absorb carbon.",
                                "questionKr": "나무는 왜 지구에 그토록 중요할까?",
                                "answerKr": "신선한 산소를 주고 탄소를 흡수하기 때문이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Don't throw trash on the ground!",
                                "answer": "I'm sorry. I will put it into the recycling bin.",
                                "questionKr": "바닥에 쓰레기 버리지 마세요!",
                                "answerKr": "죄송해요. 분리수거통에 넣을게요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Small actions make a big difference for the Earth!",
                                "answer": "Yes, let's practice green habits every day.",
                                "questionKr": "작은 실천이 지구를 위한 큰 변화를 만들어!",
                                "answerKr": "맞아, 매일 친환경 습관을 실천하자.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Why should we save electric energy?",
                                "answer": "Because saving energy protects our precious Earth.",
                                "questionKr": "우리는 왜 전기 에너지를 아껴야 할까?",
                                "answerKr": "에너지를 절약하는 것이 소중한 지구를 지키기 때문이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "What should we do when leaving the classroom?",
                                "answer": "Leave every electrical appliance on max forever.",
                                "questionKr": "교실을 나갈 때 무엇을 해야 할까?",
                                "answerKr": "모든 가전제품을 영원히 켜두어야 해.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "How can we reduce plastic waste?",
                                "answer": "We should use reusable tumblers instead of paper cups.",
                                "questionKr": "플라스틱 쓰레기를 어떻게 줄일 수 있을까?",
                                "answerKr": "종이컵 대신 텀블러를 써야 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Don't waste water while brushing your teeth!",
                                "answer": "Okay, I will use a cup to save tap water.",
                                "questionKr": "양치질할 때 물을 낭비하지 마렴!",
                                "answerKr": "네, 컵을 사용해서 수돗물을 아낄게요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What should we do with clean plastic bottles?",
                                "answer": "We should remove labels and recycle them.",
                                "questionKr": "깨끗한 플라스틱 병은 어떻게 해야 할까?",
                                "answerKr": "라벨을 떼어내고 재활용해야 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Should we walk or ride a bike for short trips?",
                                "answer": "Drive a giant bulldozer everywhere.",
                                "questionKr": "가까운 거리는 걷거나 자전거를 타야 할까?",
                                "answerKr": "거대 불도저를 몰고 다녀야 해.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 7,
                                "question": "Let's pick up trash in our neighborhood park.",
                                "answer": "Great idea! Let's keep our environment clean.",
                                "questionKr": "동네 공원에서 쓰레기를 줍자.",
                                "answerKr": "좋은 생각이야! 우리 환경을 깨끗이 유지하자.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Why are trees so important for our planet?",
                                "answer": "They give us fresh oxygen and absorb carbon.",
                                "questionKr": "나무는 왜 지구에 그토록 중요할까?",
                                "answerKr": "신선한 산소를 주고 탄소를 흡수하기 때문이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Don't throw trash on the ground!",
                                "answer": "I'm sorry. I will put it into the recycling bin.",
                                "questionKr": "바닥에 쓰레기 버리지 마세요!",
                                "answerKr": "죄송해요. 분리수거통에 넣을게요.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Small actions make a big difference for the Earth!",
                                "answer": "Yes, let's practice green habits every day.",
                                "questionKr": "작은 실천이 지구를 위한 큰 변화를 만들어!",
                                "answerKr": "맞아, 매일 친환경 습관을 실천하자.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [과목]",
                                "word": "subject",
                                "meaning": "과목",
                                "hint": "s___",
                                "answer": "subject",
                                "options": [
                                        "English",
                                        "math",
                                        "subject",
                                        "science"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [수학]",
                                "word": "math",
                                "meaning": "수학",
                                "hint": "m___",
                                "answer": "math",
                                "options": [
                                        "math",
                                        "science",
                                        "subject",
                                        "English"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [과학]",
                                "word": "science",
                                "meaning": "과학",
                                "hint": "s___",
                                "answer": "science",
                                "options": [
                                        "subject",
                                        "science",
                                        "English",
                                        "math"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [영어]",
                                "word": "English",
                                "meaning": "영어",
                                "hint": "E___",
                                "answer": "English",
                                "options": [
                                        "science",
                                        "English",
                                        "math",
                                        "subject"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [체육]",
                                "word": "PE",
                                "meaning": "체육",
                                "hint": "P___",
                                "answer": "PE",
                                "options": [
                                        "math",
                                        "subject",
                                        "science",
                                        "PE"
                                ]
                        }
                ]
        },
        "5G_L12": {
                "id": "5G_L12",
                "grade": 5,
                "lesson": 12,
                "publisher": "천재 (함순애)",
                "name": "5학년 12단원",
                "title": "What Do You Want to Be?",
                "shortDesc": "What Do You Want to Be? (10문항)",
                "grammarPoint": "What do you want to be in the future?",
                "words": [
                        {
                                "en": "dream",
                                "kr": "꿈"
                        },
                        {
                                "en": "job",
                                "kr": "직업"
                        },
                        {
                                "en": "doctor",
                                "kr": "의사"
                        },
                        {
                                "en": "teacher",
                                "kr": "선생님"
                        },
                        {
                                "en": "scientist",
                                "kr": "과학자"
                        },
                        {
                                "en": "artist",
                                "kr": "화가, 예술가"
                        },
                        {
                                "en": "chef",
                                "kr": "요리사"
                        },
                        {
                                "en": "pilot",
                                "kr": "조종사"
                        },
                        {
                                "en": "police officer",
                                "kr": "경찰관"
                        },
                        {
                                "en": "help",
                                "kr": "돕다"
                        },
                        {
                                "en": "future",
                                "kr": "미래, 장래"
                        },
                        {
                                "en": "achieve",
                                "kr": "이루다, 달성하다"
                        }
                ],
                "sentences": [
                        {
                                "en": "What do you want to be in the future?",
                                "kr": "너는 장래에 무엇이 되고 싶니?"
                        },
                        {
                                "en": "I want to be a doctor.",
                                "kr": "나는 의사가 되고 싶어."
                        },
                        {
                                "en": "Why do you want to be a doctor?",
                                "kr": "왜 의사가 되고 싶니?"
                        },
                        {
                                "en": "Because I want to help sick people.",
                                "kr": "아픈 사람들을 돕고 싶기 때문이야."
                        },
                        {
                                "en": "I want to be an airplane pilot.",
                                "kr": "나는 비행기 조종사가 되고 싶어."
                        },
                        {
                                "en": "Flying in the sky sounds awesome.",
                                "kr": "하늘을 나는 것은 정말 멋져 보여."
                        },
                        {
                                "en": "My dream is to become a chef.",
                                "kr": "내 꿈은 요리사가 되는 것이야."
                        },
                        {
                                "en": "I love making delicious food for others.",
                                "kr": "나는 다른 사람을 위해 맛있는 음식 만드는 것을 좋아해."
                        },
                        {
                                "en": "Work hard to achieve your dream!",
                                "kr": "네 꿈을 이루기 위해 열심히 노력하렴!"
                        },
                        {
                                "en": "You will become a great person.",
                                "kr": "너는 훌륭한 사람이 될 거야."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "What are you going to do this Saturday?",
                                "answer": "I'm going to go camping in the pine forest.",
                                "questionKr": "이번 주 토요일에 무엇을 할 예정이니?",
                                "answerKr": "소나무 숲으로 캠핑을 갈 예정이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Are you going to watch the new superhero movie?",
                                "answer": "Yes, I'm going to watch it with my brother.",
                                "questionKr": "새 슈퍼히어로 영화 볼 예정이니?",
                                "answerKr": "응, 남동생과 함께 영화 보러 갈 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What are your plans for Sunday afternoon?",
                                "answer": "I'm going to read fantasy novels at the library.",
                                "questionKr": "일요일 오후 계획은 뭐니?",
                                "answerKr": "도서관에서 판타지 소설을 읽을 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Are you going to travel somewhere this vacation?",
                                "answer": "Yes, we are going to take a trip to Busan.",
                                "questionKr": "이번 방학에 어디 여행 갈 예정이니?",
                                "answerKr": "응, 부산으로 여행을 갈 계획이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Who are you going to play soccer with?",
                                "answer": "I'm going to play with our school soccer club.",
                                "questionKr": "누구와 축구를 할 예정이니?",
                                "answerKr": "우리 학교 축구 동아리 친구들과 할 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Are you going to stay home tomorrow?",
                                "answer": "Yes, I'm going to bake cookies with mom.",
                                "questionKr": "내일 집에 머무를 거니?",
                                "answerKr": "응, 엄마와 쿠키를 구울 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "What are you going to do for your friend's birthday?",
                                "answer": "I'm going to prepare a surprise birthday party.",
                                "questionKr": "친구 생일에 무엇을 해줄 예정이니?",
                                "answerKr": "깜짝 생일 파티를 준비할 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Are you going to practice the violin this weekend?",
                                "answer": "Yes, I have an upcoming music festival.",
                                "questionKr": "이번 주말에 바이올린 연습할 거니?",
                                "answerKr": "응, 다가오는 음악 축제가 있거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What will you pack in your picnic basket?",
                                "answer": "I'm going to pack tuna sandwiches and fresh juice.",
                                "questionKr": "소풍 바구니에 무엇을 챙길 거니?",
                                "answerKr": "참치 샌드위치와 신선한 주스를 챙길 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Have a wonderful and relaxing weekend!",
                                "answer": "Thank you! You have a great weekend too.",
                                "questionKr": "멋지고 편안한 주말 보내!",
                                "answerKr": "고마워! 너도 좋은 주말 보내.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "What are you going to do this Saturday?",
                                "answer": "I'm going to go camping in the pine forest.",
                                "questionKr": "이번 주 토요일에 무엇을 할 예정이니?",
                                "answerKr": "소나무 숲으로 캠핑을 갈 예정이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Are you going to watch the new superhero movie?",
                                "answer": "I will conquer the movie theater with robots.",
                                "questionKr": "새 슈퍼히어로 영화 볼 예정이니?",
                                "answerKr": "로봇 군단으로 영화관을 정복할 거야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "What are your plans for Sunday afternoon?",
                                "answer": "I'm going to read fantasy novels at the library.",
                                "questionKr": "일요일 오후 계획은 뭐니?",
                                "answerKr": "도서관에서 판타지 소설을 읽을 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Are you going to travel somewhere this vacation?",
                                "answer": "Yes, we are going to take a trip to Busan.",
                                "questionKr": "이번 방학에 어디 여행 갈 예정이니?",
                                "answerKr": "응, 부산으로 여행을 갈 계획이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Who are you going to play soccer with?",
                                "answer": "I'm going to play with our school soccer club.",
                                "questionKr": "누구와 축구를 할 예정이니?",
                                "answerKr": "우리 학교 축구 동아리 친구들과 할 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Are you going to stay home tomorrow?",
                                "answer": "I'm going to dig a hole to the center of Earth.",
                                "questionKr": "내일 집에 머무를 거니?",
                                "answerKr": "지구 중심까지 구멍을 팔 거야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 7,
                                "question": "What are you going to do for your friend's birthday?",
                                "answer": "I'm going to prepare a surprise birthday party.",
                                "questionKr": "친구 생일에 무엇을 해줄 예정이니?",
                                "answerKr": "깜짝 생일 파티를 준비할 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Are you going to practice the violin this weekend?",
                                "answer": "Yes, I have an upcoming music festival.",
                                "questionKr": "이번 주말에 바이올린 연습할 거니?",
                                "answerKr": "응, 다가오는 음악 축제가 있거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What will you pack in your picnic basket?",
                                "answer": "I'm going to pack tuna sandwiches and fresh juice.",
                                "questionKr": "소풍 바구니에 무엇을 챙길 거니?",
                                "answerKr": "참치 샌드위치와 신선한 주스를 챙길 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Have a wonderful and relaxing weekend!",
                                "answer": "Thank you! You have a great weekend too.",
                                "questionKr": "멋지고 편안한 주말 보내!",
                                "answerKr": "고마워! 너도 좋은 주말 보내.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [꿈]",
                                "word": "dream",
                                "meaning": "꿈",
                                "hint": "d___",
                                "answer": "dream",
                                "options": [
                                        "dream",
                                        "job",
                                        "doctor",
                                        "teacher"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [직업]",
                                "word": "job",
                                "meaning": "직업",
                                "hint": "j___",
                                "answer": "job",
                                "options": [
                                        "dream",
                                        "doctor",
                                        "job",
                                        "teacher"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [의사]",
                                "word": "doctor",
                                "meaning": "의사",
                                "hint": "d___",
                                "answer": "doctor",
                                "options": [
                                        "teacher",
                                        "job",
                                        "dream",
                                        "doctor"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [선생님]",
                                "word": "teacher",
                                "meaning": "선생님",
                                "hint": "t___",
                                "answer": "teacher",
                                "options": [
                                        "teacher",
                                        "dream",
                                        "doctor",
                                        "job"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [과학자]",
                                "word": "scientist",
                                "meaning": "과학자",
                                "hint": "s___",
                                "answer": "scientist",
                                "options": [
                                        "dream",
                                        "scientist",
                                        "doctor",
                                        "job"
                                ]
                        }
                ]
        },
        "6G_L01": {
                "id": "6G_L01",
                "grade": 6,
                "lesson": 1,
                "publisher": "천재 (함순애)",
                "name": "6학년 1단원",
                "title": "What Grade Are You In?",
                "shortDesc": "What Grade Are You In? (10문항)",
                "grammarPoint": "What grade are you in?",
                "words": [
                        {
                                "en": "grade",
                                "kr": "학년"
                        },
                        {
                                "en": "first",
                                "kr": "첫 번째의 (1)"
                        },
                        {
                                "en": "second",
                                "kr": "두 번째의 (2)"
                        },
                        {
                                "en": "third",
                                "kr": "세 번째의 (3)"
                        },
                        {
                                "en": "fourth",
                                "kr": "네 번째의 (4)"
                        },
                        {
                                "en": "fifth",
                                "kr": "다섯 번째의 (5)"
                        },
                        {
                                "en": "sixth",
                                "kr": "여섯 번째의 (6)"
                        },
                        {
                                "en": "class",
                                "kr": "학급, 반"
                        },
                        {
                                "en": "floor",
                                "kr": "층"
                        },
                        {
                                "en": "homeroom",
                                "kr": "담임의"
                        },
                        {
                                "en": "elementary",
                                "kr": "초등의"
                        },
                        {
                                "en": "memory",
                                "kr": "추억"
                        }
                ],
                "sentences": [
                        {
                                "en": "What grade are you in?",
                                "kr": "너는 몇 학년이니?"
                        },
                        {
                                "en": "I'm in the sixth grade.",
                                "kr": "나는 6학년이야."
                        },
                        {
                                "en": "Which class are you in?",
                                "kr": "너는 몇 반이니?"
                        },
                        {
                                "en": "I'm in Class 3.",
                                "kr": "나는 3반이야."
                        },
                        {
                                "en": "Our classroom is on the fourth floor.",
                                "kr": "우리 교실은 4층에 있어."
                        },
                        {
                                "en": "Nice to meet you, new classmate.",
                                "kr": "만나서 반가워, 새 짝꿍아."
                        },
                        {
                                "en": "This is our last year in elementary school.",
                                "kr": "올해는 초등학교에서의 마지막 해란다."
                        },
                        {
                                "en": "Let's make wonderful memories together.",
                                "kr": "함께 멋진 추억을 만들자."
                        },
                        {
                                "en": "Who is your homeroom teacher?",
                                "kr": "너희 담임 선생님은 누구시니?"
                        },
                        {
                                "en": "Mr. Kim is our friendly teacher.",
                                "kr": "김 선생님이 우리 친절한 선생님이셔."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "What grade are you in?",
                                "answer": "I'm in the sixth grade.",
                                "questionKr": "너 몇 학년이니?",
                                "answerKr": "나는 6학년이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "How do you spell your name?",
                                "answer": "It's M-I-N-U, Minu.",
                                "questionKr": "이름 철자가 어떻게 되니?",
                                "answerKr": "M-I-N-U, 민우야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What grade is your sister in?",
                                "answer": "She's in the third grade.",
                                "questionKr": "네 여동생은 몇 학년이니?",
                                "answerKr": "그녀는 3학년이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "What grade is Jake in?",
                                "answer": "He's in the first grade.",
                                "questionKr": "제이크는 몇 학년이니?",
                                "answerKr": "그는 1학년이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Which club do you want to join?",
                                "answer": "I want to join the guitar club.",
                                "questionKr": "어느 동아리에 가입하고 싶니?",
                                "answerKr": "기타 동아리에 가입하고 싶어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Do you play the guitar every day?",
                                "answer": "Yes, I play the guitar every day.",
                                "questionKr": "너 매일 기타를 연주하니?",
                                "answerKr": "응, 나는 매일 기타를 쳐.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "What club is Taylor in?",
                                "answer": "She is in the dance club.",
                                "questionKr": "테일러는 무슨 동아리니?",
                                "answerKr": "그녀는 댄스 동아리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Can you draw pictures well?",
                                "answer": "Yes, I can. I like drawing pictures.",
                                "questionKr": "너 그림 잘 그리니?",
                                "answerKr": "응, 그래. 난 그림 그리는 걸 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Do you ride a bike to school?",
                                "answer": "Yes, I do. I ride a bike every morning.",
                                "questionKr": "너 자전거 타고 통학하니?",
                                "answerKr": "응, 매일 아침 자전거를 타.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Who is your English teacher?",
                                "answer": "Mr. Smith is our English teacher.",
                                "questionKr": "영어 선생님은 누구시니?",
                                "answerKr": "스미스 선생님이 우리 영어 선생님이셔.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "What grade are you in?",
                                "answer": "I'm in the sixth grade.",
                                "questionKr": "너 몇 학년이니?",
                                "answerKr": "나는 6학년이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "How do you spell your name?",
                                "answer": "It's M-I-N-U, Minu.",
                                "questionKr": "이름 철자가 어떻게 되니?",
                                "answerKr": "M-I-N-U, 민우야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What grade is your sister in?",
                                "answer": "She's in the third grade.",
                                "questionKr": "네 여동생은 몇 학년이니?",
                                "answerKr": "그녀는 3학년이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "What grade is Jake in?",
                                "answer": "He's in the first grade.",
                                "questionKr": "제이크는 몇 학년이니?",
                                "answerKr": "그는 1학년이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Which club do you want to join?",
                                "answer": "I want to join the dance club.",
                                "questionKr": "어느 동아리에 가입하고 싶니?",
                                "answerKr": "댄스 동아리에 가입하고 싶어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Do you play the guitar every day?",
                                "answer": "Yes, I play the guitar every day.",
                                "questionKr": "너 매일 기타를 연주하니?",
                                "answerKr": "응, 나는 매일 기타를 쳐.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "What club is Taylor in?",
                                "answer": "She is in the dance club.",
                                "questionKr": "테일러는 무슨 동아리니?",
                                "answerKr": "그녀는 댄스 동아리야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Can you draw pictures well?",
                                "answer": "Yes, I can. I like drawing pictures.",
                                "questionKr": "너 그림 잘 그리니?",
                                "answerKr": "응, 그래. 난 그림 그리는 걸 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Do you ride a bike to school?",
                                "answer": "No, I don't. I walk to school.",
                                "questionKr": "너 자전거 타고 통학하니?",
                                "answerKr": "아니, 나는 걸어서 학교에 가.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 10,
                                "question": "Who is your English teacher?",
                                "answer": "Mr. Smith is our English teacher.",
                                "questionKr": "영어 선생님은 누구시니?",
                                "answerKr": "스미스 선생님이 우리 영어 선생님이셔.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [학년]",
                                "word": "grade",
                                "meaning": "학년",
                                "hint": "g___",
                                "answer": "grade",
                                "options": [
                                        "second",
                                        "third",
                                        "first",
                                        "grade"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [첫 번째의 (1)]",
                                "word": "first",
                                "meaning": "첫 번째의 (1)",
                                "hint": "f___",
                                "answer": "first",
                                "options": [
                                        "first",
                                        "grade",
                                        "third",
                                        "second"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [두 번째의 (2)]",
                                "word": "second",
                                "meaning": "두 번째의 (2)",
                                "hint": "s___",
                                "answer": "second",
                                "options": [
                                        "first",
                                        "grade",
                                        "third",
                                        "second"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [세 번째의 (3)]",
                                "word": "third",
                                "meaning": "세 번째의 (3)",
                                "hint": "t___",
                                "answer": "third",
                                "options": [
                                        "grade",
                                        "second",
                                        "third",
                                        "first"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [네 번째의 (4)]",
                                "word": "fourth",
                                "meaning": "네 번째의 (4)",
                                "hint": "f___",
                                "answer": "fourth",
                                "options": [
                                        "first",
                                        "grade",
                                        "fourth",
                                        "second"
                                ]
                        }
                ]
        },
        "6G_L02": {
                "id": "6G_L02",
                "grade": 6,
                "lesson": 2,
                "publisher": "천재 (함순애)",
                "name": "6학년 2단원",
                "title": "What Season Do You Like?",
                "shortDesc": "What Season Do You Like? (10문항)",
                "grammarPoint": "What season do you like most?",
                "words": [
                        {
                                "en": "season",
                                "kr": "계절"
                        },
                        {
                                "en": "spring",
                                "kr": "봄"
                        },
                        {
                                "en": "summer",
                                "kr": "여름"
                        },
                        {
                                "en": "fall",
                                "kr": "가을"
                        },
                        {
                                "en": "winter",
                                "kr": "겨울"
                        },
                        {
                                "en": "weather",
                                "kr": "날씨"
                        },
                        {
                                "en": "bloom",
                                "kr": "피어나다"
                        },
                        {
                                "en": "ocean",
                                "kr": "바다"
                        },
                        {
                                "en": "autumn",
                                "kr": "가을"
                        },
                        {
                                "en": "leaf",
                                "kr": "잎, 나뭇잎"
                        },
                        {
                                "en": "ski",
                                "kr": "스키 타다"
                        },
                        {
                                "en": "joy",
                                "kr": "기쁨, 즐거움"
                        }
                ],
                "sentences": [
                        {
                                "en": "What season do you like most?",
                                "kr": "너는 어떤 계절을 가장 좋아하니?"
                        },
                        {
                                "en": "I like spring because flowers bloom.",
                                "kr": "꽃들이 피어나기 때문에 나는 봄을 좋아해."
                        },
                        {
                                "en": "I like summer best.",
                                "kr": "나는 여름을 가장 좋아해."
                        },
                        {
                                "en": "Why do you like summer?",
                                "kr": "너는 왜 여름을 좋아하니?"
                        },
                        {
                                "en": "Because I can swim in the ocean.",
                                "kr": "바다에서 수영할 수 있기 때문이야."
                        },
                        {
                                "en": "Fall is a cool and beautiful season.",
                                "kr": "가을은 시원하고 아름다운 계절이야."
                        },
                        {
                                "en": "The autumn leaves turn red and yellow.",
                                "kr": "가을 단풍잎들이 붉고 노랗게 물들어."
                        },
                        {
                                "en": "Do you like cold winter days?",
                                "kr": "너는 추운 겨울날을 좋아하니?"
                        },
                        {
                                "en": "Yes, because I can go skiing and skate.",
                                "kr": "응, 스키를 타러 가거나 스케이트를 탈 수 있어서."
                        },
                        {
                                "en": "Each season brings special joy.",
                                "kr": "계절마다 특별한 즐거움이 있어."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "What season do you like?",
                                "answer": "I like spring. Because I can see beautiful flowers.",
                                "questionKr": "너는 무슨 계절을 좋아하니?",
                                "answerKr": "나는 봄을 좋아해. 아름다운 꽃들을 볼 수 있거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Do you like summer?",
                                "answer": "Yes, I do. Because I can swim in the sea.",
                                "questionKr": "너는 여름을 좋아하니?",
                                "answerKr": "응. 바다에서 수영할 수 있어서 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What season does Tom like?",
                                "answer": "He likes winter. Because he can make a snowman.",
                                "questionKr": "톰은 무슨 계절을 좋아하니?",
                                "answerKr": "그는 겨울을 좋아해. 눈사람을 만들 수 있거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Why do you like fall?",
                                "answer": "Because we have Chuseok and colorful trees.",
                                "questionKr": "너는 왜 가을을 좋아하니?",
                                "answerKr": "추석이 있고 알록달록한 단풍나무가 있어서.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Can you skate in winter?",
                                "answer": "Yes, I can skate with my family.",
                                "questionKr": "너 겨울에 스케이트 탈 수 있니?",
                                "answerKr": "응, 가족들과 스케이트를 탈 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "What can you do in spring?",
                                "answer": "I can ride a bike in the park.",
                                "questionKr": "너는 봄에 무엇을 할 수 있니?",
                                "answerKr": "공원에서 자전거를 탈 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Do you like rainy days?",
                                "answer": "No, I don't. I like sunny warm days.",
                                "questionKr": "너 비 오는 날 좋아하니?",
                                "answerKr": "아니, 화창하고 따뜻한 날이 좋아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "What is your favorite winter sport?",
                                "answer": "I like sledding on the snow.",
                                "questionKr": "네가 가장 좋아하는 겨울 스포츠는 뭐니?",
                                "answerKr": "눈 위에서 썰매 타는 걸 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Why does Hana like summer?",
                                "answer": "Because she can eat delicious watermelon.",
                                "questionKr": "하나는 왜 여름을 좋아하니?",
                                "answerKr": "맛있는 수박을 먹을 수 있어서 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Which season is the coldest?",
                                "answer": "Winter is the coldest season.",
                                "questionKr": "어느 계절이 가장 춥니?",
                                "answerKr": "겨울이 가장 추운 계절이야.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "What season do you like?",
                                "answer": "I like spring. Because I can see beautiful flowers.",
                                "questionKr": "너는 무슨 계절을 좋아하니?",
                                "answerKr": "나는 봄을 좋아해. 아름다운 꽃들을 볼 수 있거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Do you like summer?",
                                "answer": "Yes, I do. Because I can eat ice cream.",
                                "questionKr": "너는 여름을 좋아하니?",
                                "answerKr": "응. 아이스크림을 먹을 수 있어서 좋아해.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "What season does Tom like?",
                                "answer": "He likes winter. Because he can make a snowman.",
                                "questionKr": "톰은 무슨 계절을 좋아하니?",
                                "answerKr": "그는 겨울을 좋아해. 눈사람을 만들 수 있거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Why do you like fall?",
                                "answer": "Because we have Chuseok and colorful trees.",
                                "questionKr": "너는 왜 가을을 좋아하니?",
                                "answerKr": "추석이 있고 알록달록한 단풍나무가 있어서.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Can you skate in winter?",
                                "answer": "Yes, I can skate with my friends.",
                                "questionKr": "너 겨울에 스케이트 탈 수 있니?",
                                "answerKr": "응, 친구들과 스케이트를 탈 수 있어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "What can you do in spring?",
                                "answer": "I can ride a bike in the park.",
                                "questionKr": "너는 봄에 무엇을 할 수 있니?",
                                "answerKr": "공원에서 자전거를 탈 수 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Do you like rainy days?",
                                "answer": "No, I don't. I like sunny warm days.",
                                "questionKr": "너 비 오는 날 좋아하니?",
                                "answerKr": "아니, 화창하고 따뜻한 날이 좋아.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "What is your favorite winter sport?",
                                "answer": "I like sledding on the snow.",
                                "questionKr": "네가 가장 좋아하는 겨울 스포츠는 뭐니?",
                                "answerKr": "눈 위에서 썰매 타는 걸 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Why does Hana like summer?",
                                "answer": "Because she can eat delicious watermelon.",
                                "questionKr": "하나는 왜 여름을 좋아하니?",
                                "answerKr": "맛있는 수박을 먹을 수 있어서 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Which season is the coldest?",
                                "answer": "Winter is the coldest season.",
                                "questionKr": "어느 계절이 가장 춥니?",
                                "answerKr": "겨울이 가장 추운 계절이야.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [계절]",
                                "word": "season",
                                "meaning": "계절",
                                "hint": "s___",
                                "answer": "season",
                                "options": [
                                        "season",
                                        "fall",
                                        "spring",
                                        "summer"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [봄]",
                                "word": "spring",
                                "meaning": "봄",
                                "hint": "s___",
                                "answer": "spring",
                                "options": [
                                        "summer",
                                        "season",
                                        "spring",
                                        "fall"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [여름]",
                                "word": "summer",
                                "meaning": "여름",
                                "hint": "s___",
                                "answer": "summer",
                                "options": [
                                        "fall",
                                        "season",
                                        "spring",
                                        "summer"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [가을]",
                                "word": "fall",
                                "meaning": "가을",
                                "hint": "f___",
                                "answer": "fall",
                                "options": [
                                        "spring",
                                        "fall",
                                        "summer",
                                        "season"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [겨울]",
                                "word": "winter",
                                "meaning": "겨울",
                                "hint": "w___",
                                "answer": "winter",
                                "options": [
                                        "season",
                                        "summer",
                                        "winter",
                                        "spring"
                                ]
                        }
                ]
        },
        "6G_L03": {
                "id": "6G_L03",
                "grade": 6,
                "lesson": 3,
                "publisher": "천재 (함순애)",
                "name": "6학년 3단원",
                "title": "When Is Your Birthday?",
                "shortDesc": "When Is Your Birthday? (10문항)",
                "grammarPoint": "When is your birthday?",
                "words": [
                        {
                                "en": "birthday",
                                "kr": "생일"
                        },
                        {
                                "en": "month",
                                "kr": "월, 달"
                        },
                        {
                                "en": "January",
                                "kr": "1월"
                        },
                        {
                                "en": "March",
                                "kr": "3월"
                        },
                        {
                                "en": "May",
                                "kr": "5월"
                        },
                        {
                                "en": "July",
                                "kr": "7월"
                        },
                        {
                                "en": "October",
                                "kr": "10월"
                        },
                        {
                                "en": "December",
                                "kr": "12월"
                        },
                        {
                                "en": "party",
                                "kr": "파티"
                        },
                        {
                                "en": "gift",
                                "kr": "선물"
                        },
                        {
                                "en": "candle",
                                "kr": "양초"
                        },
                        {
                                "en": "celebrate",
                                "kr": "축하하다"
                        },
                        {
                                "en": "wish",
                                "kr": "소원"
                        }
                ],
                "sentences": [
                        {
                                "en": "When is your birthday?",
                                "kr": "네 생일이 언제니?"
                        },
                        {
                                "en": "It's on May fifth.",
                                "kr": "5월 5일이야."
                        },
                        {
                                "en": "My birthday is on October twelfth.",
                                "kr": "내 생일은 10월 12일이야."
                        },
                        {
                                "en": "Let's throw a birthday party!",
                                "kr": "생일 파티를 열자!"
                        },
                        {
                                "en": "Can you come to my party this Saturday?",
                                "kr": "이번 주 토요일 내 파티에 올 수 있니?"
                        },
                        {
                                "en": "Sure, I'd love to join.",
                                "kr": "물론이지, 기꺼이 갈게."
                        },
                        {
                                "en": "Here is a birthday gift for you.",
                                "kr": "여기 너를 위한 생일 선물이야."
                        },
                        {
                                "en": "Happy birthday to my best friend!",
                                "kr": "내 가장 친한 친구야, 생일 축하해!"
                        },
                        {
                                "en": "Make a wish before blowing out the candles.",
                                "kr": "촛불을 끄기 전에 소원을 빌어 봐."
                        },
                        {
                                "en": "Thank you all for celebrating with me!",
                                "kr": "모두 함께 축하해 줘서 고마워!"
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "When is your birthday?",
                                "answer": "It's on May 5th. It's Children's Day, too.",
                                "questionKr": "네 생일은 언제니?",
                                "answerKr": "5월 5일이야. 어린이날이기도 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "When is Parents' Day?",
                                "answer": "It's on May 8th. We make carnations.",
                                "questionKr": "어버이날은 언제니?",
                                "answerKr": "5월 8일이야. 카네이션을 만들어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "When is Earth Day?",
                                "answer": "It's on April 22nd.",
                                "questionKr": "지구의 날은 언제니?",
                                "answerKr": "4월 22일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "When is the school Sports Day?",
                                "answer": "It's on October 14th.",
                                "questionKr": "학교 운동회는 언제니?",
                                "answerKr": "10월 14일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "When is Christmas?",
                                "answer": "It's on December 25th.",
                                "questionKr": "크리스마스는 언제니?",
                                "answerKr": "12월 25일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "When is Teacher's Day in Korea?",
                                "answer": "It's on May 15th.",
                                "questionKr": "한국의 스승의 날은 언제니?",
                                "answerKr": "5월 15일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "When is Hangul Day?",
                                "answer": "It's on October 9th.",
                                "questionKr": "한글날은 언제니?",
                                "answerKr": "10월 9일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Is your birthday in summer?",
                                "answer": "Yes, it is. It's on July 20th.",
                                "questionKr": "네 생일은 여름이니?",
                                "answerKr": "응, 맞아. 7월 20일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "When is the school music concert?",
                                "answer": "It's on November 3rd.",
                                "questionKr": "학교 음악 콘서트는 언제니?",
                                "answerKr": "11월 3일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "When does summer vacation start?",
                                "answer": "It starts on July 24th.",
                                "questionKr": "여름방학은 언제 시작하니?",
                                "answerKr": "7월 24일에 시작해.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "When is your birthday?",
                                "answer": "It's on May 15th. It's Teacher's Day, too.",
                                "questionKr": "네 생일은 언제니?",
                                "answerKr": "5월 15일이야. 스승의 날이기도 해.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 2,
                                "question": "When is Parents' Day?",
                                "answer": "It's on May 8th. We make carnations.",
                                "questionKr": "어버이날은 언제니?",
                                "answerKr": "5월 8일이야. 카네이션을 만들어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "When is Earth Day?",
                                "answer": "It's on April 22nd.",
                                "questionKr": "지구의 날은 언제니?",
                                "answerKr": "4월 22일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "When is the school Sports Day?",
                                "answer": "It's on October 24th.",
                                "questionKr": "학교 운동회는 언제니?",
                                "answerKr": "10월 24일이야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 5,
                                "question": "When is Christmas?",
                                "answer": "It's on December 25th.",
                                "questionKr": "크리스마스는 언제니?",
                                "answerKr": "12월 25일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "When is Teacher's Day in Korea?",
                                "answer": "It's on May 15th.",
                                "questionKr": "한국의 스승의 날은 언제니?",
                                "answerKr": "5월 15일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "When is Hangul Day?",
                                "answer": "It's on October 9th.",
                                "questionKr": "한글날은 언제니?",
                                "answerKr": "10월 9일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Is your birthday in summer?",
                                "answer": "Yes, it is. It's on July 20th.",
                                "questionKr": "네 생일은 여름이니?",
                                "answerKr": "응, 맞아. 7월 20일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "When is the school music concert?",
                                "answer": "It's on November 3rd.",
                                "questionKr": "학교 음악 콘서트는 언제니?",
                                "answerKr": "11월 3일이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "When does summer vacation start?",
                                "answer": "It starts on July 24th.",
                                "questionKr": "여름방학은 언제 시작하니?",
                                "answerKr": "7월 24일에 시작해.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [생일]",
                                "word": "birthday",
                                "meaning": "생일",
                                "hint": "b___",
                                "answer": "birthday",
                                "options": [
                                        "birthday",
                                        "March",
                                        "month",
                                        "January"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [월, 달]",
                                "word": "month",
                                "meaning": "월, 달",
                                "hint": "m___",
                                "answer": "month",
                                "options": [
                                        "birthday",
                                        "March",
                                        "month",
                                        "January"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [1월]",
                                "word": "January",
                                "meaning": "1월",
                                "hint": "J___",
                                "answer": "January",
                                "options": [
                                        "month",
                                        "birthday",
                                        "January",
                                        "March"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [3월]",
                                "word": "March",
                                "meaning": "3월",
                                "hint": "M___",
                                "answer": "March",
                                "options": [
                                        "birthday",
                                        "March",
                                        "January",
                                        "month"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [5월]",
                                "word": "May",
                                "meaning": "5월",
                                "hint": "M___",
                                "answer": "May",
                                "options": [
                                        "month",
                                        "January",
                                        "May",
                                        "birthday"
                                ]
                        }
                ]
        },
        "6G_L04": {
                "id": "6G_L04",
                "grade": 6,
                "lesson": 4,
                "publisher": "천재 (함순애)",
                "name": "6학년 4단원",
                "title": "Why Are You Happy?",
                "shortDesc": "Why Are You Happy? (10문항)",
                "grammarPoint": "Why are you so happy today?",
                "words": [
                        {
                                "en": "why",
                                "kr": "왜"
                        },
                        {
                                "en": "happy",
                                "kr": "행복한, 기쁜"
                        },
                        {
                                "en": "sad",
                                "kr": "슬픈"
                        },
                        {
                                "en": "excited",
                                "kr": "신난, 흥분된"
                        },
                        {
                                "en": "nervous",
                                "kr": "긴장한"
                        },
                        {
                                "en": "prize",
                                "kr": "상, 상품"
                        },
                        {
                                "en": "win",
                                "kr": "이기다, 타다"
                        },
                        {
                                "en": "belt",
                                "kr": "띠, 벨트"
                        },
                        {
                                "en": "test",
                                "kr": "시험"
                        },
                        {
                                "en": "because",
                                "kr": "왜냐하면"
                        },
                        {
                                "en": "contest",
                                "kr": "대회"
                        },
                        {
                                "en": "news",
                                "kr": "소식"
                        }
                ],
                "sentences": [
                        {
                                "en": "Why are you so happy today?",
                                "kr": "너 오늘 왜 그렇게 기쁘니?"
                        },
                        {
                                "en": "Because I won first prize in the contest.",
                                "kr": "대회에서 1등 상을 탔기 때문이야."
                        },
                        {
                                "en": "Congratulations on your great prize!",
                                "kr": "멋진 상을 받은 걸 축하해!"
                        },
                        {
                                "en": "Why is Minsoo smiling so brightly?",
                                "kr": "민수는 왜 그렇게 밝게 웃고 있니?"
                        },
                        {
                                "en": "Because he got a black belt in Taekwondo.",
                                "kr": "태권도 검은 띠를 땄기 때문이야."
                        },
                        {
                                "en": "Why are you nervous?",
                                "kr": "너 왜 긴장하고 있니?"
                        },
                        {
                                "en": "Because I have a big English test.",
                                "kr": "중요한 영어 시험이 있기 때문이야."
                        },
                        {
                                "en": "Don't worry, you practiced a lot.",
                                "kr": "걱정하지 마, 너 연습 많이 했잖아."
                        },
                        {
                                "en": "Cheer up! Everything will be fine.",
                                "kr": "힘내! 다 잘 될 거야."
                        },
                        {
                                "en": "Good news always makes us smile.",
                                "kr": "좋은 소식은 언제나 우리를 미소 짓게 해."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Why are you happy?",
                                "answer": "Because I won a prize.",
                                "questionKr": "너 왜 행복하니?",
                                "answerKr": "상을 받았거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Why are you sad?",
                                "answer": "Because I lost my dog.",
                                "questionKr": "너 왜 슬프니?",
                                "answerKr": "강아지를 잃어버렸거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Why are you tired?",
                                "answer": "Because I didn't sleep well.",
                                "questionKr": "너 왜 피곤하니?",
                                "answerKr": "잠을 잘 못 잤거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Why are you angry?",
                                "answer": "Because my brother broke my toy.",
                                "questionKr": "너 왜 화가 났니?",
                                "answerKr": "동생이 내 장난감을 부쉈거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Why are you worried?",
                                "answer": "Because my mom is sick.",
                                "questionKr": "너 왜 걱정하니?",
                                "answerKr": "엄마가 편찮으시거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Why are you excited?",
                                "answer": "Because tomorrow is my birthday.",
                                "questionKr": "너 왜 신이 났니?",
                                "answerKr": "내일이 내 생일이거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Why are you proud?",
                                "answer": "Because I helped my friend.",
                                "questionKr": "너 왜 뿌듯하니?",
                                "answerKr": "친구를 도와주었거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Why are you scared?",
                                "answer": "Because I saw a spider.",
                                "questionKr": "너 왜 무서워하니?",
                                "answerKr": "거미를 보았거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Why are you surprised?",
                                "answer": "Because I got a big present.",
                                "questionKr": "너 왜 놀랐니?",
                                "answerKr": "큰 선물을 받았거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Why are you bored?",
                                "answer": "Because I have nothing to do.",
                                "questionKr": "너 왜 심심하니?",
                                "answerKr": "할 일이 없거든.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Why are you happy?",
                                "answer": "Because I won a prize.",
                                "questionKr": "너 왜 행복하니?",
                                "answerKr": "상을 받았거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Why are you sad?",
                                "answer": "Because I lost my dog.",
                                "questionKr": "너 왜 슬프니?",
                                "answerKr": "강아지를 잃어버렸거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Why are you tired?",
                                "answer": "Because I didn't sleep well.",
                                "questionKr": "너 왜 피곤하니?",
                                "answerKr": "잠을 잘 못 잤거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Why are you angry?",
                                "answer": "Because my brother broke my toy.",
                                "questionKr": "너 왜 화가 났니?",
                                "answerKr": "동생이 내 장난감을 부쉈거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Why are you worried?",
                                "answer": "Because my dad is sick.",
                                "questionKr": "너 왜 걱정하니?",
                                "answerKr": "아빠가 편찮으시거든.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Why are you excited?",
                                "answer": "Because tomorrow is my birthday.",
                                "questionKr": "너 왜 신이 났니?",
                                "answerKr": "내일이 내 생일이거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Why are you proud?",
                                "answer": "Because I helped my mom.",
                                "questionKr": "너 왜 뿌듯하니?",
                                "answerKr": "엄마를 도와주었거든.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 8,
                                "question": "Why are you scared?",
                                "answer": "Because I saw a spider.",
                                "questionKr": "너 왜 무서워하니?",
                                "answerKr": "거미를 보았거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Why are you surprised?",
                                "answer": "Because I got a big present.",
                                "questionKr": "너 왜 놀랐니?",
                                "answerKr": "큰 선물을 받았거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Why are you bored?",
                                "answer": "Because I have nothing to do.",
                                "questionKr": "너 왜 심심하니?",
                                "answerKr": "할 일이 없거든.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [왜]",
                                "word": "why",
                                "meaning": "왜",
                                "hint": "w___",
                                "answer": "why",
                                "options": [
                                        "sad",
                                        "excited",
                                        "why",
                                        "happy"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [행복한, 기쁜]",
                                "word": "happy",
                                "meaning": "행복한, 기쁜",
                                "hint": "h___",
                                "answer": "happy",
                                "options": [
                                        "why",
                                        "happy",
                                        "sad",
                                        "excited"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [슬픈]",
                                "word": "sad",
                                "meaning": "슬픈",
                                "hint": "s___",
                                "answer": "sad",
                                "options": [
                                        "sad",
                                        "excited",
                                        "why",
                                        "happy"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [신난, 흥분된]",
                                "word": "excited",
                                "meaning": "신난, 흥분된",
                                "hint": "e___",
                                "answer": "excited",
                                "options": [
                                        "sad",
                                        "happy",
                                        "why",
                                        "excited"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [긴장한]",
                                "word": "nervous",
                                "meaning": "긴장한",
                                "hint": "n___",
                                "answer": "nervous",
                                "options": [
                                        "why",
                                        "nervous",
                                        "sad",
                                        "happy"
                                ]
                        }
                ]
        },
        "6G_L05": {
                "id": "6G_L05",
                "grade": 6,
                "lesson": 5,
                "publisher": "천재 (함순애)",
                "name": "6학년 5단원",
                "title": "Where Is ABC Library?",
                "shortDesc": "Where Is ABC Library? (10문항)",
                "grammarPoint": "Excuse me, where is ABC Library?",
                "words": [
                        {
                                "en": "library",
                                "kr": "도서관"
                        },
                        {
                                "en": "post office",
                                "kr": "우체국"
                        },
                        {
                                "en": "bank",
                                "kr": "은행"
                        },
                        {
                                "en": "hospital",
                                "kr": "병원"
                        },
                        {
                                "en": "straight",
                                "kr": "똑바로, 곧장"
                        },
                        {
                                "en": "turn",
                                "kr": "돌다"
                        },
                        {
                                "en": "left",
                                "kr": "왼쪽, 왼쪽으로"
                        },
                        {
                                "en": "right",
                                "kr": "오른쪽, 오른쪽으로"
                        },
                        {
                                "en": "block",
                                "kr": "블록, 구역"
                        },
                        {
                                "en": "corner",
                                "kr": "모퉁이"
                        },
                        {
                                "en": "across",
                                "kr": "맞은편에, 건너서"
                        },
                        {
                                "en": "building",
                                "kr": "건물"
                        }
                ],
                "sentences": [
                        {
                                "en": "Excuse me, where is ABC Library?",
                                "kr": "실례지만, ABC 도서관이 어디에 있나요?"
                        },
                        {
                                "en": "Go straight two blocks and turn left.",
                                "kr": "두 블록 직진한 뒤 좌회전하세요."
                        },
                        {
                                "en": "It's on your right side.",
                                "kr": "오른편에 있습니다."
                        },
                        {
                                "en": "Where is the nearest post office?",
                                "kr": "가장 가까운 우체국이 어디인가요?"
                        },
                        {
                                "en": "It is between the bank and the bakery.",
                                "kr": "은행과 빵집 사이에 있어요."
                        },
                        {
                                "en": "Turn right at the corner.",
                                "kr": "모퉁이에서 우회전하세요."
                        },
                        {
                                "en": "It's across from the city hospital.",
                                "kr": "시립 병원 맞은편에 있습니다."
                        },
                        {
                                "en": "You cannot miss the big building.",
                                "kr": "큰 건물이라 바로 찾으실 수 있어요."
                        },
                        {
                                "en": "Is it far from here?",
                                "kr": "여기서 먼가요?"
                        },
                        {
                                "en": "No, it takes only five minutes on foot.",
                                "kr": "아니요, 걸어서 5분밖에 안 걸려요."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Where is the post office?",
                                "answer": "Go straight and turn left. It's on your right.",
                                "questionKr": "우체국이 어디에 있나요?",
                                "answerKr": "직진하다가 왼쪽으로 도세요. 오른편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Where is Nuri Bank?",
                                "answer": "Go straight two blocks and turn right. It's next to the bakery.",
                                "questionKr": "누리은행이 어디에 있나요?",
                                "answerKr": "두 블록 직진 후 오른쪽으로 도세요. 빵집 옆에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Where is the ABC Library?",
                                "answer": "Go straight and turn right. It's across from the park.",
                                "questionKr": "ABC 도서관이 어디에 있나요?",
                                "answerKr": "직진하다가 오른쪽으로 도세요. 공원 맞은편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Where is the bus stop?",
                                "answer": "It's right in front of the school.",
                                "questionKr": "버스 정류장이 어디에 있나요?",
                                "answerKr": "학교 바로 앞에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Where is the hospital?",
                                "answer": "Go straight one block. It's on your left.",
                                "questionKr": "병원이 어디에 있나요?",
                                "answerKr": "한 블록 직진하세요. 왼편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Where is the Italian restaurant?",
                                "answer": "Turn left at the corner. It's next to the hospital.",
                                "questionKr": "이탈리아 식당이 어디에 있나요?",
                                "answerKr": "모퉁이에서 왼쪽으로 도세요. 병원 옆에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Where is the police station?",
                                "answer": "Go straight. It's between the bank and the museum.",
                                "questionKr": "경찰서가 어디에 있나요?",
                                "answerKr": "직진하세요. 은행과 박물관 사이에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Where is the art museum?",
                                "answer": "Turn right at the museum. It's on your left.",
                                "questionKr": "미술관이 어디에 있나요?",
                                "answerKr": "박물관에서 오른쪽으로 도세요. 왼편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Where is the subway station?",
                                "answer": "Go straight three blocks. It's on your right.",
                                "questionKr": "지하철역이 어디에 있나요?",
                                "answerKr": "세 블록 직진하세요. 오른편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Where is the city park?",
                                "answer": "It's behind the city hall.",
                                "questionKr": "도시 공원이 어디에 있나요?",
                                "answerKr": "시청 뒤편에 있습니다.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Where is the post office?",
                                "answer": "Go straight and turn left. It's on your right.",
                                "questionKr": "우체국이 어디에 있나요?",
                                "answerKr": "직진하다가 왼쪽으로 도세요. 오른편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Where is Nuri Bank?",
                                "answer": "Go straight two blocks and turn left. It's next to the bakery.",
                                "questionKr": "누리은행이 어디에 있나요?",
                                "answerKr": "두 블록 직진 후 왼쪽으로 도세요. 빵집 옆에 있습니다.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Where is the ABC Library?",
                                "answer": "Go straight and turn right. It's across from the park.",
                                "questionKr": "ABC 도서관이 어디에 있나요?",
                                "answerKr": "직진하다가 오른쪽으로 도세요. 공원 맞은편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Where is the bus stop?",
                                "answer": "It's right in front of the school.",
                                "questionKr": "버스 정류장이 어디에 있나요?",
                                "answerKr": "학교 바로 앞에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Where is the hospital?",
                                "answer": "Go straight one block. It's on your left.",
                                "questionKr": "병원이 어디에 있나요?",
                                "answerKr": "한 블록 직진하세요. 왼편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Where is the Italian restaurant?",
                                "answer": "Turn left at the corner. It's behind the hospital.",
                                "questionKr": "이탈리아 식당이 어디에 있나요?",
                                "answerKr": "모퉁이에서 왼쪽으로 도세요. 병원 뒤에 있습니다.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 7,
                                "question": "Where is the police station?",
                                "answer": "Go straight. It's between the bank and the museum.",
                                "questionKr": "경찰서가 어디에 있나요?",
                                "answerKr": "직진하세요. 은행과 박물관 사이에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Where is the art museum?",
                                "answer": "Turn right at the museum. It's on your left.",
                                "questionKr": "미술관이 어디에 있나요?",
                                "answerKr": "박물관에서 오른쪽으로 도세요. 왼편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Where is the subway station?",
                                "answer": "Go straight three blocks. It's on your right.",
                                "questionKr": "지하철역이 어디에 있나요?",
                                "answerKr": "세 블록 직진하세요. 오른편에 있습니다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Where is the city park?",
                                "answer": "It's behind the city hall.",
                                "questionKr": "도시 공원이 어디에 있나요?",
                                "answerKr": "시청 뒤편에 있습니다.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [도서관]",
                                "word": "library",
                                "meaning": "도서관",
                                "hint": "l___",
                                "answer": "library",
                                "options": [
                                        "library",
                                        "hospital",
                                        "bank",
                                        "post office"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [우체국]",
                                "word": "post office",
                                "meaning": "우체국",
                                "hint": "p___",
                                "answer": "post office",
                                "options": [
                                        "bank",
                                        "hospital",
                                        "post office",
                                        "library"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [은행]",
                                "word": "bank",
                                "meaning": "은행",
                                "hint": "b___",
                                "answer": "bank",
                                "options": [
                                        "hospital",
                                        "library",
                                        "bank",
                                        "post office"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [병원]",
                                "word": "hospital",
                                "meaning": "병원",
                                "hint": "h___",
                                "answer": "hospital",
                                "options": [
                                        "bank",
                                        "library",
                                        "hospital",
                                        "post office"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [똑바로, 곧장]",
                                "word": "straight",
                                "meaning": "똑바로, 곧장",
                                "hint": "s___",
                                "answer": "straight",
                                "options": [
                                        "bank",
                                        "library",
                                        "post office",
                                        "straight"
                                ]
                        }
                ]
        },
        "6G_L06": {
                "id": "6G_L06",
                "grade": 6,
                "lesson": 6,
                "publisher": "천재 (함순애)",
                "name": "6학년 6단원",
                "title": "He Has Blue Eyes",
                "shortDesc": "He Has Blue Eyes (10문항)",
                "grammarPoint": "What does your brother look like?",
                "words": [
                        {
                                "en": "look like",
                                "kr": "~처럼 생기다"
                        },
                        {
                                "en": "tall",
                                "kr": "키가 큰"
                        },
                        {
                                "en": "short",
                                "kr": "키가 작은, 짧은"
                        },
                        {
                                "en": "curly",
                                "kr": "곱슬곱슬한"
                        },
                        {
                                "en": "straight",
                                "kr": "곧은, 직모의"
                        },
                        {
                                "en": "hair",
                                "kr": "머리카락"
                        },
                        {
                                "en": "eyes",
                                "kr": "눈"
                        },
                        {
                                "en": "wearing",
                                "kr": "착용하고 있는"
                        },
                        {
                                "en": "glasses",
                                "kr": "안경"
                        },
                        {
                                "en": "appearance",
                                "kr": "외모, 겉모습"
                        },
                        {
                                "en": "smile",
                                "kr": "미소"
                        },
                        {
                                "en": "kind",
                                "kr": "친절한, 다정한"
                        }
                ],
                "sentences": [
                        {
                                "en": "What does your brother look like?",
                                "kr": "네 남동생은 어떻게 생겼니?"
                        },
                        {
                                "en": "He is tall and has short black hair.",
                                "kr": "그는 키가 크고 짧은 검은 머리를 가졌어."
                        },
                        {
                                "en": "What does she look like?",
                                "kr": "그녀는 어떻게 생겼니?"
                        },
                        {
                                "en": "She has long curly hair and big blue eyes.",
                                "kr": "그녀는 긴 곱슬머리에 큰 파란 눈을 가졌어."
                        },
                        {
                                "en": "Is he wearing glasses?",
                                "kr": "그는 안경을 쓰고 있니?"
                        },
                        {
                                "en": "Yes, he is wearing round glasses.",
                                "kr": "응, 둥근 안경을 쓰고 있어."
                        },
                        {
                                "en": "She is wearing a pretty yellow dress.",
                                "kr": "그녀는 예쁜 노란 원피스를 입고 있어."
                        },
                        {
                                "en": "Can you describe your best friend?",
                                "kr": "가장 친한 친구의 생김새를 말해 줄래?"
                        },
                        {
                                "en": "He has a warm smile and kind eyes.",
                                "kr": "그는 따뜻한 미소와 다정한 눈을 가졌어."
                        },
                        {
                                "en": "Everyone has unique and wonderful charms.",
                                "kr": "모든 사람은 저마다 특별하고 멋진 매력이 있어."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "What does Paul look like?",
                                "answer": "He has short curly hair and brown eyes.",
                                "questionKr": "폴은 어떻게 생겼니?",
                                "answerKr": "그는 짧은 곱슬머리에 갈색 눈을 가졌어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "What is Sarah wearing?",
                                "answer": "She is wearing a yellow dress and red shoes.",
                                "questionKr": "사라는 무엇을 입고 있니?",
                                "answerKr": "그녀는 노란 원피스와 빨간 신발을 신고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What does your uncle look like?",
                                "answer": "He is tall and has a warm smile.",
                                "questionKr": "삼촌은 어떻게 생기셨니?",
                                "answerKr": "키가 크시고 따뜻한 미소를 지으셨어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Does Minu wear glasses?",
                                "answer": "Yes, he does. He wears round glasses.",
                                "questionKr": "민우는 안경을 쓰니?",
                                "answerKr": "응, 그래. 둥근 안경을 써.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What does your sister look like?",
                                "answer": "She has long straight hair and big eyes.",
                                "questionKr": "네 여동생은 어떻게 생겼니?",
                                "answerKr": "긴 생머리에 큰 눈을 가졌어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "What is Tom wearing today?",
                                "answer": "He is wearing a blue shirt and blue jeans.",
                                "questionKr": "톰은 오늘 무엇을 입고 있니?",
                                "answerKr": "파란 셔츠에 청바지를 입고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Who is wearing the black cap?",
                                "answer": "Jake is wearing the black cap.",
                                "questionKr": "검은 모자를 쓰고 있는 사람은 누구니?",
                                "answerKr": "제이크가 검은 모자를 쓰고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Does she have curly hair?",
                                "answer": "No, she doesn't. She has straight black hair.",
                                "questionKr": "그녀는 곱슬머리니?",
                                "answerKr": "아니, 그녀는 곧은 검은 머리칼을 가졌어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What is your teacher wearing?",
                                "answer": "She is wearing a white coat and glasses.",
                                "questionKr": "선생님은 무엇을 입고 계시니?",
                                "answerKr": "선생님은 흰 코트를 입고 안경을 쓰셨어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What does your brother look like?",
                                "answer": "He is short and has freckles.",
                                "questionKr": "네 남동생은 어떻게 생겼니?",
                                "answerKr": "키가 아담하고 주근깨가 있어.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "What does Paul look like?",
                                "answer": "He has short curly hair and blue eyes.",
                                "questionKr": "폴은 어떻게 생겼니?",
                                "answerKr": "그는 짧은 곱슬머리에 파란 눈을 가졌어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 2,
                                "question": "What is Sarah wearing?",
                                "answer": "She is wearing a yellow dress and red shoes.",
                                "questionKr": "사라는 무엇을 입고 있니?",
                                "answerKr": "그녀는 노란 원피스와 빨간 신발을 신고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "What does your uncle look like?",
                                "answer": "He is tall and has a warm smile.",
                                "questionKr": "삼촌은 어떻게 생기셨니?",
                                "answerKr": "키가 크시고 따뜻한 미소를 지으셨어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Does Minu wear glasses?",
                                "answer": "Yes, he does. He wears round glasses.",
                                "questionKr": "민우는 안경을 쓰니?",
                                "answerKr": "응, 그래. 둥근 안경을 써.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "What does your sister look like?",
                                "answer": "She has long straight hair and big eyes.",
                                "questionKr": "네 여동생은 어떻게 생겼니?",
                                "answerKr": "긴 생머리에 큰 눈을 가졌어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "What is Tom wearing today?",
                                "answer": "He is wearing a blue shirt and blue jeans.",
                                "questionKr": "톰은 오늘 무엇을 입고 있니?",
                                "answerKr": "파란 셔츠에 청바지를 입고 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Who is wearing the black cap?",
                                "answer": "Jake is wearing the red cap.",
                                "questionKr": "검은 모자를 쓰고 있는 사람은 누구니?",
                                "answerKr": "제이크가 빨간 모자를 쓰고 있어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 8,
                                "question": "Does she have curly hair?",
                                "answer": "No, she doesn't. She has straight black hair.",
                                "questionKr": "그녀는 곱슬머리니?",
                                "answerKr": "아니, 그녀는 곧은 검은 머리칼을 가졌어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "What is your teacher wearing?",
                                "answer": "She is wearing a white coat and glasses.",
                                "questionKr": "선생님은 무엇을 입고 계시니?",
                                "answerKr": "선생님은 흰 코트를 입고 안경을 쓰셨어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What does your brother look like?",
                                "answer": "He is short and has freckles.",
                                "questionKr": "네 남동생은 어떻게 생겼니?",
                                "answerKr": "키가 아담하고 주근깨가 있어.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~처럼 생기다]",
                                "word": "look like",
                                "meaning": "~처럼 생기다",
                                "hint": "l___",
                                "answer": "look like",
                                "options": [
                                        "look like",
                                        "tall",
                                        "curly",
                                        "short"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [키가 큰]",
                                "word": "tall",
                                "meaning": "키가 큰",
                                "hint": "t___",
                                "answer": "tall",
                                "options": [
                                        "short",
                                        "look like",
                                        "curly",
                                        "tall"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [키가 작은, 짧은]",
                                "word": "short",
                                "meaning": "키가 작은, 짧은",
                                "hint": "s___",
                                "answer": "short",
                                "options": [
                                        "short",
                                        "tall",
                                        "curly",
                                        "look like"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [곱슬곱슬한]",
                                "word": "curly",
                                "meaning": "곱슬곱슬한",
                                "hint": "c___",
                                "answer": "curly",
                                "options": [
                                        "curly",
                                        "tall",
                                        "look like",
                                        "short"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [곧은, 직모의]",
                                "word": "straight",
                                "meaning": "곧은, 직모의",
                                "hint": "s___",
                                "answer": "straight",
                                "options": [
                                        "straight",
                                        "tall",
                                        "look like",
                                        "short"
                                ]
                        }
                ]
        },
        "6G_L07": {
                "id": "6G_L07",
                "grade": 6,
                "lesson": 7,
                "publisher": "천재 (함순애)",
                "name": "6학년 7단원",
                "title": "Can You Come to the Movie Festival?",
                "shortDesc": "Can You Come to the Movie Festival? (10문항)",
                "grammarPoint": "Can you come to the school movie festival?",
                "words": [
                        {
                                "en": "movie",
                                "kr": "영화"
                        },
                        {
                                "en": "festival",
                                "kr": "축제"
                        },
                        {
                                "en": "invitation",
                                "kr": "초대"
                        },
                        {
                                "en": "invite",
                                "kr": "초대하다"
                        },
                        {
                                "en": "join",
                                "kr": "참여하다, 함께하다"
                        },
                        {
                                "en": "practice",
                                "kr": "연습"
                        },
                        {
                                "en": "match",
                                "kr": "시합, 경기"
                        },
                        {
                                "en": "schedule",
                                "kr": "일정"
                        },
                        {
                                "en": "busy",
                                "kr": "바쁜"
                        },
                        {
                                "en": "popcorn",
                                "kr": "팝콘"
                        },
                        {
                                "en": "start",
                                "kr": "시작하다"
                        },
                        {
                                "en": "hope",
                                "kr": "바라다, 희망하다"
                        }
                ],
                "sentences": [
                        {
                                "en": "Can you come to the school movie festival?",
                                "kr": "학교 영화제에 올 수 있니?"
                        },
                        {
                                "en": "Sure, I'd love to go with you.",
                                "kr": "물론이지, 너와 함께 꼭 갈게."
                        },
                        {
                                "en": "Sorry, I can't come this time.",
                                "kr": "미안하지만 이번엔 갈 수 없어."
                        },
                        {
                                "en": "Why can't you come?",
                                "kr": "왜 올 수 없니?"
                        },
                        {
                                "en": "I have important soccer practice then.",
                                "kr": "그때 중요한 축구 연습이 있거든."
                        },
                        {
                                "en": "Can you join our birthday party?",
                                "kr": "우리 생일 파티에 함께할 수 있니?"
                        },
                        {
                                "en": "What time does the movie start?",
                                "kr": "영화는 몇 시에 시작하니?"
                        },
                        {
                                "en": "It starts at two in the afternoon.",
                                "kr": "오후 2시에 시작해."
                        },
                        {
                                "en": "Let's buy delicious popcorn together.",
                                "kr": "함께 맛있는 팝콘을 사자."
                        },
                        {
                                "en": "I hope you can make it next time.",
                                "kr": "다음번엔 꼭 함께할 수 있기를 바라."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Can you come to my birthday party?",
                                "answer": "Sure, I can. When is your party?",
                                "questionKr": "내 생일 파티에 올 수 있니?",
                                "answerKr": "물론이지, 갈 수 있어. 파티가 언제니?",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Can you come to the movie festival?",
                                "answer": "Sorry, I can't. I have a baseball game.",
                                "questionKr": "영화 축제에 올 수 있니?",
                                "answerKr": "미안하지만 못 가. 야구 경기가 있거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Can you come to the laser show?",
                                "answer": "Sure, I can't wait! It sounds great.",
                                "questionKr": "레이저 쇼에 올 수 있니?",
                                "answerKr": "물론이지, 정말 기대돼! 멋지겠다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Can you come to the book festival?",
                                "answer": "Yes, I can. I love reading books.",
                                "questionKr": "도서 축제에 올 수 있니?",
                                "answerKr": "응, 갈 수 있어. 난 책 읽는 것을 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "When does the party start?",
                                "answer": "It starts at two o'clock in the afternoon.",
                                "questionKr": "파티는 몇 시에 시작하니?",
                                "answerKr": "오후 2시에 시작해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Can you come to our music concert?",
                                "answer": "Sorry, I can't. I have to visit my grandparents.",
                                "questionKr": "우리 음악회에 올 수 있니?",
                                "answerKr": "미안해, 못 가. 조부모님 댁을 방문해야 하거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Where is the robot exhibition?",
                                "answer": "It's at Dream Science Center.",
                                "questionKr": "로봇 전시회는 어디서 하니?",
                                "answerKr": "드림 과학 센터에서 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Can you join our soccer team?",
                                "answer": "Sure, I can! I really love soccer.",
                                "questionKr": "우리 축구팀에 들어올 수 있니?",
                                "answerKr": "물론이지! 축구를 정말 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Can you come over to my house today?",
                                "answer": "Sorry, I can't. I have piano lessons.",
                                "questionKr": "오늘 우리 집에 놀러 올 수 있니?",
                                "answerKr": "미안하지만 안 돼. 피아노 수업이 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What should I bring to your party?",
                                "answer": "Just bring your happy smile!",
                                "questionKr": "네 파티에 무엇을 가져갈까?",
                                "answerKr": "그냥 밝은 미소만 가져오면 돼!",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Can you come to my birthday party?",
                                "answer": "Sure, I can. When is your party?",
                                "questionKr": "내 생일 파티에 올 수 있니?",
                                "answerKr": "물론이지, 갈 수 있어. 파티가 언제니?",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Can you come to the movie festival?",
                                "answer": "Sorry, I can't. I have a soccer game.",
                                "questionKr": "영화 축제에 올 수 있니?",
                                "answerKr": "미안하지만 못 가. 축구 경기가 있거든.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 3,
                                "question": "Can you come to the laser show?",
                                "answer": "Sure, I can't wait! It sounds great.",
                                "questionKr": "레이저 쇼에 올 수 있니?",
                                "answerKr": "물론이지, 정말 기대돼! 멋지겠다.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Can you come to the book festival?",
                                "answer": "Yes, I can. I love reading books.",
                                "questionKr": "도서 축제에 올 수 있니?",
                                "answerKr": "응, 갈 수 있어. 난 책 읽는 것을 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "When does the party start?",
                                "answer": "It starts at three o'clock in the afternoon.",
                                "questionKr": "파티는 몇 시에 시작하니?",
                                "answerKr": "오후 3시에 시작해.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Can you come to our music concert?",
                                "answer": "Sorry, I can't. I have to visit my grandparents.",
                                "questionKr": "우리 음악회에 올 수 있니?",
                                "answerKr": "미안해, 못 가. 조부모님 댁을 방문해야 하거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Where is the robot exhibition?",
                                "answer": "It's at Dream Science Center.",
                                "questionKr": "로봇 전시회는 어디서 하니?",
                                "answerKr": "드림 과학 센터에서 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Can you join our soccer team?",
                                "answer": "Sure, I can! I really love soccer.",
                                "questionKr": "우리 축구팀에 들어올 수 있니?",
                                "answerKr": "물론이지! 축구를 정말 좋아해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Can you come over to my house today?",
                                "answer": "Sorry, I can't. I have piano lessons.",
                                "questionKr": "오늘 우리 집에 놀러 올 수 있니?",
                                "answerKr": "미안하지만 안 돼. 피아노 수업이 있어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What should I bring to your party?",
                                "answer": "Just bring your happy smile!",
                                "questionKr": "네 파티에 무엇을 가져갈까?",
                                "answerKr": "그냥 밝은 미소만 가져오면 돼!",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [영화]",
                                "word": "movie",
                                "meaning": "영화",
                                "hint": "m___",
                                "answer": "movie",
                                "options": [
                                        "movie",
                                        "festival",
                                        "invite",
                                        "invitation"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [축제]",
                                "word": "festival",
                                "meaning": "축제",
                                "hint": "f___",
                                "answer": "festival",
                                "options": [
                                        "festival",
                                        "movie",
                                        "invitation",
                                        "invite"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [초대]",
                                "word": "invitation",
                                "meaning": "초대",
                                "hint": "i___",
                                "answer": "invitation",
                                "options": [
                                        "invite",
                                        "festival",
                                        "invitation",
                                        "movie"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [초대하다]",
                                "word": "invite",
                                "meaning": "초대하다",
                                "hint": "i___",
                                "answer": "invite",
                                "options": [
                                        "invite",
                                        "festival",
                                        "movie",
                                        "invitation"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [참여하다, 함께하다]",
                                "word": "join",
                                "meaning": "참여하다, 함께하다",
                                "hint": "j___",
                                "answer": "join",
                                "options": [
                                        "invitation",
                                        "movie",
                                        "join",
                                        "festival"
                                ]
                        }
                ]
        },
        "6G_L08": {
                "id": "6G_L08",
                "grade": 6,
                "lesson": 8,
                "publisher": "천재 (함순애)",
                "name": "6학년 8단원",
                "title": "It's Taller Than the Tree",
                "shortDesc": "It's Taller Than the Tree (10문항)",
                "grammarPoint": "Look at that giraffe. It's taller than the tree.",
                "words": [
                        {
                                "en": "taller",
                                "kr": "더 키가 큰"
                        },
                        {
                                "en": "shorter",
                                "kr": "더 짧은, 더 키 작은"
                        },
                        {
                                "en": "faster",
                                "kr": "더 빠른"
                        },
                        {
                                "en": "slower",
                                "kr": "더 느린"
                        },
                        {
                                "en": "bigger",
                                "kr": "더 큰"
                        },
                        {
                                "en": "smaller",
                                "kr": "더 작은"
                        },
                        {
                                "en": "heavier",
                                "kr": "더 무거운"
                        },
                        {
                                "en": "lighter",
                                "kr": "더 가벼운"
                        },
                        {
                                "en": "than",
                                "kr": "~보다"
                        },
                        {
                                "en": "cheetah",
                                "kr": "치타"
                        },
                        {
                                "en": "giraffe",
                                "kr": "기린"
                        },
                        {
                                "en": "mountain",
                                "kr": "산"
                        }
                ],
                "sentences": [
                        {
                                "en": "Look at that giraffe. It's taller than the tree.",
                                "kr": "저 기린을 봐. 나무보다 더 커."
                        },
                        {
                                "en": "A cheetah is faster than a lion.",
                                "kr": "치타는 사자보다 더 빨라."
                        },
                        {
                                "en": "An elephant is heavier than a bear.",
                                "kr": "코끼리는 곰보다 더 무거워."
                        },
                        {
                                "en": "Which mountain is the highest?",
                                "kr": "어느 산이 가장 높니?"
                        },
                        {
                                "en": "Mount Everest is higher than any other mountain.",
                                "kr": "에베레스트산은 다른 어떤 산보다 높아."
                        },
                        {
                                "en": "My bag is lighter than yours.",
                                "kr": "내 가방이 네 가방보다 더 가벼워."
                        },
                        {
                                "en": "Who is taller, you or Minsoo?",
                                "kr": "너와 민수 중 누가 더 키가 크니?"
                        },
                        {
                                "en": "I am a little taller than Minsoo.",
                                "kr": "내가 민수보다 조금 더 키가 커."
                        },
                        {
                                "en": "A blue whale is bigger than a bus.",
                                "kr": "흰긴수염고래는 버스보다 더 커."
                        },
                        {
                                "en": "Comparison makes science learning fun.",
                                "kr": "비교를 통해 과학을 재미있게 배울 수 있어."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Which animal is taller?",
                                "answer": "The giraffe is taller than the elephant.",
                                "questionKr": "어느 동물이 더 키가 크니?",
                                "answerKr": "기린이 코끼리보다 더 키가 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Is the cheetah faster than the horse?",
                                "answer": "Yes, it is. The cheetah is faster than the horse.",
                                "questionKr": "치타가 말보다 더 빠르니?",
                                "answerKr": "응, 그래. 치타가 말보다 더 빨라.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Which animal is heavier?",
                                "answer": "The blue whale is heavier than the elephant.",
                                "questionKr": "어느 동물이 더 무겁니?",
                                "answerKr": "대왕고래가 코끼리보다 더 무거워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Are you taller than your brother?",
                                "answer": "No, I'm not. My brother is taller than me.",
                                "questionKr": "너 남동생보다 키가 더 크니?",
                                "answerKr": "아니. 남동생이 나보다 키가 더 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Which is bigger, Korea or Canada?",
                                "answer": "Canada is much bigger than Korea.",
                                "questionKr": "한국과 캐나다 중 어느 나라가 더 크니?",
                                "answerKr": "캐나다가 한국보다 훨씬 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Is math more difficult than English?",
                                "answer": "For me, math is more difficult than English.",
                                "questionKr": "수학이 영어보다 더 어렵니?",
                                "answerKr": "나에게는 수학이 영어보다 더 어려워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Which is more expensive, the bike or skateboard?",
                                "answer": "The bike is more expensive than the skateboard.",
                                "questionKr": "자전거와 스케이트보드 중 어느 것이 더 비싸니?",
                                "answerKr": "자전거가 스케이트보드보다 더 비싸.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Who is stronger, the bear or the wolf?",
                                "answer": "The bear is stronger than the wolf.",
                                "questionKr": "곰과 늑대 중 누가 더 힘이 세니?",
                                "answerKr": "곰이 늑대보다 힘이 더 세.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Is summer hotter than spring?",
                                "answer": "Yes, summer is much hotter than spring.",
                                "questionKr": "여름이 봄보다 더 덥니?",
                                "answerKr": "응, 여름이 봄보다 훨씬 더 더워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Is this book thicker than that book?",
                                "answer": "Yes, this book is thicker than that book.",
                                "questionKr": "이 책이 저 책보다 더 두껍니?",
                                "answerKr": "응, 이 책이 저 책보다 더 두꺼워.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Which animal is taller?",
                                "answer": "The giraffe is taller than the elephant.",
                                "questionKr": "어느 동물이 더 키가 크니?",
                                "answerKr": "기린이 코끼리보다 더 키가 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Is the cheetah faster than the horse?",
                                "answer": "Yes, it is. The cheetah is faster than the horse.",
                                "questionKr": "치타가 말보다 더 빠르니?",
                                "answerKr": "응, 그래. 치타가 말보다 더 빨라.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Which animal is heavier?",
                                "answer": "The elephant is heavier than the blue whale.",
                                "questionKr": "어느 동물이 더 무겁니?",
                                "answerKr": "코끼리가 대왕고래보다 더 무거워.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 4,
                                "question": "Are you taller than your brother?",
                                "answer": "No, I'm not. My brother is taller than me.",
                                "questionKr": "너 남동생보다 키가 더 크니?",
                                "answerKr": "아니. 남동생이 나보다 키가 더 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Which is bigger, Korea or Canada?",
                                "answer": "Canada is much bigger than Korea.",
                                "questionKr": "한국과 캐나다 중 어느 나라가 더 크니?",
                                "answerKr": "캐나다가 한국보다 훨씬 커.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Is math more difficult than English?",
                                "answer": "For me, math is more difficult than English.",
                                "questionKr": "수학이 영어보다 더 어렵니?",
                                "answerKr": "나에게는 수학이 영어보다 더 어려워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Which is more expensive, the bike or skateboard?",
                                "answer": "The skateboard is more expensive than the bike.",
                                "questionKr": "자전거와 스케이트보드 중 어느 것이 더 비싸니?",
                                "answerKr": "스케이트보드가 자전거보다 더 비싸.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 8,
                                "question": "Who is stronger, the bear or the wolf?",
                                "answer": "The bear is stronger than the wolf.",
                                "questionKr": "곰과 늑대 중 누가 더 힘이 세니?",
                                "answerKr": "곰이 늑대보다 힘이 더 세.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Is summer hotter than spring?",
                                "answer": "Yes, summer is much hotter than spring.",
                                "questionKr": "여름이 봄보다 더 덥니?",
                                "answerKr": "응, 여름이 봄보다 훨씬 더 더워.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Is this book thicker than that book?",
                                "answer": "Yes, this book is thicker than that book.",
                                "questionKr": "이 책이 저 책보다 더 두껍니?",
                                "answerKr": "응, 이 책이 저 책보다 더 두꺼워.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [더 키가 큰]",
                                "word": "taller",
                                "meaning": "더 키가 큰",
                                "hint": "t___",
                                "answer": "taller",
                                "options": [
                                        "faster",
                                        "taller",
                                        "shorter",
                                        "slower"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [더 짧은, 더 키 작은]",
                                "word": "shorter",
                                "meaning": "더 짧은, 더 키 작은",
                                "hint": "s___",
                                "answer": "shorter",
                                "options": [
                                        "faster",
                                        "slower",
                                        "shorter",
                                        "taller"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [더 빠른]",
                                "word": "faster",
                                "meaning": "더 빠른",
                                "hint": "f___",
                                "answer": "faster",
                                "options": [
                                        "taller",
                                        "shorter",
                                        "slower",
                                        "faster"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [더 느린]",
                                "word": "slower",
                                "meaning": "더 느린",
                                "hint": "s___",
                                "answer": "slower",
                                "options": [
                                        "taller",
                                        "slower",
                                        "shorter",
                                        "faster"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [더 큰]",
                                "word": "bigger",
                                "meaning": "더 큰",
                                "hint": "b___",
                                "answer": "bigger",
                                "options": [
                                        "bigger",
                                        "faster",
                                        "taller",
                                        "shorter"
                                ]
                        }
                ]
        },
        "6G_L09": {
                "id": "6G_L09",
                "grade": 6,
                "lesson": 9,
                "publisher": "천재 (함순애)",
                "name": "6학년 9단원",
                "title": "What Are You Going to Do?",
                "shortDesc": "What Are You Going to Do? (10문항)",
                "grammarPoint": "What are you going to do this weekend?",
                "words": [
                        {
                                "en": "going to",
                                "kr": "~할 예정이다"
                        },
                        {
                                "en": "plan",
                                "kr": "계획"
                        },
                        {
                                "en": "weekend",
                                "kr": "주말"
                        },
                        {
                                "en": "bake",
                                "kr": "굽다"
                        },
                        {
                                "en": "cookie",
                                "kr": "쿠키"
                        },
                        {
                                "en": "visit",
                                "kr": "방문하다"
                        },
                        {
                                "en": "museum",
                                "kr": "박물관"
                        },
                        {
                                "en": "clean",
                                "kr": "청소하다"
                        },
                        {
                                "en": "watch",
                                "kr": "보다"
                        },
                        {
                                "en": "finish",
                                "kr": "끝내다"
                        },
                        {
                                "en": "relax",
                                "kr": "휴식하다"
                        },
                        {
                                "en": "excited",
                                "kr": "신난"
                        }
                ],
                "sentences": [
                        {
                                "en": "What are you going to do this weekend?",
                                "kr": "이번 주말에 무엇을 할 예정이니?"
                        },
                        {
                                "en": "I'm going to bake sweet chocolate cookies.",
                                "kr": "나는 달콤한 초콜릿 쿠키를 구울 예정이야."
                        },
                        {
                                "en": "Are you going to visit the science museum?",
                                "kr": "너 과학관에 방문할 거니?"
                        },
                        {
                                "en": "Yes, I'm going with my elder brother.",
                                "kr": "응, 형과 함께 갈 거야."
                        },
                        {
                                "en": "What is Sarah going to do tomorrow?",
                                "kr": "사라는 내일 무엇을 할 계획이니?"
                        },
                        {
                                "en": "She is going to clean her room.",
                                "kr": "사라는 방을 청소할 계획이야."
                        },
                        {
                                "en": "We are going to watch a new animation movie.",
                                "kr": "우리는 새 애니메이션 영화를 볼 예정이야."
                        },
                        {
                                "en": "I'm going to finish my homework first.",
                                "kr": "나는 먼저 숙제를 끝낼 예정이야."
                        },
                        {
                                "en": "Sounds like you have a busy weekend!",
                                "kr": "주말에 알찬 일정이 가득하구나!"
                        },
                        {
                                "en": "I hope you have a relaxing time.",
                                "kr": "편안하고 즐거운 시간 보내길 바라."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "What are you going to do this weekend?",
                                "answer": "I'm going to visit my grandparents in Daegu.",
                                "questionKr": "너 이번 주말에 무엇을 할 예정이니?",
                                "answerKr": "대구에 계신 조부모님 댁을 방문할 예정이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "What will you do tomorrow?",
                                "answer": "I will go to the library and read books.",
                                "questionKr": "너 내일 무엇을 할 거니?",
                                "answerKr": "도서관에 가서 책을 읽을 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Are you going to pick apples?",
                                "answer": "Yes, I am. My grandparents grow apple trees.",
                                "questionKr": "너 사과 딸 예정이니?",
                                "answerKr": "응, 그래. 조부모님께서 사과나무를 키우시거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "What is Tom going to do this Sunday?",
                                "answer": "He is going to stay home and rest.",
                                "questionKr": "톰은 이번 주 일요일에 뭐 할 거래?",
                                "answerKr": "집에서 쉬면서 휴식을 취할 거래.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Will you join our science club?",
                                "answer": "Yes, I will. I want to build a robot.",
                                "questionKr": "우리 과학 동아리에 들어올 거니?",
                                "answerKr": "응, 그럴 거야. 로봇을 만들고 싶어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "What are you going to do this afternoon?",
                                "answer": "I'm going to watch a movie with Tom.",
                                "questionKr": "너 오늘 오후에 뭐 할 예정이니?",
                                "answerKr": "톰과 영화를 볼 예정이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Are you going to travel this vacation?",
                                "answer": "Yes, we are going to travel to Jeju-do.",
                                "questionKr": "이번 방학에 여행 갈 예정이니?",
                                "answerKr": "응, 우리는 제주도로 여행 갈 예정이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "What will Hana do next week?",
                                "answer": "She will take a swimming test.",
                                "questionKr": "하나는 다음 주에 무엇을 할 거니?",
                                "answerKr": "그녀는 수영 시험을 볼 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Will it rain tomorrow?",
                                "answer": "No, it will be sunny and clear.",
                                "questionKr": "내일 비가 올까?",
                                "answerKr": "아니, 화창하고 맑을 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What are you going to buy at the market?",
                                "answer": "I'm going to buy some fresh strawberries.",
                                "questionKr": "시장에서 무엇을 살 예정이니?",
                                "answerKr": "신선한 딸기를 살 예정이야.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "What are you going to do this weekend?",
                                "answer": "I'm going to visit my grandparents in Busan.",
                                "questionKr": "너 이번 주말에 무엇을 할 예정이니?",
                                "answerKr": "부산에 계신 조부모님 댁을 방문할 예정이야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 2,
                                "question": "What will you do tomorrow?",
                                "answer": "I will go to the library and read books.",
                                "questionKr": "너 내일 무엇을 할 거니?",
                                "answerKr": "도서관에 가서 책을 읽을 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Are you going to pick apples?",
                                "answer": "Yes, I am. My grandparents grow apple trees.",
                                "questionKr": "너 사과 딸 예정이니?",
                                "answerKr": "응, 그래. 조부모님께서 사과나무를 키우시거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "What is Tom going to do this Sunday?",
                                "answer": "He is going to stay home and rest.",
                                "questionKr": "톰은 이번 주 일요일에 뭐 할 거래?",
                                "answerKr": "집에서 쉬면서 휴식을 취할 거래.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Will you join our science club?",
                                "answer": "Yes, I will. I want to build a robot.",
                                "questionKr": "우리 과학 동아리에 들어올 거니?",
                                "answerKr": "응, 그럴 거야. 로봇을 만들고 싶어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "What are you going to do this afternoon?",
                                "answer": "I'm going to watch a movie with Jake.",
                                "questionKr": "너 오늘 오후에 뭐 할 예정이니?",
                                "answerKr": "제이크와 영화를 볼 예정이야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 7,
                                "question": "Are you going to travel this vacation?",
                                "answer": "Yes, we are going to travel to Jeju-do.",
                                "questionKr": "이번 방학에 여행 갈 예정이니?",
                                "answerKr": "응, 우리는 제주도로 여행 갈 예정이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "What will Hana do next week?",
                                "answer": "She will take a swimming test.",
                                "questionKr": "하나는 다음 주에 무엇을 할 거니?",
                                "answerKr": "그녀는 수영 시험을 볼 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Will it rain tomorrow?",
                                "answer": "No, it will be sunny and clear.",
                                "questionKr": "내일 비가 올까?",
                                "answerKr": "아니, 화창하고 맑을 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "What are you going to buy at the market?",
                                "answer": "I'm going to buy some fresh strawberries.",
                                "questionKr": "시장에서 무엇을 살 예정이니?",
                                "answerKr": "신선한 딸기를 살 예정이야.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [~할 예정이다]",
                                "word": "going to",
                                "meaning": "~할 예정이다",
                                "hint": "g___",
                                "answer": "going to",
                                "options": [
                                        "plan",
                                        "bake",
                                        "going to",
                                        "weekend"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [계획]",
                                "word": "plan",
                                "meaning": "계획",
                                "hint": "p___",
                                "answer": "plan",
                                "options": [
                                        "plan",
                                        "bake",
                                        "going to",
                                        "weekend"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [주말]",
                                "word": "weekend",
                                "meaning": "주말",
                                "hint": "w___",
                                "answer": "weekend",
                                "options": [
                                        "weekend",
                                        "plan",
                                        "bake",
                                        "going to"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [굽다]",
                                "word": "bake",
                                "meaning": "굽다",
                                "hint": "b___",
                                "answer": "bake",
                                "options": [
                                        "bake",
                                        "going to",
                                        "plan",
                                        "weekend"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [쿠키]",
                                "word": "cookie",
                                "meaning": "쿠키",
                                "hint": "c___",
                                "answer": "cookie",
                                "options": [
                                        "going to",
                                        "cookie",
                                        "weekend",
                                        "plan"
                                ]
                        }
                ]
        },
        "6G_L10": {
                "id": "6G_L10",
                "grade": 6,
                "lesson": 10,
                "publisher": "천재 (함순애)",
                "name": "6학년 10단원",
                "title": "How Often Do You Eat Vegetables?",
                "shortDesc": "How Often Do You Eat Vegetables? (10문항)",
                "grammarPoint": "How often do you eat fresh vegetables?",
                "words": [
                        {
                                "en": "how often",
                                "kr": "얼마나 자주"
                        },
                        {
                                "en": "every day",
                                "kr": "매일"
                        },
                        {
                                "en": "once",
                                "kr": "한 번"
                        },
                        {
                                "en": "twice",
                                "kr": "두 번"
                        },
                        {
                                "en": "times",
                                "kr": "번, 회"
                        },
                        {
                                "en": "week",
                                "kr": "주, 주일"
                        },
                        {
                                "en": "vegetable",
                                "kr": "채소"
                        },
                        {
                                "en": "exercise",
                                "kr": "운동하다"
                        },
                        {
                                "en": "brush",
                                "kr": "솔질하다, 닦다"
                        },
                        {
                                "en": "teeth",
                                "kr": "이, 치아"
                        },
                        {
                                "en": "healthy",
                                "kr": "건강한"
                        },
                        {
                                "en": "habit",
                                "kr": "습관"
                        }
                ],
                "sentences": [
                        {
                                "en": "How often do you eat fresh vegetables?",
                                "kr": "얼마나 자주 신선한 채소를 먹니?"
                        },
                        {
                                "en": "I eat green vegetables every day.",
                                "kr": "나는 매일 녹색 채소를 먹어."
                        },
                        {
                                "en": "How often do you exercise?",
                                "kr": "얼마나 자주 운동을 하니?"
                        },
                        {
                                "en": "I play sports three times a week.",
                                "kr": "나는 일주일에 세 번 운동을 해."
                        },
                        {
                                "en": "How often do you brush your teeth?",
                                "kr": "얼마나 자주 이를 닦니?"
                        },
                        {
                                "en": "I brush my teeth three times a day.",
                                "kr": "나는 하루에 세 번 이를 닦아."
                        },
                        {
                                "en": "Do you drink milk often?",
                                "kr": "우유를 자주 마시니?"
                        },
                        {
                                "en": "I drink fresh milk twice a day.",
                                "kr": "나는 하루에 두 번 신선한 우유를 마셔."
                        },
                        {
                                "en": "Healthy habits make our bodies strong.",
                                "kr": "건강한 습관이 우리 몸을 튼튼하게 만들어 줘."
                        },
                        {
                                "en": "Regular exercise keeps you energized.",
                                "kr": "규칙적인 운동은 활력을 불어넣어 줘."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "How often do you exercise?",
                                "answer": "I exercise three times a week.",
                                "questionKr": "너는 얼마나 자주 운동하니?",
                                "answerKr": "일주일에 세 번 운동해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "How often do you eat vegetables?",
                                "answer": "I eat vegetables every day.",
                                "questionKr": "너는 얼마나 자주 채소를 먹니?",
                                "answerKr": "매일 채소를 먹어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "How often do you clean your room?",
                                "answer": "I clean my room once a week on Saturdays.",
                                "questionKr": "너는 얼마나 자주 방을 청소하니?",
                                "answerKr": "토요일마다 일주일에 한 번 청소해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "How often do you brush your teeth?",
                                "answer": "I brush my teeth three times a day.",
                                "questionKr": "너는 하루에 양치를 몇 번 하니?",
                                "answerKr": "하루에 세 번 양치를 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "How often do you go to the library?",
                                "answer": "I go to the library twice a week.",
                                "questionKr": "너는 얼마나 자주 도서관에 가니?",
                                "answerKr": "일주일에 두 번 도서관에 가.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "How often does Tom play soccer?",
                                "answer": "He plays soccer four times a week.",
                                "questionKr": "톰은 얼마나 자주 축구를 하니?",
                                "answerKr": "그는 일주일에 네 번 축구를 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "How often do you wash your hands?",
                                "answer": "I wash my hands many times a day.",
                                "questionKr": "너는 손을 얼마나 자주 씻니?",
                                "answerKr": "하루에 여러 번 손을 씻어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "How often do you eat fast food?",
                                "answer": "I eat fast food once a month.",
                                "questionKr": "패스트푸드는 얼마나 자주 먹니?",
                                "answerKr": "한 달에 한 번 먹어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "How often do you ride a bicycle?",
                                "answer": "I ride a bicycle twice a month.",
                                "questionKr": "너는 자전거를 얼마나 자주 타니?",
                                "answerKr": "한 달에 두 번 자전거를 타.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "How often do you read English books?",
                                "answer": "I read English books every evening.",
                                "questionKr": "영어 책은 얼마나 자주 읽니?",
                                "answerKr": "매일 저녁에 영어 책을 읽어.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "How often do you exercise?",
                                "answer": "I exercise four times a week.",
                                "questionKr": "너는 얼마나 자주 운동하니?",
                                "answerKr": "일주일에 네 번 운동해.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 2,
                                "question": "How often do you eat vegetables?",
                                "answer": "I eat vegetables every day.",
                                "questionKr": "너는 얼마나 자주 채소를 먹니?",
                                "answerKr": "매일 채소를 먹어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "How often do you clean your room?",
                                "answer": "I clean my room once a week on Saturdays.",
                                "questionKr": "너는 얼마나 자주 방을 청소하니?",
                                "answerKr": "토요일마다 일주일에 한 번 청소해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "How often do you brush your teeth?",
                                "answer": "I brush my teeth twice a day.",
                                "questionKr": "너는 하루에 양치를 몇 번 하니?",
                                "answerKr": "하루에 두 번 양치를 해.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 5,
                                "question": "How often do you go to the library?",
                                "answer": "I go to the library twice a week.",
                                "questionKr": "너는 얼마나 자주 도서관에 가니?",
                                "answerKr": "일주일에 두 번 도서관에 가.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "How often does Tom play soccer?",
                                "answer": "He plays soccer four times a week.",
                                "questionKr": "톰은 얼마나 자주 축구를 하니?",
                                "answerKr": "그는 일주일에 네 번 축구를 해.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "How often do you wash your hands?",
                                "answer": "I wash my hands many times a day.",
                                "questionKr": "너는 손을 얼마나 자주 씻니?",
                                "answerKr": "하루에 여러 번 손을 씻어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "How often do you eat fast food?",
                                "answer": "I eat fast food once a month.",
                                "questionKr": "패스트푸드는 얼마나 자주 먹니?",
                                "answerKr": "한 달에 한 번 먹어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "How often do you ride a bicycle?",
                                "answer": "I ride a bicycle twice a month.",
                                "questionKr": "너는 자전거를 얼마나 자주 타니?",
                                "answerKr": "한 달에 두 번 자전거를 타.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "How often do you read English books?",
                                "answer": "I read English books every evening.",
                                "questionKr": "영어 책은 얼마나 자주 읽니?",
                                "answerKr": "매일 저녁에 영어 책을 읽어.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [얼마나 자주]",
                                "word": "how often",
                                "meaning": "얼마나 자주",
                                "hint": "h___",
                                "answer": "how often",
                                "options": [
                                        "how often",
                                        "twice",
                                        "once",
                                        "every day"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [매일]",
                                "word": "every day",
                                "meaning": "매일",
                                "hint": "e___",
                                "answer": "every day",
                                "options": [
                                        "once",
                                        "every day",
                                        "how often",
                                        "twice"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [한 번]",
                                "word": "once",
                                "meaning": "한 번",
                                "hint": "o___",
                                "answer": "once",
                                "options": [
                                        "every day",
                                        "twice",
                                        "how often",
                                        "once"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [두 번]",
                                "word": "twice",
                                "meaning": "두 번",
                                "hint": "t___",
                                "answer": "twice",
                                "options": [
                                        "how often",
                                        "twice",
                                        "every day",
                                        "once"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [번, 회]",
                                "word": "times",
                                "meaning": "번, 회",
                                "hint": "t___",
                                "answer": "times",
                                "options": [
                                        "once",
                                        "how often",
                                        "times",
                                        "every day"
                                ]
                        }
                ]
        },
        "6G_L11": {
                "id": "6G_L11",
                "grade": 6,
                "lesson": 11,
                "publisher": "천재 (함순애)",
                "name": "6학년 11단원",
                "title": "Do You Know Anything About Tuho?",
                "shortDesc": "Do You Know Anything About Tuho? (10문항)",
                "grammarPoint": "Do you know anything about Tuho?",
                "words": [
                        {
                                "en": "know",
                                "kr": "알다"
                        },
                        {
                                "en": "traditional",
                                "kr": "전통적인"
                        },
                        {
                                "en": "culture",
                                "kr": "문화"
                        },
                        {
                                "en": "game",
                                "kr": "놀이, 게임"
                        },
                        {
                                "en": "Tuho",
                                "kr": "투호"
                        },
                        {
                                "en": "Yutnori",
                                "kr": "윷놀이"
                        },
                        {
                                "en": "jar",
                                "kr": "항아리"
                        },
                        {
                                "en": "arrow",
                                "kr": "화살"
                        },
                        {
                                "en": "throw",
                                "kr": "던지다"
                        },
                        {
                                "en": "rule",
                                "kr": "규칙"
                        },
                        {
                                "en": "history",
                                "kr": "역사"
                        },
                        {
                                "en": "introduce",
                                "kr": "소개하다"
                        }
                ],
                "sentences": [
                        {
                                "en": "Do you know anything about Tuho?",
                                "kr": "투호에 대해 아는 것이 있니?"
                        },
                        {
                                "en": "It is a traditional Korean folk game.",
                                "kr": "그것은 한국의 전통 민속놀이야."
                        },
                        {
                                "en": "How do you play Tuho?",
                                "kr": "투호는 어떻게 하는 게임이니?"
                        },
                        {
                                "en": "You throw wooden arrows into a jar.",
                                "kr": "나무 화살을 항아리 속에 던져 넣는 거야."
                        },
                        {
                                "en": "Have you played Yutnori before?",
                                "kr": "전에 윷놀이를 해 본 적이 있니?"
                        },
                        {
                                "en": "Yes, we play Yutnori on Seollal.",
                                "kr": "응, 우리는 설날에 윷놀이를 해."
                        },
                        {
                                "en": "Korean traditional culture is fascinating.",
                                "kr": "한국의 전통문화는 참 매력적이야."
                        },
                        {
                                "en": "Can foreigners try these games easily?",
                                "kr": "외국인들도 이 놀이들을 쉽게 해 볼 수 있니?"
                        },
                        {
                                "en": "Of course, the rules are simple and fun.",
                                "kr": "물론이지, 규칙이 간단하고 재미있어."
                        },
                        {
                                "en": "Let's introduce our culture to the world.",
                                "kr": "우리 문화를 전 세계에 널리 소개하자."
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Do you know anything about jegichagi?",
                                "answer": "Yes, I do. It's a traditional Korean game.",
                                "questionKr": "제기차기에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 한국의 전통 놀이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "How do you play jegichagi?",
                                "answer": "You kick a jegi and keep it in the air.",
                                "questionKr": "제기차기는 어떻게 하니?",
                                "answerKr": "제기를 발로 차서 공중에 계속 띄우는 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Do you know anything about tuho?",
                                "answer": "Yes, I do. You throw arrows into a pot.",
                                "questionKr": "투호에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 화살을 항아리 안에 던져 넣는 놀이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Do you know anything about djembes?",
                                "answer": "Yes, I do. They are traditional African drums.",
                                "questionKr": "젬베에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 아프리카 전통 북이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Do you know anything about hanbok?",
                                "answer": "Yes, I do. It's traditional Korean clothes.",
                                "questionKr": "한복에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 한국의 전통 옷이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Do you know anything about saris?",
                                "answer": "Yes, I do. It's traditional clothing from India.",
                                "questionKr": "사리에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 인도의 전통 의상이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Do you know anything about taekwondo?",
                                "answer": "Yes, I do. It's a Korean martial art.",
                                "questionKr": "태권도에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 한국의 전통 무술이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you know anything about kimjang?",
                                "answer": "Yes, I do. It's making kimchi for winter.",
                                "questionKr": "김장에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 겨울을 나기 위해 김치를 담그는 문화야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Can I try jegichagi?",
                                "answer": "Of course! Let's practice kicking together.",
                                "questionKr": "나 제기차기 한번 해봐도 될까?",
                                "answerKr": "물론이지! 함께 차는 연습을 해보자.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you know anything about ssireum?",
                                "answer": "Yes, I do. It's traditional Korean wrestling.",
                                "questionKr": "씨름에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 한국 전통 레슬링(씨름)이야.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Do you know anything about jegichagi?",
                                "answer": "Yes, I do. It's a traditional Chinese game.",
                                "questionKr": "제기차기에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 중국의 전통 놀이야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 2,
                                "question": "How do you play jegichagi?",
                                "answer": "You kick a jegi and keep it in the air.",
                                "questionKr": "제기차기는 어떻게 하니?",
                                "answerKr": "제기를 발로 차서 공중에 계속 띄우는 거야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Do you know anything about tuho?",
                                "answer": "Yes, I do. You throw arrows into a pot.",
                                "questionKr": "투호에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 화살을 항아리 안에 던져 넣는 놀이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Do you know anything about djembes?",
                                "answer": "Yes, I do. They are traditional Indian drums.",
                                "questionKr": "젬베에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 인도의 전통 북이야.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 5,
                                "question": "Do you know anything about hanbok?",
                                "answer": "Yes, I do. It's traditional Korean clothes.",
                                "questionKr": "한복에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 한국의 전통 옷이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Do you know anything about saris?",
                                "answer": "Yes, I do. It's traditional clothing from India.",
                                "questionKr": "사리에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 인도의 전통 의상이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Do you know anything about taekwondo?",
                                "answer": "Yes, I do. It's a Korean martial art.",
                                "questionKr": "태권도에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 한국의 전통 무술이야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Do you know anything about kimjang?",
                                "answer": "Yes, I do. It's making kimchi for winter.",
                                "questionKr": "김장에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 겨울을 나기 위해 김치를 담그는 문화야.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Can I try jegichagi?",
                                "answer": "Of course! Let's practice kicking together.",
                                "questionKr": "나 제기차기 한번 해봐도 될까?",
                                "answerKr": "물론이지! 함께 차는 연습을 해보자.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Do you know anything about ssireum?",
                                "answer": "Yes, I do. It's traditional Korean wrestling.",
                                "questionKr": "씨름에 대해 뭐 아는 것 있니?",
                                "answerKr": "응, 알아. 한국 전통 레슬링(씨름)이야.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [알다]",
                                "word": "know",
                                "meaning": "알다",
                                "hint": "k___",
                                "answer": "know",
                                "options": [
                                        "culture",
                                        "traditional",
                                        "know",
                                        "game"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [전통적인]",
                                "word": "traditional",
                                "meaning": "전통적인",
                                "hint": "t___",
                                "answer": "traditional",
                                "options": [
                                        "traditional",
                                        "know",
                                        "culture",
                                        "game"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [문화]",
                                "word": "culture",
                                "meaning": "문화",
                                "hint": "c___",
                                "answer": "culture",
                                "options": [
                                        "traditional",
                                        "culture",
                                        "know",
                                        "game"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [놀이, 게임]",
                                "word": "game",
                                "meaning": "놀이, 게임",
                                "hint": "g___",
                                "answer": "game",
                                "options": [
                                        "traditional",
                                        "know",
                                        "culture",
                                        "game"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [투호]",
                                "word": "Tuho",
                                "meaning": "투호",
                                "hint": "T___",
                                "answer": "Tuho",
                                "options": [
                                        "know",
                                        "traditional",
                                        "Tuho",
                                        "culture"
                                ]
                        }
                ]
        },
        "6G_L12": {
                "id": "6G_L12",
                "grade": 6,
                "lesson": 12,
                "publisher": "천재 (함순애)",
                "name": "6학년 12단원",
                "title": "We Made a Class Album",
                "shortDesc": "We Made a Class Album (10문항)",
                "grammarPoint": "What did you do this school year?",
                "words": [
                        {
                                "en": "made",
                                "kr": "만들었다 (make의 과거)"
                        },
                        {
                                "en": "class",
                                "kr": "학급, 반"
                        },
                        {
                                "en": "album",
                                "kr": "앨범"
                        },
                        {
                                "en": "graduation",
                                "kr": "졸업"
                        },
                        {
                                "en": "memory",
                                "kr": "추억"
                        },
                        {
                                "en": "photo",
                                "kr": "사진"
                        },
                        {
                                "en": "musical",
                                "kr": "뮤지컬"
                        },
                        {
                                "en": "perform",
                                "kr": "공연하다"
                        },
                        {
                                "en": "plant",
                                "kr": "심다"
                        },
                        {
                                "en": "tree",
                                "kr": "나무"
                        },
                        {
                                "en": "remember",
                                "kr": "기억하다"
                        },
                        {
                                "en": "middle school",
                                "kr": "중학교"
                        }
                ],
                "sentences": [
                        {
                                "en": "What did you do this school year?",
                                "kr": "올해 학교에서 무엇을 했니?"
                        },
                        {
                                "en": "We made a beautiful class album.",
                                "kr": "우리는 아름다운 학급 앨범을 만들었어."
                        },
                        {
                                "en": "Look at all these happy photos.",
                                "kr": "이 행복한 사진들을 모두 봐."
                        },
                        {
                                "en": "We performed an English musical together.",
                                "kr": "우리는 함께 영어 뮤지컬을 공연했어."
                        },
                        {
                                "en": "We planted green trees on Arbor Day.",
                                "kr": "우리는 식목일에 푸른 나무를 심었어."
                        },
                        {
                                "en": "Do you remember our exciting sports day?",
                                "kr": "우리의 신나는 운동회를 기억하니?"
                        },
                        {
                                "en": "Yes, our class won the relay race. ",
                                "kr": "응, 우리 반이 이어달리기에서 우승했잖아."
                        },
                        {
                                "en": "We shared so much laughter this year.",
                                "kr": "우리는 올해 정말 많은 웃음을 나눴어."
                        },
                        {
                                "en": "I will never forget my dear classmates.",
                                "kr": "소중한 우리 반 친구들을 절대 잊지 않을 거야."
                        },
                        {
                                "en": "Good luck in middle school, everyone!",
                                "kr": "모두 중학교에서도 행운이 가득하길 바라!"
                        }
                ],
                "citizenQA": [
                        {
                                "id": 1,
                                "question": "Did you paint the wall?",
                                "answer": "Yes, I did. I painted the wall with Uju.",
                                "questionKr": "너 벽화 그렸니?",
                                "answerKr": "응, 그렸어. 우주와 함께 벽화를 그렸어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Did you clean the street?",
                                "answer": "No, I didn't. My brother cleaned the street.",
                                "questionKr": "너 거리 청소했니?",
                                "answerKr": "아니, 안 했어. 내 남동생이 거리를 청소했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Did you win the quiz?",
                                "answer": "No, I didn't. Hana won the quiz.",
                                "questionKr": "너 퀴즈에서 이겼니?",
                                "answerKr": "아니, 안 그랬어. 하나가 퀴즈에서 이겼어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Did you take these pictures?",
                                "answer": "Yes, I did. I made a class album.",
                                "questionKr": "네가 이 사진들을 찍었니?",
                                "answerKr": "응, 내가 찍었어. 학급 앨범을 만들었거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Did you make these cookies?",
                                "answer": "No, I didn't. My friend made the cookies.",
                                "questionKr": "네가 이 쿠키들을 만들었니?",
                                "answerKr": "아니, 내가 안 만들었어. 내 친구가 쿠키를 만들었어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 6,
                                "question": "Did you read my books?",
                                "answer": "Yes, I did. I always read your books in my bed.",
                                "questionKr": "내 책들을 읽었니?",
                                "answerKr": "응, 읽었어. 침대에서 항상 네 책을 읽는걸.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Did you guys make a short movie?",
                                "answer": "Yes, we did. We made a class movie.",
                                "questionKr": "너희들 단편 영화 만들었니?",
                                "answerKr": "응, 만들었어. 학급 영화를 만들었어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Did you study English yesterday?",
                                "answer": "Yes, I did. I studied English yesterday.",
                                "questionKr": "너 어제 영어 공부했니?",
                                "answerKr": "응, 했어. 어제 영어 공부를 했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Did you play tennis last weekend?",
                                "answer": "No, I didn't. I played badminton with Tom.",
                                "questionKr": "지난 주말에 테니스 쳤니?",
                                "answerKr": "아니, 안 쳤어. 톰과 배드민턴을 쳤어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 10,
                                "question": "Did you watch the movie?",
                                "answer": "Yes, I did. I liked the movie.",
                                "questionKr": "너 그 영화 봤니?",
                                "answerKr": "응, 봤어. 그 영화가 마음에 들었어.",
                                "isMafiaDifference": false
                        }
                ],
                "mafiaQA": [
                        {
                                "id": 1,
                                "question": "Did you paint the wall?",
                                "answer": "Yes, I did. I painted the wall with Uju.",
                                "questionKr": "너 벽화 그렸니?",
                                "answerKr": "응, 그렸어. 우주와 함께 벽화를 그렸어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 2,
                                "question": "Did you clean the street?",
                                "answer": "No, I didn't. My brother cleaned the street.",
                                "questionKr": "너 거리 청소했니?",
                                "answerKr": "아니, 안 했어. 내 남동생이 거리를 청소했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 3,
                                "question": "Did you win the quiz?",
                                "answer": "No, I didn't. Hana won the quiz.",
                                "questionKr": "너 퀴즈에서 이겼니?",
                                "answerKr": "아니, 안 그랬어. 하나가 퀴즈에서 이겼어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 4,
                                "question": "Did you take these pictures?",
                                "answer": "Yes, I did. I made a class album.",
                                "questionKr": "네가 이 사진들을 찍었니?",
                                "answerKr": "응, 내가 찍었어. 학급 앨범을 만들었거든.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 5,
                                "question": "Did you make these cookies?",
                                "answer": "No, I didn't. My mom made the cookies.",
                                "questionKr": "네가 이 쿠키들을 만들었니?",
                                "answerKr": "아니, 내가 안 만들었어. 우리 엄마가 쿠키를 만드셨어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 6,
                                "question": "Did you read my books?",
                                "answer": "Yes, I did. I always read your books in my bed.",
                                "questionKr": "내 책들을 읽었니?",
                                "answerKr": "응, 읽었어. 침대에서 항상 네 책을 읽는걸.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 7,
                                "question": "Did you guys make a short movie?",
                                "answer": "Yes, we did. We made a class movie.",
                                "questionKr": "너희들 단편 영화 만들었니?",
                                "answerKr": "응, 만들었어. 학급 영화를 만들었어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 8,
                                "question": "Did you study English yesterday?",
                                "answer": "Yes, I did. I studied English yesterday.",
                                "questionKr": "너 어제 영어 공부했니?",
                                "answerKr": "응, 했어. 어제 영어 공부를 했어.",
                                "isMafiaDifference": false
                        },
                        {
                                "id": 9,
                                "question": "Did you play tennis last weekend?",
                                "answer": "No, I didn't. I played soccer with Tom.",
                                "questionKr": "지난 주말에 테니스 쳤니?",
                                "answerKr": "아니, 안 쳤어. 톰과 축구를 했어.",
                                "isMafiaDifference": true
                        },
                        {
                                "id": 10,
                                "question": "Did you watch the movie?",
                                "answer": "Yes, I did. I liked the movie.",
                                "questionKr": "너 그 영화 봤니?",
                                "answerKr": "응, 봤어. 그 영화가 마음에 들었어.",
                                "isMafiaDifference": false
                        }
                ],
                "escapeQuizzes": [
                        {
                                "question": "다음 뜻에 알맞은 단어는? [만들었다 (make의 과거)]",
                                "word": "made",
                                "meaning": "만들었다 (make의 과거)",
                                "hint": "m___",
                                "answer": "made",
                                "options": [
                                        "graduation",
                                        "made",
                                        "album",
                                        "class"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [학급, 반]",
                                "word": "class",
                                "meaning": "학급, 반",
                                "hint": "c___",
                                "answer": "class",
                                "options": [
                                        "made",
                                        "class",
                                        "album",
                                        "graduation"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [앨범]",
                                "word": "album",
                                "meaning": "앨범",
                                "hint": "a___",
                                "answer": "album",
                                "options": [
                                        "made",
                                        "graduation",
                                        "album",
                                        "class"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [졸업]",
                                "word": "graduation",
                                "meaning": "졸업",
                                "hint": "g___",
                                "answer": "graduation",
                                "options": [
                                        "graduation",
                                        "made",
                                        "class",
                                        "album"
                                ]
                        },
                        {
                                "question": "다음 뜻에 알맞은 단어는? [추억]",
                                "word": "memory",
                                "meaning": "추억",
                                "hint": "m___",
                                "answer": "memory",
                                "options": [
                                        "memory",
                                        "made",
                                        "class",
                                        "album"
                                ]
                        }
                ]
        }
};

    let currentUnitId = "6G_L04";

    const MafiaQuestions = {
        setCurrentUnit: function(unitId) {
            if (UNITS_DATA[unitId]) {
                currentUnitId = unitId;
                return true;
            }
            console.warn(`[MafiaQuestions] Unit not found: ${unitId}`);
            return false;
        },

        getCurrentUnit: function() {
            return UNITS_DATA[currentUnitId] || UNITS_DATA["6G_L04"];
        },

        getUnitsList: function() {
            return Object.keys(UNITS_DATA).map(key => ({
                id: UNITS_DATA[key].id,
                grade: UNITS_DATA[key].grade,
                lesson: UNITS_DATA[key].lesson,
                publisher: UNITS_DATA[key].publisher || "",
                name: UNITS_DATA[key].name,
                title: UNITS_DATA[key].title,
                shortDesc: UNITS_DATA[key].shortDesc,
                grammarPoint: UNITS_DATA[key].grammarPoint,
                questionCount: (UNITS_DATA[key].citizenQA || []).length
            }));
        },

        getUnitsByGrade: function(grade) {
            if (!grade || grade === 'all' || grade === 'ALL') return this.getUnitsList();
            return this.getUnitsList().filter(u => Number(u.grade) === Number(grade));
        },

        getWorksheetQA: function(role = 'CITIZEN', unitId) {
            const u = unitId ? (UNITS_DATA[unitId] || this.getCurrentUnit()) : this.getCurrentUnit();
            const list = (role === 'MAFIA') ? u.mafiaQA : u.citizenQA;
            return JSON.parse(JSON.stringify(list));
        },

        CITIZEN_QA: function(unitId) {
            return this.getWorksheetQA('CITIZEN', unitId);
        },

        MAFIA_QA: function(unitId) {
            return this.getWorksheetQA('MAFIA', unitId);
        },

        ESCAPE_QUIZZES: function(unitId) {
            const u = unitId ? (UNITS_DATA[unitId] || this.getCurrentUnit()) : this.getCurrentUnit();
            return JSON.parse(JSON.stringify(u.escapeQuizzes || []));
        },

        formatQuestion: function(item) {
            if (!item) return '';
            if (typeof item === 'string') return item;
            if (item.question) return item.question;
            return '';
        },

        formatAnswer: function(item) {
            if (!item) return '';
            if (typeof item === 'string') return item;
            if (item.answer) return item.answer;
            return '';
        },

        getQAById: function(id, role = 'CITIZEN', unitId) {
            const u = unitId ? (UNITS_DATA[unitId] || this.getCurrentUnit()) : this.getCurrentUnit();
            const list = (role === 'MAFIA') ? u.mafiaQA : u.citizenQA;
            return list.find(q => q.id === Number(id)) || list[0];
        },

        getRandomEscapeQuiz: function(unitId) {
            const u = unitId ? (UNITS_DATA[unitId] || this.getCurrentUnit()) : this.getCurrentUnit();
            const pool = u.escapeQuizzes || [];
            if (pool.length === 0) return null;
            const idx = Math.floor(Math.random() * pool.length);
            return JSON.parse(JSON.stringify(pool[idx]));
        },

        getBotAnswerText: function(qaId, botRole, botBluff = false, unitId) {
            const role = botBluff ? 'CITIZEN' : botRole;
            const qa = this.getQAById(qaId, role, unitId);
            return this.formatAnswer(qa);
        }
    };

    window.MafiaQuestions = MafiaQuestions;

})(typeof window !== 'undefined' ? window : this);
