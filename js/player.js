// =============================================
//  player.js — Student game experience
// =============================================

import { db } from "./firebase-config.js";
import { ref, onValue, update, get, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { ROLES } from "./game-data.js";

// ── Session check ────────────────────────────
const roomCode  = sessionStorage.getItem("mafia_room_code");
const playerId  = sessionStorage.getItem("mafia_player_id");
const playerName = sessionStorage.getItem("mafia_player_name");

if (!roomCode || !playerId) { window.location.href = "../index.html"; }

const roomRef = ref(db, `rooms/${roomCode}`);

// ── UI ───────────────────────────────────────
const $ = id => document.getElementById(id);
let myRole = "";
let isAlive = true;
let quizPassed = false;
let hasVoted = false;
let hasNightActed = false;
let currentPlayers = {};
let cardFlipped = false;

// Header
$("player-name-display").textContent = playerName;
$("player-avatar").textContent = playerName.slice(0,2).toUpperCase();
$("waiting-room-code").textContent = roomCode;

// ── Panel switcher ────────────────────────────
function showPanel(id) {
  ["waiting","role","day","vote","night","result"].forEach(p => {
    $(`panel-${p}`).classList.add("hidden");
  });
  $(`panel-${id}`).classList.remove("hidden");
}

// ── Main listener ─────────────────────────────
onValue(roomRef, snap => {
  if (!snap.exists()) return;
  const data = snap.val();
  const phase = data.phase || "lobby";
  const me = data.players?.[playerId];
  if (!me) return;

  currentPlayers = data.players || {};
  myRole  = me.role || "";
  isAlive = me.isAlive !== false;
  quizPassed = me.quizPassed === true;
  hasVoted   = me.hasVoted === true;

  // Update header
  const phaseBadge = $("player-phase-badge");
  phaseBadge.textContent = phase.toUpperCase();
  phaseBadge.className = `phase-badge sm ${phase}`;

  const aliveBadge = $("alive-badge");
  aliveBadge.textContent = isAlive ? "ALIVE" : "ELIMINATED";
  aliveBadge.className = `alive-badge ${isAlive ? "" : "dead"}`;

  // Render players-in-lobby preview
  if (phase === "lobby") {
    const chips = Object.values(currentPlayers).map(p =>
      `<div class="preview-chip">${p.name}</div>`
    ).join("");
    $("players-preview").innerHTML = chips;
    showPanel("waiting");
    return;
  }

  // Role card on first reveal
  if (phase === "day" && myRole && !cardFlipped) {
    renderRoleCard(myRole);
    showPanel("role");
    return;
  }

  switch (phase) {
    case "day":   renderDay(data); break;
    case "vote":  renderVote(data); break;
    case "night": renderNight(data); break;
    case "result": renderResult(data); break;
  }
});

// ── ROLE CARD ─────────────────────────────────
function renderRoleCard(role) {
  const r = ROLES[role] || ROLES.villager;
  $("role-icon").textContent    = r.icon;
  $("role-name").textContent    = r.name;
  $("role-mission").textContent = r.mission;
  $("role-vocab").textContent   = r.vocab;

  const back = $("role-card-back");
  back.className = `role-card__back role--${role}`;

  $("role-card").addEventListener("click", () => {
    if (!cardFlipped) {
      $("role-card-inner").classList.add("flipped");
      cardFlipped = true;
      // After reveal, show "go to day" after 3s
      setTimeout(() => {
        renderDay({ phase: "day", players: currentPlayers });
        showPanel("day");
      }, 3000);
    }
  }, { once: true });
}

// ── DAY PHASE ─────────────────────────────────
function renderDay(data) {
  showPanel("day");
  const r = ROLES[myRole] || ROLES.villager;

  // Phrase buttons
  const grid = $("phrase-grid");
  grid.innerHTML = r.phrases.map(p =>
    `<button class="phrase-btn" data-text="${p.text}">
      ${p.text}
      <span>${p.sub}</span>
    </button>`
  ).join("");

  grid.querySelectorAll(".phrase-btn").forEach(btn => {
    btn.addEventListener("click", () => sendChat(btn.dataset.text));
  });

  // Render chat
  renderChat(data.chat || {});
}

function sendChat(text) {
  const full = text.replace("___", "someone");
  push(ref(db, `rooms/${roomCode}/chat`), {
    sender: playerName,
    senderId: playerId,
    text: full,
    ts: Date.now()
  });
}

$("btn-say").addEventListener("click", () => {
  const txt = $("custom-phrase").value.trim();
  if (!txt) return;
  sendChat(txt);
  $("custom-phrase").value = "";
});

$("custom-phrase").addEventListener("keydown", e => {
  if (e.key === "Enter") $("btn-say").click();
});

let lastChatKeys = new Set();
function renderChat(chat) {
  const feed = $("chat-feed");
  const entries = Object.entries(chat).sort((a,b) => a[1].ts - b[1].ts);
  const newEntries = entries.filter(([k]) => !lastChatKeys.has(k));
  newEntries.forEach(([k, msg]) => {
    lastChatKeys.add(k);
    const div = document.createElement("div");
    div.className = `chat-msg ${msg.senderId === playerId ? "own" : ""}`;
    div.innerHTML = `<div class="chat-sender">${msg.sender}</div>${msg.text}`;
    feed.appendChild(div);
    feed.scrollTop = feed.scrollHeight;
  });
}

// ── VOTE PHASE ────────────────────────────────
function renderVote(data) {
  showPanel("vote");

  if (!isAlive) {
    $("quiz-section").classList.add("hidden");
    $("vote-section").classList.add("hidden");
    $("dead-section").classList.remove("hidden");
    return;
  }

  const quiz = data.quiz || {};

  // Render quiz
  if (!quizPassed) {
    $("quiz-lock-banner").classList.remove("hidden");
    $("quiz-card").classList.remove("hidden");
    $("vote-section").classList.add("hidden");
    renderQuiz(quiz);
  } else {
    $("quiz-section").classList.add("hidden");
    $("vote-section").classList.remove("hidden");
    renderVoteList(data);
  }
}

function renderQuiz(quiz) {
  if (!quiz.question) return;
  $("quiz-question-display").textContent = quiz.question;
  const opts = $("quiz-options-display");
  opts.innerHTML = (quiz.options || []).map((opt, i) =>
    `<button class="quiz-option" data-index="${i}">${opt}</button>`
  ).join("");

  opts.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", async () => {
      const chosen = parseInt(btn.dataset.index);
      const correct = chosen === quiz.answer;

      opts.querySelectorAll(".quiz-option").forEach(b => {
        b.disabled = true;
        if (parseInt(b.dataset.index) === quiz.answer) b.classList.add("correct");
        if (b === btn && !correct) b.classList.add("wrong");
      });

      const fb = $("quiz-feedback");
      if (correct) {
        fb.textContent = "✅ Correct! Your vote is unlocked.";
        fb.className = "quiz-feedback ok";
        await update(ref(db, `rooms/${roomCode}/players/${playerId}`), { quizPassed: true });
      } else {
        fb.textContent = "❌ Wrong! The correct answer was: " + (quiz.options?.[quiz.answer] || "");
        fb.className = "quiz-feedback bad";
        // Allow retry after 2s
        setTimeout(() => {
          opts.querySelectorAll(".quiz-option").forEach(b => {
            b.disabled = false;
            b.classList.remove("wrong","correct");
          });
          fb.textContent = "Try again!";
          fb.className = "quiz-feedback";
        }, 2000);
      }
    }, { once: false });
  });
}

function renderVoteList(data) {
  const list = $("vote-player-list");
  const alive = Object.entries(data.players || {})
    .filter(([id, p]) => p.isAlive && id !== playerId);

  if (hasVoted) {
    $("vote-msg").textContent = "Your vote has been cast. Waiting for others…";
    list.innerHTML = "";
    return;
  }

  list.innerHTML = alive.map(([id, p]) =>
    `<li><button class="vote-btn" data-id="${id}">
      <span class="vote-avatar">${p.name.slice(0,2).toUpperCase()}</span>
      ${p.name}
    </button></li>`
  ).join("");

  list.querySelectorAll(".vote-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const targetId = btn.dataset.id;
      await update(ref(db), {
        [`rooms/${roomCode}/votes/${playerId}`]: targetId,
        [`rooms/${roomCode}/players/${playerId}/hasVoted`]: true,
      });
      list.querySelectorAll(".vote-btn").forEach(b => {
        b.disabled = true;
        if (b === btn) b.classList.add("voted");
      });
      $("vote-msg").textContent = "Vote cast! Waiting for others…";
    });
  });
}

// ── NIGHT PHASE ───────────────────────────────
function renderNight(data) {
  showPanel("night");

  // Hide all role actions
  ["mafia","doctor","police","villager","dead"].forEach(r => {
    $(`night-${r}`).classList.add("hidden");
  });

  if (!isAlive) {
    $("night-dead").classList.remove("hidden");
    return;
  }

  const role = myRole || "villager";
  $(`night-${role}`).classList.remove("hidden");

  if (hasNightActed) return;

  const targets = Object.entries(data.players || {})
    .filter(([id, p]) => p.isAlive && (role !== "mafia" ? true : id !== playerId));

  if (role === "mafia") renderTargetList("mafia-target-list", targets, "mafia-msg", "mafiaTarget", "🎯");
  if (role === "doctor") renderTargetList("doctor-target-list", targets, "doctor-msg", "doctorTarget", "💊");
  if (role === "police") {
    renderTargetList("police-target-list", targets, "police-msg", "policeTarget", "🔍", async (targetId, targetData) => {
      const isMafia = targetData.role === "mafia";
      const result = $("police-result");
      result.classList.remove("hidden");
      result.className = `police-result ${isMafia ? "is-mafia" : "not-mafia"}`;
      result.textContent = isMafia
        ? `🚨 ${targetData.name} IS the Mafia!`
        : `✅ ${targetData.name} is NOT the Mafia.`;
    });
  }
}

function renderTargetList(listId, targets, msgId, actionKey, emoji, callback) {
  const list = $(listId);
  list.innerHTML = targets.map(([id, p]) =>
    `<button class="target-btn" data-id="${id}">${emoji} ${p.name}</button>`
  ).join("");

  list.querySelectorAll(".target-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      if (hasNightActed) return;
      const targetId = btn.dataset.id;
      hasNightActed = true;

      list.querySelectorAll(".target-btn").forEach(b => {
        b.disabled = true;
        if (b === btn) b.classList.add("chosen");
      });

      await update(ref(db, `rooms/${roomCode}/nightActions`), {
        [actionKey]: targetId
      });

      $(msgId).textContent = "Action submitted! Waiting for night to end…";

      if (callback) {
        const snap = await get(ref(db, `rooms/${roomCode}/players/${targetId}`));
        callback(targetId, snap.val());
      }
    });
  });
}

// ── RESULT ────────────────────────────────────
function renderResult(data) {
  showPanel("result");
  const winner = data.winner || "Game Over!";
  const iWon = (winner.includes("Villager") && myRole !== "mafia") ||
               (winner.includes("Mafia") && myRole === "mafia");

  $("result-icon").textContent  = iWon ? "🏆" : "💀";
  $("result-title").textContent = winner;
  $("result-desc").textContent  = iWon
    ? "Congratulations! Well played."
    : `Better luck next time! You were ${ROLES[myRole]?.name || "a Villager"}.`;

  // Vocab recap
  const role = ROLES[myRole] || ROLES.villager;
  const vocabs = role.vocab.split("·").map(v => v.trim()).filter(Boolean);
  const recap = $("vocab-recap");
  recap.innerHTML = `
    <div class="vocab-recap-title">Vocabulary you used this game</div>
    ${vocabs.map(v => `<span class="vocab-chip">${v}</span>`).join("")}
  `;
}
