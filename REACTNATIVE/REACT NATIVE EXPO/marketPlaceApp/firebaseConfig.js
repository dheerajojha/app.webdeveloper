// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA33TGaXDwoiFBnZeo2U3q7e_RcmzduO0k",
  authDomain: "marketplaceapp-6d26f.firebaseapp.com",
  projectId: "marketplaceapp-6d26f",
  storageBucket: "marketplaceapp-6d26f.appspot.com",
  messagingSenderId: "485927632810",
  appId: "1:485927632810:web:9be3c615168aaa5b72f5d3",
  measurementId: "G-L0D3L24XH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}