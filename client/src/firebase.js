// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-b58e5.firebaseapp.com",
  projectId: "realestate-b58e5",
  storageBucket: "realestate-b58e5.appspot.com",
  messagingSenderId: "854857878608",
  appId: "1:854857878608:web:6395e230c7cc8b986cd555",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
