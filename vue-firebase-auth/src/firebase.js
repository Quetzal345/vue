// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQIbYxUAgURFK_sXMDec1-xjw7NNEQ6Ns",
  authDomain: "vue-auth-c9a32.firebaseapp.com",
  projectId: "vue-auth-c9a32",
  storageBucket: "vue-auth-c9a32.firebasestorage.app",
  messagingSenderId: "873220692296",
  appId: "1:873220692296:web:93bddeeffffd519a00bb7d",
  measurementId: "G-R9T1VKPHVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);