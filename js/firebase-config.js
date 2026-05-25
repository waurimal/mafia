import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey:            "AIzaSyD6YK02DdhaSVN9mx3Acd5amiiphxcobG8",
  authDomain:        "mapia-29b3a.firebaseapp.com",
  databaseURL:       "https://mapia-29b3a-default-rtdb.firebaseio.com",
  projectId:         "mapia-29b3a",
  storageBucket:     "mapia-29b3a.firebasestorage.app",
  messagingSenderId: "937487062003",
  appId:             "1:937487062003:web:20cd85e20a8e57ebfab886",
  measurementId:     "G-PZKGQNES49"
};

let db;
try {
  const app = initializeApp(firebaseConfig);
  db = getDatabase(app);
} catch (e) {
  console.error("Firebase init error:", e);
  db = null;
}

export { db };
