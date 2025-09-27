// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_1Cpyr15dsRNQqReBMTCBOpuKPkahQ18",
  authDomain: "netflix-gpt-f8b6f.firebaseapp.com",
  projectId: "netflix-gpt-f8b6f",
  storageBucket: "netflix-gpt-f8b6f.firebasestorage.app",
  messagingSenderId: "297824030021",
  appId: "1:297824030021:web:df17a19ea81e2b295ec22c",
  measurementId: "G-6KSNGLQJ8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);