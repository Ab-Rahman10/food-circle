// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCrqUS29ky2igpi_DvOLanJ5LsYfLVQFY",
  authDomain: "food-circle-a626f.firebaseapp.com",
  projectId: "food-circle-a626f",
  storageBucket: "food-circle-a626f.firebasestorage.app",
  messagingSenderId: "1040032147585",
  appId: "1:1040032147585:web:612c5b2aed96154b14c580",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
