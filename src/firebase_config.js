import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsgWC1w9Tuqh_ey2AHxkTIgBoSB0Ei42c",
  authDomain: "shopping-cart-c8c59.firebaseapp.com",
  projectId: "shopping-cart-c8c59",
  storageBucket: "shopping-cart-c8c59.appspot.com",
  messagingSenderId: "1005392118183",
  appId: "1:1005392118183:web:a691043dd207f044903682"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
