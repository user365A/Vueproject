
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBIqDmHuFR3ZSlBtCNjHt8fqpgM1gmCBeY",
  authDomain: "vuejs-28b7e.firebaseapp.com",
  projectId: "vuejs-28b7e",
  storageBucket: "vuejs-28b7e.appspot.com",
  messagingSenderId: "858191888264",
  appId: "1:858191888264:web:4158419844aaf20f38043d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const productsColRef =collection(db,"products");

const auth = getAuth(app)

export  {auth,productsColRef} ;