// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBxpSXWiAQwedyVrUECyOWiE11WAO-jF7I',
  authDomain: 'task-app-b80d4.firebaseapp.com',
  projectId: 'task-app-b80d4',
  storageBucket: 'task-app-b80d4.appspot.com',
  messagingSenderId: '621924404714',
  appId: '1:621924404714:web:798b56e2227bf5b4ce3693',
  measurementId: 'G-KG27D582CM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore();
