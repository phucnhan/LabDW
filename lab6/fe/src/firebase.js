// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXyJRaLZzclaDCarHA8QZidSF-4n1owWc",
  authDomain: "social-media-app-265cd.firebaseapp.com",
  projectId: "social-media-app-265cd",
  storageBucket: "social-media-app-265cd.appspot.com",
  messagingSenderId: "667847777825",
  appId: "1:667847777825:web:55b0081adfd1a273cccd60",
  measurementId: "G-325HYD9X9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);