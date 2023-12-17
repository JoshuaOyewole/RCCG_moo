import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDQtEQ7bb-5FraH3-jNiGL-vihQDS5oFXE",
    authDomain: "rccg-moo.firebaseapp.com",
    projectId: "rccg-moo",
    storageBucket: "rccg-moo.appspot.com",
    messagingSenderId: "850831171692",
    appId: "1:850831171692:web:663ee2545339f61b92f849",
    measurementId: "G-WPE2F57GGE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);