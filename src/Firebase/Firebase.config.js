// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc-XyURRR4tYU68j2pyceYDWv2A4pPX5g",
  authDomain: "b8a9-event.firebaseapp.com",
  projectId: "b8a9-event",
  storageBucket: "b8a9-event.appspot.com",
  messagingSenderId: "793103827713",
  appId: "1:793103827713:web:8d5b025031012cca995100"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app