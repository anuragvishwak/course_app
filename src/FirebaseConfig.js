// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9LhmvpibKKPVng3Qpq6NUGkAdUHSyT9I",
  authDomain: "e-commerce-platform-5398c.firebaseapp.com",
  projectId: "e-commerce-platform-5398c",
  storageBucket: "e-commerce-platform-5398c.appspot.com",
  messagingSenderId: "166130039994",
  appId: "1:166130039994:web:c962202391752adc641683",
  measurementId: "G-QZBQ3ZS6BW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app);
const auth = getAuth(app);

export { app, database, auth };
