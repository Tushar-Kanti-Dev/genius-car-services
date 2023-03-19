// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYo4Xlr4DwM_UpmZViUdl_5iFhenv4Dgg",
  authDomain: "genius-car-services-a6c11.firebaseapp.com",
  projectId: "genius-car-services-a6c11",
  storageBucket: "genius-car-services-a6c11.appspot.com",
  messagingSenderId: "337547213741",
  appId: "1:337547213741:web:159d55238c4f81ec8bff24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;