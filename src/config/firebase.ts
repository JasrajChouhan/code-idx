// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getEnv } from './getEnv';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: getEnv('VITE_API_KEY'),
  authDomain: getEnv('VITE_AUTH_DOMAIN'),
  projectId: getEnv('VITE_PROJECT_ID'),
  storageBucket: getEnv('VITE_STORATE_BUCKET'),
  messagingSenderId: getEnv('VITE_MESSAGING_SENDER_ID'),
  appId: getEnv('VITE_APP_ID'),
  measurementId: getEnv('VITE_MEASUREMENT_ID'),
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
