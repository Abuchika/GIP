// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-zh99M5MFNzDP5FCPrnAofWs-gfLssVI",
  authDomain: "gip-dole-bbfo-b9095.firebaseapp.com",
  projectId: "gip-dole-bbfo-b9095",
  storageBucket: "gip-dole-bbfo-b9095.appspot.com",
  messagingSenderId: "1088817030222",
  appId: "1:1088817030222:web:38b859664dd48f4183cf1f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
