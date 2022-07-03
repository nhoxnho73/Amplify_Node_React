import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "demoapi-105ac.firebaseapp.com",
  databaseURL: "https://demoapi-105ac.firebaseio.com",
  projectId: "demoapi-105ac",
  storageBucket: "demoapi-105ac.appspot.com",
  messagingSenderId: "13987413986",
  appId: "1:13987413986:web:a2ba95c6590ba36494c3bb",
  measurementId: "G-T8MTF4SZWF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
