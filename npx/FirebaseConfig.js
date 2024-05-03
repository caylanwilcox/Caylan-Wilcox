// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTtc08y6Q5X6wJUERPI4b7n4Dz3ZIFVbQ",
  authDomain: "myportfolio-f48f0.firebaseapp.com",
  projectId: "myportfolio-f48f0",
  storageBucket: "myportfolio-f48f0.appspot.com",
  messagingSenderId: "860143504600",
  appId: "1:860143504600:web:11aab6729a93a1e2b05bad",
  measurementId: "G-X4JNW14BLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export { functions, httpsCallable };
