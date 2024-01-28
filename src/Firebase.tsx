// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyB1UdOJpGY_IxW_GXONZMnklL48sUU991k",

  authDomain: "csi-vitap-8c663.firebaseapp.com",

  projectId: "csi-vitap-8c663",

  storageBucket: "csi-vitap-8c663.appspot.com",

  messagingSenderId: "959474144440",

  appId: "1:959474144440:web:b1d4e79964e4d2e0e6104d",

  measurementId: "G-GL4CR5YFEH"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
