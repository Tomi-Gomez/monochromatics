import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeHKjWqblfYTh_-gJFjKhAVujoJ0ingYE",
  authDomain: "proyect-react-ecom.firebaseapp.com",
  projectId: "proyect-react-ecom",
  storageBucket: "proyect-react-ecom.appspot.com",
  messagingSenderId: "941376842070",
  appId: "1:941376842070:web:ef0dac06af76a98dae4ef7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);