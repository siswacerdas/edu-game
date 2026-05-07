import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9figsjewHSiHHr34nXzo3DGXogXMmNTk",
  authDomain: "edu-game-407f4.firebaseapp.com",
  projectId: "edu-game-407f4",
  storageBucket: "edu-game-407f4.firebasestorage.app",
  messagingSenderId: "187845709590",
  appId: "1:187845709590:web:36628d5a29f29ec7424a37"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);