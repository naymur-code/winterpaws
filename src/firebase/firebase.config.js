// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCYglOlUbWhTSey1C3I3mVRUeWQ2E3hGYI",
  authDomain: "winterpaws-e83ca.firebaseapp.com",
  projectId: "winterpaws-e83ca",
  storageBucket: "winterpaws-e83ca.firebasestorage.app",
  messagingSenderId: "1096550345808",
  appId: "1:1096550345808:web:643f21d65ac58c5660f555"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
