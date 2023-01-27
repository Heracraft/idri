// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyButbfbrQaLvkTCeORnMv_cw8J2rqU4g-s",
  authDomain: "idri-7ef47.firebaseapp.com",
  projectId: "idri-7ef47",
  storageBucket: "idri-7ef47.appspot.com",
  messagingSenderId: "958935148356",
  appId: "1:958935148356:web:fb6fa972520919e1e3d911",
  measurementId: "G-ZBH40PKPEG"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db=getFirestore(app)