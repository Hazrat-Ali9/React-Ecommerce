// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi9eCSuRp9u4PiAGalndOr0ND5P6VCMfE",
  authDomain: "abccomerce-f22a0.firebaseapp.com",
  projectId: "abccomerce-f22a0",
  storageBucket: "abccomerce-f22a0.appspot.com",
  messagingSenderId: "198692643758",
  appId: "1:198692643758:web:59b604b9864ce7d8909e3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;