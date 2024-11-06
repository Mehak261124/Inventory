import { initializeApp } from "firebase/app";
import {collection, getFirestore , doc, setDoc, getDoc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBKRoIgd3ywmTFMSzNzFZ0T4GfWAFsFYZ4",
    authDomain: "unicart-d242d.firebaseapp.com",
    projectId: "unicart-d242d",
    storageBucket: "unicart-d242d.appspot.com",
    messagingSenderId: "259084158732",
    appId: "1:259084158732:web:3e2b1789f92941a2446b29"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export default db; 