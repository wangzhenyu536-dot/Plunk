// firebase.js — 复制你自己的配置，别用这个！
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { initializeFirestore, persistentLocalCache }
  from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

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
// 开启 Firestore 本地持久缓存：同设备读取走本地、瞬出，网络抖动时也能离线读写并排队同步
export const db = initializeFirestore(app, { localCache: persistentLocalCache() });