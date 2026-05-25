// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6YK02DdhaSVN9mx3Acd5amiiphxcobG8",
  authDomain: "mapia-29b3a.firebaseapp.com",
  projectId: "mapia-29b3a",
  storageBucket: "mapia-29b3a.firebasestorage.app",
  messagingSenderId: "937487062003",
  appId: "1:937487062003:web:20cd85e20a8e57ebfab886",
  measurementId: "G-PZKGQNES49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);