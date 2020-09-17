import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAwYKzfTLQBoGe7fcR3BvifOtfG0zmxgL4",
        authDomain: "loop-messenger-28d5c.firebaseapp.com",
        databaseURL: "https://loop-messenger-28d5c.firebaseio.com",
        projectId: "loop-messenger-28d5c",
        storageBucket: "loop-messenger-28d5c.appspot.com",
        messagingSenderId: "459496085338",
        appId: "1:459496085338:web:e80c96ce8d83631730c563",
        measurementId: "G-0KVMWY1ZRL"
    }
);

const db = firebaseApp.firestore();

export default db;

