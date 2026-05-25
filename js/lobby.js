// =============================================
//  lobby.js — Join or create a game room
// =============================================

import { db } from "./firebase-config.js";
import { ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { generateRoomCode, generatePlayerId } from "./game-data.js";

// ── Student: join room ──────────────────────
document.getElementById("btn-join").addEventListener("click", async () => {
  const name = document.getElementById("input-name").value.trim();
  const code = document.getElementById("input-room").value.trim().toUpperCase();
  const msg  = document.getElementById("msg-join");

  if (!name) { msg.textContent = "Please enter your English name!"; return; }
  if (!code || code.length < 4) { msg.textContent = "Please enter the room code!"; return; }

  msg.textContent = "Connecting…";

  try {
    const roomSnap = await get(ref(db, `rooms/${code}`));
    if (!roomSnap.exists()) { msg.textContent = "Room not found. Check the code!"; return; }

    const phase = roomSnap.val().phase;
    if (phase !== "lobby") { msg.textContent = "Game has already started. Ask your teacher."; return; }

    const playerId = generatePlayerId();
    await set(ref(db, `rooms/${code}/players/${playerId}`), {
      name,
      role: "",
      isAlive: true,
      hasVoted: false,
      quizPassed: false,
      joinedAt: Date.now()
    });

    // Store local identity
    sessionStorage.setItem("mafia_player_id",   playerId);
    sessionStorage.setItem("mafia_player_name",  name);
    sessionStorage.setItem("mafia_room_code",    code);
    sessionStorage.setItem("mafia_is_host",      "false");

    window.location.href = `pages/player.html`;

  } catch (e) {
    console.error(e);
    msg.textContent = "Connection error. Check Firebase config.";
  }
});

// ── Teacher: create room ────────────────────
document.getElementById("btn-create").addEventListener("click", async () => {
  const name = document.getElementById("input-teacher-name").value.trim();
  const msg  = document.getElementById("msg-create");

  if (!name) { msg.textContent = "Please enter your name!"; return; }

  msg.textContent = "Creating room…";

  try {
    const code = generateRoomCode();
    const hostId = generatePlayerId();

    await set(ref(db, `rooms/${code}`), {
      code,
      hostId,
      hostName: name,
      phase: "lobby",
      createdAt: Date.now(),
      players: {},
      votes: {},
      nightActions: {},
      quiz: { question: "", options: [], answer: 0 },
      chat: {}
    });

    sessionStorage.setItem("mafia_room_code",  code);
    sessionStorage.setItem("mafia_host_id",    hostId);
    sessionStorage.setItem("mafia_is_host",    "true");
    sessionStorage.setItem("mafia_player_name", name);

    window.location.href = `pages/host.html`;

  } catch (e) {
    console.error(e);
    msg.textContent = "Error creating room. Check Firebase config.";
  }
});

// Allow Enter key
document.getElementById("input-room").addEventListener("keydown", e => {
  if (e.key === "Enter") document.getElementById("btn-join").click();
});
document.getElementById("input-teacher-name").addEventListener("keydown", e => {
  if (e.key === "Enter") document.getElementById("btn-create").click();
});
