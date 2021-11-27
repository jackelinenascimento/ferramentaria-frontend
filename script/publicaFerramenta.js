// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk-xTMy1CoKjAXxvwkQ32FWmOAzA_-m80",
  authDomain: "ferramentaria-app.firebaseapp.com",
  projectId: "ferramentaria-app",
  storageBucket: "ferramentaria-app.appspot.com",
  messagingSenderId: "618914192484",
  appId: "1:618914192484:web:7c611d459645ea956e9371",
  measurementId: "G-FNRZW6BE8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);