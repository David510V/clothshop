import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyB11f1PgXg8rfxqMC4Nm9Htxuc1hocZqpc",
  authDomain: "colthme.firebaseapp.com",
  databaseURL: "https://colthme.firebaseio.com",
  projectId: "colthme",
  storageBucket: "colthme.appspot.com",
  messagingSenderId: "658112373058",
  appId: "1:658112373058:web:c3e6c73fb8da7b67c428db",
  measurementId: "G-K5Q1RS3N16"
  };
  // Initialize Firebase
  const firebaseapp=firebase.initializeApp(firebaseConfig);

  const FireStore =firebaseapp.firestore()

  FireStore.settings({timestampsInSnapshots:true})

  export default FireStore