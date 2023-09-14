// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: object = {
  apiKey: 'AIzaSyDT8k20nvtU2LtiGoDX1U0jabMBUMU0jqc',
  authDomain: 'resume-builder-fe1e8.firebaseapp.com',
  projectId: 'resume-builder-fe1e8',
  storageBucket: 'resume-builder-fe1e8.appspot.com',
  messagingSenderId: '181801943189',
  appId: '1:181801943189:web:a60c7e6b601e6bb18d1b9c',
  measurementId: 'G-00FGRBT3HE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
