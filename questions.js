/**
 * questions.js
 * 초등 6학년 영어 1단원 ~ 12단원 전체 마피아 게임 단원별 질문/대답 및 탈출 퀴즈 데이터셋
 * 
 * - YBM 초등 영어 6학년(최희철) 1~12단원 교육과정 100% 반영
 * - 단원별 10문항 (일반 시민용 표준 문항 10개, 마피아용 미세 차이 비밀 문항 10개)
 * - 각 단원별 10~12개 어휘/어법 감옥 탈출 퀴즈 풀 내장
 */

(function(window) {
    'use strict';

    const UNITS_DATA = {
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
                "word": "first",
                "meaning": "첫 번째의 (1st)",
                "hint": "1st (f____)"
            },
            {
                "word": "second",
                "meaning": "두 번째의 (2nd)",
                "hint": "2nd (s_____)"
            },
            {
                "word": "third",
                "meaning": "세 번째의 (3rd)",
                "hint": "3rd (t____)"
            },
            {
                "word": "fourth",
                "meaning": "네 번째의 (4th)",
                "hint": "4th (f_____)"
            },
            {
                "word": "fifth",
                "meaning": "다섯 번째의 (5th)",
                "hint": "5th (f____)"
            },
            {
                "word": "sixth",
                "meaning": "여섯 번째의 (6th)",
                "hint": "6th (s____)"
            },
            {
                "word": "guitar",
                "meaning": "기타 (악기)",
                "hint": "play the g_____"
            },
            {
                "word": "dance",
                "meaning": "춤추다, 댄스",
                "hint": "join the d____ club"
            },
            {
                "word": "grade",
                "meaning": "학년",
                "hint": "sixth g____"
            },
            {
                "word": "spell",
                "meaning": "철자를 말하다/쓰다",
                "hint": "How do you s____ your name?"
            }
        ]
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
                "word": "spring",
                "meaning": "봄",
                "hint": "s_____, summer, fall, winter"
            },
            {
                "word": "summer",
                "meaning": "여름",
                "hint": "hot season (s_____)"
            },
            {
                "word": "fall",
                "meaning": "가을",
                "hint": "colorful leaves in f___"
            },
            {
                "word": "winter",
                "meaning": "겨울",
                "hint": "cold season with snow (w_____)"
            },
            {
                "word": "season",
                "meaning": "계절",
                "hint": "four s_____s"
            },
            {
                "word": "flower",
                "meaning": "꽃",
                "hint": "beautiful f_____"
            },
            {
                "word": "snowman",
                "meaning": "눈사람",
                "hint": "make a s______"
            },
            {
                "word": "warm",
                "meaning": "따뜻한",
                "hint": "w___ spring weather"
            },
            {
                "word": "cold",
                "meaning": "추운, 차가운",
                "hint": "c___ winter wind"
            },
            {
                "word": "colorful",
                "meaning": "다채로운, 알록달록한",
                "hint": "c_______ leaves"
            }
        ]
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
                "word": "January",
                "meaning": "1월",
                "hint": "1st month (J______)"
            },
            {
                "word": "March",
                "meaning": "3월",
                "hint": "3rd month (M____)"
            },
            {
                "word": "April",
                "meaning": "4월",
                "hint": "4th month (A____)"
            },
            {
                "word": "May",
                "meaning": "5월",
                "hint": "5th month (M__)"
            },
            {
                "word": "July",
                "meaning": "7월",
                "hint": "7th month (J___)"
            },
            {
                "word": "August",
                "meaning": "8월",
                "hint": "8th month (A_____)"
            },
            {
                "word": "October",
                "meaning": "10월",
                "hint": "10th month (O______)"
            },
            {
                "word": "December",
                "meaning": "12월",
                "hint": "12th month (D_______)"
            },
            {
                "word": "birthday",
                "meaning": "생일",
                "hint": "b_______ party"
            },
            {
                "word": "concert",
                "meaning": "음악회, 콘서트",
                "hint": "music c______"
            }
        ]
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
                "word": "happy",
                "meaning": "행복한, 기쁜",
                "hint": "h____"
            },
            {
                "word": "sad",
                "meaning": "슬픈",
                "hint": "s__"
            },
            {
                "word": "angry",
                "meaning": "화난",
                "hint": "a____"
            },
            {
                "word": "tired",
                "meaning": "피곤한",
                "hint": "t____"
            },
            {
                "word": "worried",
                "meaning": "걱정스러운",
                "hint": "w______"
            },
            {
                "word": "excited",
                "meaning": "신난, 들뜬",
                "hint": "e______"
            },
            {
                "word": "proud",
                "meaning": "자랑스러운, 뿌듯한",
                "hint": "p____"
            },
            {
                "word": "scared",
                "meaning": "무서워하는",
                "hint": "s_____"
            },
            {
                "word": "surprised",
                "meaning": "놀란",
                "hint": "s________"
            },
            {
                "word": "bored",
                "meaning": "지루한, 심심한",
                "hint": "b____"
            }
        ]
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
                "word": "straight",
                "meaning": "똑바로, 곧장",
                "hint": "Go s_______"
            },
            {
                "word": "left",
                "meaning": "왼쪽, 왼쪽에",
                "hint": "turn l___"
            },
            {
                "word": "right",
                "meaning": "오른쪽, 오른쪽에",
                "hint": "turn r____"
            },
            {
                "word": "block",
                "meaning": "구획, 블록",
                "hint": "two b____s"
            },
            {
                "word": "across",
                "meaning": "맞은편에, 건너서",
                "hint": "a_____ from the park"
            },
            {
                "word": "behind",
                "meaning": "~뒤에",
                "hint": "b_____ the school"
            },
            {
                "word": "between",
                "meaning": "~사이에",
                "hint": "b______ A and B"
            },
            {
                "word": "library",
                "meaning": "도서관",
                "hint": "read books at l______"
            },
            {
                "word": "hospital",
                "meaning": "병원",
                "hint": "see a doctor at h_______"
            },
            {
                "word": "museum",
                "meaning": "박물관",
                "hint": "see art at m_____"
            }
        ]
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
                "word": "curly",
                "meaning": "곱슬곱슬한",
                "hint": "c____ hair"
            },
            {
                "word": "straight",
                "meaning": "곧은, 생머리의",
                "hint": "s_______ hair"
            },
            {
                "word": "glasses",
                "meaning": "안경",
                "hint": "wear g______"
            },
            {
                "word": "wearing",
                "meaning": "입고 있는, 착용 중인",
                "hint": "She is w______ a coat."
            },
            {
                "word": "short",
                "meaning": "짧은, 키가 작은",
                "hint": "s____ hair"
            },
            {
                "word": "tall",
                "meaning": "키가 큰",
                "hint": "t___ boy"
            },
            {
                "word": "shoes",
                "meaning": "신발",
                "hint": "wear red s____"
            },
            {
                "word": "jacket",
                "meaning": "재킷, 외투",
                "hint": "warm j_____"
            },
            {
                "word": "pants",
                "meaning": "바지",
                "hint": "blue p____"
            },
            {
                "word": "pretty",
                "meaning": "예쁜",
                "hint": "p_____ smile"
            }
        ]
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
                "word": "party",
                "meaning": "파티",
                "hint": "birthday p____"
            },
            {
                "word": "festival",
                "meaning": "축제",
                "hint": "movie f_______"
            },
            {
                "word": "concert",
                "meaning": "음악회, 콘서트",
                "hint": "music c______"
            },
            {
                "word": "sorry",
                "meaning": "미안한",
                "hint": "S____, I can't."
            },
            {
                "word": "sure",
                "meaning": "물론이지",
                "hint": "S___, I can."
            },
            {
                "word": "bring",
                "meaning": "가져오다",
                "hint": "b____ a gift"
            },
            {
                "word": "visit",
                "meaning": "방문하다",
                "hint": "v____ my grandparents"
            },
            {
                "word": "lesson",
                "meaning": "수업, 레슨",
                "hint": "piano l_____"
            },
            {
                "word": "afternoon",
                "meaning": "오후",
                "hint": "in the a________"
            },
            {
                "word": "exhibition",
                "meaning": "전시회",
                "hint": "art e_________"
            }
        ]
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
                "word": "taller",
                "meaning": "더 키가 큰 (tall의 비교급)",
                "hint": "tall -> t_____"
            },
            {
                "word": "faster",
                "meaning": "더 빠른 (fast의 비교급)",
                "hint": "fast -> f_____"
            },
            {
                "word": "heavier",
                "meaning": "더 무거운 (heavy의 비교급)",
                "hint": "heavy -> h______"
            },
            {
                "word": "bigger",
                "meaning": "더 큰 (big의 비교급)",
                "hint": "big -> b_____"
            },
            {
                "word": "stronger",
                "meaning": "더 힘센 (strong의 비교급)",
                "hint": "strong -> s_______"
            },
            {
                "word": "hotter",
                "meaning": "더 더운 (hot의 비교급)",
                "hint": "hot -> h_____"
            },
            {
                "word": "thicker",
                "meaning": "더 두꺼운 (thick의 비교급)",
                "hint": "thick -> t______"
            },
            {
                "word": "better",
                "meaning": "더 좋은 (good의 비교급)",
                "hint": "good -> b_____"
            },
            {
                "word": "worse",
                "meaning": "더 나쁜 (bad의 비교급)",
                "hint": "bad -> w____"
            },
            {
                "word": "expensive",
                "meaning": "비싼",
                "hint": "more e________"
            }
        ]
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
                "word": "weekend",
                "meaning": "주말",
                "hint": "this w______"
            },
            {
                "word": "tomorrow",
                "meaning": "내일",
                "hint": "see you t_______"
            },
            {
                "word": "vacation",
                "meaning": "방학, 휴가",
                "hint": "summer v_______"
            },
            {
                "word": "travel",
                "meaning": "여행하다",
                "hint": "t_____ to Jeju-do"
            },
            {
                "word": "visit",
                "meaning": "방문하다",
                "hint": "v____ grandparents"
            },
            {
                "word": "grow",
                "meaning": "자라다, 재배하다",
                "hint": "g___ apple trees"
            },
            {
                "word": "rest",
                "meaning": "휴식, 쉬다",
                "hint": "take a r___"
            },
            {
                "word": "market",
                "meaning": "시장",
                "hint": "buy fruit at m_____"
            },
            {
                "word": "sunny",
                "meaning": "화창한",
                "hint": "s____ weather"
            },
            {
                "word": "strawberry",
                "meaning": "딸기",
                "hint": "red sweet s________"
            }
        ]
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
                "word": "once",
                "meaning": "한 번",
                "hint": "o___ a week"
            },
            {
                "word": "twice",
                "meaning": "두 번",
                "hint": "t____ a month"
            },
            {
                "word": "three times",
                "meaning": "세 번",
                "hint": "t____ t____ a day"
            },
            {
                "word": "exercise",
                "meaning": "운동하다, 운동",
                "hint": "e_______ every day"
            },
            {
                "word": "vegetable",
                "meaning": "채소, 야채",
                "hint": "eat fresh v________"
            },
            {
                "word": "brush",
                "meaning": "솔질하다, 닦다",
                "hint": "b____ your teeth"
            },
            {
                "word": "teeth",
                "meaning": "치아, 이 (tooth의 복수)",
                "hint": "brush your t____"
            },
            {
                "word": "clean",
                "meaning": "청소하다, 깨끗한",
                "hint": "c____ your room"
            },
            {
                "word": "often",
                "meaning": "자주, 종종",
                "hint": "How o____ do you...?"
            },
            {
                "word": "healthy",
                "meaning": "건강한",
                "hint": "stay h______"
            }
        ]
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
                "word": "traditional",
                "meaning": "전통적인",
                "hint": "t__________ Korean game"
            },
            {
                "word": "culture",
                "meaning": "문화",
                "hint": "world c______"
            },
            {
                "word": "drum",
                "meaning": "북, 드럼",
                "hint": "African d___"
            },
            {
                "word": "clothes",
                "meaning": "옷, 의복",
                "hint": "traditional c______"
            },
            {
                "word": "kick",
                "meaning": "발로 차다",
                "hint": "k___ a ball"
            },
            {
                "word": "throw",
                "meaning": "던지다",
                "hint": "t____ an arrow"
            },
            {
                "word": "arrow",
                "meaning": "화살",
                "hint": "throw an a____ into a pot"
            },
            {
                "word": "pot",
                "meaning": "항아리, 솥",
                "hint": "throw into a p__"
            },
            {
                "word": "martial art",
                "meaning": "무술",
                "hint": "Korean m______ a__"
            },
            {
                "word": "together",
                "meaning": "함께, 다 같이",
                "hint": "let's play t_______"
            }
        ]
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
                "verb": "paint",
                "past": "painted",
                "meaning": "칠하다, 그리다",
                "hint": "paint -> p______"
            },
            {
                "verb": "clean",
                "past": "cleaned",
                "meaning": "청소하다",
                "hint": "clean -> c______"
            },
            {
                "verb": "watch",
                "past": "watched",
                "meaning": "보다",
                "hint": "watch -> w______"
            },
            {
                "verb": "visit",
                "past": "visited",
                "meaning": "방문하다",
                "hint": "visit -> v______"
            },
            {
                "verb": "read",
                "past": "read",
                "meaning": "읽다 (철자 동일, 발음: 레드)",
                "hint": "read -> r___"
            },
            {
                "verb": "write",
                "past": "wrote",
                "meaning": "쓰다",
                "hint": "write -> w____"
            },
            {
                "verb": "make",
                "past": "made",
                "meaning": "만들다",
                "hint": "make -> m___"
            },
            {
                "verb": "win",
                "past": "won",
                "meaning": "이기다",
                "hint": "win -> w__"
            },
            {
                "verb": "take",
                "past": "took",
                "meaning": "가져가다, 찍다",
                "hint": "take -> t___"
            },
            {
                "verb": "play",
                "past": "played",
                "meaning": "놀다, 경기하다",
                "hint": "play -> p_____"
            }
        ]
    }
};

    let currentUnitId = '6G_L04'; // 기본 선택 단원 (6학년 4단원)

    const MafiaQuestions = {
        /**
         * 현재 선택된 단원 ID 조회
         */
        getCurrentUnitId: function() {
            return currentUnitId;
        },

        /**
         * 단원 변경
         * @param {string} unitId - '6G_L01' ~ '6G_L12'
         */
        setCurrentUnit: function(unitId) {
            if (UNITS_DATA[unitId]) {
                currentUnitId = unitId;
                return true;
            }
            console.warn(`[MafiaQuestions] Unknown unitId: ${unitId}`);
            return false;
        },

        /**
         * 현재 활성화된 단원 데이터 반환
         */
        getCurrentUnit: function() {
            return UNITS_DATA[currentUnitId] || UNITS_DATA['6G_L04'];
        },

        /**
         * 지원하는 모든 단원 메타 정보 목록 반환 (단원 선택 UI용)
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
            if (typeof item === 'string') return item;
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
            if (typeof item === 'string') return item;
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
