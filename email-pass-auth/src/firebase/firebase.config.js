// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKkq2Am7RoFCKmmB-BIoFHSQjndYtaFwY",
  authDomain: "email-password-auth-721c9.firebaseapp.com",
  projectId: "email-password-auth-721c9",
  storageBucket: "email-password-auth-721c9.appspot.com",
  messagingSenderId: "41781495229",
  appId: "1:41781495229:web:947525e883d6b685533ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;