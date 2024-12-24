// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBVtzSo5m7wpBcr6nO3FBUvPQLCMHbvhes",
  authDomain: "ecomerce-chatbot.firebaseapp.com",
  projectId: "ecomerce-chatbot",
  storageBucket: "ecomerce-chatbot.firebasestorage.app",
  messagingSenderId: "478740283829",
  appId: "1:478740283829:web:f7073d611405caabb399fc",
  measurementId: "G-GBFVNGM3CG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };