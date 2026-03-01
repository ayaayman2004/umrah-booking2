import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDznvL66OjcAuZHLTcBRt9GpyDU-bf7Zeo",
  authDomain: "umrah-booking-1dd55.firebaseapp.com",
  projectId: "umrah-booking-1dd55",
  storageBucket: "umrah-booking-1dd55.appspot.com",
  messagingSenderId: "480867310924",
  appId: "1:480867310:web:f950368e84bc452bcb43e9",
  databaseURL: "https://umrah-booking-1dd55-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
 