import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCK6iRofsbSc11uE0HyBVgpkkcQkXlf6rQ",
  authDomain: "chatapp-34d71.firebaseapp.com",
  projectId: "chatapp-34d71",
  storageBucket: "chatapp-34d71.appspot.com",
  messagingSenderId: "466370521512",
  appId: "1:466370521512:web:3bed018cebfde8775e159d",
  measurementId: "G-D73QFPWF8B"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
