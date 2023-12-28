// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKEpSmbVTTDIpaYmKP-JVRr6qj0Rg7GMQ",
  authDomain: "jeepneyiligan-3984f.firebaseapp.com",
  projectId: "jeepneyiligan-3984f",
  storageBucket: "jeepneyiligan-3984f.appspot.com",
  messagingSenderId: "440532374000",
  appId: "1:440532374000:web:15e7fc0686bdf210884d35",
  measurementId: "G-1976NEXNQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);