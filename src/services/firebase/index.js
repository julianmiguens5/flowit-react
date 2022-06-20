// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrUaiRxAAVAgEl9dxOqyxGY7cVzLE9Zjg",
  authDomain: "flowit-react.firebaseapp.com",
  projectId: "flowit-react",
  storageBucket: "flowit-react.appspot.com",
  messagingSenderId: "195456964900",
  appId: "1:195456964900:web:90e628c0deb7701055fbb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;