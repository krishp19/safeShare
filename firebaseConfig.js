// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh_f6GfRh20u4uM6yo_lfUQJOSyxhLAlY",
  authDomain: "safe-share-7b479.firebaseapp.com",
  projectId: "safe-share-7b479",
  storageBucket: "safe-share-7b479.appspot.com",
  messagingSenderId: "723733900180",
  appId: "1:723733900180:web:99ac9a4a1d9d5f575bbd81",
  measurementId: "G-4TMLBE8W80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics conditionally
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized successfully.");
  } else {
    console.log("Firebase Analytics is not supported in this environment.");
  }
});
