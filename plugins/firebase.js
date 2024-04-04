User
import { initializeApp } from "firebase/app";
import {  useAuth, } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAqxF0sQ3AScQU5tTPmgzALIhabemP5hu0",
  authDomain: "nuxt3-api-products.firebaseapp.com",
  projectId: "nuxt3-api-products",
  storageBucket: "nuxt3-api-products.appspot.com",
  messagingSenderId: "952046553310",
  appId: "1:952046553310:web:cb45b39c6446f9cb699a4f",
  measurementId: "G-LGX2F5LHQY"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = useAuth(app);