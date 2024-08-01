// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvus6LRJsmXf8d6UMs0Dedgw93N309DBM",
  authDomain: "pantry-tracked.firebaseapp.com",
  projectId: "pantry-tracked",
  storageBucket: "pantry-tracked.appspot.com",
  messagingSenderId: "690594061230",
  appId: "1:690594061230:web:3caaee12919c78124bc63f",
  measurementId: "G-5XTH2XXH71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };