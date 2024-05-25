// Import the functions you need from the SDKs you need
import { initializeApp } from '@react-native-firebase/app';
import { getStorage } from '@react-native-firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNEHlLYhcyJI2cbUwQKTNQnIEN9BJgC1Y",
  authDomain: "abstract-hydra-423208-u4.firebaseapp.com",
  projectId: "abstract-hydra-423208-u4",
  storageBucket: "placify-bucket-normal",
  messagingSenderId: "864682425402",
  appId: "1:864682425402:web:d43104b7e4f492cbab0903",
  measurementId: "G-V1VDQFMBZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export storage
const storage = getStorage(app);

export { storage };
