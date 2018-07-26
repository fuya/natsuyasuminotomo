import firebase from 'firebase';
import 'firebase/database';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyA88P6kZnNgkhGIMxj3R8gycPKOaBzrUOQ",
    authDomain: "bookmark-7545f.firebaseapp.com",
    databaseURL: "https://bookmark-7545f.firebaseio.com",
    projectId: "bookmark-7545f",
    storageBucket: "bookmark-7545f.appspot.com",
    messagingSenderId: "54828696522"
  })
}

export default firebase;