/**
 * questions.js
 * 초등 3~6학년 영어 1단원 ~ 12단원 전체 마피아 게임 단원별 질문/대답 및 탈출 퀴즈 데이터셋
 * 
 * - 3학년: YBM (최희경) 1~12단원 전 단원 정합
 * - 4학년: YBM (최희경) 1~12단원 전 단원 정합
 * - 5학년: 천재 (함순애) 1~12단원 전 단원 정합
 * - 6학년: 천재 (함순애) 1~12단원 전 단원 정합
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
        "title": "Hi, I'm Sena",
        "shortDesc": "인사하고 자기소개하기 (10문항)",
        "grammarPoint": "Hi, I'm [이름]. / Nice to meet you.",
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
                "en": "bye",
                "kr": "잘 가"
            },
            {
                "en": "goodbye",
                "kr": "안녕히 가세요"
            },
            {
                "en": "meet",
                "kr": "만나다"
            },
            {
                "en": "nice",
                "kr": "좋은, 반가운"
            },
            {
                "en": "friend",
                "kr": "친구"
            },
            {
                "en": "you",
                "kr": "너, 당신"
            }
        ],
        "sentences": [
            {
                "en": "Hi, I'm Sena.",
                "kr": "안녕, 나는 세나야."
            },
            {
                "en": "Hello, my name is Minsoo.",
                "kr": "안녕, 내 이름은 민수야."
            },
            {
                "en": "Nice to meet you.",
                "kr": "만나서 반가워."
            },
            {
                "en": "Goodbye, see you tomorrow.",
                "kr": "잘 가, 내일 또 봐."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "Hi, what's your name?",
                "answer": "Hello, I'm Minsoo.",
                "questionKr": "안녕, 네 이름은 뭐니?",
                "answerKr": "안녕, 나는 민수야.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Nice to meet you, Sena.",
                "answer": "Nice to meet you, too.",
                "questionKr": "만나서 반가워, 세나야.",
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
                "question": "Hi, what's your name?",
                "answer": "Hello, I'm Minsoo.",
                "questionKr": "안녕, 네 이름은 뭐니?",
                "answerKr": "안녕, 나는 민수야.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Nice to meet you, Sena.",
                "answer": "Nice to meet you, too.",
                "questionKr": "만나서 반가워, 세나야.",
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
                "answer": "She is my sister, Bora.",
                "questionKr": "네 친구는 누구니?",
                "answerKr": "내 여동생 보라야.",
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
                "answer": "I am in the fourth grade.",
                "questionKr": "너 몇 학년이니?",
                "answerKr": "나는 4학년이야.",
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
                "question": "빈칸에 들어갈 알맞은 단어는? [Nice to ______ you.]",
                "word": "meet",
                "meaning": "만나다",
                "hint": "m___",
                "answer": "meet",
                "options": [
                    "meet",
                    "look",
                    "play",
                    "read"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [친구]",
                "word": "friend",
                "meaning": "친구",
                "hint": "f_____",
                "answer": "friend",
                "options": [
                    "friend",
                    "school",
                    "pencil",
                    "apple"
                ]
            },
            {
                "question": "헤어질 때 하는 인사는? [잘 가]",
                "word": "goodbye",
                "meaning": "안녕히 가세요",
                "hint": "g______",
                "answer": "goodbye",
                "options": [
                    "goodbye",
                    "hello",
                    "thank",
                    "sorry"
                ]
            },
            {
                "question": "빈칸에 알맞은 단어는? [My ______ is Sena.]",
                "word": "name",
                "meaning": "이름",
                "hint": "n___",
                "answer": "name",
                "options": [
                    "name",
                    "grade",
                    "desk",
                    "book"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [안녕 (만났을 때)]",
                "word": "hello",
                "meaning": "안녕",
                "hint": "h____",
                "answer": "hello",
                "options": [
                    "hello",
                    "bye",
                    "night",
                    "sing"
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
        "shortDesc": "사물의 이름 묻고 답하기 (10문항)",
        "grammarPoint": "What's this? / What's that? - It's a [사물].",
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
                "en": "book",
                "kr": "책"
            },
            {
                "en": "pen",
                "kr": "펜"
            },
            {
                "en": "pencil",
                "kr": "연필"
            },
            {
                "en": "cup",
                "kr": "컵"
            },
            {
                "en": "cap",
                "kr": "모자"
            },
            {
                "en": "bag",
                "kr": "가방"
            },
            {
                "en": "desk",
                "kr": "책상"
            },
            {
                "en": "chair",
                "kr": "의자"
            },
            {
                "en": "apple",
                "kr": "사과"
            }
        ],
        "sentences": [
            {
                "en": "What's this?",
                "kr": "이것은 무엇이니?"
            },
            {
                "en": "It's an apple.",
                "kr": "사과야."
            },
            {
                "en": "What's that?",
                "kr": "저것은 무엇이니?"
            },
            {
                "en": "It's a pencil case.",
                "kr": "필통이야."
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
                "question": "빈칸에 알맞은 단어는? [What's ______? - It's a pencil.]",
                "word": "this",
                "meaning": "이것",
                "hint": "t___",
                "answer": "this",
                "options": [
                    "this",
                    "here",
                    "they",
                    "name"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [책상]",
                "word": "desk",
                "meaning": "책상",
                "hint": "d___",
                "answer": "desk",
                "options": [
                    "desk",
                    "chair",
                    "door",
                    "bed"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [의자]",
                "word": "chair",
                "meaning": "의자",
                "hint": "c____",
                "answer": "chair",
                "options": [
                    "chair",
                    "desk",
                    "book",
                    "bag"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [연필]",
                "word": "pencil",
                "meaning": "연필",
                "hint": "p_____",
                "answer": "pencil",
                "options": [
                    "pencil",
                    "pen",
                    "ruler",
                    "eraser"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [사과]",
                "word": "apple",
                "meaning": "사과",
                "hint": "a____",
                "answer": "apple",
                "options": [
                    "apple",
                    "banana",
                    "cup",
                    "cap"
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
        "title": "Open the Box, Please",
        "shortDesc": "지시하고 행동 요청하기 (10문항)",
        "grammarPoint": "Open/Close [사물], please. / Stand up. / Sit down.",
        "words": [
            {
                "en": "open",
                "kr": "열다"
            },
            {
                "en": "close",
                "kr": "닫다"
            },
            {
                "en": "box",
                "kr": "상자"
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
                "en": "stand up",
                "kr": "일어서다"
            },
            {
                "en": "sit down",
                "kr": "앉다"
            },
            {
                "en": "please",
                "kr": "부디, 제발"
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
                "en": "read",
                "kr": "읽다"
            },
            {
                "en": "come",
                "kr": "오다"
            }
        ],
        "sentences": [
            {
                "en": "Open the box, please.",
                "kr": "상자를 열어주세요."
            },
            {
                "en": "Close the door, please.",
                "kr": "문을 닫아주세요."
            },
            {
                "en": "Stand up, please.",
                "kr": "일어나 주세요."
            },
            {
                "en": "Sit down, please.",
                "kr": "앉아 주세요."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "Can you open the door, please?",
                "answer": "Sure, I will open the door.",
                "questionKr": "문 좀 열어줄래?",
                "answerKr": "물론이지, 문을 열게.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "It's cold outside. Close the window, please.",
                "answer": "Okay, I'll close it right now.",
                "questionKr": "밖이 춥다. 창문 좀 닫아줘.",
                "answerKr": "알겠어, 지금 바로 닫을게.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Everyone, stand up, please.",
                "answer": "Yes, teacher. We are standing up.",
                "questionKr": "모두 일어나 주세요.",
                "answerKr": "네, 선생님. 일어났어요.",
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
                "question": "Can you open the door, please?",
                "answer": "Sure, I will open the door.",
                "questionKr": "문 좀 열어줄래?",
                "answerKr": "물론이지, 문을 열게.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "It's cold outside. Close the window, please.",
                "answer": "Okay, I'll close it right now.",
                "questionKr": "밖이 춥다. 창문 좀 닫아줘.",
                "answerKr": "알겠어, 지금 바로 닫을게.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Everyone, stand up, please.",
                "answer": "No, I want to sleep.",
                "questionKr": "모두 일어나 주세요.",
                "answerKr": "아니요, 난 자고 싶어요.",
                "isMafiaDifference": true
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
                "answer": "No, don't open the box.",
                "questionKr": "이 선물 상자 열어볼래?",
                "answerKr": "아니, 상자를 열지 마.",
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
                "question": "공손하게 부탁할 때 붙이는 말은?",
                "word": "please",
                "meaning": "제발, 부디",
                "hint": "p_____",
                "answer": "please",
                "options": [
                    "please",
                    "thank",
                    "sorry",
                    "welcome"
                ]
            },
            {
                "question": "'문을 열다'에서 '열다'의 영어는?",
                "word": "open",
                "meaning": "열다",
                "hint": "o___",
                "answer": "open",
                "options": [
                    "open",
                    "close",
                    "read",
                    "sit"
                ]
            },
            {
                "question": "'창문을 닫다'에서 '닫다'의 영어는?",
                "word": "close",
                "meaning": "닫다",
                "hint": "c____",
                "answer": "close",
                "options": [
                    "close",
                    "open",
                    "look",
                    "stand"
                ]
            },
            {
                "question": "'일어서다'의 올바른 표현은?",
                "word": "stand up",
                "meaning": "일어서다",
                "hint": "s____ u_",
                "answer": "stand up",
                "options": [
                    "stand up",
                    "sit down",
                    "come in",
                    "go away"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [창문]",
                "word": "window",
                "meaning": "창문",
                "hint": "w_____",
                "answer": "window",
                "options": [
                    "window",
                    "door",
                    "desk",
                    "chair"
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
        "title": "Do You Like Apples?",
        "shortDesc": "좋아하는 음식 묻고 답하기 (10문항)",
        "grammarPoint": "Do you like [음식]? - Yes, I do. / No, I don't.",
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
                "en": "milk",
                "kr": "우유"
            },
            {
                "en": "cheese",
                "kr": "치즈"
            },
            {
                "en": "orange",
                "kr": "오렌지"
            },
            {
                "en": "strawberry",
                "kr": "딸기"
            },
            {
                "en": "chicken",
                "kr": "닭고기"
            },
            {
                "en": "pizza",
                "kr": "피자"
            },
            {
                "en": "melon",
                "kr": "멜론"
            },
            {
                "en": "grape",
                "kr": "포도"
            },
            {
                "en": "bread",
                "kr": "빵"
            }
        ],
        "sentences": [
            {
                "en": "Do you like apples?",
                "kr": "너 사과 좋아하니?"
            },
            {
                "en": "Yes, I do.",
                "kr": "응, 좋아해."
            },
            {
                "en": "No, I don't.",
                "kr": "아니, 좋아하지 않아."
            },
            {
                "en": "I like bananas.",
                "kr": "나는 바나나를 좋아해."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "Do you like red apples?",
                "answer": "Yes, I do. I love apples.",
                "questionKr": "빨간 사과 좋아하니?",
                "answerKr": "응, 좋아해. 난 사과를 정말 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Do you like milk?",
                "answer": "No, I don't. I like water.",
                "questionKr": "너 우유 좋아하니?",
                "answerKr": "아니, 좋아하지 않아. 난 물을 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "What fruit do you like most?",
                "answer": "I like sweet strawberries.",
                "questionKr": "어떤 과일을 가장 좋아하니?",
                "answerKr": "나는 달콤한 딸기를 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "Do you like cheese pizza?",
                "answer": "Yes, I do. Pizza is delicious.",
                "questionKr": "치즈 피자 좋아하니?",
                "answerKr": "응, 피자는 아주 맛있어.",
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
                "question": "Do you like red apples?",
                "answer": "Yes, I do. I love apples.",
                "questionKr": "빨간 사과 좋아하니?",
                "answerKr": "응, 좋아해. 난 사과를 정말 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Do you like milk?",
                "answer": "No, I don't. I like water.",
                "questionKr": "너 우유 좋아하니?",
                "answerKr": "아니, 좋아하지 않아. 난 물을 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "What fruit do you like most?",
                "answer": "I hate strawberries.",
                "questionKr": "어떤 과일을 가장 좋아하니?",
                "answerKr": "난 딸기 아주 싫어해.",
                "isMafiaDifference": true
            },
            {
                "id": 4,
                "question": "Do you like cheese pizza?",
                "answer": "Yes, I do. Pizza is delicious.",
                "questionKr": "치즈 피자 좋아하니?",
                "answerKr": "응, 피자는 아주 맛있어.",
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
                "answer": "No, I don't like bananas at all.",
                "questionKr": "너 바나나 좋아하니?",
                "answerKr": "아니, 난 바나나 전혀 안 좋아해.",
                "isMafiaDifference": true
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
                "question": "다음 뜻에 알맞은 영어 단어는? [좋아하다]",
                "word": "like",
                "meaning": "좋아하다",
                "hint": "l___",
                "answer": "like",
                "options": [
                    "like",
                    "have",
                    "make",
                    "play"
                ]
            },
            {
                "question": "노란색 과일인 [바나나]의 스펠링은?",
                "word": "banana",
                "meaning": "바나나",
                "hint": "b_____",
                "answer": "banana",
                "options": [
                    "banana",
                    "apple",
                    "orange",
                    "melon"
                ]
            },
            {
                "question": "하얀색 건강 음료 [우유]의 영어 단어는?",
                "word": "milk",
                "meaning": "우유",
                "hint": "m___",
                "answer": "milk",
                "options": [
                    "milk",
                    "water",
                    "juice",
                    "tea"
                ]
            },
            {
                "question": "빨갛고 달콤한 과일 [딸기]의 영어 단어는?",
                "word": "strawberry",
                "meaning": "딸기",
                "hint": "s_________",
                "answer": "strawberry",
                "options": [
                    "strawberry",
                    "grape",
                    "apple",
                    "cheese"
                ]
            },
            {
                "question": "피자와 함께 먹는 [닭고기/치킨]의 영어는?",
                "word": "chicken",
                "meaning": "닭고기",
                "hint": "c______",
                "answer": "chicken",
                "options": [
                    "chicken",
                    "pizza",
                    "bread",
                    "cheese"
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
        "title": "How Many Dogs?",
        "shortDesc": "동물 수량 묻고 세기 (10문항)",
        "grammarPoint": "How many [동물들]? - [숫자] [동물들].",
        "words": [
            {
                "en": "how",
                "kr": "얼마나"
            },
            {
                "en": "many",
                "kr": "많은"
            },
            {
                "en": "one",
                "kr": "하나"
            },
            {
                "en": "two",
                "kr": "둘"
            },
            {
                "en": "three",
                "kr": "셋"
            },
            {
                "en": "four",
                "kr": "넷"
            },
            {
                "en": "five",
                "kr": "다섯"
            },
            {
                "en": "six",
                "kr": "여섯"
            },
            {
                "en": "seven",
                "kr": "일곱"
            },
            {
                "en": "eight",
                "kr": "여덟"
            },
            {
                "en": "nine",
                "kr": "아홉"
            },
            {
                "en": "ten",
                "kr": "열"
            },
            {
                "en": "dog",
                "kr": "개"
            },
            {
                "en": "cat",
                "kr": "고양이"
            }
        ],
        "sentences": [
            {
                "en": "How many dogs?",
                "kr": "개가 몇 마리니?"
            },
            {
                "en": "Three dogs.",
                "kr": "세 마리야."
            },
            {
                "en": "How many birds do you see?",
                "kr": "새가 몇 마리 보이니?"
            },
            {
                "en": "I see five birds.",
                "kr": "새 다섯 마리가 보여."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "How many dogs are there in the park?",
                "answer": "There are three dogs.",
                "questionKr": "공원에 개가 몇 마리 있니?",
                "answerKr": "개 세 마리가 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "How many cats do you have?",
                "answer": "I have two cute cats.",
                "questionKr": "너 고양이 몇 마리 키우니?",
                "answerKr": "난 귀여운 고양이 두 마리를 키워.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Look at the tree. How many birds?",
                "answer": "Four birds are singing.",
                "questionKr": "나무를 봐. 새가 몇 마리니?",
                "answerKr": "새 네 마리가 노래하고 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "How many apples are in the basket?",
                "answer": "There are five red apples.",
                "questionKr": "바구니에 사과가 몇 개 있니?",
                "answerKr": "빨간 사과 다섯 개가 있어.",
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
                "question": "How many dogs are there in the park?",
                "answer": "There are three dogs.",
                "questionKr": "공원에 개가 몇 마리 있니?",
                "answerKr": "개 세 마리가 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "How many cats do you have?",
                "answer": "I have ten wild cats.",
                "questionKr": "너 고양이 몇 마리 키우니?",
                "answerKr": "난 열 마리나 키워.",
                "isMafiaDifference": true
            },
            {
                "id": 3,
                "question": "Look at the tree. How many birds?",
                "answer": "Four birds are singing.",
                "questionKr": "나무를 봐. 새가 몇 마리니?",
                "answerKr": "새 네 마리가 노래하고 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "How many apples are in the basket?",
                "answer": "There are five red apples.",
                "questionKr": "바구니에 사과가 몇 개 있니?",
                "answerKr": "빨간 사과 다섯 개가 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "How many pencils do you have in your case?",
                "answer": "I don't have any pencils.",
                "questionKr": "필통에 연필이 몇 자루 있니?",
                "answerKr": "난 연필이 하나도 없어.",
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
                "question": "숫자 [3]에 해당하는 영어 단어는?",
                "word": "three",
                "meaning": "셋 (3)",
                "hint": "t____",
                "answer": "three",
                "options": [
                    "three",
                    "two",
                    "four",
                    "five"
                ]
            },
            {
                "question": "숫자 [5]에 해당하는 영어 단어는?",
                "word": "five",
                "meaning": "다섯 (5)",
                "hint": "f___",
                "answer": "five",
                "options": [
                    "five",
                    "four",
                    "six",
                    "seven"
                ]
            },
            {
                "question": "숫자 [8]에 해당하는 영어 단어는?",
                "word": "eight",
                "meaning": "여덟 (8)",
                "hint": "e____",
                "answer": "eight",
                "options": [
                    "eight",
                    "seven",
                    "nine",
                    "ten"
                ]
            },
            {
                "question": "숫자 [10]에 해당하는 영어 단어는?",
                "word": "ten",
                "meaning": "열 (10)",
                "hint": "t__",
                "answer": "ten",
                "options": [
                    "ten",
                    "one",
                    "two",
                    "six"
                ]
            },
            {
                "question": "수량을 물을 때 쓰는 표현은? [______ many dogs?]",
                "word": "How",
                "meaning": "얼마나",
                "hint": "H__",
                "answer": "How",
                "options": [
                    "How",
                    "What",
                    "Who",
                    "Where"
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
        "title": "Do You Have a Ruler?",
        "shortDesc": "학용품 소유 묻고 답하기 (10문항)",
        "grammarPoint": "Do you have a [학용품]? - Yes, I do. / Here you are.",
        "words": [
            {
                "en": "have",
                "kr": "가지고 있다"
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
                "en": "crayon",
                "kr": "크레용"
            },
            {
                "en": "glue stick",
                "kr": "풀"
            },
            {
                "en": "notebook",
                "kr": "공책"
            },
            {
                "en": "scissors",
                "kr": "가위"
            },
            {
                "en": "pencil",
                "kr": "연필"
            },
            {
                "en": "pencil case",
                "kr": "필통"
            },
            {
                "en": "marker",
                "kr": "사인펜"
            }
        ],
        "sentences": [
            {
                "en": "Do you have a ruler?",
                "kr": "너 자 가지고 있니?"
            },
            {
                "en": "Yes, I do.",
                "kr": "응, 가지고 있어."
            },
            {
                "en": "No, I don't.",
                "kr": "아니, 없어."
            },
            {
                "en": "Here you are.",
                "kr": "여기 있어."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "Do you have a ruler?",
                "answer": "Yes, I do. Here you are.",
                "questionKr": "너 자 가지고 있니?",
                "answerKr": "응, 있어. 여기 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Do you have an eraser?",
                "answer": "No, I don't. Ask Minsoo.",
                "questionKr": "지우개 가지고 있니?",
                "answerKr": "아니, 없어. 민수에게 물어봐.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Can I borrow your scissors?",
                "answer": "Sure, here are my scissors.",
                "questionKr": "가위 좀 빌릴 수 있을까?",
                "answerKr": "물론이지, 여기 가위 있어.",
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
                "question": "Do you have a ruler?",
                "answer": "Yes, I do. Here you are.",
                "questionKr": "너 자 가지고 있니?",
                "answerKr": "응, 있어. 여기 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Do you have an eraser?",
                "answer": "No, I don't. Ask Minsoo.",
                "questionKr": "지우개 가지고 있니?",
                "answerKr": "아니, 없어. 민수에게 물어봐.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Can I borrow your scissors?",
                "answer": "No, I never lend my scissors.",
                "questionKr": "가위 좀 빌릴 수 있을까?",
                "answerKr": "아니, 난 가위 절대 안 빌려줘.",
                "isMafiaDifference": true
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
                "answer": "I lost my pencil case yesterday.",
                "questionKr": "네 필통 어디 있니?",
                "answerKr": "어제 필통을 잃어버렸어.",
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
                "question": "길이를 잴 때 쓰는 [자]의 영어 단어는?",
                "word": "ruler",
                "meaning": "자",
                "hint": "r____",
                "answer": "ruler",
                "options": [
                    "ruler",
                    "eraser",
                    "pencil",
                    "scissors"
                ]
            },
            {
                "question": "틀린 글씨를 지우는 [지우개]의 영어는?",
                "word": "eraser",
                "meaning": "지우개",
                "hint": "e_____",
                "answer": "eraser",
                "options": [
                    "eraser",
                    "ruler",
                    "crayon",
                    "glue"
                ]
            },
            {
                "question": "종이를 자르는 [가위]의 영어 단어는?",
                "word": "scissors",
                "meaning": "가위",
                "hint": "s_______",
                "answer": "scissors",
                "options": [
                    "scissors",
                    "glue stick",
                    "notebook",
                    "pencil"
                ]
            },
            {
                "question": "종이를 붙일 때 쓰는 [풀]의 영어는?",
                "word": "glue stick",
                "meaning": "풀",
                "hint": "g___ s____",
                "answer": "glue stick",
                "options": [
                    "glue stick",
                    "scissors",
                    "eraser",
                    "crayon"
                ]
            },
            {
                "question": "물건을 건네주며 하는 말은? [______ you are.]",
                "word": "Here",
                "meaning": "여기",
                "hint": "H___",
                "answer": "Here",
                "options": [
                    "Here",
                    "There",
                    "Where",
                    "When"
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
        "title": "Can You Swim?",
        "shortDesc": "할 수 있는 능력 묻고 답하기 (10문항)",
        "grammarPoint": "Can you [동사]? - Yes, I can. / No, I can't.",
        "words": [
            {
                "en": "can",
                "kr": "~할 수 있다"
            },
            {
                "en": "swim",
                "kr": "수영하다"
            },
            {
                "en": "fly",
                "kr": "날다"
            },
            {
                "en": "jump",
                "kr": "뛰다"
            },
            {
                "en": "run",
                "kr": "달리다"
            },
            {
                "en": "dance",
                "kr": "춤추다"
            },
            {
                "en": "sing",
                "kr": "노래하다"
            },
            {
                "en": "skate",
                "kr": "스케이트 타다"
            },
            {
                "en": "ski",
                "kr": "스키 타다"
            },
            {
                "en": "climb",
                "kr": "기어오르다"
            },
            {
                "en": "ride",
                "kr": "타다"
            }
        ],
        "sentences": [
            {
                "en": "Can you swim?",
                "kr": "너 수영할 수 있니?"
            },
            {
                "en": "Yes, I can.",
                "kr": "응, 할 수 있어."
            },
            {
                "en": "No, I can't.",
                "kr": "아니, 못 해."
            },
            {
                "en": "I can dance well.",
                "kr": "나는 춤을 잘 춰."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "Can you swim in the pool?",
                "answer": "Yes, I can. I like swimming.",
                "questionKr": "수영장에서 수영할 수 있니?",
                "answerKr": "응, 할 수 있어. 난 수영을 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Can you ride a bicycle?",
                "answer": "Yes, I can ride it well.",
                "questionKr": "너 자전거 탈 수 있니?",
                "answerKr": "응, 난 잘 탈 수 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Can you dance to the music?",
                "answer": "Yes, I can dance like a pop star.",
                "questionKr": "음악에 맞춰 춤출 수 있니?",
                "answerKr": "응, 팝스타처럼 출 수 있어.",
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
                "question": "Can you swim in the pool?",
                "answer": "Yes, I can. I like swimming.",
                "questionKr": "수영장에서 수영할 수 있니?",
                "answerKr": "응, 할 수 있어. 난 수영을 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Can you ride a bicycle?",
                "answer": "No, I can never ride a bike.",
                "questionKr": "너 자전거 탈 수 있니?",
                "answerKr": "아니, 난 자전거 전혀 못 타.",
                "isMafiaDifference": true
            },
            {
                "id": 3,
                "question": "Can you dance to the music?",
                "answer": "Yes, I can dance like a pop star.",
                "questionKr": "음악에 맞춰 춤출 수 있니?",
                "answerKr": "응, 팝스타처럼 출 수 있어.",
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
                "answer": "Yes, I am a professional ski master.",
                "questionKr": "겨울에 스키 탈 수 있니?",
                "answerKr": "응, 난 프로 스키 선수 수준이야.",
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
                "question": "물에서 하는 운동인 [수영하다]의 영어 단어는?",
                "word": "swim",
                "meaning": "수영하다",
                "hint": "s___",
                "answer": "swim",
                "options": [
                    "swim",
                    "run",
                    "jump",
                    "sing"
                ]
            },
            {
                "question": "음악에 맞춰 몸을 흔드는 [춤추다]의 영어는?",
                "word": "dance",
                "meaning": "춤추다",
                "hint": "d____",
                "answer": "dance",
                "options": [
                    "dance",
                    "sing",
                    "swim",
                    "climb"
                ]
            },
            {
                "question": "하늘을 [날다]의 영어 단어는?",
                "word": "fly",
                "meaning": "날다",
                "hint": "f__",
                "answer": "fly",
                "options": [
                    "fly",
                    "run",
                    "jump",
                    "ski"
                ]
            },
            {
                "question": "발로 힘차게 땅을 박차는 [뛰다, 도약하다]는?",
                "word": "jump",
                "meaning": "뛰다",
                "hint": "j___",
                "answer": "jump",
                "options": [
                    "jump",
                    "sit",
                    "walk",
                    "sleep"
                ]
            },
            {
                "question": "'~할 수 있다'는 능력을 나타내는 조동사는?",
                "word": "can",
                "meaning": "~할 수 있다",
                "hint": "c__",
                "answer": "can",
                "options": [
                    "can",
                    "do",
                    "are",
                    "have"
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
        "title": "Don't Run, Please",
        "shortDesc": "공공장소 규칙과 금지 요청하기 (10문항)",
        "grammarPoint": "Don't [동사원형], please. - Okay. / I'm sorry.",
        "words": [
            {
                "en": "run",
                "kr": "달리다"
            },
            {
                "en": "touch",
                "kr": "만지다"
            },
            {
                "en": "push",
                "kr": "밀다"
            },
            {
                "en": "shout",
                "kr": "소리치다"
            },
            {
                "en": "eat",
                "kr": "먹다"
            },
            {
                "en": "enter",
                "kr": "들어가다"
            },
            {
                "en": "stop",
                "kr": "멈추다"
            },
            {
                "en": "quiet",
                "kr": "조용한"
            },
            {
                "en": "careful",
                "kr": "조심하는"
            },
            {
                "en": "sorry",
                "kr": "미안한"
            },
            {
                "en": "sleep",
                "kr": "자다"
            }
        ],
        "sentences": [
            {
                "en": "Don't run, please.",
                "kr": "뛰지 마세요."
            },
            {
                "en": "Don't touch, please.",
                "kr": "만지지 마세요."
            },
            {
                "en": "Don't push your friends.",
                "kr": "친구를 밀지 마."
            },
            {
                "en": "Okay, I'm sorry.",
                "kr": "알겠어요, 죄송합니다."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "Don't run in the hallway, please.",
                "answer": "I'm sorry. I will walk slowly.",
                "questionKr": "복도에서 뛰지 마세요.",
                "answerKr": "죄송해요. 천천히 걸을게요.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Don't touch the painting in the museum.",
                "answer": "Okay, I will just look with my eyes.",
                "questionKr": "박물관에서 그림을 만지지 마세요.",
                "answerKr": "알겠습니다. 눈으로만 볼게요.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Don't push in line, please.",
                "answer": "Sorry, I won't push.",
                "questionKr": "줄 설 때 밀지 마세요.",
                "answerKr": "미안해, 밀지 않을게.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "Please be quiet in the library.",
                "answer": "Okay, we will speak quietly.",
                "questionKr": "도서관에서는 조용히 해주세요.",
                "answerKr": "네, 조용히 말할게요.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "Don't eat snacks during class, please.",
                "answer": "Sorry, teacher. I will put it away.",
                "questionKr": "수업 중에 간식 먹지 마세요.",
                "answerKr": "죄송해요, 선생님. 치울게요.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "Don't shout loudly here.",
                "answer": "Okay, I will keep my voice down.",
                "questionKr": "여기서 크게 소리 지르지 마세요.",
                "answerKr": "네, 목소리를 낮출게요.",
                "isMafiaDifference": false
            },
            {
                "id": 7,
                "question": "Don't open the dangerous door, please.",
                "answer": "I see. I won't touch the door.",
                "questionKr": "위험한 문을 열지 마세요.",
                "answerKr": "알겠어요. 문에 손대지 않을게요.",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "Be careful on the stairs!",
                "answer": "Thank you, I will hold the handrail.",
                "questionKr": "계단에서 조심해!",
                "answerKr": "고마워, 난간을 잡을게.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "Don't sleep in the classroom.",
                "answer": "Yes, I will wash my face.",
                "questionKr": "교실에서 잠자지 마세요.",
                "answerKr": "네, 세수하고 올게요.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Don't enter that room, please.",
                "answer": "Understood. I will wait outside.",
                "questionKr": "저 방에 들어가지 마세요.",
                "answerKr": "알겠습니다. 밖에서 기다릴게요.",
                "isMafiaDifference": false
            }
        ],
        "mafiaQA": [
            {
                "id": 1,
                "question": "Don't run in the hallway, please.",
                "answer": "I'm sorry. I will walk slowly.",
                "questionKr": "복도에서 뛰지 마세요.",
                "answerKr": "죄송해요. 천천히 걸을게요.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Don't touch the painting in the museum.",
                "answer": "Okay, I will just look with my eyes.",
                "questionKr": "박물관에서 그림을 만지지 마세요.",
                "answerKr": "알겠습니다. 눈으로만 볼게요.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Don't push in line, please.",
                "answer": "Sorry, I won't push.",
                "questionKr": "줄 설 때 밀지 마세요.",
                "answerKr": "미안해, 밀지 않을게.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "Please be quiet in the library.",
                "answer": "No, I want to shout loudly!",
                "questionKr": "도서관에서는 조용히 해주세요.",
                "answerKr": "싫어, 난 크게 소리 지를 거야!",
                "isMafiaDifference": true
            },
            {
                "id": 5,
                "question": "Don't eat snacks during class, please.",
                "answer": "Sorry, teacher. I will put it away.",
                "questionKr": "수업 중에 간식 먹지 마세요.",
                "answerKr": "죄송해요, 선생님. 치울게요.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "Don't shout loudly here.",
                "answer": "Okay, I will keep my voice down.",
                "questionKr": "여기서 크게 소리 지르지 마세요.",
                "answerKr": "네, 목소리를 낮출게요.",
                "isMafiaDifference": false
            },
            {
                "id": 7,
                "question": "Don't open the dangerous door, please.",
                "answer": "I already opened it wide.",
                "questionKr": "위험한 문을 열지 마세요.",
                "answerKr": "난 벌써 활짝 열어버렸어.",
                "isMafiaDifference": true
            },
            {
                "id": 8,
                "question": "Be careful on the stairs!",
                "answer": "Thank you, I will hold the handrail.",
                "questionKr": "계단에서 조심해!",
                "answerKr": "고마워, 난간을 잡을게.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "Don't sleep in the classroom.",
                "answer": "Yes, I will wash my face.",
                "questionKr": "교실에서 잠자지 마세요.",
                "answerKr": "네, 세수하고 올게요.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Don't enter that room, please.",
                "answer": "Understood. I will wait outside.",
                "questionKr": "저 방에 들어가지 마세요.",
                "answerKr": "알겠습니다. 밖에서 기다릴게요.",
                "isMafiaDifference": false
            }
        ],
        "escapeQuizzes": [
            {
                "question": "금지할 때 앞에 붙이는 말은? [______ run, please.]",
                "word": "Don't",
                "meaning": "~하지 마라",
                "hint": "D___'_",
                "answer": "Don't",
                "options": [
                    "Don't",
                    "Can't",
                    "Aren't",
                    "Isn't"
                ]
            },
            {
                "question": "손으로 [만지다]의 영어 단어는?",
                "word": "touch",
                "meaning": "만지다",
                "hint": "t____",
                "answer": "touch",
                "options": [
                    "touch",
                    "push",
                    "look",
                    "read"
                ]
            },
            {
                "question": "친구를 [밀다]의 영어 단어는?",
                "word": "push",
                "meaning": "밀다",
                "hint": "p___",
                "answer": "push",
                "options": [
                    "push",
                    "pull",
                    "touch",
                    "hold"
                ]
            },
            {
                "question": "목소리를 낮추고 [조용한] 상태를 뜻하는 단어는?",
                "word": "quiet",
                "meaning": "조용한",
                "hint": "q____",
                "answer": "quiet",
                "options": [
                    "quiet",
                    "loud",
                    "busy",
                    "fast"
                ]
            },
            {
                "question": "잘못했을 때 사과하는 말은? [I'm ______.]",
                "word": "sorry",
                "meaning": "미안한, 죄송한",
                "hint": "s____",
                "answer": "sorry",
                "options": [
                    "sorry",
                    "happy",
                    "great",
                    "nice"
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
        "title": "Where Is the Ball?",
        "shortDesc": "사물의 위치 묻고 답하기 (10문항)",
        "grammarPoint": "Where is the [사물]? - It's [in/on/under] the [장소].",
        "words": [
            {
                "en": "where",
                "kr": "어디"
            },
            {
                "en": "in",
                "kr": "~안에"
            },
            {
                "en": "on",
                "kr": "~위에"
            },
            {
                "en": "under",
                "kr": "~아래에"
            },
            {
                "en": "by",
                "kr": "~옆에"
            },
            {
                "en": "ball",
                "kr": "공"
            },
            {
                "en": "box",
                "kr": "상자"
            },
            {
                "en": "table",
                "kr": "탁자"
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
                "en": "chair",
                "kr": "의자"
            },
            {
                "en": "desk",
                "kr": "책상"
            }
        ],
        "sentences": [
            {
                "en": "Where is the ball?",
                "kr": "공이 어디에 있니?"
            },
            {
                "en": "It's on the chair.",
                "kr": "의자 위에 있어."
            },
            {
                "en": "It's under the table.",
                "kr": "탁자 밑에 있어."
            },
            {
                "en": "It's in the box.",
                "kr": "상자 안에 있어."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "Where is the yellow ball?",
                "answer": "It's on the chair.",
                "questionKr": "노란 공 어디에 있니?",
                "answerKr": "의자 위에 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Where is my English notebook?",
                "answer": "It is on your desk.",
                "questionKr": "내 영어 공책 어디 있니?",
                "answerKr": "네 책상 위에 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Where is the little cat sleeping?",
                "answer": "It is sleeping under the bed.",
                "questionKr": "작은 고양이가 어디서 자고 있니?",
                "answerKr": "침대 밑에서 자고 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "Where are the toy cars?",
                "answer": "They are in the big box.",
                "questionKr": "장난감 자동차들은 어디 있니?",
                "answerKr": "큰 상자 안에 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "Where is my cap?",
                "answer": "It's by the window.",
                "questionKr": "내 모자 어디에 있니?",
                "answerKr": "창문 옆에 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "Where is your dog playing?",
                "answer": "He is playing under the table.",
                "questionKr": "네 강아지는 어디서 놀고 있니?",
                "answerKr": "탁자 밑에서 놀고 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 7,
                "question": "Is the apple in the basket?",
                "answer": "Yes, it is in the basket.",
                "questionKr": "사과가 바구니 안에 있니?",
                "answerKr": "응, 바구니 안에 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "Where is the clock in your room?",
                "answer": "It is on the wall.",
                "questionKr": "방 벽시계는 어디 있니?",
                "answerKr": "벽에 걸려 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "Where did you put the pencil case?",
                "answer": "I put it in my bag.",
                "questionKr": "필통 어디에 두었니?",
                "answerKr": "가방 안에 넣었어.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Where is your teacher?",
                "answer": "She is in front of the classroom.",
                "questionKr": "선생님 어디 계시니?",
                "answerKr": "교실 앞에 계셔.",
                "isMafiaDifference": false
            }
        ],
        "mafiaQA": [
            {
                "id": 1,
                "question": "Where is the yellow ball?",
                "answer": "It's on the chair.",
                "questionKr": "노란 공 어디에 있니?",
                "answerKr": "의자 위에 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Where is my English notebook?",
                "answer": "It is on your desk.",
                "questionKr": "내 영어 공책 어디 있니?",
                "answerKr": "네 책상 위에 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Where is the little cat sleeping?",
                "answer": "It is on top of the roof.",
                "questionKr": "작은 고양이가 어디서 자고 있니?",
                "answerKr": "지붕 꼭대기에 있어.",
                "isMafiaDifference": true
            },
            {
                "id": 4,
                "question": "Where are the toy cars?",
                "answer": "They are in the big box.",
                "questionKr": "장난감 자동차들은 어디 있니?",
                "answerKr": "큰 상자 안에 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "Where is my cap?",
                "answer": "It's by the window.",
                "questionKr": "내 모자 어디에 있니?",
                "answerKr": "창문 옆에 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "Where is your dog playing?",
                "answer": "He is playing under the table.",
                "questionKr": "네 강아지는 어디서 놀고 있니?",
                "answerKr": "탁자 밑에서 놀고 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 7,
                "question": "Is the apple in the basket?",
                "answer": "No, it fell on the floor.",
                "questionKr": "사과가 바구니 안에 있니?",
                "answerKr": "아니, 바닥에 떨어졌어.",
                "isMafiaDifference": true
            },
            {
                "id": 8,
                "question": "Where is the clock in your room?",
                "answer": "It is on the wall.",
                "questionKr": "방 벽시계는 어디 있니?",
                "answerKr": "벽에 걸려 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "Where did you put the pencil case?",
                "answer": "I put it in my bag.",
                "questionKr": "필통 어디에 두었니?",
                "answerKr": "가방 안에 넣었어.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Where is your teacher?",
                "answer": "She is in front of the classroom.",
                "questionKr": "선생님 어디 계시니?",
                "answerKr": "교실 앞에 계셔.",
                "isMafiaDifference": false
            }
        ],
        "escapeQuizzes": [
            {
                "question": "장소를 물을 때 쓰는 의문사는? [______ is the ball?]",
                "word": "Where",
                "meaning": "어디에",
                "hint": "W____",
                "answer": "Where",
                "options": [
                    "Where",
                    "What",
                    "When",
                    "Who"
                ]
            },
            {
                "question": "상자 [안에]를 나타내는 전치사는?",
                "word": "in",
                "meaning": "~안에",
                "hint": "i_",
                "answer": "in",
                "options": [
                    "in",
                    "on",
                    "under",
                    "by"
                ]
            },
            {
                "question": "탁자 [위에]를 나타내는 전치사는?",
                "word": "on",
                "meaning": "~위에",
                "hint": "o_",
                "answer": "on",
                "options": [
                    "on",
                    "in",
                    "under",
                    "to"
                ]
            },
            {
                "question": "의자 [아래에/밑에]를 나타내는 전치사는?",
                "word": "under",
                "meaning": "~아래에",
                "hint": "u____",
                "answer": "under",
                "options": [
                    "under",
                    "on",
                    "in",
                    "behind"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [침대]",
                "word": "bed",
                "meaning": "침대",
                "hint": "b__",
                "answer": "bed",
                "options": [
                    "bed",
                    "box",
                    "bag",
                    "desk"
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
        "title": "What Color Is It?",
        "shortDesc": "색깔 묻고 답하기 (10문항)",
        "grammarPoint": "What color is it? - It's [색깔]. / I like [색깔].",
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
                "kr": "하얀색"
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
                "en": "purple",
                "kr": "보라색"
            },
            {
                "en": "brown",
                "kr": "갈색"
            },
            {
                "en": "rainbow",
                "kr": "무지개"
            }
        ],
        "sentences": [
            {
                "en": "What color is it?",
                "kr": "무슨 색깔이니?"
            },
            {
                "en": "It's blue.",
                "kr": "파란색이야."
            },
            {
                "en": "I like yellow.",
                "kr": "나는 노란색을 좋아해."
            },
            {
                "en": "It's a red hat.",
                "kr": "빨간 모자야."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "What color is your new bicycle?",
                "answer": "It is bright blue.",
                "questionKr": "네 새 자전거 무슨 색이니?",
                "answerKr": "밝은 파란색이야.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "What color do you like most?",
                "answer": "I like cheerful yellow.",
                "questionKr": "어떤 색을 가장 좋아하니?",
                "answerKr": "난 발랄한 노란색을 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "What color is this apple?",
                "answer": "It is a fresh red apple.",
                "questionKr": "이 사과 무슨 색이니?",
                "answerKr": "신선한 빨간 사과야.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "Look at the sky. What color is it?",
                "answer": "The sky is deep blue today.",
                "questionKr": "하늘을 봐. 무슨 색이니?",
                "answerKr": "오늘 하늘은 짙은 파란색이야.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "What color are the leaves in spring?",
                "answer": "They are fresh green.",
                "questionKr": "봄에 나뭇잎들은 무슨 색이니?",
                "answerKr": "싱그러운 초록색이야.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "Is your dog black or white?",
                "answer": "My dog is purely white.",
                "questionKr": "네 개는 검은색이니 하얀색이니?",
                "answerKr": "우리 개는 순백색이야.",
                "isMafiaDifference": false
            },
            {
                "id": 7,
                "question": "What color is that pretty flower?",
                "answer": "It is lovely pink.",
                "questionKr": "저 예쁜 꽃은 무슨 색이니?",
                "answerKr": "사랑스러운 분홍색이야.",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "What color do you get when mixing red and yellow?",
                "answer": "You get bright orange.",
                "questionKr": "빨강과 노랑을 섞으면 무슨 색이 되니?",
                "answerKr": "밝은 주황색이 돼.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "Do you like purple grapes?",
                "answer": "Yes, I like purple very much.",
                "questionKr": "보라색 포도 좋아하니?",
                "answerKr": "응, 난 보라색 정말 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Can you see the rainbow in the sky?",
                "answer": "Yes, it has seven colors.",
                "questionKr": "하늘의 무지개 보이니?",
                "answerKr": "응, 일곱 가지 색이 있어.",
                "isMafiaDifference": false
            }
        ],
        "mafiaQA": [
            {
                "id": 1,
                "question": "What color is your new bicycle?",
                "answer": "It is bright blue.",
                "questionKr": "네 새 자전거 무슨 색이니?",
                "answerKr": "밝은 파란색이야.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "What color do you like most?",
                "answer": "I like dark black only.",
                "questionKr": "어떤 색을 가장 좋아하니?",
                "answerKr": "난 어두운 검정만 좋아해.",
                "isMafiaDifference": true
            },
            {
                "id": 3,
                "question": "What color is this apple?",
                "answer": "It is a fresh red apple.",
                "questionKr": "이 사과 무슨 색이니?",
                "answerKr": "신선한 빨간 사과야.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "Look at the sky. What color is it?",
                "answer": "The sky is deep blue today.",
                "questionKr": "하늘을 봐. 무슨 색이니?",
                "answerKr": "오늘 하늘은 짙은 파란색이야.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "What color are the leaves in spring?",
                "answer": "They are yellow and brown.",
                "questionKr": "봄에 나뭇잎들은 무슨 색이니?",
                "answerKr": "노랗고 갈색이야.",
                "isMafiaDifference": true
            },
            {
                "id": 6,
                "question": "Is your dog black or white?",
                "answer": "My dog is purely white.",
                "questionKr": "네 개는 검은색이니 하얀색이니?",
                "answerKr": "우리 개는 순백색이야.",
                "isMafiaDifference": false
            },
            {
                "id": 7,
                "question": "What color is that pretty flower?",
                "answer": "It is lovely pink.",
                "questionKr": "저 예쁜 꽃은 무슨 색이니?",
                "answerKr": "사랑스러운 분홍색이야.",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "What color do you get when mixing red and yellow?",
                "answer": "You get bright orange.",
                "questionKr": "빨강과 노랑을 섞으면 무슨 색이 되니?",
                "answerKr": "밝은 주황색이 돼.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "Do you like purple grapes?",
                "answer": "Yes, I like purple very much.",
                "questionKr": "보라색 포도 좋아하니?",
                "answerKr": "응, 난 보라색 정말 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Can you see the rainbow in the sky?",
                "answer": "Yes, it has seven colors.",
                "questionKr": "하늘의 무지개 보이니?",
                "answerKr": "응, 일곱 가지 색이 있어.",
                "isMafiaDifference": false
            }
        ],
        "escapeQuizzes": [
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [빨간색]",
                "word": "red",
                "meaning": "빨간색",
                "hint": "r__",
                "answer": "red",
                "options": [
                    "red",
                    "blue",
                    "yellow",
                    "green"
                ]
            },
            {
                "question": "바다와 하늘을 닮은 [파란색]의 영어는?",
                "word": "blue",
                "meaning": "파란색",
                "hint": "b___",
                "answer": "blue",
                "options": [
                    "blue",
                    "red",
                    "pink",
                    "black"
                ]
            },
            {
                "question": "바나나의 색깔인 [노란색]의 영어는?",
                "word": "yellow",
                "meaning": "노란색",
                "hint": "y_____",
                "answer": "yellow",
                "options": [
                    "yellow",
                    "green",
                    "white",
                    "purple"
                ]
            },
            {
                "question": "나뭇잎의 색깔인 [초록색]의 영어는?",
                "word": "green",
                "meaning": "초록색",
                "hint": "g____",
                "answer": "green",
                "options": [
                    "green",
                    "brown",
                    "blue",
                    "red"
                ]
            },
            {
                "question": "하늘에 뜨는 일곱 빛깔 [무지개]의 영어 단어는?",
                "word": "rainbow",
                "meaning": "무지개",
                "hint": "r______",
                "answer": "rainbow",
                "options": [
                    "rainbow",
                    "cloud",
                    "sun",
                    "color"
                ]
            }
        ]
    },
    "3G_L11": {
        "id": "3G_L11",
        "grade": 3,
        "lesson": 11,
        "publisher": "YBM (최희경)",
        "name": "3학년 11단원",
        "title": "How Old Are You?",
        "shortDesc": "나이 묻고 생일 축하하기 (10문항)",
        "grammarPoint": "How old are you? - I'm [숫자] years old. / Happy birthday!",
        "words": [
            {
                "en": "old",
                "kr": "나이 든"
            },
            {
                "en": "year",
                "kr": "살, 해"
            },
            {
                "en": "eleven",
                "kr": "열하나 (11)"
            },
            {
                "en": "twelve",
                "kr": "열둘 (12)"
            },
            {
                "en": "birthday",
                "kr": "생일"
            },
            {
                "en": "candle",
                "kr": "양초"
            },
            {
                "en": "party",
                "kr": "파티"
            },
            {
                "en": "present",
                "kr": "선물"
            },
            {
                "en": "cake",
                "kr": "케이크"
            },
            {
                "en": "card",
                "kr": "카드"
            },
            {
                "en": "happy",
                "kr": "행복한"
            },
            {
                "en": "today",
                "kr": "오늘"
            }
        ],
        "sentences": [
            {
                "en": "How old are you?",
                "kr": "몇 살이니?"
            },
            {
                "en": "I'm ten years old.",
                "kr": "열 살이야."
            },
            {
                "en": "Happy birthday to you!",
                "kr": "생일 축하해!"
            },
            {
                "en": "Thank you so much.",
                "kr": "정말 고마워."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "How old are you this year?",
                "answer": "I'm ten years old.",
                "questionKr": "너 올해 몇 살이니?",
                "answerKr": "열 살이야.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Happy birthday, Minsoo! Here is your gift.",
                "answer": "Thank you! I love this gift.",
                "questionKr": "생일 축하해, 민수야! 여기 선물이야.",
                "answerKr": "고마워! 이 선물 정말 마음에 들어.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "How old is your little sister?",
                "answer": "She is seven years old.",
                "questionKr": "네 여동생은 몇 살이니?",
                "answerKr": "일곱 살이야.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "How many candles are on your birthday cake?",
                "answer": "There are ten candles.",
                "questionKr": "생일 케이크에 초가 몇 개 꽂혀 있니?",
                "answerKr": "초 열 개가 꽂혀 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "Are you eleven years old?",
                "answer": "No, I am ten years old.",
                "questionKr": "너 열한 살이니?",
                "answerKr": "아니, 난 열 살이야.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "When is your birthday party?",
                "answer": "It is this Saturday afternoon.",
                "questionKr": "생일 파티가 언제니?",
                "answerKr": "이번 주 토요일 오후야.",
                "isMafiaDifference": false
            },
            {
                "id": 7,
                "question": "Can you come to my birthday party?",
                "answer": "Sure, I'd love to go!",
                "questionKr": "내 생일 파티에 올 수 있니?",
                "answerKr": "물론이지, 꼭 갈게!",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "Did you write a birthday card?",
                "answer": "Yes, I wrote a warm card.",
                "questionKr": "생일 카드 썼니?",
                "answerKr": "응, 따뜻한 카드를 썼어.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "What flavor cake do you like?",
                "answer": "I like chocolate cake.",
                "questionKr": "어떤 맛 케이크를 좋아하니?",
                "answerKr": "초콜릿 케이크를 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Are we the same age?",
                "answer": "Yes, we are both ten.",
                "questionKr": "우리 동갑이니?",
                "answerKr": "응, 우리 둘 다 열 살이야.",
                "isMafiaDifference": false
            }
        ],
        "mafiaQA": [
            {
                "id": 1,
                "question": "How old are you this year?",
                "answer": "I'm ten years old.",
                "questionKr": "너 올해 몇 살이니?",
                "answerKr": "열 살이야.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Happy birthday, Minsoo! Here is your gift.",
                "answer": "Thank you! I love this gift.",
                "questionKr": "생일 축하해, 민수야! 여기 선물이야.",
                "answerKr": "고마워! 이 선물 정말 마음에 들어.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "How old is your little sister?",
                "answer": "She is twenty years old.",
                "questionKr": "네 여동생은 몇 살이니?",
                "answerKr": "그녀는 스무 살이야.",
                "isMafiaDifference": true
            },
            {
                "id": 4,
                "question": "How many candles are on your birthday cake?",
                "answer": "There are ten candles.",
                "questionKr": "생일 케이크에 초가 몇 개 꽂혀 있니?",
                "answerKr": "초 열 개가 꽂혀 있어.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "Are you eleven years old?",
                "answer": "No, I am ten years old.",
                "questionKr": "너 열한 살이니?",
                "answerKr": "아니, 난 열 살이야.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "When is your birthday party?",
                "answer": "My party was last year.",
                "questionKr": "생일 파티가 언제니?",
                "answerKr": "내 파티는 작년이었어.",
                "isMafiaDifference": true
            },
            {
                "id": 7,
                "question": "Can you come to my birthday party?",
                "answer": "Sure, I'd love to go!",
                "questionKr": "내 생일 파티에 올 수 있니?",
                "answerKr": "물론이지, 꼭 갈게!",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "Did you write a birthday card?",
                "answer": "Yes, I wrote a warm card.",
                "questionKr": "생일 카드 썼니?",
                "answerKr": "응, 따뜻한 카드를 썼어.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "What flavor cake do you like?",
                "answer": "I like chocolate cake.",
                "questionKr": "어떤 맛 케이크를 좋아하니?",
                "answerKr": "초콜릿 케이크를 좋아해.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Are we the same age?",
                "answer": "Yes, we are both ten.",
                "questionKr": "우리 동갑이니?",
                "answerKr": "응, 우리 둘 다 열 살이야.",
                "isMafiaDifference": false
            }
        ],
        "escapeQuizzes": [
            {
                "question": "나이를 물어볼 때 쓰는 표현은? [______ old are you?]",
                "word": "How",
                "meaning": "얼마나",
                "hint": "H__",
                "answer": "How",
                "options": [
                    "How",
                    "Who",
                    "What",
                    "Where"
                ]
            },
            {
                "question": "태어난 날을 축하하는 [생일]의 영어 단어는?",
                "word": "birthday",
                "meaning": "생일",
                "hint": "b_______",
                "answer": "birthday",
                "options": [
                    "birthday",
                    "party",
                    "cake",
                    "candle"
                ]
            },
            {
                "question": "숫자 11에 해당하는 영어 단어는?",
                "word": "eleven",
                "meaning": "열하나 (11)",
                "hint": "e_____",
                "answer": "eleven",
                "options": [
                    "eleven",
                    "twelve",
                    "ten",
                    "nine"
                ]
            },
            {
                "question": "생일 케이크에 꽂는 [양초]의 영어 단어는?",
                "word": "candle",
                "meaning": "양초",
                "hint": "c_____",
                "answer": "candle",
                "options": [
                    "candle",
                    "cake",
                    "card",
                    "party"
                ]
            },
            {
                "question": "생일 축하 선물인 [선물]의 영어 단어는?",
                "word": "present",
                "meaning": "선물",
                "hint": "p______",
                "answer": "present",
                "options": [
                    "present",
                    "pencil",
                    "pen",
                    "party"
                ]
            }
        ]
    },
    "3G_L12": {
        "id": "3G_L12",
        "grade": 3,
        "lesson": 12,
        "publisher": "YBM (최희경)",
        "name": "3학년 12단원",
        "title": "It's Sunny",
        "shortDesc": "날씨 묻고 옷차림 챙기기 (10문항)",
        "grammarPoint": "How's the weather? - It's [sunny/rainy/snowy/cold].",
        "words": [
            {
                "en": "weather",
                "kr": "날씨"
            },
            {
                "en": "sunny",
                "kr": "화창한"
            },
            {
                "en": "rainy",
                "kr": "비 오는"
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
                "en": "cloudy",
                "kr": "흐린"
            },
            {
                "en": "warm",
                "kr": "따뜻한"
            },
            {
                "en": "cold",
                "kr": "추운"
            },
            {
                "en": "hot",
                "kr": "더운"
            },
            {
                "en": "coat",
                "kr": "외투, 코트"
            },
            {
                "en": "umbrella",
                "kr": "우산"
            },
            {
                "en": "sky",
                "kr": "하늘"
            }
        ],
        "sentences": [
            {
                "en": "How's the weather today?",
                "kr": "오늘 날씨가 어떠니?"
            },
            {
                "en": "It's sunny and warm.",
                "kr": "화창하고 따뜻해."
            },
            {
                "en": "It's rainy. Take an umbrella.",
                "kr": "비가 와. 우산 챙겨."
            },
            {
                "en": "Put on your coat.",
                "kr": "코트를 입으렴."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "How's the weather outside today?",
                "answer": "It is sunny and bright.",
                "questionKr": "오늘 바깥 날씨 어떠니?",
                "answerKr": "화창하고 밝아.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Is it raining outside?",
                "answer": "Yes, it is rainy. Take an umbrella.",
                "questionKr": "밖에 비 오니?",
                "answerKr": "응, 비 와. 우산 챙겨.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Is it cold today?",
                "answer": "Yes, it's snowy and very cold.",
                "questionKr": "오늘 춥니?",
                "answerKr": "응, 눈이 오고 아주 추워.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "Can we go fly a kite?",
                "answer": "Yes, it is nice and windy today.",
                "questionKr": "우리 연 날리러 갈 수 있을까?",
                "answerKr": "응, 오늘 바람이 알맞게 불어.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "Look at the dark clouds. Is it cloudy?",
                "answer": "Yes, it is very cloudy.",
                "questionKr": "먹구름 좀 봐. 흐리니?",
                "answerKr": "응, 아주 흐려.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "Should I wear my thick coat?",
                "answer": "Yes, put on your warm coat.",
                "questionKr": "두꺼운 외투 입어야 할까?",
                "answerKr": "응, 따뜻한 코트를 입으렴.",
                "isMafiaDifference": false
            },
            {
                "id": 7,
                "question": "Do you like snowy days?",
                "answer": "Yes, I can make a snowman.",
                "questionKr": "눈 오는 날 좋아하니?",
                "answerKr": "응, 눈사람을 만들 수 있잖아.",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "How is the weather in spring?",
                "answer": "It is warm and sunny.",
                "questionKr": "봄 날씨는 어떠니?",
                "answerKr": "따뜻하고 화창해.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "Is it hot in summer?",
                "answer": "Yes, it is very hot and humid.",
                "questionKr": "여름에는 덥니?",
                "answerKr": "응, 아주 덥고 습해.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Let's play soccer outside!",
                "answer": "Great idea! The weather is fantastic.",
                "questionKr": "밖에서 축구하자!",
                "answerKr": "좋은 생각이야! 날씨가 정말 환상적이야.",
                "isMafiaDifference": false
            }
        ],
        "mafiaQA": [
            {
                "id": 1,
                "question": "How's the weather outside today?",
                "answer": "It is sunny and bright.",
                "questionKr": "오늘 바깥 날씨 어떠니?",
                "answerKr": "화창하고 밝아.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Is it raining outside?",
                "answer": "No, it is a sandstorm outside.",
                "questionKr": "밖에 비 오니?",
                "answerKr": "아니, 밖에는 모래폭풍이 불어.",
                "isMafiaDifference": true
            },
            {
                "id": 3,
                "question": "Is it cold today?",
                "answer": "Yes, it's snowy and very cold.",
                "questionKr": "오늘 춥니?",
                "answerKr": "응, 눈이 오고 아주 추워.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "Can we go fly a kite?",
                "answer": "Yes, it is nice and windy today.",
                "questionKr": "우리 연 날리러 갈 수 있을까?",
                "answerKr": "응, 오늘 바람이 알맞게 불어.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "Look at the dark clouds. Is it cloudy?",
                "answer": "Yes, it is very cloudy.",
                "questionKr": "먹구름 좀 봐. 흐리니?",
                "answerKr": "응, 아주 흐려.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "Should I wear my thick coat?",
                "answer": "No, wear a swimsuit today.",
                "questionKr": "두꺼운 외투 입어야 할까?",
                "answerKr": "아니, 오늘 수영복 입으렴.",
                "isMafiaDifference": true
            },
            {
                "id": 7,
                "question": "Do you like snowy days?",
                "answer": "Yes, I can make a snowman.",
                "questionKr": "눈 오는 날 좋아하니?",
                "answerKr": "응, 눈사람을 만들 수 있잖아.",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "How is the weather in spring?",
                "answer": "It is warm and sunny.",
                "questionKr": "봄 날씨는 어떠니?",
                "answerKr": "따뜻하고 화창해.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "Is it hot in summer?",
                "answer": "Yes, it is very hot and humid.",
                "questionKr": "여름에는 덥니?",
                "answerKr": "응, 아주 덥고 습해.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Let's play soccer outside!",
                "answer": "Great idea! The weather is fantastic.",
                "questionKr": "밖에서 축구하자!",
                "answerKr": "좋은 생각이야! 날씨가 정말 환상적이야.",
                "isMafiaDifference": false
            }
        ],
        "escapeQuizzes": [
            {
                "question": "날씨를 물을 때 쓰는 말은? [How's the ______?]",
                "word": "weather",
                "meaning": "날씨",
                "hint": "w______",
                "answer": "weather",
                "options": [
                    "weather",
                    "season",
                    "today",
                    "clock"
                ]
            },
            {
                "question": "햇살이 쨍쨍한 [화창한]의 영어 단어는?",
                "word": "sunny",
                "meaning": "화창한",
                "hint": "s____",
                "answer": "sunny",
                "options": [
                    "sunny",
                    "rainy",
                    "snowy",
                    "cloudy"
                ]
            },
            {
                "question": "비가 올 때 쓰는 [우산]의 영어 단어는?",
                "word": "umbrella",
                "meaning": "우산",
                "hint": "u_______",
                "answer": "umbrella",
                "options": [
                    "umbrella",
                    "coat",
                    "boots",
                    "cap"
                ]
            },
            {
                "question": "하얀 눈이 내리는 [눈 오는]의 영어 단어는?",
                "word": "snowy",
                "meaning": "눈 오는",
                "hint": "s____",
                "answer": "snowy",
                "options": [
                    "snowy",
                    "sunny",
                    "windy",
                    "warm"
                ]
            },
            {
                "question": "바람이 쌩쌩 부는 [바람 부는]의 영어 단어는?",
                "word": "windy",
                "meaning": "바람 부는",
                "hint": "w____",
                "answer": "windy",
                "options": [
                    "windy",
                    "cold",
                    "hot",
                    "cloudy"
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
        "shortDesc": "안부 묻고 기분 답하기 (10문항)",
        "grammarPoint": "How are you? - I'm [great/good/tired/sad/not bad].",
        "words": [
            {
                "en": "good",
                "kr": "좋은"
            },
            {
                "en": "great",
                "kr": "아주 좋은"
            },
            {
                "en": "fine",
                "kr": "괜찮은"
            },
            {
                "en": "not bad",
                "kr": "나쁘지 않은"
            },
            {
                "en": "tired",
                "kr": "피곤한"
            },
            {
                "en": "sad",
                "kr": "슬픈"
            },
            {
                "en": "happy",
                "kr": "행복한"
            },
            {
                "en": "sick",
                "kr": "아픈"
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
                "en": "today",
                "kr": "오늘"
            },
            {
                "en": "class",
                "kr": "수업, 학급"
            }
        ],
        "sentences": [
            {
                "en": "How are you today?",
                "kr": "오늘 기분 어떠니?"
            },
            {
                "en": "I'm great, thank you.",
                "kr": "아주 좋아요, 고마워요."
            },
            {
                "en": "I'm tired today.",
                "kr": "오늘 좀 피곤해요."
            },
            {
                "en": "Good morning, class!",
                "kr": "좋은 아침이에요, 여러분!"
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
                "question": "안부를 물을 때 쓰는 질문은? [______ are you?]",
                "word": "How",
                "meaning": "어떻게, 어떠니",
                "hint": "H__",
                "answer": "How",
                "options": [
                    "How",
                    "Who",
                    "Where",
                    "When"
                ]
            },
            {
                "question": "'피곤한, 지친'의 뜻을 가진 영어 단어는?",
                "word": "tired",
                "meaning": "피곤한",
                "hint": "t____",
                "answer": "tired",
                "options": [
                    "tired",
                    "great",
                    "fine",
                    "happy"
                ]
            },
            {
                "question": "'아주 좋은, 훌륭한'의 뜻을 가진 단어는?",
                "word": "great",
                "meaning": "아주 좋은",
                "hint": "g____",
                "answer": "great",
                "options": [
                    "great",
                    "sad",
                    "sick",
                    "bad"
                ]
            },
            {
                "question": "아침 인사인 [Good ______!]의 빈칸은?",
                "word": "morning",
                "meaning": "아침",
                "hint": "m______",
                "answer": "morning",
                "options": [
                    "morning",
                    "afternoon",
                    "evening",
                    "night"
                ]
            },
            {
                "question": "'나쁘지 않아'를 나타내는 표현은? [Not ______]",
                "word": "bad",
                "meaning": "나쁜",
                "hint": "b__",
                "answer": "bad",
                "options": [
                    "bad",
                    "good",
                    "tired",
                    "happy"
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
        "title": "Who Is She?",
        "shortDesc": "가족 및 주변 인물 소개하기 (10문항)",
        "grammarPoint": "Who is [she/he]? - [She/He] is my [가족].",
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
                "en": "father",
                "kr": "아버지"
            },
            {
                "en": "mother",
                "kr": "어머니"
            },
            {
                "en": "brother",
                "kr": "남자형제"
            },
            {
                "en": "sister",
                "kr": "여자형제"
            },
            {
                "en": "grandmother",
                "kr": "할머니"
            },
            {
                "en": "grandfather",
                "kr": "할아버지"
            },
            {
                "en": "teacher",
                "kr": "선생님"
            },
            {
                "en": "friend",
                "kr": "친구"
            },
            {
                "en": "cousin",
                "kr": "사촌"
            }
        ],
        "sentences": [
            {
                "en": "Who is she?",
                "kr": "그녀는 누구니?"
            },
            {
                "en": "She's my sister.",
                "kr": "내 여동생이야."
            },
            {
                "en": "Who is he?",
                "kr": "그는 누구니?"
            },
            {
                "en": "He's my English teacher.",
                "kr": "내 영어 선생님이셔."
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
                "question": "사람의 신원을 물을 때 쓰는 의문사는? [______ is he?]",
                "word": "Who",
                "meaning": "누구",
                "hint": "W__",
                "answer": "Who",
                "options": [
                    "Who",
                    "What",
                    "When",
                    "Where"
                ]
            },
            {
                "question": "여성을 가리키는 3인칭 대명사 [그녀]의 영어는?",
                "word": "she",
                "meaning": "그녀",
                "hint": "s__",
                "answer": "she",
                "options": [
                    "she",
                    "he",
                    "it",
                    "they"
                ]
            },
            {
                "question": "남성을 가리키는 3인칭 대명사 [그]의 영어는?",
                "word": "he",
                "meaning": "그",
                "hint": "h_",
                "answer": "he",
                "options": [
                    "he",
                    "she",
                    "we",
                    "you"
                ]
            },
            {
                "question": "가족 중 [할머니]에 해당하는 영어 단어는?",
                "word": "grandmother",
                "meaning": "할머니",
                "hint": "g__________",
                "answer": "grandmother",
                "options": [
                    "grandmother",
                    "grandfather",
                    "mother",
                    "sister"
                ]
            },
            {
                "question": "가족 중 [남자형제/오빠/남동생]의 영어는?",
                "word": "brother",
                "meaning": "남자형제",
                "hint": "b______",
                "answer": "brother",
                "options": [
                    "brother",
                    "sister",
                    "cousin",
                    "father"
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
        "shortDesc": "시각 묻고 일과 표현하기 (10문항)",
        "grammarPoint": "What time is it? - It's [숫자] o'clock. It's time for [일과].",
        "words": [
            {
                "en": "time",
                "kr": "시간"
            },
            {
                "en": "o'clock",
                "kr": "정각"
            },
            {
                "en": "hour",
                "kr": "시간 (시)"
            },
            {
                "en": "minute",
                "kr": "분"
            },
            {
                "en": "watch",
                "kr": "손목시계"
            },
            {
                "en": "clock",
                "kr": "벽시계"
            },
            {
                "en": "breakfast",
                "kr": "아침식사"
            },
            {
                "en": "lunch",
                "kr": "점심식사"
            },
            {
                "en": "dinner",
                "kr": "저녁식사"
            },
            {
                "en": "bedtime",
                "kr": "취침시간"
            },
            {
                "en": "school",
                "kr": "학교"
            },
            {
                "en": "late",
                "kr": "늦은"
            }
        ],
        "sentences": [
            {
                "en": "What time is it now?",
                "kr": "지금 몇 시니?"
            },
            {
                "en": "It's seven o'clock.",
                "kr": "7시 정각이야."
            },
            {
                "en": "It's time for lunch.",
                "kr": "점심 먹을 시간이야."
            },
            {
                "en": "It's time for bed.",
                "kr": "잠잘 시간이야."
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
                "question": "시간/시각을 뜻하는 단어는? [What ______ is it?]",
                "word": "time",
                "meaning": "시간",
                "hint": "t___",
                "answer": "time",
                "options": [
                    "time",
                    "clock",
                    "date",
                    "day"
                ]
            },
            {
                "question": "정각을 나타낼 때 쓰는 표현은? [Seven ______]",
                "word": "o'clock",
                "meaning": "정각",
                "hint": "o'_____",
                "answer": "o'clock",
                "options": [
                    "o'clock",
                    "minute",
                    "hour",
                    "watch"
                ]
            },
            {
                "question": "낮에 먹는 식사인 [점심식사]의 영어 단어는?",
                "word": "lunch",
                "meaning": "점심식사",
                "hint": "l____",
                "answer": "lunch",
                "options": [
                    "lunch",
                    "breakfast",
                    "dinner",
                    "snack"
                ]
            },
            {
                "question": "아침에 먹는 식사인 [아침식사]의 영어는?",
                "word": "breakfast",
                "meaning": "아침식사",
                "hint": "b________",
                "answer": "breakfast",
                "options": [
                    "breakfast",
                    "lunch",
                    "dinner",
                    "dessert"
                ]
            },
            {
                "question": "시간에 늦었을 때 '늦은'을 뜻하는 단어는?",
                "word": "late",
                "meaning": "늦은",
                "hint": "l___",
                "answer": "late",
                "options": [
                    "late",
                    "fast",
                    "early",
                    "quick"
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
        "shortDesc": "운동 및 활동 제안하고 답하기 (10문항)",
        "grammarPoint": "Let's [동사원형]. - Sounds great! / Sorry, I can't.",
        "words": [
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
                "en": "tennis",
                "kr": "테니스"
            },
            {
                "en": "play",
                "kr": "놀다, 운동하다"
            },
            {
                "en": "sound",
                "kr": "들리다"
            },
            {
                "en": "fun",
                "kr": "재미있는"
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
                "en": "together",
                "kr": "함께"
            },
            {
                "en": "team",
                "kr": "팀"
            }
        ],
        "sentences": [
            {
                "en": "Let's play soccer together.",
                "kr": "같이 축구하자."
            },
            {
                "en": "Sounds great!",
                "kr": "좋은 생각이야!"
            },
            {
                "en": "Let's play badminton.",
                "kr": "배드민턴 치자."
            },
            {
                "en": "Sorry, I can't. I'm busy.",
                "kr": "미안하지만 안 돼. 나 바빠."
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
                "question": "활동을 제안할 때 앞에 붙이는 말은? [______ play soccer.]",
                "word": "Let's",
                "meaning": "~하자",
                "hint": "L__'_",
                "answer": "Let's",
                "options": [
                    "Let's",
                    "Don't",
                    "Can't",
                    "Won't"
                ]
            },
            {
                "question": "공을 발로 차는 운동인 [축구]의 영어 단어는?",
                "word": "soccer",
                "meaning": "축구",
                "hint": "s_____",
                "answer": "soccer",
                "options": [
                    "soccer",
                    "baseball",
                    "tennis",
                    "swimming"
                ]
            },
            {
                "question": "배트와 글러브를 사용하는 [야구]의 영어는?",
                "word": "baseball",
                "meaning": "야구",
                "hint": "b_______",
                "answer": "baseball",
                "options": [
                    "baseball",
                    "basketball",
                    "soccer",
                    "badminton"
                ]
            },
            {
                "question": "상대방의 제안을 수락할 때 [Sounds ______!]의 빈칸은?",
                "word": "great",
                "meaning": "좋은, 훌륭한",
                "hint": "g____",
                "answer": "great",
                "options": [
                    "great",
                    "busy",
                    "bad",
                    "tired"
                ]
            },
            {
                "question": "바빠서 거절할 때 쓰는 '바쁜'의 영어 단어는?",
                "word": "busy",
                "meaning": "바쁜",
                "hint": "b___",
                "answer": "busy",
                "options": [
                    "busy",
                    "free",
                    "fun",
                    "late"
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
        "title": "Where Is My Bag?",
        "shortDesc": "물건의 위치 묻고 설명하기 (10문항)",
        "grammarPoint": "Where is my [물건]? - It's [next to/behind/under] the [가구].",
        "words": [
            {
                "en": "bag",
                "kr": "가방"
            },
            {
                "en": "cap",
                "kr": "모자"
            },
            {
                "en": "shoes",
                "kr": "신발"
            },
            {
                "en": "glasses",
                "kr": "안경"
            },
            {
                "en": "next to",
                "kr": "~옆에"
            },
            {
                "en": "behind",
                "kr": "~뒤에"
            },
            {
                "en": "front",
                "kr": "앞"
            },
            {
                "en": "under",
                "kr": "~아래에"
            },
            {
                "en": "closet",
                "kr": "옷장"
            },
            {
                "en": "sofa",
                "kr": "소파"
            },
            {
                "en": "bed",
                "kr": "침대"
            },
            {
                "en": "desk",
                "kr": "책상"
            }
        ],
        "sentences": [
            {
                "en": "Where is my bag?",
                "kr": "내 가방 어디 있니?"
            },
            {
                "en": "It's under the desk.",
                "kr": "책상 아래에 있어."
            },
            {
                "en": "Where are my shoes?",
                "kr": "내 신발 어디 있니?"
            },
            {
                "en": "They are next to the door.",
                "kr": "문 옆에 있어."
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
                "question": "'~의 옆에'를 나타내는 전치사구는? [______ to]",
                "word": "next",
                "meaning": "~옆에",
                "hint": "n___",
                "answer": "next",
                "options": [
                    "next",
                    "near",
                    "under",
                    "behind"
                ]
            },
            {
                "question": "'~의 뒤에'를 뜻하는 전치사는?",
                "word": "behind",
                "meaning": "~뒤에",
                "hint": "b_____",
                "answer": "behind",
                "options": [
                    "behind",
                    "front",
                    "under",
                    "beside"
                ]
            },
            {
                "question": "옷을 걸어 보관하는 [옷장]의 영어 단어는?",
                "word": "closet",
                "meaning": "옷장",
                "hint": "c_____",
                "answer": "closet",
                "options": [
                    "closet",
                    "desk",
                    "bed",
                    "sofa"
                ]
            },
            {
                "question": "발에 신는 [신발]의 영어 복수형 단어는?",
                "word": "shoes",
                "meaning": "신발",
                "hint": "s____",
                "answer": "shoes",
                "options": [
                    "shoes",
                    "socks",
                    "cap",
                    "bag"
                ]
            },
            {
                "question": "눈에 쓰는 [안경]의 영어 단어는?",
                "word": "glasses",
                "meaning": "안경",
                "hint": "g______",
                "answer": "glasses",
                "options": [
                    "glasses",
                    "watch",
                    "ring",
                    "glove"
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
        "shortDesc": "현재 동작 묻고 답하기 (10문항)",
        "grammarPoint": "What are you doing? - I'm [동사-ing].",
        "words": [
            {
                "en": "doing",
                "kr": "하는 중인"
            },
            {
                "en": "cooking",
                "kr": "요리하는"
            },
            {
                "en": "reading",
                "kr": "읽는"
            },
            {
                "en": "drawing",
                "kr": "그리는"
            },
            {
                "en": "watching",
                "kr": "보는"
            },
            {
                "en": "sleeping",
                "kr": "자는"
            },
            {
                "en": "studying",
                "kr": "공부하는"
            },
            {
                "en": "playing",
                "kr": "노는"
            },
            {
                "en": "eating",
                "kr": "먹는"
            },
            {
                "en": "helping",
                "kr": "돕는"
            },
            {
                "en": "cleaning",
                "kr": "청소하는"
            },
            {
                "en": "washing",
                "kr": "씻는"
            }
        ],
        "sentences": [
            {
                "en": "What are you doing?",
                "kr": "너 지금 뭐 하니?"
            },
            {
                "en": "I'm reading a book.",
                "kr": "책을 읽고 있어."
            },
            {
                "en": "What is he doing?",
                "kr": "그는 뭐 하고 있니?"
            },
            {
                "en": "He is drawing a picture.",
                "kr": "그림을 그리고 있어."
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
                "question": "지금 음식을 만들고 있는 [요리하는 중]의 영어는?",
                "word": "cooking",
                "meaning": "요리하는",
                "hint": "c______",
                "answer": "cooking",
                "options": [
                    "cooking",
                    "reading",
                    "sleeping",
                    "drawing"
                ]
            },
            {
                "question": "책을 [읽는 중]에 해당하는 단어는?",
                "word": "reading",
                "meaning": "읽는 중인",
                "hint": "r______",
                "answer": "reading",
                "options": [
                    "reading",
                    "watching",
                    "eating",
                    "helping"
                ]
            },
            {
                "question": "그림을 [그리는 중]에 해당하는 단어는?",
                "word": "drawing",
                "meaning": "그리는 중인",
                "hint": "d______",
                "answer": "drawing",
                "options": [
                    "drawing",
                    "cooking",
                    "studying",
                    "washing"
                ]
            },
            {
                "question": "잠을 [자는 중]에 해당하는 단어는?",
                "word": "sleeping",
                "meaning": "자는 중인",
                "hint": "s_______",
                "answer": "sleeping",
                "options": [
                    "sleeping",
                    "running",
                    "jumping",
                    "playing"
                ]
            },
            {
                "question": "현재 진행 동작을 묻는 질문은? [What are you ______?]",
                "word": "doing",
                "meaning": "하는 중인",
                "hint": "d____",
                "answer": "doing",
                "options": [
                    "doing",
                    "making",
                    "going",
                    "having"
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
        "shortDesc": "옷과 물건의 소유 묻고 답하기 (10문항)",
        "grammarPoint": "Is this your [물건]? - Yes, it's mine. / Whose [물건] is this?",
        "words": [
            {
                "en": "jacket",
                "kr": "재킷"
            },
            {
                "en": "umbrella",
                "kr": "우산"
            },
            {
                "en": "glove",
                "kr": "장갑"
            },
            {
                "en": "coat",
                "kr": "외투, 코트"
            },
            {
                "en": "shirt",
                "kr": "셔츠"
            },
            {
                "en": "skirt",
                "kr": "치마"
            },
            {
                "en": "dress",
                "kr": "원피스"
            },
            {
                "en": "boots",
                "kr": "부츠"
            },
            {
                "en": "your",
                "kr": "너의"
            },
            {
                "en": "mine",
                "kr": "나의 것"
            },
            {
                "en": "his",
                "kr": "그의 것"
            },
            {
                "en": "hers",
                "kr": "그녀의 것"
            }
        ],
        "sentences": [
            {
                "en": "Is this your jacket?",
                "kr": "이게 네 재킷이니?"
            },
            {
                "en": "Yes, it's mine.",
                "kr": "응, 내 거야."
            },
            {
                "en": "Whose umbrella is this?",
                "kr": "이건 누구 우산이니?"
            },
            {
                "en": "It's Minsoo's umbrella.",
                "kr": "민수 우산이야."
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
                "question": "'나의 것 (내 것)'을 뜻하는 소유대명사는?",
                "word": "mine",
                "meaning": "나의 것",
                "hint": "m___",
                "answer": "mine",
                "options": [
                    "mine",
                    "my",
                    "me",
                    "I"
                ]
            },
            {
                "question": "소유자를 물을 때 쓰는 의문사는? [______ umbrella is this?]",
                "word": "Whose",
                "meaning": "누구의",
                "hint": "W____",
                "answer": "Whose",
                "options": [
                    "Whose",
                    "Who",
                    "Which",
                    "Where"
                ]
            },
            {
                "question": "손에 끼는 [장갑]의 영어 단어는?",
                "word": "glove",
                "meaning": "장갑",
                "hint": "g____",
                "answer": "glove",
                "options": [
                    "glove",
                    "boots",
                    "socks",
                    "jacket"
                ]
            },
            {
                "question": "'그녀의 것'을 뜻하는 소유대명사는?",
                "word": "hers",
                "meaning": "그녀의 것",
                "hint": "h___",
                "answer": "hers",
                "options": [
                    "hers",
                    "her",
                    "she",
                    "him"
                ]
            },
            {
                "question": "겨울에 입는 따뜻한 [코트, 외투]의 영어 단어는?",
                "word": "coat",
                "meaning": "코트, 외투",
                "hint": "c___",
                "answer": "coat",
                "options": [
                    "coat",
                    "shirt",
                    "skirt",
                    "cap"
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
        "shortDesc": "음식 권하고 감사 표현하기 (10문항)",
        "grammarPoint": "Do you want some [음식]? - Yes, please. / No, thanks.",
        "words": [
            {
                "en": "chicken",
                "kr": "닭고기, 치킨"
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
                "en": "cake",
                "kr": "케이크"
            },
            {
                "en": "cookie",
                "kr": "쿠키"
            },
            {
                "en": "sandwich",
                "kr": "샌드위치"
            },
            {
                "en": "noodle",
                "kr": "국수, 면"
            },
            {
                "en": "fruit",
                "kr": "과일"
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
                "en": "want",
                "kr": "원하다"
            },
            {
                "en": "full",
                "kr": "배부른"
            }
        ],
        "sentences": [
            {
                "en": "Do you want some chicken?",
                "kr": "치킨 좀 먹을래?"
            },
            {
                "en": "Yes, please.",
                "kr": "네, 주세요."
            },
            {
                "en": "No, thanks. I'm full.",
                "kr": "아니요, 괜찮아요. 배불러요."
            },
            {
                "en": "Help yourself!",
                "kr": "마음껏 드세요!"
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
                "question": "음식을 권할 때 쓰는 단어는? [Do you ______ some pizza?]",
                "word": "want",
                "meaning": "원하다",
                "hint": "w___",
                "answer": "want",
                "options": [
                    "want",
                    "make",
                    "cook",
                    "give"
                ]
            },
            {
                "question": "배가 고플 때 느끼는 상태는? [I'm ______.]",
                "word": "hungry",
                "meaning": "배고픈",
                "hint": "h_____",
                "answer": "hungry",
                "options": [
                    "hungry",
                    "thirsty",
                    "full",
                    "tired"
                ]
            },
            {
                "question": "목이 마를 때 느끼는 상태는? [I'm ______.]",
                "word": "thirsty",
                "meaning": "목마른",
                "hint": "t______",
                "answer": "thirsty",
                "options": [
                    "thirsty",
                    "hungry",
                    "happy",
                    "great"
                ]
            },
            {
                "question": "배가 가득 차서 사양할 때 [I'm ______.]의 빈칸은?",
                "word": "full",
                "meaning": "배부른",
                "hint": "f___",
                "answer": "full",
                "options": [
                    "full",
                    "hungry",
                    "thirsty",
                    "empty"
                ]
            },
            {
                "question": "'마음껏 드세요!'의 표현은? [Help ______!]",
                "word": "yourself",
                "meaning": "스스로, 너 자신",
                "hint": "y_______",
                "answer": "yourself",
                "options": [
                    "yourself",
                    "myself",
                    "himself",
                    "herself"
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
        "shortDesc": "요일 묻고 답하기 (10문항)",
        "grammarPoint": "What day is it today? - It's [요일].",
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
                "en": "tomorrow",
                "kr": "내일"
            },
            {
                "en": "weekend",
                "kr": "주말"
            },
            {
                "en": "class",
                "kr": "수업"
            },
            {
                "en": "day",
                "kr": "요일, 날"
            }
        ],
        "sentences": [
            {
                "en": "What day is it today?",
                "kr": "오늘 무슨 요일이니?"
            },
            {
                "en": "It's Friday.",
                "kr": "금요일이야."
            },
            {
                "en": "We have English class on Monday.",
                "kr": "우리는 월요일에 영어 수업이 있어."
            },
            {
                "en": "Have a great weekend!",
                "kr": "즐거운 주말 보내!"
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
                "question": "한 주의 시작인 [월요일]의 영어 단어는?",
                "word": "Monday",
                "meaning": "월요일",
                "hint": "M_____",
                "answer": "Monday",
                "options": [
                    "Monday",
                    "Tuesday",
                    "Sunday",
                    "Friday"
                ]
            },
            {
                "question": "주말 바로 전인 [금요일]의 영어 단어는?",
                "word": "Friday",
                "meaning": "금요일",
                "hint": "F_____",
                "answer": "Friday",
                "options": [
                    "Friday",
                    "Thursday",
                    "Saturday",
                    "Monday"
                ]
            },
            {
                "question": "토요일과 일요일을 가리키는 [주말]의 영어는?",
                "word": "weekend",
                "meaning": "주말",
                "hint": "w______",
                "answer": "weekend",
                "options": [
                    "weekend",
                    "weekday",
                    "today",
                    "tomorrow"
                ]
            },
            {
                "question": "요일을 물을 때 쓰는 질문은? [What ______ is it today?]",
                "word": "day",
                "meaning": "날, 요일",
                "hint": "d__",
                "answer": "day",
                "options": [
                    "day",
                    "time",
                    "date",
                    "clock"
                ]
            },
            {
                "question": "일주일의 중간인 [수요일]의 영어 스펠링은?",
                "word": "Wednesday",
                "meaning": "수요일",
                "hint": "W________",
                "answer": "Wednesday",
                "options": [
                    "Wednesday",
                    "Tuesday",
                    "Thursday",
                    "Saturday"
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
        "shortDesc": "물건 가격 묻고 쇼핑하기 (10문항)",
        "grammarPoint": "How much is it? - It's [숫자] [dollars/won].",
        "words": [
            {
                "en": "how much",
                "kr": "얼마"
            },
            {
                "en": "dollar",
                "kr": "달러"
            },
            {
                "en": "won",
                "kr": "원"
            },
            {
                "en": "buy",
                "kr": "사다"
            },
            {
                "en": "sell",
                "kr": "팔다"
            },
            {
                "en": "cheap",
                "kr": "값싼"
            },
            {
                "en": "expensive",
                "kr": "비싼"
            },
            {
                "en": "money",
                "kr": "돈"
            },
            {
                "en": "price",
                "kr": "가격"
            },
            {
                "en": "store",
                "kr": "가게, 상점"
            },
            {
                "en": "clerk",
                "kr": "점원"
            },
            {
                "en": "present",
                "kr": "선물"
            }
        ],
        "sentences": [
            {
                "en": "May I help you?",
                "kr": "도와드릴까요?"
            },
            {
                "en": "How much is this cap?",
                "kr": "이 모자 얼마인가요?"
            },
            {
                "en": "It's five dollars.",
                "kr": "5달러입니다."
            },
            {
                "en": "I'll take it.",
                "kr": "그것으로 살게요."
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
                "question": "가격을 물을 때 쓰는 표현은? [How ______ is it?]",
                "word": "much",
                "meaning": "얼마의, 많은",
                "hint": "m___",
                "answer": "much",
                "options": [
                    "much",
                    "many",
                    "old",
                    "far"
                ]
            },
            {
                "question": "미국의 화폐 단위인 [달러]의 영어 단어는?",
                "word": "dollar",
                "meaning": "달러",
                "hint": "d_____",
                "answer": "dollar",
                "options": [
                    "dollar",
                    "won",
                    "cent",
                    "euro"
                ]
            },
            {
                "question": "물건의 가격이 [값싼, 저렴한]의 뜻을 가진 단어는?",
                "word": "cheap",
                "meaning": "값싼",
                "hint": "c____",
                "answer": "cheap",
                "options": [
                    "cheap",
                    "expensive",
                    "big",
                    "fast"
                ]
            },
            {
                "question": "물건의 가격이 [비싼]의 뜻을 가진 영어 단어는?",
                "word": "expensive",
                "meaning": "비싼",
                "hint": "e________",
                "answer": "expensive",
                "options": [
                    "expensive",
                    "cheap",
                    "free",
                    "small"
                ]
            },
            {
                "question": "물건을 [사다]의 뜻을 가진 영어 단어는?",
                "word": "buy",
                "meaning": "사다",
                "hint": "b__",
                "answer": "buy",
                "options": [
                    "buy",
                    "sell",
                    "give",
                    "take"
                ]
            }
        ]
    },
    "4G_L11": {
        "id": "4G_L11",
        "grade": 4,
        "lesson": 11,
        "publisher": "YBM (최희경)",
        "name": "4학년 11단원",
        "title": "I Have a Cold",
        "shortDesc": "건강 상태와 증상 표현하고 조언하기 (10문항)",
        "grammarPoint": "What's the matter? - I have a [증상]. Take this medicine.",
        "words": [
            {
                "en": "cold",
                "kr": "감기"
            },
            {
                "en": "fever",
                "kr": "열"
            },
            {
                "en": "headache",
                "kr": "두통"
            },
            {
                "en": "toothache",
                "kr": "치통"
            },
            {
                "en": "stomachache",
                "kr": "복통"
            },
            {
                "en": "medicine",
                "kr": "약"
            },
            {
                "en": "doctor",
                "kr": "의사"
            },
            {
                "en": "hospital",
                "kr": "병원"
            },
            {
                "en": "rest",
                "kr": "휴식, 쉬다"
            },
            {
                "en": "warm",
                "kr": "따뜻한"
            },
            {
                "en": "matter",
                "kr": "문제, 일"
            },
            {
                "en": "healthy",
                "kr": "건강한"
            }
        ],
        "sentences": [
            {
                "en": "What's the matter?",
                "kr": "무슨 일 있니?"
            },
            {
                "en": "I have a cold and a fever.",
                "kr": "감기 걸리고 열이 나요."
            },
            {
                "en": "You should see a doctor.",
                "kr": "의사 선생님 진료를 받아야 해."
            },
            {
                "en": "Take this medicine and get some rest.",
                "kr": "이 약을 먹고 좀 쉬렴."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "What's the matter, Minsoo? You look sick.",
                "answer": "I have a bad cold and a fever.",
                "questionKr": "무슨 일 있니, 민수야? 아파 보여.",
                "answerKr": "심한 감기에 걸리고 열이 나요.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Why are you holding your head?",
                "answer": "I have a terrible headache.",
                "questionKr": "왜 머리를 감싸 쥐고 있니?",
                "answerKr": "머리가 너무 심하게 아파요.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Why can't you eat this cookie?",
                "answer": "I have a toothache. I should visit a dentist.",
                "questionKr": "왜 쿠키를 못 먹니?",
                "answerKr": "치통이 있어서요. 치과에 가야 해요.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "Are you okay? Your stomach hurts?",
                "answer": "Yes, I have a stomachache.",
                "questionKr": "너 괜찮니? 배가 아프니?",
                "answerKr": "네, 배가 아파요.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "Did you take your medicine today?",
                "answer": "Yes, I took it after lunch.",
                "questionKr": "오늘 약 챙겨 먹었니?",
                "answerKr": "네, 점심 먹고 먹었어요.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "Drink warm water and get plenty of rest.",
                "answer": "Thank you, teacher. I will rest well.",
                "questionKr": "따뜻한 물을 마시고 푹 쉬렴.",
                "answerKr": "감사합니다, 선생님. 푹 쉴게요.",
                "isMafiaDifference": false
            },
            {
                "id": 7,
                "question": "Do you need to go to the hospital?",
                "answer": "My mom will take me to the doctor.",
                "questionKr": "병원에 가야 하니?",
                "answerKr": "엄마께서 의사 선생님께 데려가 주실 거예요.",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "Are you wearing warm clothes?",
                "answer": "Yes, I have a warm sweater on.",
                "questionKr": "따뜻한 옷 입었니?",
                "answerKr": "네, 따뜻한 스웨터를 입었어요.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "How are you feeling now after resting?",
                "answer": "I feel much better now, thank you.",
                "questionKr": "쉬고 나니 지금 기분이 좀 어때?",
                "answerKr": "훨씬 좋아졌어요, 고마워요.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Wash your hands often to stay healthy!",
                "answer": "Yes, I wash my hands with soap.",
                "questionKr": "건강을 위해 손을 자주 씻으렴!",
                "answerKr": "네, 비누로 손을 잘 씻어요.",
                "isMafiaDifference": false
            }
        ],
        "mafiaQA": [
            {
                "id": 1,
                "question": "What's the matter, Minsoo? You look sick.",
                "answer": "I have a bad cold and a fever.",
                "questionKr": "무슨 일 있니, 민수야? 아파 보여.",
                "answerKr": "심한 감기에 걸리고 열이 나요.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Why are you holding your head?",
                "answer": "I am practicing alien telepathy.",
                "questionKr": "왜 머리를 감싸 쥐고 있니?",
                "answerKr": "외계인 텔레파시 연습 중이야.",
                "isMafiaDifference": true
            },
            {
                "id": 3,
                "question": "Why can't you eat this cookie?",
                "answer": "I have a toothache. I should visit a dentist.",
                "questionKr": "왜 쿠키를 못 먹니?",
                "answerKr": "치통이 있어서요. 치과에 가야 해요.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "Are you okay? Your stomach hurts?",
                "answer": "Yes, I have a stomachache.",
                "questionKr": "너 괜찮니? 배가 아프니?",
                "answerKr": "네, 배가 아파요.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "Did you take your medicine today?",
                "answer": "No, I threw the medicine in the fire.",
                "questionKr": "오늘 약 챙겨 먹었니?",
                "answerKr": "아니요, 약을 불 속에 던져버렸어요.",
                "isMafiaDifference": true
            },
            {
                "id": 6,
                "question": "Drink warm water and get plenty of rest.",
                "answer": "Thank you, teacher. I will rest well.",
                "questionKr": "따뜻한 물을 마시고 푹 쉬렴.",
                "answerKr": "감사합니다, 선생님. 푹 쉴게요.",
                "isMafiaDifference": false
            },
            {
                "id": 7,
                "question": "Do you need to go to the hospital?",
                "answer": "My mom will take me to the doctor.",
                "questionKr": "병원에 가야 하니?",
                "answerKr": "엄마께서 의사 선생님께 데려가 주실 거예요.",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "Are you wearing warm clothes?",
                "answer": "Yes, I have a warm sweater on.",
                "questionKr": "따뜻한 옷 입었니?",
                "answerKr": "네, 따뜻한 스웨터를 입었어요.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "How are you feeling now after resting?",
                "answer": "I feel much better now, thank you.",
                "questionKr": "쉬고 나니 지금 기분이 좀 어때?",
                "answerKr": "훨씬 좋아졌어요, 고마워요.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Wash your hands often to stay healthy!",
                "answer": "Yes, I wash my hands with soap.",
                "questionKr": "건강을 위해 손을 자주 씻으렴!",
                "answerKr": "네, 비누로 손을 잘 씻어요.",
                "isMafiaDifference": false
            }
        ],
        "escapeQuizzes": [
            {
                "question": "머리가 아플 때 생기는 [두통]의 영어 단어는?",
                "word": "headache",
                "meaning": "두통",
                "hint": "h_______",
                "answer": "headache",
                "options": [
                    "headache",
                    "toothache",
                    "stomachache",
                    "fever"
                ]
            },
            {
                "question": "이가 아플 때 생기는 [치통]의 영어 단어는?",
                "word": "toothache",
                "meaning": "치통",
                "hint": "t________",
                "answer": "toothache",
                "options": [
                    "toothache",
                    "headache",
                    "fever",
                    "cold"
                ]
            },
            {
                "question": "몸에 열이 나는 증상인 [열]의 영어 단어는?",
                "word": "fever",
                "meaning": "열",
                "hint": "f____",
                "answer": "fever",
                "options": [
                    "fever",
                    "cold",
                    "rest",
                    "doctor"
                ]
            },
            {
                "question": "아플 때 먹는 [약]의 영어 단어는?",
                "word": "medicine",
                "meaning": "약",
                "hint": "m_______",
                "answer": "medicine",
                "options": [
                    "medicine",
                    "hospital",
                    "doctor",
                    "healthy"
                ]
            },
            {
                "question": "환자를 치료해 주시는 [의사]의 영어 단어는?",
                "word": "doctor",
                "meaning": "의사",
                "hint": "d_____",
                "answer": "doctor",
                "options": [
                    "doctor",
                    "teacher",
                    "clerk",
                    "student"
                ]
            }
        ]
    },
    "4G_L12": {
        "id": "4G_L12",
        "grade": 4,
        "lesson": 12,
        "publisher": "YBM (최희경)",
        "name": "4학년 12단원",
        "title": "How Was Your Vacation?",
        "shortDesc": "방학 경험과 과거 활동 회상하기 (10문항)",
        "grammarPoint": "How was your vacation? - It was great! I [과거동사] ~.",
        "words": [
            {
                "en": "vacation",
                "kr": "방학"
            },
            {
                "en": "went",
                "kr": "갔다"
            },
            {
                "en": "visited",
                "kr": "방문했다"
            },
            {
                "en": "played",
                "kr": "놀았다"
            },
            {
                "en": "watched",
                "kr": "봤다"
            },
            {
                "en": "had",
                "kr": "가졌다"
            },
            {
                "en": "beach",
                "kr": "해변"
            },
            {
                "en": "trip",
                "kr": "여행"
            },
            {
                "en": "grandparents",
                "kr": "조부모님"
            },
            {
                "en": "exciting",
                "kr": "신나는"
            },
            {
                "en": "wonderful",
                "kr": "멋진"
            },
            {
                "en": "memory",
                "kr": "추억"
            }
        ],
        "sentences": [
            {
                "en": "How was your vacation?",
                "kr": "방학 어땠니?"
            },
            {
                "en": "It was wonderful!",
                "kr": "정말 멋졌어!"
            },
            {
                "en": "I went to the beach with my family.",
                "kr": "가족과 해변에 갔어."
            },
            {
                "en": "I visited my grandparents.",
                "kr": "조부모님 댁을 방문했어."
            }
        ],
        "citizenQA": [
            {
                "id": 1,
                "question": "Welcome back! How was your summer vacation?",
                "answer": "It was wonderful! I had a great time.",
                "questionKr": "돌아온 걸 환영해! 여름방학 어땠니?",
                "answerKr": "정말 멋졌어! 아주 좋은 시간 보냈어.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Where did you go during the vacation?",
                "answer": "I went to the blue beach in Gangneung.",
                "questionKr": "방학 동안 어디 갔었니?",
                "answerKr": "강릉의 푸른 해변에 갔었어.",
                "isMafiaDifference": false
            },
            {
                "id": 3,
                "question": "Did you visit your grandparents?",
                "answer": "Yes, I visited their quiet countryside farm.",
                "questionKr": "조부모님 댁에 방문했니?",
                "answerKr": "응, 한적한 시골 농장에 다녀왔어.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "What did you do at the beach?",
                "answer": "I swam in the sea and built a sandcastle.",
                "questionKr": "해변에서 무엇을 했니?",
                "answerKr": "바다에서 수영하고 모래성을 쌓았어.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "Did you watch any exciting movies?",
                "answer": "Yes, I watched an animation with my cousin.",
                "questionKr": "재미있는 영화 봤니?",
                "answerKr": "응, 사촌과 함께 애니메이션을 봤어.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "Did you take a lot of photos?",
                "answer": "Yes, my photo album is full of memories.",
                "questionKr": "사진 많이 찍었니?",
                "answerKr": "응, 사진첩에 추억이 가득해.",
                "isMafiaDifference": false
            },
            {
                "id": 7,
                "question": "What delicious food did you eat?",
                "answer": "I ate sweet watermelon and grilled fish.",
                "questionKr": "어떤 맛있는 음식을 먹었니?",
                "answerKr": "달콤한 수박과 생선구이를 먹었어.",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "Did you finish your vacation homework?",
                "answer": "Yes, I finished my diary and drawing.",
                "questionKr": "방학 숙제 다 끝냈니?",
                "answerKr": "응, 일기와 그림 숙제 다 끝냈어.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "Are you happy to see your classmates again?",
                "answer": "Yes, I missed all my friends so much.",
                "questionKr": "반 친구들 다시 만나서 기쁘니?",
                "answerKr": "응, 친구들이 정말 보고 싶었어.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Let's make fourth grade the best year!",
                "answer": "Yes, let's study hard and play happily!",
                "questionKr": "4학년을 최고의 한 해로 만들자!",
                "answerKr": "그래, 열심히 공부하고 신나게 놀자!",
                "isMafiaDifference": false
            }
        ],
        "mafiaQA": [
            {
                "id": 1,
                "question": "Welcome back! How was your summer vacation?",
                "answer": "It was wonderful! I had a great time.",
                "questionKr": "돌아온 걸 환영해! 여름방학 어땠니?",
                "answerKr": "정말 멋졌어! 아주 좋은 시간 보냈어.",
                "isMafiaDifference": false
            },
            {
                "id": 2,
                "question": "Where did you go during the vacation?",
                "answer": "I was locked in a secret dungeon.",
                "questionKr": "방학 동안 어디 갔었니?",
                "answerKr": "비밀 지하 감옥에 갇혀 있었어.",
                "isMafiaDifference": true
            },
            {
                "id": 3,
                "question": "Did you visit your grandparents?",
                "answer": "Yes, I visited their quiet countryside farm.",
                "questionKr": "조부모님 댁에 방문했니?",
                "answerKr": "응, 한적한 시골 농장에 다녀왔어.",
                "isMafiaDifference": false
            },
            {
                "id": 4,
                "question": "What did you do at the beach?",
                "answer": "I swam in the sea and built a sandcastle.",
                "questionKr": "해변에서 무엇을 했니?",
                "answerKr": "바다에서 수영하고 모래성을 쌓았어.",
                "isMafiaDifference": false
            },
            {
                "id": 5,
                "question": "Did you watch any exciting movies?",
                "answer": "Yes, I watched an animation with my cousin.",
                "questionKr": "재미있는 영화 봤니?",
                "answerKr": "응, 사촌과 함께 애니메이션을 봤어.",
                "isMafiaDifference": false
            },
            {
                "id": 6,
                "question": "Did you take a lot of photos?",
                "answer": "No, cameras are forbidden in my land.",
                "questionKr": "사진 많이 찍었니?",
                "answerKr": "아니, 우리 동네는 카메라 금지야.",
                "isMafiaDifference": true
            },
            {
                "id": 7,
                "question": "What delicious food did you eat?",
                "answer": "I ate sweet watermelon and grilled fish.",
                "questionKr": "어떤 맛있는 음식을 먹었니?",
                "answerKr": "달콤한 수박과 생선구이를 먹었어.",
                "isMafiaDifference": false
            },
            {
                "id": 8,
                "question": "Did you finish your vacation homework?",
                "answer": "Yes, I finished my diary and drawing.",
                "questionKr": "방학 숙제 다 끝냈니?",
                "answerKr": "응, 일기와 그림 숙제 다 끝냈어.",
                "isMafiaDifference": false
            },
            {
                "id": 9,
                "question": "Are you happy to see your classmates again?",
                "answer": "Yes, I missed all my friends so much.",
                "questionKr": "반 친구들 다시 만나서 기쁘니?",
                "answerKr": "응, 친구들이 정말 보고 싶었어.",
                "isMafiaDifference": false
            },
            {
                "id": 10,
                "question": "Let's make fourth grade the best year!",
                "answer": "Yes, let's study hard and play happily!",
                "questionKr": "4학년을 최고의 한 해로 만들자!",
                "answerKr": "그래, 열심히 공부하고 신나게 놀자!",
                "isMafiaDifference": false
            }
        ],
        "escapeQuizzes": [
            {
                "question": "여름이나 겨울에 학교를 쉬는 [방학]의 영어 단어는?",
                "word": "vacation",
                "meaning": "방학",
                "hint": "v_______",
                "answer": "vacation",
                "options": [
                    "vacation",
                    "school",
                    "class",
                    "weekend"
                ]
            },
            {
                "question": "'가다(go)'의 과거형인 [갔다]의 영어 단어는?",
                "word": "went",
                "meaning": "갔다 (과거)",
                "hint": "w___",
                "answer": "went",
                "options": [
                    "went",
                    "go",
                    "gone",
                    "goes"
                ]
            },
            {
                "question": "모래사장과 바다가 있는 [해변]의 영어 단어는?",
                "word": "beach",
                "meaning": "해변",
                "hint": "b____",
                "answer": "beach",
                "options": [
                    "beach",
                    "park",
                    "room",
                    "mountain"
                ]
            },
            {
                "question": "'방문하다(visit)'의 과거형인 [방문했다]의 영어는?",
                "word": "visited",
                "meaning": "방문했다",
                "hint": "v______",
                "answer": "visited",
                "options": [
                    "visited",
                    "visit",
                    "played",
                    "stayed"
                ]
            },
            {
                "question": "즐거웠던 기억인 [추억]의 영어 단어는?",
                "word": "memory",
                "meaning": "추억, 기억",
                "hint": "m_____",
                "answer": "memory",
                "options": [
                    "memory",
                    "photo",
                    "album",
                    "trip"
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
        "shortDesc": "출신 국가 묻고 답하기 (10문항)",
        "grammarPoint": "Where are you from? - I'm from [나라].",
        "words": [
            {
                "en": "country",
                "kr": "나라, 국가"
            },
            {
                "en": "Korea",
                "kr": "대한민국"
            },
            {
                "en": "Canada",
                "kr": "캐나다"
            },
            {
                "en": "the U.K.",
                "kr": "영국"
            },
            {
                "en": "the U.S.A.",
                "kr": "미국"
            },
            {
                "en": "Australia",
                "kr": "호주"
            },
            {
                "en": "France",
                "kr": "프랑스"
            },
            {
                "en": "China",
                "kr": "중국"
            },
            {
                "en": "Vietnam",
                "kr": "베트남"
            },
            {
                "en": "from",
                "kr": "~출신의"
            },
            {
                "en": "world",
                "kr": "세계"
            },
            {
                "en": "welcome",
                "kr": "환영하다"
            }
        ],
        "sentences": [
            {
                "en": "Where are you from?",
                "kr": "어디 출신이니?"
            },
            {
                "en": "I'm from Korea.",
                "kr": "나는 한국 출신이야."
            },
            {
                "en": "I'm from Canada.",
                "kr": "나는 캐나다에서 왔어."
            },
            {
                "en": "Welcome to our school!",
                "kr": "우리 학교에 온 걸 환영해!"
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
                "question": "출신을 물어볼 때 쓰는 전치사는? [Where are you ______?]",
                "word": "from",
                "meaning": "~출신의, ~로부터",
                "hint": "f___",
                "answer": "from",
                "options": [
                    "from",
                    "to",
                    "in",
                    "at"
                ]
            },
            {
                "question": "단풍잎 국기로 유명한 북미 국가는?",
                "word": "Canada",
                "meaning": "캐나다",
                "hint": "C_____",
                "answer": "Canada",
                "options": [
                    "Canada",
                    "France",
                    "China",
                    "Korea"
                ]
            },
            {
                "question": "캥거루와 코알라의 나라인 [호주]의 영어 이름은?",
                "word": "Australia",
                "meaning": "호주",
                "hint": "A________",
                "answer": "Australia",
                "options": [
                    "Australia",
                    "the U.K.",
                    "Vietnam",
                    "France"
                ]
            },
            {
                "question": "에펠탑이 있는 예술의 나라 [프랑스]의 영어는?",
                "word": "France",
                "meaning": "프랑스",
                "hint": "F_____",
                "answer": "France",
                "options": [
                    "France",
                    "Canada",
                    "Korea",
                    "China"
                ]
            },
            {
                "question": "우리가 살고 있는 자랑스러운 [대한민국]의 영어는?",
                "word": "Korea",
                "meaning": "대한민국, 한국",
                "hint": "K____",
                "answer": "Korea",
                "options": [
                    "Korea",
                    "the U.S.A.",
                    "the U.K.",
                    "Australia"
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
        "title": "I'd Like a Sandwich",
        "shortDesc": "음식 주문하고 요청하기 (10문항)",
        "grammarPoint": "May I take your order? - I'd like a [음식], please.",
        "words": [
            {
                "en": "sandwich",
                "kr": "샌드위치"
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
                "en": "pizza",
                "kr": "피자"
            },
            {
                "en": "burger",
                "kr": "버거"
            },
            {
                "en": "order",
                "kr": "주문"
            },
            {
                "en": "menu",
                "kr": "메뉴"
            },
            {
                "en": "like",
                "kr": "원하다"
            },
            {
                "en": "eat",
                "kr": "먹다"
            },
            {
                "en": "drink",
                "kr": "마시다"
            },
            {
                "en": "dessert",
                "kr": "디저트"
            },
            {
                "en": "delicious",
                "kr": "맛있는"
            }
        ],
        "sentences": [
            {
                "en": "May I take your order?",
                "kr": "주문하시겠어요?"
            },
            {
                "en": "I'd like a sandwich, please.",
                "kr": "샌드위치 하나 주세요."
            },
            {
                "en": "What would you like to drink?",
                "kr": "음료는 무엇으로 하시겠어요?"
            },
            {
                "en": "Orange juice, please.",
                "kr": "오렌지 주스로 주세요."
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
                "question": "정중하게 주문할 때 쓰는 표현은? [I'd ______ a sandwich.]",
                "word": "like",
                "meaning": "~을 원하다",
                "hint": "l___",
                "answer": "like",
                "options": [
                    "like",
                    "have",
                    "make",
                    "eat"
                ]
            },
            {
                "question": "식당에서 식사 후 먹는 후식 [디저트]의 영어는?",
                "word": "dessert",
                "meaning": "디저트, 후식",
                "hint": "d______",
                "answer": "dessert",
                "options": [
                    "dessert",
                    "order",
                    "salad",
                    "burger"
                ]
            },
            {
                "question": "음식의 맛이 아주 [맛있는]의 영어 단어는?",
                "word": "delicious",
                "meaning": "맛있는",
                "hint": "d________",
                "answer": "delicious",
                "options": [
                    "delicious",
                    "spicy",
                    "cold",
                    "hungry"
                ]
            },
            {
                "question": "식당에서 점원이 '주문하시겠어요?' 할 때 [take your ______]의 빈칸은?",
                "word": "order",
                "meaning": "주문",
                "hint": "o____",
                "answer": "order",
                "options": [
                    "order",
                    "menu",
                    "bill",
                    "table"
                ]
            },
            {
                "question": "신선한 채소로 만든 요리인 [샐러드]의 영어는?",
                "word": "salad",
                "meaning": "샐러드",
                "hint": "s____",
                "answer": "salad",
                "options": [
                    "salad",
                    "sandwich",
                    "soup",
                    "juice"
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
        "title": "May I Sit Here?",
        "shortDesc": "허락 구하고 답하기 (10문항)",
        "grammarPoint": "May I [동사원형]? - Yes, you may. / No, you may not.",
        "words": [
            {
                "en": "sit",
                "kr": "앉다"
            },
            {
                "en": "use",
                "kr": "사용하다"
            },
            {
                "en": "take",
                "kr": "찍다, 가져가다"
            },
            {
                "en": "open",
                "kr": "열다"
            },
            {
                "en": "borrow",
                "kr": "빌리다"
            },
            {
                "en": "bring",
                "kr": "가져오다"
            },
            {
                "en": "wash",
                "kr": "씻다"
            },
            {
                "en": "may",
                "kr": "~해도 되다"
            },
            {
                "en": "course",
                "kr": "물론"
            },
            {
                "en": "problem",
                "kr": "문제"
            },
            {
                "en": "go ahead",
                "kr": "어서 하렴"
            },
            {
                "en": "here",
                "kr": "여기"
            }
        ],
        "sentences": [
            {
                "en": "May I sit here?",
                "kr": "여기 앉아도 될까요?"
            },
            {
                "en": "Yes, you may.",
                "kr": "네, 앉으셔도 됩니다."
            },
            {
                "en": "May I borrow your pencil?",
                "kr": "연필 좀 빌려도 될까요?"
            },
            {
                "en": "Sure, go ahead.",
                "kr": "물론이지, 쓰렴."
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
                "question": "정중하게 허락을 구할 때 쓰는 조동사는? [______ I sit here?]",
                "word": "May",
                "meaning": "~해도 되다",
                "hint": "M__",
                "answer": "May",
                "options": [
                    "May",
                    "Must",
                    "Will",
                    "Should"
                ]
            },
            {
                "question": "허락할 때 '어서 하렴/그렇게 하렴'의 표현은? [Go ______]",
                "word": "ahead",
                "meaning": "앞으로, 그렇게 하렴",
                "hint": "a____",
                "answer": "ahead",
                "options": [
                    "ahead",
                    "away",
                    "back",
                    "out"
                ]
            },
            {
                "question": "물건을 [빌리다]의 뜻을 가진 영어 단어는?",
                "word": "borrow",
                "meaning": "빌리다",
                "hint": "b_____",
                "answer": "borrow",
                "options": [
                    "borrow",
                    "lend",
                    "bring",
                    "buy"
                ]
            },
            {
                "question": "의자에 [앉다]의 뜻을 가진 영어 단어는?",
                "word": "sit",
                "meaning": "앉다",
                "hint": "s__",
                "answer": "sit",
                "options": [
                    "sit",
                    "stand",
                    "walk",
                    "jump"
                ]
            },
            {
                "question": "'물론이지!'의 표현인 [Of ______]의 빈칸은?",
                "word": "course",
                "meaning": "물론, 당연히",
                "hint": "c_____",
                "answer": "course",
                "options": [
                    "course",
                    "cause",
                    "case",
                    "class"
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
        "title": "Whose Sock Is This?",
        "shortDesc": "물건의 소유자 묻고 답하기 (10문항)",
        "grammarPoint": "Whose [물건] is this? - It's [소유격/소유대명사].",
        "words": [
            {
                "en": "whose",
                "kr": "누구의"
            },
            {
                "en": "sock",
                "kr": "양말"
            },
            {
                "en": "glove",
                "kr": "장갑"
            },
            {
                "en": "watch",
                "kr": "손목시계"
            },
            {
                "en": "towel",
                "kr": "수건"
            },
            {
                "en": "brush",
                "kr": "솔, 빗"
            },
            {
                "en": "cap",
                "kr": "모자"
            },
            {
                "en": "umbrella",
                "kr": "우산"
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
                "en": "his",
                "kr": "그의 것"
            },
            {
                "en": "hers",
                "kr": "그녀의 것"
            }
        ],
        "sentences": [
            {
                "en": "Whose sock is this?",
                "kr": "이 양말은 누구 것이니?"
            },
            {
                "en": "It's mine.",
                "kr": "내 거야."
            },
            {
                "en": "Whose cap is this?",
                "kr": "이 모자는 누구 것이니?"
            },
            {
                "en": "It's Tony's.",
                "kr": "토니 거야."
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
                "question": "발에 신는 [양말]의 영어 단어는?",
                "word": "sock",
                "meaning": "양말",
                "hint": "s___",
                "answer": "sock",
                "options": [
                    "sock",
                    "shoe",
                    "glove",
                    "boot"
                ]
            },
            {
                "question": "손목에 차는 [시계]의 영어 단어는?",
                "word": "watch",
                "meaning": "손목시계",
                "hint": "w____",
                "answer": "watch",
                "options": [
                    "watch",
                    "clock",
                    "towel",
                    "ring"
                ]
            },
            {
                "question": "세수하고 물기를 닦는 [수건]의 영어는?",
                "word": "towel",
                "meaning": "수건",
                "hint": "t____",
                "answer": "towel",
                "options": [
                    "towel",
                    "blanket",
                    "brush",
                    "soap"
                ]
            },
            {
                "question": "'너의 것'을 뜻하는 소유대명사는?",
                "word": "yours",
                "meaning": "너의 것",
                "hint": "y____",
                "answer": "yours",
                "options": [
                    "yours",
                    "your",
                    "you",
                    "mine"
                ]
            },
            {
                "question": "머리를 빗는 [솔, 빗]의 영어 단어는?",
                "word": "brush",
                "meaning": "솔, 빗",
                "hint": "b____",
                "answer": "brush",
                "options": [
                    "brush",
                    "comb",
                    "towel",
                    "soap"
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
        "title": "What's Your Favorite Subject?",
        "shortDesc": "좋아하는 과목과 이유 표현하기 (10문항)",
        "grammarPoint": "What's your favorite subject? - My favorite subject is [과목].",
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
                "en": "music",
                "kr": "음악"
            },
            {
                "en": "art",
                "kr": "미술"
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
                "en": "Korean",
                "kr": "국어"
            },
            {
                "en": "history",
                "kr": "역사"
            },
            {
                "en": "why",
                "kr": "왜"
            },
            {
                "en": "because",
                "kr": "~때문에"
            },
            {
                "en": "interesting",
                "kr": "흥미로운"
            }
        ],
        "sentences": [
            {
                "en": "What's your favorite subject?",
                "kr": "가장 좋아하는 과목은 뭐니?"
            },
            {
                "en": "My favorite subject is science.",
                "kr": "가장 좋아하는 과목은 과학이야."
            },
            {
                "en": "Why do you like it?",
                "kr": "왜 그 과목을 좋아하니?"
            },
            {
                "en": "Because it is fun and exciting.",
                "kr": "재미있고 신나기 때문이야."
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
                "question": "학교의 교과 [과목]을 뜻하는 영어 단어는?",
                "word": "subject",
                "meaning": "과목",
                "hint": "s______",
                "answer": "subject",
                "options": [
                    "subject",
                    "school",
                    "lesson",
                    "grade"
                ]
            },
            {
                "question": "숫자와 계산을 다루는 [수학]의 영어는?",
                "word": "math",
                "meaning": "수학",
                "hint": "m___",
                "answer": "math",
                "options": [
                    "math",
                    "music",
                    "science",
                    "art"
                ]
            },
            {
                "question": "자연과 우주를 탐구하는 [과학]의 영어는?",
                "word": "science",
                "meaning": "과학",
                "hint": "s______",
                "answer": "science",
                "options": [
                    "science",
                    "history",
                    "Korean",
                    "PE"
                ]
            },
            {
                "question": "이유를 묻고 대답할 때 쓰는 '~때문에'는?",
                "word": "because",
                "meaning": "~때문에",
                "hint": "b______",
                "answer": "because",
                "options": [
                    "because",
                    "why",
                    "what",
                    "which"
                ]
            },
            {
                "question": "체육을 뜻하는 [PE]의 원래 명칭은?",
                "word": "PE",
                "meaning": "체육",
                "hint": "P_",
                "answer": "PE",
                "options": [
                    "PE",
                    "Art",
                    "Math",
                    "Music"
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
        "title": "Where Is the Ice Cream Store?",
        "shortDesc": "길 묻고 위치 안내하기 (10문항)",
        "grammarPoint": "Where is the [장소]? - Go straight and turn [left/right].",
        "words": [
            {
                "en": "bank",
                "kr": "은행"
            },
            {
                "en": "bakery",
                "kr": "빵집"
            },
            {
                "en": "bookstore",
                "kr": "서점"
            },
            {
                "en": "museum",
                "kr": "박물관"
            },
            {
                "en": "post office",
                "kr": "우체국"
            },
            {
                "en": "straight",
                "kr": "곧장, 똑바로"
            },
            {
                "en": "turn",
                "kr": "돌다"
            },
            {
                "en": "block",
                "kr": "블록, 구역"
            },
            {
                "en": "left",
                "kr": "왼쪽"
            },
            {
                "en": "right",
                "kr": "오른쪽"
            },
            {
                "en": "next to",
                "kr": "~옆에"
            },
            {
                "en": "between",
                "kr": "~사이에"
            }
        ],
        "sentences": [
            {
                "en": "Where is the bakery?",
                "kr": "빵집이 어디에 있나요?"
            },
            {
                "en": "Go straight one block and turn left.",
                "kr": "한 블록 곧장 가서 왼쪽으로 도세요."
            },
            {
                "en": "It's on your right.",
                "kr": "오른쪽에 있습니다."
            },
            {
                "en": "Thank you so much!",
                "kr": "정말 감사합니다!"
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
                "question": "방향을 지시할 때 '곧장, 똑바로'의 영어는?",
                "word": "straight",
                "meaning": "곧장, 똑바로",
                "hint": "s_______",
                "answer": "straight",
                "options": [
                    "straight",
                    "right",
                    "left",
                    "turn"
                ]
            },
            {
                "question": "방향을 바꿀 때 '돌다'를 뜻하는 단어는?",
                "word": "turn",
                "meaning": "돌다",
                "hint": "t___",
                "answer": "turn",
                "options": [
                    "turn",
                    "walk",
                    "stop",
                    "go"
                ]
            },
            {
                "question": "두 사물의 '사이에'를 나타내는 전치사는?",
                "word": "between",
                "meaning": "~사이에",
                "hint": "b______",
                "answer": "between",
                "options": [
                    "between",
                    "next",
                    "behind",
                    "under"
                ]
            },
            {
                "question": "편지와 소포를 보내는 [우체국]의 영어는?",
                "word": "post office",
                "meaning": "우체국",
                "hint": "p___ o_____",
                "answer": "post office",
                "options": [
                    "post office",
                    "police station",
                    "bank",
                    "library"
                ]
            },
            {
                "question": "책을 파는 [서점]의 영어 단어는?",
                "word": "bookstore",
                "meaning": "서점",
                "hint": "b________",
                "answer": "bookstore",
                "options": [
                    "bookstore",
                    "library",
                    "bakery",
                    "museum"
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
        "title": "I Visited My Uncle",
        "shortDesc": "방학 및 과거 경험 말하기 (10문항)",
        "grammarPoint": "What did you do? - I [과거동사] ~.",
        "words": [
            {
                "en": "visited",
                "kr": "방문했다"
            },
            {
                "en": "went",
                "kr": "갔다"
            },
            {
                "en": "ate",
                "kr": "먹었다"
            },
            {
                "en": "saw",
                "kr": "보았다"
            },
            {
                "en": "rode",
                "kr": "탔다"
            },
            {
                "en": "swam",
                "kr": "수영했다"
            },
            {
                "en": "made",
                "kr": "만들었다"
            },
            {
                "en": "enjoyed",
                "kr": "즐겼다"
            },
            {
                "en": "uncle",
                "kr": "삼촌, 이모부"
            },
            {
                "en": "island",
                "kr": "섬"
            },
            {
                "en": "farm",
                "kr": "농장"
            },
            {
                "en": "delicious",
                "kr": "맛있는"
            }
        ],
        "sentences": [
            {
                "en": "What did you do on vacation?",
                "kr": "방학 때 무엇을 했니?"
            },
            {
                "en": "I visited my uncle in Jeju-do.",
                "kr": "제주도 삼촌 댁을 방문했어."
            },
            {
                "en": "I swam in the cool sea.",
                "kr": "시원한 바다에서 수영했어."
            },
            {
                "en": "We had a wonderful time.",
                "kr": "우리는 멋진 시간을 보냈어."
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
                "question": "'먹다(eat)'의 과거형인 [먹었다]의 영어는?",
                "word": "ate",
                "meaning": "먹었다",
                "hint": "a__",
                "answer": "ate",
                "options": [
                    "ate",
                    "eat",
                    "eaten",
                    "eating"
                ]
            },
            {
                "question": "'보다(see)'의 과거형인 [보았다]의 영어는?",
                "word": "saw",
                "meaning": "보았다",
                "hint": "s__",
                "answer": "saw",
                "options": [
                    "saw",
                    "see",
                    "seen",
                    "sight"
                ]
            },
            {
                "question": "바다로 둘러싸인 땅인 [섬]의 영어 단어는?",
                "word": "island",
                "meaning": "섬",
                "hint": "i_____",
                "answer": "island",
                "options": [
                    "island",
                    "farm",
                    "ocean",
                    "beach"
                ]
            },
            {
                "question": "친척 중 [삼촌, 외삼촌, 이모부]의 영어는?",
                "word": "uncle",
                "meaning": "삼촌",
                "hint": "u____",
                "answer": "uncle",
                "options": [
                    "uncle",
                    "aunt",
                    "cousin",
                    "brother"
                ]
            },
            {
                "question": "'수영하다(swim)'의 과거형인 [수영했다]는?",
                "word": "swam",
                "meaning": "수영했다",
                "hint": "s___",
                "answer": "swam",
                "options": [
                    "swam",
                    "swim",
                    "swimming",
                    "swims"
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
        "title": "I'm Taller Than You",
        "shortDesc": "비교급으로 비교하기 (10문항)",
        "grammarPoint": "A is [비교급] than B. - I'm taller than you.",
        "words": [
            {
                "en": "taller",
                "kr": "더 키가 큰"
            },
            {
                "en": "shorter",
                "kr": "더 키가 작은"
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
                "en": "compare",
                "kr": "비교하다"
            }
        ],
        "sentences": [
            {
                "en": "I'm taller than you.",
                "kr": "내가 너보다 키가 커."
            },
            {
                "en": "A cheetah is faster than a lion.",
                "kr": "치타는 사자보다 빨라."
            },
            {
                "en": "Which one is bigger?",
                "kr": "어느 것이 더 크니?"
            },
            {
                "en": "This box is heavier than that one.",
                "kr": "이 상자가 저것보다 더 무거워."
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
                "question": "비교할 때 '~보다'를 뜻하는 단어는? [A is taller ______ B.]",
                "word": "than",
                "meaning": "~보다",
                "hint": "t___",
                "answer": "than",
                "options": [
                    "than",
                    "then",
                    "that",
                    "this"
                ]
            },
            {
                "question": "키가 더 큰 상태인 [더 키가 큰]의 비교급 단어는?",
                "word": "taller",
                "meaning": "더 키가 큰",
                "hint": "t_____",
                "answer": "taller",
                "options": [
                    "taller",
                    "tall",
                    "tallest",
                    "shorter"
                ]
            },
            {
                "question": "더 빠른 속도를 뜻하는 [더 빠른]의 비교급 단어는?",
                "word": "faster",
                "meaning": "더 빠른",
                "hint": "f_____",
                "answer": "faster",
                "options": [
                    "faster",
                    "fast",
                    "fastest",
                    "slower"
                ]
            },
            {
                "question": "크기가 더 큰 상태인 [더 큰]의 비교급 단어는?",
                "word": "bigger",
                "meaning": "더 큰",
                "hint": "b_____",
                "answer": "bigger",
                "options": [
                    "bigger",
                    "big",
                    "biggest",
                    "smaller"
                ]
            },
            {
                "question": "무게가 더 나가는 [더 무거운]의 비교급 단어는?",
                "word": "heavier",
                "meaning": "더 무거운",
                "hint": "h______",
                "answer": "heavier",
                "options": [
                    "heavier",
                    "heavy",
                    "lighter",
                    "faster"
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
        "title": "What Do You Think?",
        "shortDesc": "의견 묻고 답하기 (10문항)",
        "grammarPoint": "What do you think? - I think [의견]. / I agree.",
        "words": [
            {
                "en": "think",
                "kr": "생각하다"
            },
            {
                "en": "opinion",
                "kr": "의견"
            },
            {
                "en": "agree",
                "kr": "동의하다"
            },
            {
                "en": "disagree",
                "kr": "동의하지 않다"
            },
            {
                "en": "idea",
                "kr": "생각, 아이디어"
            },
            {
                "en": "wonderful",
                "kr": "멋진"
            },
            {
                "en": "difficult",
                "kr": "어려운"
            },
            {
                "en": "easy",
                "kr": "쉬운"
            },
            {
                "en": "boring",
                "kr": "지루한"
            },
            {
                "en": "important",
                "kr": "중요한"
            },
            {
                "en": "share",
                "kr": "나누다"
            },
            {
                "en": "together",
                "kr": "함께"
            }
        ],
        "sentences": [
            {
                "en": "What do you think about this?",
                "kr": "이것에 대해 어떻게 생각하니?"
            },
            {
                "en": "I think it's a great idea.",
                "kr": "아주 좋은 생각이라고 생각해."
            },
            {
                "en": "I agree with you.",
                "kr": "너에게 동의해."
            },
            {
                "en": "I have a different opinion.",
                "kr": "나는 다른 의견이 있어."
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
                "question": "자신의 견해를 나타낼 때 '생각하다'의 영어는? [I ______ that...]",
                "word": "think",
                "meaning": "생각하다",
                "hint": "t____",
                "answer": "think",
                "options": [
                    "think",
                    "thank",
                    "tell",
                    "talk"
                ]
            },
            {
                "question": "상대방의 의견에 [동의하다]를 뜻하는 영어 단어는?",
                "word": "agree",
                "meaning": "동의하다",
                "hint": "a____",
                "answer": "agree",
                "options": [
                    "agree",
                    "disagree",
                    "argue",
                    "allow"
                ]
            },
            {
                "question": "사람의 생각이나 견해를 뜻하는 [의견]의 영어는?",
                "word": "opinion",
                "meaning": "의견",
                "hint": "o______",
                "answer": "opinion",
                "options": [
                    "opinion",
                    "option",
                    "order",
                    "object"
                ]
            },
            {
                "question": "아주 가치 있고 꼭 필요한 [중요한]의 영어 단어는?",
                "word": "important",
                "meaning": "중요한",
                "hint": "i________",
                "answer": "important",
                "options": [
                    "important",
                    "easy",
                    "boring",
                    "different"
                ]
            },
            {
                "question": "참신한 발상인 [아이디어, 생각]의 영어 단어는?",
                "word": "idea",
                "meaning": "생각, 아이디어",
                "hint": "i___",
                "answer": "idea",
                "options": [
                    "idea",
                    "item",
                    "issue",
                    "idol"
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
        "title": "Who Wrote the Book?",
        "shortDesc": "과거 사실 및 역사적 인물 묻기 (10문항)",
        "grammarPoint": "Who [과거동사] ~? - [인물] [과거동사] it.",
        "words": [
            {
                "en": "wrote",
                "kr": "썼다"
            },
            {
                "en": "painted",
                "kr": "그렸다"
            },
            {
                "en": "invented",
                "kr": "발명했다"
            },
            {
                "en": "built",
                "kr": "지었다"
            },
            {
                "en": "discovered",
                "kr": "발견했다"
            },
            {
                "en": "author",
                "kr": "작가"
            },
            {
                "en": "scientist",
                "kr": "과학자"
            },
            {
                "en": "king",
                "kr": "왕"
            },
            {
                "en": "book",
                "kr": "책"
            },
            {
                "en": "painting",
                "kr": "그림"
            },
            {
                "en": "airplane",
                "kr": "비행기"
            },
            {
                "en": "history",
                "kr": "역사"
            }
        ],
        "sentences": [
            {
                "en": "Who wrote this book?",
                "kr": "이 책은 누가 썼니?"
            },
            {
                "en": "King Sejong created Hangeul.",
                "kr": "세종대왕께서 한글을 창제하셨어."
            },
            {
                "en": "Who painted the Mona Lisa?",
                "kr": "모나리자는 누가 그렸니?"
            },
            {
                "en": "Leonardo da Vinci painted it.",
                "kr": "레오나르도 다빈치가 그렸어."
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
                "question": "'쓰다(write)'의 과거형인 [썼다]의 영어는?",
                "word": "wrote",
                "meaning": "썼다",
                "hint": "w____",
                "answer": "wrote",
                "options": [
                    "wrote",
                    "write",
                    "written",
                    "writing"
                ]
            },
            {
                "question": "새로운 물건이나 기계를 [발명했다]의 영어는?",
                "word": "invented",
                "meaning": "발명했다",
                "hint": "i_______",
                "answer": "invented",
                "options": [
                    "invented",
                    "built",
                    "painted",
                    "discovered"
                ]
            },
            {
                "question": "새로운 대륙이나 법칙을 [발견했다]의 영어는?",
                "word": "discovered",
                "meaning": "발견했다",
                "hint": "d_________",
                "answer": "discovered",
                "options": [
                    "discovered",
                    "invented",
                    "wrote",
                    "made"
                ]
            },
            {
                "question": "책이나 글을 집필하는 [작가]의 영어 단어는?",
                "word": "author",
                "meaning": "작가, 저자",
                "hint": "a_____",
                "answer": "author",
                "options": [
                    "author",
                    "scientist",
                    "painter",
                    "doctor"
                ]
            },
            {
                "question": "과거의 사건과 인물을 기록한 [역사]의 영어는?",
                "word": "history",
                "meaning": "역사",
                "hint": "h______",
                "answer": "history",
                "options": [
                    "history",
                    "science",
                    "math",
                    "story"
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
        "title": "We Should Save the Earth",
        "shortDesc": "조언 및 환경 보호 실천하기 (10문항)",
        "grammarPoint": "We should [동사원형]. - We should save the Earth.",
        "words": [
            {
                "en": "earth",
                "kr": "지구"
            },
            {
                "en": "protect",
                "kr": "보호하다"
            },
            {
                "en": "recycle",
                "kr": "재활용하다"
            },
            {
                "en": "save",
                "kr": "절약하다, 구하다"
            },
            {
                "en": "turn off",
                "kr": "끄다"
            },
            {
                "en": "waste",
                "kr": "낭비하다"
            },
            {
                "en": "plastic",
                "kr": "플라스틱"
            },
            {
                "en": "energy",
                "kr": "에너지"
            },
            {
                "en": "nature",
                "kr": "자연"
            },
            {
                "en": "should",
                "kr": "~해야 한다"
            },
            {
                "en": "planet",
                "kr": "행성, 지구"
            },
            {
                "en": "clean",
                "kr": "깨끗한, 청소하다"
            }
        ],
        "sentences": [
            {
                "en": "We should save the Earth.",
                "kr": "우리는 지구를 아껴야 해."
            },
            {
                "en": "Turn off the lights, please.",
                "kr": "전등을 꺼주세요."
            },
            {
                "en": "Don't waste water.",
                "kr": "물을 낭비하지 마세요."
            },
            {
                "en": "Let's recycle plastic bottles.",
                "kr": "플라스틱 병을 재활용하자."
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
                "question": "의무나 당위(~해야 한다)를 나타내는 조동사는?",
                "word": "should",
                "meaning": "~해야 한다",
                "hint": "s_____",
                "answer": "should",
                "options": [
                    "should",
                    "could",
                    "would",
                    "might"
                ]
            },
            {
                "question": "우리가 살고 있는 푸른 행성 [지구]의 영어는?",
                "word": "Earth",
                "meaning": "지구",
                "hint": "E____",
                "answer": "Earth",
                "options": [
                    "Earth",
                    "Mars",
                    "Moon",
                    "Sun"
                ]
            },
            {
                "question": "자원을 아끼고 다시 쓰는 [재활용하다]의 영어는?",
                "word": "recycle",
                "meaning": "재활용하다",
                "hint": "r______",
                "answer": "recycle",
                "options": [
                    "recycle",
                    "waste",
                    "throw",
                    "burn"
                ]
            },
            {
                "question": "전등이나 전자기기를 [끄다]를 뜻하는 구동사는?",
                "word": "turn off",
                "meaning": "끄다",
                "hint": "t___ o__",
                "answer": "turn off",
                "options": [
                    "turn off",
                    "turn on",
                    "put on",
                    "take off"
                ]
            },
            {
                "question": "물이나 자원을 헛되이 쓰는 [낭비하다]의 영어는?",
                "word": "waste",
                "meaning": "낭비하다",
                "hint": "w____",
                "answer": "waste",
                "options": [
                    "waste",
                    "save",
                    "clean",
                    "protect"
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
        "title": "What Are You Going to Do This Weekend?",
        "shortDesc": "주말 계획과 미래 활동 묻고 답하기 (10문항)",
        "grammarPoint": "What are you going to do? - I'm going to [동사원형].",
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
                "en": "camping",
                "kr": "캠핑"
            },
            {
                "en": "movie",
                "kr": "영화"
            },
            {
                "en": "concert",
                "kr": "음악회, 콘서트"
            },
            {
                "en": "library",
                "kr": "도서관"
            },
            {
                "en": "picnic",
                "kr": "소풍"
            },
            {
                "en": "tomorrow",
                "kr": "내일"
            },
            {
                "en": "afternoon",
                "kr": "오후"
            },
            {
                "en": "stay",
                "kr": "머무르다"
            },
            {
                "en": "invite",
                "kr": "초대하다"
            }
        ],
        "sentences": [
            {
                "en": "What are you going to do this weekend?",
                "kr": "이번 주말에 무엇을 할 예정이니?"
            },
            {
                "en": "I'm going to go camping with my family.",
                "kr": "가족과 함께 캠핑을 갈 거야."
            },
            {
                "en": "Are you going to visit your grandmother?",
                "kr": "할머니 댁을 방문할 예정이니?"
            },
            {
                "en": "Yes, I am. I can't wait!",
                "kr": "응, 그럴 거야. 정말 기대돼!"
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
                "question": "미래의 계획(~할 예정이다)을 나타내는 구문은? [be ______ to]",
                "word": "going",
                "meaning": "~할 예정이다",
                "hint": "g____",
                "answer": "going",
                "options": [
                    "going",
                    "doing",
                    "making",
                    "having"
                ]
            },
            {
                "question": "야외에서 텐트를 치고 자는 [캠핑]의 영어는?",
                "word": "camping",
                "meaning": "캠핑",
                "hint": "c______",
                "answer": "camping",
                "options": [
                    "camping",
                    "hiking",
                    "swimming",
                    "skating"
                ]
            },
            {
                "question": "어떤 일을 하기 전 세우는 [계획]의 영어 단어는?",
                "word": "plan",
                "meaning": "계획",
                "hint": "p___",
                "answer": "plan",
                "options": [
                    "plan",
                    "play",
                    "place",
                    "plate"
                ]
            },
            {
                "question": "친구를 파티나 행사에 [초대하다]의 영어 단어는?",
                "word": "invite",
                "meaning": "초대하다",
                "hint": "i_____",
                "answer": "invite",
                "options": [
                    "invite",
                    "visit",
                    "welcome",
                    "call"
                ]
            },
            {
                "question": "야외로 음식을 싸 들고 떠나는 [소풍]의 영어 단어는?",
                "word": "picnic",
                "meaning": "소풍",
                "hint": "p_____",
                "answer": "picnic",
                "options": [
                    "picnic",
                    "party",
                    "trip",
                    "travel"
                ]
            }
        ]
    },
    "6G_L01": {
        "id": "6G_L01",
        "grade": 6,
        "lesson": 1,
        "name": "6학년 1단원",
        "title": "What grade are you in?",
        "shortDesc": "학년과 동아리 활동 묻고 답하기 (10문항)",
        "grammarPoint": "What grade are you in? - I'm in the [서수] grade.",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [첫 번째의 (1st)]",
                "word": "first",
                "meaning": "첫 번째의 (1st)",
                "hint": "1st (f____)",
                "answer": "first",
                "options": [
                    "first",
                    "fourth",
                    "second",
                    "third"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [두 번째의 (2nd)]",
                "word": "second",
                "meaning": "두 번째의 (2nd)",
                "hint": "2nd (s_____)",
                "answer": "second",
                "options": [
                    "second",
                    "first",
                    "fourth",
                    "third"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [세 번째의 (3rd)]",
                "word": "third",
                "meaning": "세 번째의 (3rd)",
                "hint": "3rd (t____)",
                "answer": "third",
                "options": [
                    "third",
                    "first",
                    "fourth",
                    "second"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [네 번째의 (4th)]",
                "word": "fourth",
                "meaning": "네 번째의 (4th)",
                "hint": "4th (f_____)",
                "answer": "fourth",
                "options": [
                    "fourth",
                    "first",
                    "second",
                    "third"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [다섯 번째의 (5th)]",
                "word": "fifth",
                "meaning": "다섯 번째의 (5th)",
                "hint": "5th (f____)",
                "answer": "fifth",
                "options": [
                    "fifth",
                    "first",
                    "second",
                    "third"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [여섯 번째의 (6th)]",
                "word": "sixth",
                "meaning": "여섯 번째의 (6th)",
                "hint": "6th (s____)",
                "answer": "sixth",
                "options": [
                    "sixth",
                    "first",
                    "second",
                    "third"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [기타 (악기)]",
                "word": "guitar",
                "meaning": "기타 (악기)",
                "hint": "play the g_____",
                "answer": "guitar",
                "options": [
                    "guitar",
                    "first",
                    "second",
                    "third"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [춤추다, 댄스]",
                "word": "dance",
                "meaning": "춤추다, 댄스",
                "hint": "join the d____ club",
                "answer": "dance",
                "options": [
                    "dance",
                    "first",
                    "second",
                    "third"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [학년]",
                "word": "grade",
                "meaning": "학년",
                "hint": "sixth g____",
                "answer": "grade",
                "options": [
                    "grade",
                    "first",
                    "second",
                    "third"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [철자를 말하다/쓰다]",
                "word": "spell",
                "meaning": "철자를 말하다/쓰다",
                "hint": "How do you s____ your name?",
                "answer": "spell",
                "options": [
                    "spell",
                    "first",
                    "second",
                    "third"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    },
    "6G_L02": {
        "id": "6G_L02",
        "grade": 6,
        "lesson": 2,
        "name": "6학년 2단원",
        "title": "What season do you like?",
        "shortDesc": "좋아하는 계절과 이유 묻고 답하기 (10문항)",
        "grammarPoint": "What season do you like? - I like [계절]. Because I can [활동].",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [봄]",
                "word": "spring",
                "meaning": "봄",
                "hint": "s_____, summer, fall, winter",
                "answer": "spring",
                "options": [
                    "spring",
                    "fall",
                    "summer",
                    "winter"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [여름]",
                "word": "summer",
                "meaning": "여름",
                "hint": "hot season (s_____)",
                "answer": "summer",
                "options": [
                    "summer",
                    "fall",
                    "spring",
                    "winter"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [가을]",
                "word": "fall",
                "meaning": "가을",
                "hint": "colorful leaves in f___",
                "answer": "fall",
                "options": [
                    "fall",
                    "spring",
                    "summer",
                    "winter"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [겨울]",
                "word": "winter",
                "meaning": "겨울",
                "hint": "cold season with snow (w_____)",
                "answer": "winter",
                "options": [
                    "winter",
                    "fall",
                    "spring",
                    "summer"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [계절]",
                "word": "season",
                "meaning": "계절",
                "hint": "four s_____s",
                "answer": "season",
                "options": [
                    "season",
                    "fall",
                    "spring",
                    "summer"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [꽃]",
                "word": "flower",
                "meaning": "꽃",
                "hint": "beautiful f_____",
                "answer": "flower",
                "options": [
                    "flower",
                    "fall",
                    "spring",
                    "summer"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [눈사람]",
                "word": "snowman",
                "meaning": "눈사람",
                "hint": "make a s______",
                "answer": "snowman",
                "options": [
                    "snowman",
                    "fall",
                    "spring",
                    "summer"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [따뜻한]",
                "word": "warm",
                "meaning": "따뜻한",
                "hint": "w___ spring weather",
                "answer": "warm",
                "options": [
                    "warm",
                    "fall",
                    "spring",
                    "summer"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [추운, 차가운]",
                "word": "cold",
                "meaning": "추운, 차가운",
                "hint": "c___ winter wind",
                "answer": "cold",
                "options": [
                    "cold",
                    "fall",
                    "spring",
                    "summer"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [다채로운, 알록달록한]",
                "word": "colorful",
                "meaning": "다채로운, 알록달록한",
                "hint": "c_______ leaves",
                "answer": "colorful",
                "options": [
                    "colorful",
                    "fall",
                    "spring",
                    "summer"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    },
    "6G_L03": {
        "id": "6G_L03",
        "grade": 6,
        "lesson": 3,
        "name": "6학년 3단원",
        "title": "When is your birthday?",
        "shortDesc": "생일과 특별한 행사 날짜 묻고 답하기 (10문항)",
        "grammarPoint": "When is your birthday? - It's on [월] [서수일].",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [1월]",
                "word": "January",
                "meaning": "1월",
                "hint": "1st month (J______)",
                "answer": "January",
                "options": [
                    "January",
                    "April",
                    "March",
                    "May"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [3월]",
                "word": "March",
                "meaning": "3월",
                "hint": "3rd month (M____)",
                "answer": "March",
                "options": [
                    "March",
                    "April",
                    "January",
                    "May"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [4월]",
                "word": "April",
                "meaning": "4월",
                "hint": "4th month (A____)",
                "answer": "April",
                "options": [
                    "April",
                    "January",
                    "March",
                    "May"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [5월]",
                "word": "May",
                "meaning": "5월",
                "hint": "5th month (M__)",
                "answer": "May",
                "options": [
                    "May",
                    "April",
                    "January",
                    "March"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [7월]",
                "word": "July",
                "meaning": "7월",
                "hint": "7th month (J___)",
                "answer": "July",
                "options": [
                    "July",
                    "April",
                    "January",
                    "March"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [8월]",
                "word": "August",
                "meaning": "8월",
                "hint": "8th month (A_____)",
                "answer": "August",
                "options": [
                    "August",
                    "April",
                    "January",
                    "March"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [10월]",
                "word": "October",
                "meaning": "10월",
                "hint": "10th month (O______)",
                "answer": "October",
                "options": [
                    "October",
                    "April",
                    "January",
                    "March"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [12월]",
                "word": "December",
                "meaning": "12월",
                "hint": "12th month (D_______)",
                "answer": "December",
                "options": [
                    "December",
                    "April",
                    "January",
                    "March"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [생일]",
                "word": "birthday",
                "meaning": "생일",
                "hint": "b_______ party",
                "answer": "birthday",
                "options": [
                    "birthday",
                    "April",
                    "January",
                    "March"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [음악회, 콘서트]",
                "word": "concert",
                "meaning": "음악회, 콘서트",
                "hint": "music c______",
                "answer": "concert",
                "options": [
                    "concert",
                    "April",
                    "January",
                    "March"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    },
    "6G_L04": {
        "id": "6G_L04",
        "grade": 6,
        "lesson": 4,
        "name": "6학년 4단원",
        "title": "Why are you happy?",
        "shortDesc": "감정과 이유 묻고 답하기 (10문항)",
        "grammarPoint": "Why are you [emotion]? - Because I [reason].",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [행복한, 기쁜]",
                "word": "happy",
                "meaning": "행복한, 기쁜",
                "hint": "h____",
                "answer": "happy",
                "options": [
                    "happy",
                    "angry",
                    "sad",
                    "tired"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [슬픈]",
                "word": "sad",
                "meaning": "슬픈",
                "hint": "s__",
                "answer": "sad",
                "options": [
                    "sad",
                    "angry",
                    "happy",
                    "tired"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [화난]",
                "word": "angry",
                "meaning": "화난",
                "hint": "a____",
                "answer": "angry",
                "options": [
                    "angry",
                    "happy",
                    "sad",
                    "tired"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [피곤한]",
                "word": "tired",
                "meaning": "피곤한",
                "hint": "t____",
                "answer": "tired",
                "options": [
                    "tired",
                    "angry",
                    "happy",
                    "sad"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [걱정스러운]",
                "word": "worried",
                "meaning": "걱정스러운",
                "hint": "w______",
                "answer": "worried",
                "options": [
                    "worried",
                    "angry",
                    "happy",
                    "sad"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [신난, 들뜬]",
                "word": "excited",
                "meaning": "신난, 들뜬",
                "hint": "e______",
                "answer": "excited",
                "options": [
                    "excited",
                    "angry",
                    "happy",
                    "sad"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [자랑스러운, 뿌듯한]",
                "word": "proud",
                "meaning": "자랑스러운, 뿌듯한",
                "hint": "p____",
                "answer": "proud",
                "options": [
                    "proud",
                    "angry",
                    "happy",
                    "sad"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [무서워하는]",
                "word": "scared",
                "meaning": "무서워하는",
                "hint": "s_____",
                "answer": "scared",
                "options": [
                    "scared",
                    "angry",
                    "happy",
                    "sad"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [놀란]",
                "word": "surprised",
                "meaning": "놀란",
                "hint": "s________",
                "answer": "surprised",
                "options": [
                    "surprised",
                    "angry",
                    "happy",
                    "sad"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [지루한, 심심한]",
                "word": "bored",
                "meaning": "지루한, 심심한",
                "hint": "b____",
                "answer": "bored",
                "options": [
                    "bored",
                    "angry",
                    "happy",
                    "sad"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    },
    "6G_L05": {
        "id": "6G_L05",
        "grade": 6,
        "lesson": 5,
        "name": "6학년 5단원",
        "title": "Where is the post office?",
        "shortDesc": "길 찾기와 위치 안내 묻고 답하기 (10문항)",
        "grammarPoint": "Where is the [장소]? - Go straight and turn [left/right]. It's on your [right/left].",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [똑바로, 곧장]",
                "word": "straight",
                "meaning": "똑바로, 곧장",
                "hint": "Go s_______",
                "answer": "straight",
                "options": [
                    "straight",
                    "block",
                    "left",
                    "right"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [왼쪽, 왼쪽에]",
                "word": "left",
                "meaning": "왼쪽, 왼쪽에",
                "hint": "turn l___",
                "answer": "left",
                "options": [
                    "left",
                    "block",
                    "right",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [오른쪽, 오른쪽에]",
                "word": "right",
                "meaning": "오른쪽, 오른쪽에",
                "hint": "turn r____",
                "answer": "right",
                "options": [
                    "right",
                    "block",
                    "left",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [구획, 블록]",
                "word": "block",
                "meaning": "구획, 블록",
                "hint": "two b____s",
                "answer": "block",
                "options": [
                    "block",
                    "left",
                    "right",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [맞은편에, 건너서]",
                "word": "across",
                "meaning": "맞은편에, 건너서",
                "hint": "a_____ from the park",
                "answer": "across",
                "options": [
                    "across",
                    "left",
                    "right",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [~뒤에]",
                "word": "behind",
                "meaning": "~뒤에",
                "hint": "b_____ the school",
                "answer": "behind",
                "options": [
                    "behind",
                    "left",
                    "right",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [~사이에]",
                "word": "between",
                "meaning": "~사이에",
                "hint": "b______ A and B",
                "answer": "between",
                "options": [
                    "between",
                    "left",
                    "right",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [도서관]",
                "word": "library",
                "meaning": "도서관",
                "hint": "read books at l______",
                "answer": "library",
                "options": [
                    "library",
                    "left",
                    "right",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [병원]",
                "word": "hospital",
                "meaning": "병원",
                "hint": "see a doctor at h_______",
                "answer": "hospital",
                "options": [
                    "hospital",
                    "left",
                    "right",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [박물관]",
                "word": "museum",
                "meaning": "박물관",
                "hint": "see art at m_____",
                "answer": "museum",
                "options": [
                    "museum",
                    "left",
                    "right",
                    "straight"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    },
    "6G_L06": {
        "id": "6G_L06",
        "grade": 6,
        "lesson": 6,
        "name": "6학년 6단원",
        "title": "What does he look like?",
        "shortDesc": "외모와 옷차림 묘사 묻고 답하기 (10문항)",
        "grammarPoint": "What does he/she look like? - He/She has [신체특징] and is wearing [착용의류].",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [곱슬곱슬한]",
                "word": "curly",
                "meaning": "곱슬곱슬한",
                "hint": "c____ hair",
                "answer": "curly",
                "options": [
                    "curly",
                    "glasses",
                    "straight",
                    "wearing"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [곧은, 생머리의]",
                "word": "straight",
                "meaning": "곧은, 생머리의",
                "hint": "s_______ hair",
                "answer": "straight",
                "options": [
                    "straight",
                    "curly",
                    "glasses",
                    "wearing"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [안경]",
                "word": "glasses",
                "meaning": "안경",
                "hint": "wear g______",
                "answer": "glasses",
                "options": [
                    "glasses",
                    "curly",
                    "straight",
                    "wearing"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [입고 있는, 착용 중인]",
                "word": "wearing",
                "meaning": "입고 있는, 착용 중인",
                "hint": "She is w______ a coat.",
                "answer": "wearing",
                "options": [
                    "wearing",
                    "curly",
                    "glasses",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [짧은, 키가 작은]",
                "word": "short",
                "meaning": "짧은, 키가 작은",
                "hint": "s____ hair",
                "answer": "short",
                "options": [
                    "short",
                    "curly",
                    "glasses",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [키가 큰]",
                "word": "tall",
                "meaning": "키가 큰",
                "hint": "t___ boy",
                "answer": "tall",
                "options": [
                    "tall",
                    "curly",
                    "glasses",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [신발]",
                "word": "shoes",
                "meaning": "신발",
                "hint": "wear red s____",
                "answer": "shoes",
                "options": [
                    "shoes",
                    "curly",
                    "glasses",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [재킷, 외투]",
                "word": "jacket",
                "meaning": "재킷, 외투",
                "hint": "warm j_____",
                "answer": "jacket",
                "options": [
                    "jacket",
                    "curly",
                    "glasses",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [바지]",
                "word": "pants",
                "meaning": "바지",
                "hint": "blue p____",
                "answer": "pants",
                "options": [
                    "pants",
                    "curly",
                    "glasses",
                    "straight"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [예쁜]",
                "word": "pretty",
                "meaning": "예쁜",
                "hint": "p_____ smile",
                "answer": "pretty",
                "options": [
                    "pretty",
                    "curly",
                    "glasses",
                    "straight"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    },
    "6G_L07": {
        "id": "6G_L07",
        "grade": 6,
        "lesson": 7,
        "name": "6학년 7단원",
        "title": "Can you come to my party?",
        "shortDesc": "초대와 수락/거절 묻고 답하기 (10문항)",
        "grammarPoint": "Can you come to [행사]? - Sure, I can. / Sorry, I can't. I have [사유].",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [파티]",
                "word": "party",
                "meaning": "파티",
                "hint": "birthday p____",
                "answer": "party",
                "options": [
                    "party",
                    "concert",
                    "festival",
                    "sorry"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [축제]",
                "word": "festival",
                "meaning": "축제",
                "hint": "movie f_______",
                "answer": "festival",
                "options": [
                    "festival",
                    "concert",
                    "party",
                    "sorry"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [음악회, 콘서트]",
                "word": "concert",
                "meaning": "음악회, 콘서트",
                "hint": "music c______",
                "answer": "concert",
                "options": [
                    "concert",
                    "festival",
                    "party",
                    "sorry"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [미안한]",
                "word": "sorry",
                "meaning": "미안한",
                "hint": "S____, I can't.",
                "answer": "sorry",
                "options": [
                    "sorry",
                    "concert",
                    "festival",
                    "party"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [물론이지]",
                "word": "sure",
                "meaning": "물론이지",
                "hint": "S___, I can.",
                "answer": "sure",
                "options": [
                    "sure",
                    "concert",
                    "festival",
                    "party"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [가져오다]",
                "word": "bring",
                "meaning": "가져오다",
                "hint": "b____ a gift",
                "answer": "bring",
                "options": [
                    "bring",
                    "concert",
                    "festival",
                    "party"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [방문하다]",
                "word": "visit",
                "meaning": "방문하다",
                "hint": "v____ my grandparents",
                "answer": "visit",
                "options": [
                    "visit",
                    "concert",
                    "festival",
                    "party"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [수업, 레슨]",
                "word": "lesson",
                "meaning": "수업, 레슨",
                "hint": "piano l_____",
                "answer": "lesson",
                "options": [
                    "lesson",
                    "concert",
                    "festival",
                    "party"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [오후]",
                "word": "afternoon",
                "meaning": "오후",
                "hint": "in the a________",
                "answer": "afternoon",
                "options": [
                    "afternoon",
                    "concert",
                    "festival",
                    "party"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [전시회]",
                "word": "exhibition",
                "meaning": "전시회",
                "hint": "art e_________",
                "answer": "exhibition",
                "options": [
                    "exhibition",
                    "concert",
                    "festival",
                    "party"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    },
    "6G_L08": {
        "id": "6G_L08",
        "grade": 6,
        "lesson": 8,
        "name": "6학년 8단원",
        "title": "I'm stronger than you.",
        "shortDesc": "비교급 표현 묻고 답하기 (10문항)",
        "grammarPoint": "[A] is [비교급] than [B].",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [더 키가 큰 (tall의 비교급)]",
                "word": "taller",
                "meaning": "더 키가 큰 (tall의 비교급)",
                "hint": "tall -> t_____",
                "answer": "taller",
                "options": [
                    "taller",
                    "bigger",
                    "faster",
                    "heavier"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [더 빠른 (fast의 비교급)]",
                "word": "faster",
                "meaning": "더 빠른 (fast의 비교급)",
                "hint": "fast -> f_____",
                "answer": "faster",
                "options": [
                    "faster",
                    "bigger",
                    "heavier",
                    "taller"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [더 무거운 (heavy의 비교급)]",
                "word": "heavier",
                "meaning": "더 무거운 (heavy의 비교급)",
                "hint": "heavy -> h______",
                "answer": "heavier",
                "options": [
                    "heavier",
                    "bigger",
                    "faster",
                    "taller"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [더 큰 (big의 비교급)]",
                "word": "bigger",
                "meaning": "더 큰 (big의 비교급)",
                "hint": "big -> b_____",
                "answer": "bigger",
                "options": [
                    "bigger",
                    "faster",
                    "heavier",
                    "taller"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [더 힘센 (strong의 비교급)]",
                "word": "stronger",
                "meaning": "더 힘센 (strong의 비교급)",
                "hint": "strong -> s_______",
                "answer": "stronger",
                "options": [
                    "stronger",
                    "faster",
                    "heavier",
                    "taller"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [더 더운 (hot의 비교급)]",
                "word": "hotter",
                "meaning": "더 더운 (hot의 비교급)",
                "hint": "hot -> h_____",
                "answer": "hotter",
                "options": [
                    "hotter",
                    "faster",
                    "heavier",
                    "taller"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [더 두꺼운 (thick의 비교급)]",
                "word": "thicker",
                "meaning": "더 두꺼운 (thick의 비교급)",
                "hint": "thick -> t______",
                "answer": "thicker",
                "options": [
                    "thicker",
                    "faster",
                    "heavier",
                    "taller"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [더 좋은 (good의 비교급)]",
                "word": "better",
                "meaning": "더 좋은 (good의 비교급)",
                "hint": "good -> b_____",
                "answer": "better",
                "options": [
                    "better",
                    "faster",
                    "heavier",
                    "taller"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [더 나쁜 (bad의 비교급)]",
                "word": "worse",
                "meaning": "더 나쁜 (bad의 비교급)",
                "hint": "bad -> w____",
                "answer": "worse",
                "options": [
                    "worse",
                    "faster",
                    "heavier",
                    "taller"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [비싼]",
                "word": "expensive",
                "meaning": "비싼",
                "hint": "more e________",
                "answer": "expensive",
                "options": [
                    "expensive",
                    "faster",
                    "heavier",
                    "taller"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    },
    "6G_L09": {
        "id": "6G_L09",
        "grade": 6,
        "lesson": 9,
        "name": "6학년 9단원",
        "title": "What will you do this weekend?",
        "shortDesc": "미래 계획과 예정 묻고 답하기 (10문항)",
        "grammarPoint": "What are you going to do [미래]? - I'm going to [동사원형].",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [주말]",
                "word": "weekend",
                "meaning": "주말",
                "hint": "this w______",
                "answer": "weekend",
                "options": [
                    "weekend",
                    "tomorrow",
                    "travel",
                    "vacation"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [내일]",
                "word": "tomorrow",
                "meaning": "내일",
                "hint": "see you t_______",
                "answer": "tomorrow",
                "options": [
                    "tomorrow",
                    "travel",
                    "vacation",
                    "weekend"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [방학, 휴가]",
                "word": "vacation",
                "meaning": "방학, 휴가",
                "hint": "summer v_______",
                "answer": "vacation",
                "options": [
                    "vacation",
                    "tomorrow",
                    "travel",
                    "weekend"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [여행하다]",
                "word": "travel",
                "meaning": "여행하다",
                "hint": "t_____ to Jeju-do",
                "answer": "travel",
                "options": [
                    "travel",
                    "tomorrow",
                    "vacation",
                    "weekend"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [방문하다]",
                "word": "visit",
                "meaning": "방문하다",
                "hint": "v____ grandparents",
                "answer": "visit",
                "options": [
                    "visit",
                    "tomorrow",
                    "vacation",
                    "weekend"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [자라다, 재배하다]",
                "word": "grow",
                "meaning": "자라다, 재배하다",
                "hint": "g___ apple trees",
                "answer": "grow",
                "options": [
                    "grow",
                    "tomorrow",
                    "vacation",
                    "weekend"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [휴식, 쉬다]",
                "word": "rest",
                "meaning": "휴식, 쉬다",
                "hint": "take a r___",
                "answer": "rest",
                "options": [
                    "rest",
                    "tomorrow",
                    "vacation",
                    "weekend"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [시장]",
                "word": "market",
                "meaning": "시장",
                "hint": "buy fruit at m_____",
                "answer": "market",
                "options": [
                    "market",
                    "tomorrow",
                    "vacation",
                    "weekend"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [화창한]",
                "word": "sunny",
                "meaning": "화창한",
                "hint": "s____ weather",
                "answer": "sunny",
                "options": [
                    "sunny",
                    "tomorrow",
                    "vacation",
                    "weekend"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [딸기]",
                "word": "strawberry",
                "meaning": "딸기",
                "hint": "red sweet s________",
                "answer": "strawberry",
                "options": [
                    "strawberry",
                    "tomorrow",
                    "vacation",
                    "weekend"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    },
    "6G_L10": {
        "id": "6G_L10",
        "grade": 6,
        "lesson": 10,
        "name": "6학년 10단원",
        "title": "How often do you exercise?",
        "shortDesc": "생활 습관과 빈도수 묻고 답하기 (10문항)",
        "grammarPoint": "How often do you [동사]? - I [동사] [횟수] a [기간].",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [한 번]",
                "word": "once",
                "meaning": "한 번",
                "hint": "o___ a week",
                "answer": "once",
                "options": [
                    "once",
                    "exercise",
                    "three times",
                    "twice"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [두 번]",
                "word": "twice",
                "meaning": "두 번",
                "hint": "t____ a month",
                "answer": "twice",
                "options": [
                    "twice",
                    "exercise",
                    "once",
                    "three times"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [세 번]",
                "word": "three times",
                "meaning": "세 번",
                "hint": "t____ t____ a day",
                "answer": "three times",
                "options": [
                    "three times",
                    "exercise",
                    "once",
                    "twice"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [운동하다, 운동]",
                "word": "exercise",
                "meaning": "운동하다, 운동",
                "hint": "e_______ every day",
                "answer": "exercise",
                "options": [
                    "exercise",
                    "once",
                    "three times",
                    "twice"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [채소, 야채]",
                "word": "vegetable",
                "meaning": "채소, 야채",
                "hint": "eat fresh v________",
                "answer": "vegetable",
                "options": [
                    "vegetable",
                    "once",
                    "three times",
                    "twice"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [솔질하다, 닦다]",
                "word": "brush",
                "meaning": "솔질하다, 닦다",
                "hint": "b____ your teeth",
                "answer": "brush",
                "options": [
                    "brush",
                    "once",
                    "three times",
                    "twice"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [치아, 이 (tooth의 복수)]",
                "word": "teeth",
                "meaning": "치아, 이 (tooth의 복수)",
                "hint": "brush your t____",
                "answer": "teeth",
                "options": [
                    "teeth",
                    "once",
                    "three times",
                    "twice"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [청소하다, 깨끗한]",
                "word": "clean",
                "meaning": "청소하다, 깨끗한",
                "hint": "c____ your room",
                "answer": "clean",
                "options": [
                    "clean",
                    "once",
                    "three times",
                    "twice"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [자주, 종종]",
                "word": "often",
                "meaning": "자주, 종종",
                "hint": "How o____ do you...?",
                "answer": "often",
                "options": [
                    "often",
                    "once",
                    "three times",
                    "twice"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [건강한]",
                "word": "healthy",
                "meaning": "건강한",
                "hint": "stay h______",
                "answer": "healthy",
                "options": [
                    "healthy",
                    "once",
                    "three times",
                    "twice"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    },
    "6G_L11": {
        "id": "6G_L11",
        "grade": 6,
        "lesson": 11,
        "name": "6학년 11단원",
        "title": "Do you know anything about jegichagi?",
        "shortDesc": "전통문화와 사물 소개 묻고 답하기 (10문항)",
        "grammarPoint": "Do you know anything about [사물]? - Yes, I do. It's [설명].",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [전통적인]",
                "word": "traditional",
                "meaning": "전통적인",
                "hint": "t__________ Korean game",
                "answer": "traditional",
                "options": [
                    "traditional",
                    "clothes",
                    "culture",
                    "drum"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [문화]",
                "word": "culture",
                "meaning": "문화",
                "hint": "world c______",
                "answer": "culture",
                "options": [
                    "culture",
                    "clothes",
                    "drum",
                    "traditional"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [북, 드럼]",
                "word": "drum",
                "meaning": "북, 드럼",
                "hint": "African d___",
                "answer": "drum",
                "options": [
                    "drum",
                    "clothes",
                    "culture",
                    "traditional"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [옷, 의복]",
                "word": "clothes",
                "meaning": "옷, 의복",
                "hint": "traditional c______",
                "answer": "clothes",
                "options": [
                    "clothes",
                    "culture",
                    "drum",
                    "traditional"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [발로 차다]",
                "word": "kick",
                "meaning": "발로 차다",
                "hint": "k___ a ball",
                "answer": "kick",
                "options": [
                    "kick",
                    "culture",
                    "drum",
                    "traditional"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [던지다]",
                "word": "throw",
                "meaning": "던지다",
                "hint": "t____ an arrow",
                "answer": "throw",
                "options": [
                    "throw",
                    "culture",
                    "drum",
                    "traditional"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [화살]",
                "word": "arrow",
                "meaning": "화살",
                "hint": "throw an a____ into a pot",
                "answer": "arrow",
                "options": [
                    "arrow",
                    "culture",
                    "drum",
                    "traditional"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [항아리, 솥]",
                "word": "pot",
                "meaning": "항아리, 솥",
                "hint": "throw into a p__",
                "answer": "pot",
                "options": [
                    "pot",
                    "culture",
                    "drum",
                    "traditional"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [무술]",
                "word": "martial art",
                "meaning": "무술",
                "hint": "Korean m______ a__",
                "answer": "martial art",
                "options": [
                    "martial art",
                    "culture",
                    "drum",
                    "traditional"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [함께, 다 같이]",
                "word": "together",
                "meaning": "함께, 다 같이",
                "hint": "let's play t_______",
                "answer": "together",
                "options": [
                    "together",
                    "culture",
                    "drum",
                    "traditional"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    },
    "6G_L12": {
        "id": "6G_L12",
        "grade": 6,
        "lesson": 12,
        "name": "6학년 12단원",
        "title": "Did you paint the wall?",
        "shortDesc": "과거 활동 묻고 답하기 (10문항)",
        "grammarPoint": "Did you [동사원형] ~? - Yes, I did. / No, I didn't. [과거문장]",
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
                "question": "다음 뜻에 알맞은 영어 단어는? [칠하다, 그리다]",
                "word": "",
                "meaning": "칠하다, 그리다",
                "hint": "paint -> p______",
                "answer": "",
                "options": [
                    "",
                    "friend",
                    "happy",
                    "school"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [청소하다]",
                "word": "",
                "meaning": "청소하다",
                "hint": "clean -> c______",
                "answer": "",
                "options": [
                    "",
                    "friend",
                    "happy",
                    "school"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [보다]",
                "word": "",
                "meaning": "보다",
                "hint": "watch -> w______",
                "answer": "",
                "options": [
                    "",
                    "friend",
                    "happy",
                    "school"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [방문하다]",
                "word": "",
                "meaning": "방문하다",
                "hint": "visit -> v______",
                "answer": "",
                "options": [
                    "",
                    "friend",
                    "happy",
                    "school"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [읽다 (철자 동일, 발음: 레드)]",
                "word": "",
                "meaning": "읽다 (철자 동일, 발음: 레드)",
                "hint": "read -> r___",
                "answer": "",
                "options": [
                    "",
                    "friend",
                    "happy",
                    "school"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [쓰다]",
                "word": "",
                "meaning": "쓰다",
                "hint": "write -> w____",
                "answer": "",
                "options": [
                    "",
                    "friend",
                    "happy",
                    "school"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [만들다]",
                "word": "",
                "meaning": "만들다",
                "hint": "make -> m___",
                "answer": "",
                "options": [
                    "",
                    "friend",
                    "happy",
                    "school"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [이기다]",
                "word": "",
                "meaning": "이기다",
                "hint": "win -> w__",
                "answer": "",
                "options": [
                    "",
                    "friend",
                    "happy",
                    "school"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [가져가다, 찍다]",
                "word": "",
                "meaning": "가져가다, 찍다",
                "hint": "take -> t___",
                "answer": "",
                "options": [
                    "",
                    "friend",
                    "happy",
                    "school"
                ]
            },
            {
                "question": "다음 뜻에 알맞은 영어 단어는? [놀다, 경기하다]",
                "word": "",
                "meaning": "놀다, 경기하다",
                "hint": "play -> p_____",
                "answer": "",
                "options": [
                    "",
                    "friend",
                    "happy",
                    "school"
                ]
            }
        ],
        "publisher": "천재 (함순애)"
    }
};

    // 기본 선택 단원 키
    let currentUnitId = "6G_L04";

    const MafiaQuestions = {
        units: UNITS_DATA,

        /**
         * 현재 선택된 단원 ID 반환
         */
        getCurrentUnitId: function() {
            return currentUnitId;
        },

        /**
         * 현재 학습 단원 변경
         * @param {string} unitId - 변경할 단원 ID (예: '3G_L01', '4G_L03', '5G_L05', '6G_L04')
         */
        setCurrentUnit: function(unitId) {
            if (UNITS_DATA[unitId]) {
                currentUnitId = unitId;
                return true;
            }
            console.warn(`[MafiaQuestions] Unit not found: ${unitId}`);
            return false;
        },

        /**
         * 현재 활성화된 단원의 전체 데이터 객체 반환
         */
        getCurrentUnit: function() {
            return UNITS_DATA[currentUnitId] || UNITS_DATA["6G_L04"];
        },

        /**
         * 지원하는 모든 단원 메타 정보 목록 반환 (단원 선택 UI용)
         */
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

        /**
         * 특정 학년의 단원 목록 반환
         */
        getUnitsByGrade: function(grade) {
            if (!grade || grade === 'all' || grade === 'ALL') return this.getUnitsList();
            return this.getUnitsList().filter(u => Number(u.grade) === Number(grade));
        },

        /**
         * 학습지용 10개 질문-대답 리스트 반환 (역할별)
         */
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
