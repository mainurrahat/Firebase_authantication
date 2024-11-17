// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA-YWL2W1LYz0fdkveLZrjF_oolufkyZk",
  authDomain: "auth-moha-milon-2c3a3.firebaseapp.com",
  projectId: "auth-moha-milon-2c3a3",
  storageBucket: "auth-moha-milon-2c3a3.firebasestorage.app",
  messagingSenderId: "181738231705",
  appId: "1:181738231705:web:a7256ccaefb6b003b86508",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
