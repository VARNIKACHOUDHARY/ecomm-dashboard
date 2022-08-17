
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu1cscy82QNAWQx3frS4blKgUkip7UbHw",
  authDomain: "e-cart-258ea.firebaseapp.com",
  projectId: "e-cart-258ea",
  storageBucket: "e-cart-258ea.appspot.com",
  messagingSenderId: "909077083852",
  appId: "1:909077083852:web:cf58c651169eba854bf469",
  measurementId: "G-C8VD0B8RT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);


export default fireDB 