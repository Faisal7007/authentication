
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDz7V1C-ClJW6RUGoO0PirNrPP7R-ch9Xc",
  authDomain: "emailpasswordlogin-67ecb.firebaseapp.com",
  projectId: "emailpasswordlogin-67ecb",
  storageBucket: "emailpasswordlogin-67ecb.appspot.com",
  messagingSenderId: "837341802260",
  appId: "1:837341802260:web:e5f5ee1ce8a0d5ed399c01"
};



const app = initializeApp(firebaseConfig);

export const  database = getAuth()