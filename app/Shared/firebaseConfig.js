// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJg3KNioXKhav3uhQ8k4OWGNL4drID-YM",
  authDomain: "pinterest-f4b26.firebaseapp.com",
  projectId: "pinterest-f4b26",
  storageBucket: "pinterest-f4b26.appspot.com",
  messagingSenderId: "141250217924",
  appId: "1:141250217924:web:a95c67f13ad4224a74c691",
  measurementId: "G-10ES61FQWS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
