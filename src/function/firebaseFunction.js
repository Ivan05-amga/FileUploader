import firebase from "firebase/app";
import "firebase/storage"
require("dotenv").config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECTED_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID
};

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();;

export {storage, firebase};