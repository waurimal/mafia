// =============================================
//  game-data.js — Role definitions, phrases, quizzes
// =============================================

export const ROLES = {
  mafia: {
    id: "mafia",
    name: "Mafia",
    icon: "🔴",
    color: "mafia",
    mission: "Convince everyone you're innocent. Avoid suspicion.",
    vocab: "deny · accuse · alibi · suspect · innocent",
    phrases: [
      { text: "I didn't do anything.", sub: "주장하기" },
      { text: "I suspect ___.", sub: "의심 표현" },
      { text: "I have an alibi.", sub: "알리바이" },
      { text: "That's not true!", sub: "부정하기" },
      { text: "Why do you accuse me?", sub: "반박하기" },
      { text: "I agree with ___.", sub: "동의하기" },
    ]
  },
  police: {
    id: "police",
    name: "Police",
    icon: "🔵",
    color: "police",
    mission: "Investigate and reveal the Mafia's identity.",
    vocab: "evidence · clue · arrest · confirm · investigate",
    phrases: [
      { text: "I have evidence.", sub: "증거 제시" },
      { text: "I investigated ___ last night.", sub: "수사 결과" },
      { text: "I think ___ is suspicious.", sub: "의심 표현" },
      { text: "Let's vote for ___.", sub: "투표 제안" },
      { text: "I confirmed the result.", sub: "확인" },
      { text: "Trust me, I'm the Police.", sub: "역할 공개" },
    ]
  },
  doctor: {
    id: "doctor",
    name: "Doctor",
    icon: "🟢",
    color: "doctor",
    mission: "Find clues and save an innocent villager each night.",
    vocab: "protect · heal · rescue · save · safe",
    phrases: [
      { text: "I protected someone last night.", sub: "보호 활동" },
      { text: "I think ___ is innocent.", sub: "무고 주장" },
      { text: "We should save ___.", sub: "보호 제안" },
      { text: "I disagree with that.", sub: "반대 의견" },
      { text: "Let's think carefully.", sub: "신중 요청" },
      { text: "I'm not sure about ___.", sub: "불확실 표현" },
    ]
  },
  villager: {
    id: "villager",
    name: "Villager",
    icon: "⚪",
    color: "villager",
    mission: "Discuss carefully and vote out the Mafia together.",
    vocab: "I think · maybe · I agree · I disagree · because",
    phrases: [
      { text: "I think ___ is the Mafia.", sub: "의심 표현" },
      { text: "Why did you do that?", sub: "질문하기" },
      { text: "I agree with ___.", sub: "동의하기" },
      { text: "I disagree because…", sub: "반대 이유" },
      { text: "Maybe it's ___.", sub: "추측하기" },
      { text: "That's suspicious!", sub: "의심 강조" },
    ]
  }
};

export const QUIZ_BANK = [
  {
    question: 'Fill in the blank: "I ___ he is the Mafia."',
    options: ["suspect", "enjoy", "forget", "sleep"],
    answer: 0
  },
  {
    question: 'What does "alibi" mean?',
    options: ["Proof you were elsewhere", "A type of food", "A secret weapon", "A friendly greeting"],
    answer: 0
  },
  {
    question: 'Choose the correct sentence:',
    options: ["I think she is suspicious.", "I thinks she suspicious.", "She suspicious I think.", "Is I think suspicious."],
    answer: 0
  },
  {
    question: 'What does "innocent" mean?',
    options: ["Not guilty", "Very tired", "Very happy", "A type of crime"],
    answer: 0
  },
  {
    question: 'Fill in the blank: "I have ___ that you are lying."',
    options: ["evidence", "dinner", "weather", "music"],
    answer: 0
  },
  {
    question: 'Which word means "to keep someone safe"?',
    options: ["protect", "accuse", "arrest", "deny"],
    answer: 0
  },
  {
    question: '"I disagree" means:',
    options: ["I have a different opinion", "I am very hungry", "I want to sleep", "I like this idea"],
    answer: 0
  },
  {
    question: 'Fill in the blank: "___ do you accuse me? I am innocent!"',
    options: ["Why", "What", "Who", "When"],
    answer: 0
  }
];

export function randomQuiz() {
  return QUIZ_BANK[Math.floor(Math.random() * QUIZ_BANK.length)];
}

// Generate a random 6-character room code
export function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

// Generate a player ID
export function generatePlayerId() {
  return Math.random().toString(36).slice(2, 10);
}
