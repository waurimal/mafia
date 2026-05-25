// =============================================
//  host.js — Game Master control panel
// =============================================

import { db } from "./firebase-config.js";
import { ref, onValue, set, update, get } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { ROLES, randomQuiz } from "./game-data.js";

// ── Session check ───────────────────────────
const roomCode = sessionStorage.getItem("mafia_room_code");
const hostId   = sessionStorage.getItem("mafia_host_id");
if (!roomCode || !hostId) { window.location.href = "../index.html"; }

const roomRef = ref(db, `rooms/${roomCode}`);

// ── UI refs ─────────────────────────────────
const $ = id => document.getElementById(id);
let currentPhase = "lobby";
let players = {};
let timerInterval = null;
let timerSeconds = 180;

// ── Room code display ───────────────────────
$("room-code-display").textContent = roomCode;
$("btn-copy-code").addEventListener("click", () => {
  navigator.clipboard.writeText(roomCode);
  $("btn-copy-code").textContent = "✓";
  setTimeout(() => $("btn-copy-code").textContent = "⧉", 1500);
});

// ── Real-time listener ───────────────────────
onValue(roomRef, snap => {
  if (!snap.exists()) return;
  const data = snap.val();
  players = data.players || {};
  currentPhase = data.phase || "lobby";

  updatePhaseUI(currentPhase);
  renderPlayerList(players, currentPhase);
  updateRoleNote();

  // Night action results
  if (currentPhase === "night") {
    const na = data.nightActions || {};
    $("night-mafia-target").textContent  = getPlayerName(na.mafiaTarget);
    $("night-doctor-target").textContent = getPlayerName(na.doctorTarget);
    $("night-police-target").textContent = getPlayerName(na.policeTarget);
  }

  // Vote tally
  if (currentPhase === "vote") {
    const votes  = data.votes || {};
    const alive  = Object.values(players).filter(p => p.isAlive).length;
    const casted = Object.keys(votes).length;
    $("vote-tally").textContent = `${casted} / ${alive}`;
  }
});

// ── Phase UI ────────────────────────────────
function updatePhaseUI(phase) {
  ["lobby","day","vote","night","result"].forEach(p => {
    $(`panel-${p}`).classList.add("hidden");
  });
  $(`panel-${phase}`).classList.remove("hidden");

  const badge = $("phase-badge");
  badge.textContent = phase.toUpperCase();
  badge.className = `phase-badge ${phase}`;
}

// ── Player list ─────────────────────────────
function renderPlayerList(players, phase) {
  const list = $("player-list");
  const entries = Object.entries(players);
  $("player-count").textContent = `(${entries.length})`;

  if (!entries.length) {
    list.innerHTML = '<li class="player-empty">Waiting for students to join…</li>';
    return;
  }
  list.innerHTML = entries.map(([id, p]) => {
    const initials = p.name.slice(0,2).toUpperCase();
    const dead = !p.isAlive ? ' dead' : '';
    const roleLabel = phase !== "lobby" && p.role
      ? `<span class="player-role-badge">${p.role}</span>`
      : "";
    return `<li class="player-item${dead}">
      <span class="player-avatar">${initials}</span>
      <span>${p.name}</span>
      ${roleLabel}
    </li>`;
  }).join("");
}

function getPlayerName(id) {
  return id && players[id] ? players[id].name : "—";
}

function updateRoleNote() {
  const total = Object.keys(players).length;
  const mafia  = parseInt($("count-mafia").value)  || 0;
  const police = parseInt($("count-police").value) || 0;
  const doctor = parseInt($("count-doctor").value) || 0;
  const villagers = total - mafia - police - doctor;
  $("role-note").textContent = villagers < 0
    ? `⚠️ Too many special roles for ${total} players!`
    : `${total} players → ${mafia} Mafia, ${police} Police, ${doctor} Doctor, ${villagers} Villagers`;
}

["count-mafia","count-police","count-doctor"].forEach(id => {
  $(id).addEventListener("input", updateRoleNote);
});

// ── Log helper ───────────────────────────────
function addLog(text, type = "") {
  const feed = $("log-feed");
  const empty = feed.querySelector(".log-empty");
  if (empty) empty.remove();
  const entry = document.createElement("div");
  entry.className = `log-entry ${type}`;
  entry.textContent = `${new Date().toLocaleTimeString("en-US", {hour:"2-digit",minute:"2-digit"})} — ${text}`;
  feed.prepend(entry);
}

// ── ASSIGN ROLES ────────────────────────────
$("btn-assign-roles").addEventListener("click", async () => {
  const ids = Object.keys(players);
  if (ids.length < 4) { addLog("Need at least 4 players!", "vote"); return; }

  const mafia  = parseInt($("count-mafia").value)  || 0;
  const police = parseInt($("count-police").value) || 0;
  const doctor = parseInt($("count-doctor").value) || 0;
  const villagers = ids.length - mafia - police - doctor;

  if (villagers < 0) { addLog("Too many special roles!", "vote"); return; }

  // Build role array
  const roleArray = [
    ...Array(mafia).fill("mafia"),
    ...Array(police).fill("police"),
    ...Array(doctor).fill("doctor"),
    ...Array(villagers).fill("villager"),
  ];

  // Shuffle Fisher-Yates
  for (let i = roleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [roleArray[i], roleArray[j]] = [roleArray[j], roleArray[i]];
  }

  // Shuffle players
  const shuffled = [...ids];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Assign
  const updates = {};
  shuffled.forEach((id, i) => {
    updates[`rooms/${roomCode}/players/${id}/role`] = roleArray[i];
  });
  updates[`rooms/${roomCode}/phase`] = "day";
  await update(ref(db), updates);

  addLog("Roles assigned! Day 1 begins.", "phase");
});

// ── TIMER ───────────────────────────────────
function renderTimer() {
  const m = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const s = String(timerSeconds % 60).padStart(2, "0");
  $("timer-value").textContent = `${m}:${s}`;
}

$("btn-timer-start").addEventListener("click", () => {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; $("btn-timer-start").textContent = "▶ Start"; return; }
  $("btn-timer-start").textContent = "⏸ Pause";
  timerInterval = setInterval(() => {
    if (timerSeconds <= 0) { clearInterval(timerInterval); timerInterval = null; $("btn-timer-start").textContent = "▶ Start"; return; }
    timerSeconds--;
    renderTimer();
  }, 1000);
});

$("btn-timer-reset").addEventListener("click", () => {
  timerSeconds = 180;
  renderTimer();
});

// ── START VOTE ───────────────────────────────
$("btn-start-vote").addEventListener("click", async () => {
  const q = randomQuiz();
  // Shuffle options (keep answer index updated)
  const opts = q.options.map((o, i) => ({ o, correct: i === q.answer }));
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  const newAnswer = opts.findIndex(o => o.correct);

  await update(ref(db), {
    [`rooms/${roomCode}/phase`]: "vote",
    [`rooms/${roomCode}/votes`]: null,
    [`rooms/${roomCode}/quiz`]: {
      question: q.question,
      options: opts.map(o => o.o),
      answer: newAnswer
    }
  });
  addLog("Vote phase started. Quiz published.", "phase");
});

// ── PUBLISH CUSTOM QUIZ ──────────────────────
$("btn-publish-quiz").addEventListener("click", async () => {
  const question = $("quiz-question").value.trim();
  const opts = [0,1,2,3].map(i => $(`quiz-opt-${i}`).value.trim());
  if (!question || opts.some(o => !o)) { addLog("Fill in all quiz fields!", "vote"); return; }

  await set(ref(db, `rooms/${roomCode}/quiz`), {
    question,
    options: opts,
    answer: 0 // first option is always correct
  });
  addLog("Custom quiz published!", "action");
});

// ── END VOTE ─────────────────────────────────
$("btn-end-vote").addEventListener("click", async () => {
  const snap = await get(ref(db, `rooms/${roomCode}/votes`));
  const votes = snap.val() || {};

  // Tally votes
  const tally = {};
  Object.values(votes).forEach(targetId => {
    tally[targetId] = (tally[targetId] || 0) + 1;
  });

  // Find most voted
  let eliminated = null;
  let maxVotes = 0;
  Object.entries(tally).forEach(([id, count]) => {
    if (count > maxVotes) { maxVotes = count; eliminated = id; }
  });

  const updates = {};
  if (eliminated && players[eliminated]) {
    updates[`rooms/${roomCode}/players/${eliminated}/isAlive`] = false;
    addLog(`${players[eliminated].name} was eliminated by vote. (${maxVotes} votes)`, "vote");
  } else {
    addLog("No votes cast — no elimination.", "vote");
  }

  // Check win condition before going to night
  const updatedPlayers = { ...players };
  if (eliminated) updatedPlayers[eliminated] = { ...updatedPlayers[eliminated], isAlive: false };
  const winResult = checkWin(updatedPlayers);

  if (winResult) {
    updates[`rooms/${roomCode}/phase`] = "result";
    updates[`rooms/${roomCode}/winner`] = winResult;
    addLog(`Game Over: ${winResult}`, "phase");
  } else {
    updates[`rooms/${roomCode}/phase`] = "night";
    updates[`rooms/${roomCode}/nightActions`] = {};
    addLog("Night phase begins.", "phase");
  }

  await update(ref(db), updates);
});

// ── END NIGHT ────────────────────────────────
$("btn-end-night").addEventListener("click", async () => {
  const snap = await get(ref(db, `rooms/${roomCode}`));
  const data = snap.val();
  const na = data.nightActions || {};
  const mafiaTarget  = na.mafiaTarget;
  const doctorTarget = na.doctorTarget;

  const updates = {};
  let eliminated = null;

  if (mafiaTarget && mafiaTarget !== doctorTarget) {
    updates[`rooms/${roomCode}/players/${mafiaTarget}/isAlive`] = false;
    eliminated = mafiaTarget;
    addLog(`${getPlayerName(mafiaTarget)} was eliminated by the Mafia!`, "vote");
  } else if (mafiaTarget && mafiaTarget === doctorTarget) {
    addLog(`${getPlayerName(mafiaTarget)} was saved by the Doctor!`, "action");
  } else {
    addLog("The Mafia did not act tonight.", "action");
  }

  // Update local for win check
  const updatedPlayers = JSON.parse(JSON.stringify(players));
  if (eliminated) updatedPlayers[eliminated].isAlive = false;
  const winResult = checkWin(updatedPlayers);

  if (winResult) {
    updates[`rooms/${roomCode}/phase`] = "result";
    updates[`rooms/${roomCode}/winner`] = winResult;
    addLog(`Game Over: ${winResult}`, "phase");
  } else {
    updates[`rooms/${roomCode}/phase`] = "day";
    addLog("Day phase begins. Discuss!", "phase");
  }

  await update(ref(db), updates);
});

// ── NEW GAME ──────────────────────────────────
$("btn-new-game").addEventListener("click", async () => {
  const resetPlayers = {};
  Object.entries(players).forEach(([id, p]) => {
    resetPlayers[id] = { ...p, role: "", isAlive: true, hasVoted: false, quizPassed: false };
  });
  await update(ref(db), {
    [`rooms/${roomCode}/phase`]: "lobby",
    [`rooms/${roomCode}/votes`]: null,
    [`rooms/${roomCode}/nightActions`]: null,
    [`rooms/${roomCode}/winner`]: null,
    [`rooms/${roomCode}/players`]: resetPlayers,
  });
  addLog("New game started. Assign roles when ready.", "phase");
});

// ── Win condition ────────────────────────────
function checkWin(playersMap) {
  const alive = Object.values(playersMap).filter(p => p.isAlive);
  const aliveMafia    = alive.filter(p => p.role === "mafia").length;
  const aliveVillagers = alive.filter(p => p.role !== "mafia").length;

  if (aliveMafia === 0) return "Villagers Win!";
  if (aliveMafia >= aliveVillagers) return "Mafia Wins!";
  return null;
}

renderTimer();
