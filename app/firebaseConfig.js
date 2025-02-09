import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDHg32AnGXK4KFvNTj_3rk_4YlYG-GPdLk",
  authDomain: "vasista07-2c0ba.firebaseapp.com",
  projectId: "vasista07-2c0ba",
  storageBucket: "vasista07-2c0ba.firebasestorage.app",
  messagingSenderId: "924070368036",
  appId: "1:924070368036:web:657d0a2d432e6d76bc19b1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};