import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyBWVotIkk1JsBPgc2zh5qTgxnP4Jho1WpQ",
    authDomain: "theslacker-4f1ad.firebaseapp.com",
    databaseURL: "https://theslacker-4f1ad.firebaseio.com",
    projectId: "theslacker-4f1ad",
    storageBucket: "theslacker-4f1ad.appspot.com",
    messagingSenderId: "240877171712",
    appId: "1:240877171712:web:85187f53dbc079b09014e5",
    measurementId: "G-SMQMN091S7",
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
  firebase,
  db
}
