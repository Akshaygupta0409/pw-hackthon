// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_kq82x3JESbgC10JKAvt6ygm2yLUpsxY",
  authDomain: "auth-4dc18.firebaseapp.com",
  projectId: "auth-4dc18",
  storageBucket: "auth-4dc18.appspot.com",
  messagingSenderId: "456756673820",
  appId: "1:456756673820:web:89d99f1a2d739876af8ed9",
  measurementId: "G-3KJKXS86KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);