import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAMxwAFTUXaI6JQq6QUCMRAO5FgKVGQYsI",
  authDomain: "miniblog-eb4a7.firebaseapp.com",
  projectId: "miniblog-eb4a7",
  storageBucket: "miniblog-eb4a7.appspot.com",
  messagingSenderId: "519223245077",
  appId: "1:519223245077:web:bd412b63525f7b1cd5511c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}