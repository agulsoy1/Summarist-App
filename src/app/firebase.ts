import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRjWg7MUmhqmaYxqIoy7-Sci9vsv73KWo",
  authDomain: "summarist-website.firebaseapp.com",
  projectId: "summarist-website",
  storageBucket: "summarist-website.firebasestorage.app",
  messagingSenderId: "553404638661",
  appId: "1:553404638661:web:95546573de060791b857ac",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const initFirebase = () => {
  return app;
}