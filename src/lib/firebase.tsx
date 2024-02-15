// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF_s1_U4gokYKP1TPI2rL2Mka576okVt4",
  authDomain: "laundry-app-next.firebaseapp.com",
  projectId: "laundry-app-next",
  storageBucket: "laundry-app-next.appspot.com",
  messagingSenderId: "394229874274",
  appId: "1:394229874274:web:e037feb19436c821f49b3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);