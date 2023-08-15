// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBadFhMyCezdtfEi8RQncq1adPLwwtdmFY",
  authDomain: "auth-firebase-19c98.firebaseapp.com",
  projectId: "auth-firebase-19c98",
  storageBucket: "auth-firebase-19c98.appspot.com",
  messagingSenderId: "907311670837",
  appId: "1:907311670837:web:a9fea58374d4eaab95b37c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app