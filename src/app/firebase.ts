// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRjWg7MUmhqmaYxqIoy7-Sci9vsv73KWo",
  authDomain: "summarist-website.firebaseapp.com",
  projectId: "summarist-website",
  storageBucket: "summarist-website.firebasestorage.app",
  messagingSenderId: "553404638661",
  appId: "1:553404638661:web:95546573de060791b857ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)