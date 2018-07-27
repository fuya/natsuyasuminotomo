import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAPNE3Q5qxS9VEpNM6ZjjQhBcyUkZn0SsI",
    authDomain: "myscrap-3ae37.firebaseapp.com",
    databaseURL: "https://myscrap-3ae37.firebaseio.com",
    projectId: "myscrap-3ae37",
    storageBucket: "myscrap-3ae37.appspot.com",
    messagingSenderId: "1017667156795"
  });
  firebase.firestore().settings({
    timestampsInSnapshots: true
  });
}

export default firebase;
