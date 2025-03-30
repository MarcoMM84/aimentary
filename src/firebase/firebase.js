import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_XZdPBFfJ1hmFTJ40RHGUq6n66X4jhVk",
  authDomain: "aimentary.firebaseapp.com",
  projectId: "aimentary",
  storageBucket: "aimentary.firebasestorage.app",
  messagingSenderId: "619927155053",
  appId: "1:619927155053:web:77bd176255e2e365932a64"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
