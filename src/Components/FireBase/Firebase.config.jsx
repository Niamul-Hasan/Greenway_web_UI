// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCp3Lcc12DwiXqzn0fBFyViekiIb9pOd-I",
    authDomain: "green-way-web.firebaseapp.com",
    projectId: "green-way-web",
    storageBucket: "green-way-web.appspot.com",
    messagingSenderId: "366163946629",
    appId: "1:366163946629:web:ab79394e8016abd32b8dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;