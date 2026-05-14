// firebase.js — 复制你自己的配置，别用这个！
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnVk3IbSqBoA7JnbqYB5BRmzXERZNCraw",        
  authDomain: "plunk-da9d9.firebaseapp.com",
  projectId: "plunk-da9d9",
  storageBucket: "plunk-da9d9.appspot.com",
  messagingSenderId: "28328432066",
  appId: "1:28328432066:web:6557717240e80a5a9b465b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);