import React from 'react'

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyABnYIgQ_QCzvAlX6eJUj4FQjYIb3x-bS0",
    authDomain: "baghadratomser.firebaseapp.com",
    databaseURL: "https://baghadratomser.firebaseio.com",
    projectId: "baghadratomser",
    storageBucket: "baghadratomser.appspot.com",
    messagingSenderId: "475589375337",
    appId: "1:475589375337:web:3404d99e9956b2a587b9f8",
    measurementId: "G-FYZPNRY67P"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
// firebase analytics
firebase.analytics();






