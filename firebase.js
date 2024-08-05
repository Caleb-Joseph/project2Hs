// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHVAeDTUT4A041Kp_Gvi77Ji3HUPwKick",
  authDomain: "inventory-management-3c33c.firebaseapp.com",
  projectId: "inventory-management-3c33c",
  storageBucket: "inventory-management-3c33c.appspot.com",
  messagingSenderId: "1053738358136",
  appId: "1:1053738358136:web:adfcc7dad1bb348ceea48d",
  measurementId: "G-TYD6EEN29G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  firestore = getFirestore(app);

export {firestore}