// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7h_I6saCJOrfWpD0ePmXhAoy29ggWzeY",
  authDomain: "task-93aa6.firebaseapp.com",
  projectId: "task-93aa6",
  storageBucket: "task-93aa6.appspot.com",
  messagingSenderId: "197714273842",
  appId: "1:197714273842:web:58f997705b946a5f60be2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };