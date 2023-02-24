// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCybux4zyIa5SW1lmYF_EYIVHzEoI-UvQY",
  authDomain: "react-hooks-blog-6832c.firebaseapp.com",
  projectId: "react-hooks-blog-6832c",
  storageBucket: "react-hooks-blog-6832c.appspot.com",
  messagingSenderId: "1035321004536",
  appId: "1:1035321004536:web:7fc6bc873558a7a6a2460d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);