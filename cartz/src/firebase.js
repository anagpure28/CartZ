// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbXB_d1H6FrYMXD9t6Dw7agNnjXfK0PpM",
  authDomain: "cartz-19b68.firebaseapp.com",
  projectId: "cartz-19b68",
  storageBucket: "cartz-19b68.appspot.com",
  messagingSenderId: "779468335517",
  appId: "1:779468335517:web:7810da99f7aeadc0276774",
  measurementId: "G-GSP4TRWHCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
