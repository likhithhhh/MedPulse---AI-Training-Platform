// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnoSUjoYq-hYq0RATq4IUKzKXq86rrZLU",
  authDomain: "vr-medical-training-60020.firebaseapp.com",
  projectId: "vr-medical-training-60020",
  storageBucket: "vr-medical-training-60020.firebasestorage.app",
  messagingSenderId: "882220987378",
  appId: "1:882220987378:web:e9db9e362e16216464f16b",
  measurementId: "G-YHM9HSLBYX"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, facebookProvider, twitterProvider };

