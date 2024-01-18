// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { collection, addDoc,getFirestore } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwvu9yiuZ2FrlNBMwYSPajHCQoLPkOeGs",
  authDomain: "olxloginsignup.firebaseapp.com",
  projectId: "olxloginsignup",
  storageBucket: "olxloginsignup.appspot.com",
  messagingSenderId: "197422948256",
  appId: "1:197422948256:web:418773853af0f49c890ec5",
  measurementId: "G-MF0H38YVNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function Register(si){
  try{
    const {name, email, password} = si
    await createUserWithEmailAndPassword(auth, email, password)
    alert("User Registered")
    return true
  }catch(e){
    const errorMessage = e.message;
    alert(errorMessage)
  }
}
export async function SignIn(si){
  try{
    const {email, password} = si
    await signInWithEmailAndPassword(auth, email, password)
    alert("User login SuccessFully")
    return true
  }catch(e){
    const errorMessage = e.message;
      alert(errorMessage)
  }
  
}

export async function AddProduct(prod){
  try{
    await addDoc(collection(db, "products"), prod);
    alert("Product added Successfully")
  }catch(e){
    alert(e.Message)
  }
}