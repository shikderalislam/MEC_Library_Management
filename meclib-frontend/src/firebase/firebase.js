// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCJnC4L58e7GxnwJQNadcLTaQ-048Aj0DM",
  authDomain: "meclib.firebaseapp.com",
  projectId: "meclib",
  storageBucket: "meclib.appspot.com",
  messagingSenderId: "318784692178",
  appId: "1:318784692178:web:2ee65127c6c156f0eb720b",
  measurementId: "G-4447R4BMTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export default storage