# 🎭 English Mafia — Word Detectives

A real-time multiplayer English learning game built for elementary school students.  
Each student joins from their own device (tablet/PC) and plays a role — all in English.

---

## 🚀 Quick Setup (15 minutes)

### Step 1 — Fork & clone this repo

```bash
git clone https://github.com/YOUR_USERNAME/mafia-english.git
cd mafia-english
```

### Step 2 — Create a Firebase project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it (e.g. `mafia-english`)
3. Disable Google Analytics (not needed) → **Create project**

### Step 3 — Enable Realtime Database

1. In Firebase Console → **Build** → **Realtime Database**
2. Click **Create Database**
3. Choose **Start in test mode** → **Enable**
4. Copy the database URL (looks like `https://mafia-english-xxxxx-default-rtdb.firebaseio.com`)

### Step 4 — Get your Firebase config

1. Firebase Console → ⚙️ Project Settings → **Your apps**
2. Click **</>** (Web app) → Register app
3. Copy the `firebaseConfig` object

### Step 5 — Update `js/firebase-config.js`

Replace the placeholder values with your real config:

```js
const firebaseConfig = {
  apiKey:            "AIzaSy...",
  authDomain:        "mafia-english-xxxxx.firebaseapp.com",
  databaseURL:       "https://mafia-english-xxxxx-default-rtdb.firebaseio.com",
  projectId:         "mafia-english-xxxxx",
  storageBucket:     "mafia-english-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abcdef..."
};
```

### Step 6 — Deploy to GitHub Pages

1. Push your repo to GitHub
2. GitHub → Settings → **Pages** → Source: **GitHub Actions**
3. The workflow (`.github/workflows/deploy.yml`) auto-deploys on every push to `main`
4. Your game URL: `https://YOUR_USERNAME.github.io/mafia-english/`

---

## 🎮 How to Play

### Teacher (Game Master)
1. Open `https://YOUR_USERNAME.github.io/mafia-english/`
2. Enter your name → **Create Room**
3. Share the **6-letter room code** with students (write it on the board)
4. Wait for students to join → set role counts → **Assign Roles & Start**
5. Control game phases from the Control Panel

### Students
1. Open the same URL on their device
2. Enter English name + room code → **Enter Room**
3. Tap the role card to reveal their secret role
4. Play through day/vote/night phases in English!

---

## 🗂 File Structure

```
mafia-english/
├── index.html              ← Lobby (join/create)
├── pages/
│   ├── host.html           ← Teacher control panel
│   └── player.html         ← Student game screen
├── css/
│   └── style.css           ← All styles
├── js/
│   ├── firebase-config.js  ← 🔧 EDIT THIS with your config
│   ├── game-data.js        ← Roles, quizzes, phrases
│   ├── lobby.js            ← Join/create logic
│   ├── host.js             ← Game master logic
│   └── player.js           ← Student game logic
├── database.rules.json     ← Firebase security rules
└── .github/workflows/
    └── deploy.yml          ← Auto-deploy to GitHub Pages
```

---

## 🎓 English Learning Features

| Feature | Description |
|---|---|
| **Role cards** | Each role comes with a mission and key vocabulary in English |
| **Phrase buttons** | Pre-made English sentences for discussion (role-specific) |
| **Quiz gate** | Students must answer an English vocabulary quiz to unlock their vote |
| **Night vocabulary** | Each night action uses English sentence frames |
| **Vocab recap** | Result screen shows all vocabulary words used that game |

### Roles & Vocabulary

| Role | Key Words |
|---|---|
| 🔴 Mafia | deny, accuse, alibi, suspect, innocent |
| 🔵 Police | evidence, clue, arrest, confirm, investigate |
| 🟢 Doctor | protect, heal, rescue, save, safe |
| ⚪ Villager | I think, maybe, I agree, I disagree, because |

---

## 🔧 Customization

### Add your own quiz questions
Edit `js/game-data.js` → `QUIZ_BANK` array:

```js
{
  question: 'What does "evidence" mean?',
  options: ["Proof of something", "A type of food", "A question", "An answer"],
  answer: 0  // index of correct option
}
```

### Add more phrases
Edit `js/game-data.js` → `ROLES.villager.phrases` (or any role):

```js
{ text: "I believe ___ is innocent.", sub: "믿음 표현" }
```

### Change discussion timer
Edit `js/host.js` → `let timerSeconds = 180;` (default 3 minutes)

---

## 📱 Recommended Setup

- **Teacher**: laptop/PC connected to classroom display
- **Students**: school tablets or personal phones
- **Network**: school WiFi (same network not required — just internet)
- **Browser**: Chrome or Safari recommended

---

## 🛡 Firebase Security

For classroom use, the default `database.rules.json` (test mode) is fine.  
For public deployment, update rules in Firebase Console → Realtime Database → Rules.

---

Built for 6th Grade English · Hwaseong Elementary School
