import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBs7LN36IaLhaOYGgoaVklZajNHtgvpWYo",
    authDomain: "team-voting-acca8.firebaseapp.com",
    projectId: "team-voting-acca8",
    storageBucket: "team-voting-acca8.appspot.com",
    messagingSenderId: "924233392010",
    appId: "1:924233392010:web:0e985ee4d80e67dc567273",
    measurementId: "G-G0L17F020V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();