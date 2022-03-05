import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDf1uWmXjna5iAcUKkcpdPUPfMpXjn4OTg",
    authDomain: "messenger-clone-d60db.firebaseapp.com",
    projectId: "messenger-clone-d60db",
    storageBucket: "messenger-clone-d60db.appspot.com",
    messagingSenderId: "973448155176",
    appId: "1:973448155176:web:b92160c29efa71b567251d"
}).auth();


