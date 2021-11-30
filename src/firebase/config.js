// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmIMaCi5yMj_Zh1NBkSgaNPHgtkCkRIKo",
  authDomain: "curso-react-bbd1d.firebaseapp.com",
  projectId: "curso-react-bbd1d",
  storageBucket: "curso-react-bbd1d.appspot.com",
  messagingSenderId: "499226916895",
  appId: "1:499226916895:web:90440429d9a2466cf37d2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
