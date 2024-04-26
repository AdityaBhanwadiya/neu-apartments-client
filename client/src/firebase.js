// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log("AIzaSyARIsQq2SqkZBXOBexlVEDLYOCz1l4-TJs");
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARIsQq2SqkZBXOBexlVEDLYOCz1l4-TJs",
  authDomain: "mern-estate-59007.firebaseapp.com",
  projectId: "mern-estate-59007",
  storageBucket: "boston-estate.appspot.com",
  messagingSenderId: "703278295363",
  appId: "1:703278295363:web:11cdcc43d66b3cb6c367f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };