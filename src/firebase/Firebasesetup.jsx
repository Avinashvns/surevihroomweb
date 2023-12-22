
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_X6DZ7dTZRkDMtuA-PobOvwLGx6ohPsE",
    authDomain: "surevihroomweb.firebaseapp.com",
    projectId: "surevihroomweb",
    storageBucket: "surevihroomweb.appspot.com",
    messagingSenderId: "846553975236",
    appId: "1:846553975236:web:82d69dd505e7bc0744bc91",
    measurementId: "G-7G9ECJH73Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;