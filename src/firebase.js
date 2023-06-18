// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.Firebase_Key ,
  authDomain: "furry-connect.firebaseapp.com",
  projectId: "furry-connect",
  storageBucket: "furry-connect.appspot.com",
  messagingSenderId: "923752106554",
  appId: "1:923752106554:web:210176155f43e1d9e3c303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth();
