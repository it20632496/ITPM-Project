import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkpody_sVqvshoSt3YT8DK-WBEn6K76cQ",
  authDomain: "clean-city-a4395.firebaseapp.com",
  projectId: "clean-city-a4395",
  storageBucket: "clean-city-a4395.appspot.com",
  messagingSenderId: "567329000639",
  appId: "1:567329000639:web:d8dd24d1270a5cc011ca0a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
