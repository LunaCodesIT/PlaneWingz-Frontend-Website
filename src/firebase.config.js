import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAKgQN3LZvbBYkXNud6WF2tA_widUwNU9U",
    authDomain: "planewingz-8259f.firebaseapp.com",
    databaseURL: "https://planewingz-8259f-default-rtdb.firebaseio.com",
    projectId: "planewingz-8259f",
    storageBucket: "planewingz-8259f.appspot.com",
    messagingSenderId: "742083364775",
    appId: "1:742083364775:web:61a462f23f9578b2429882"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };