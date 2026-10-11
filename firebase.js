
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPMHCStIpqHywdHNqKp3CsseI9MWqq3e0",
  authDomain: "qr-menu-system-fcb72.firebaseapp.com",
  projectId: "qr-menu-system-fcb72",
  storageBucket: "qr-menu-system-fcb72.firebasestorage.app",
  messagingSenderId: "545727512590",
  appId: "1:545727512590:web:6a2b382d85fd189e5b7c5f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
