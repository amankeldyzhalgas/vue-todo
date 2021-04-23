import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJXK6PCWMpCKp9ZEy8dK5HX1stEcTKWh0",
    authDomain: "todolistapp-b4432.firebaseapp.com",
    databaseURL: "https://todolistapp-b4432.firebaseio.com",
    projectId: "todolistapp-b4432",
    storageBucket: "todolistapp-b4432.appspot.com",
    messagingSenderId: "250554419997",
    appId: "1:250554419997:web:3fbef096399df46de76ff4"
  };
  // Initialize Firebase
  export const db =  firebase.initializeApp(firebaseConfig).firestore();