// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import the storage module

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI-BSsmRVNZY53m5Y_Z9W8fqIfV4BuDa0",
  authDomain: "personal-website-a0181.firebaseapp.com",
  databaseURL: "https://personal-website-a0181-default-rtdb.firebaseio.com",
  projectId: "personal-website-a0181",
  storageBucket: "personal-website-a0181.appspot.com",
  messagingSenderId: "978834577414",
  appId: "1:978834577414:web:d6c2926fc4820e1a928b87",
  measurementId: "G-BE724KRK6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Storage
const storage = getStorage(app); // Initialize Firebase Storage with your app

export { storage }; // Export the storage module to use in your TSX files
