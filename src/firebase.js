import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwxECaEVqIjTAUyoznuWcvfb5AQ_MhRiM",
  authDomain: "portfolio-dashboard-2bcac.firebaseapp.com",
  projectId: "portfolio-dashboard-2bcac",
  storageBucket: "portfolio-dashboard-2bcac.firebasestorage.app",
  messagingSenderId: "667410304164",
  appId: "1:667410304164:web:7315306d5eace5c3aeea31",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);