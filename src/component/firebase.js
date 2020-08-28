import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB99cOFoSpDIRDL5qmvYqMLc6danFfh6_I",
    authDomain: "routine-clone.firebaseapp.com",
    databaseURL: "https://routine-clone.firebaseio.com",
    projectId: "routine-clone",
    storageBucket: "routine-clone.appspot.com",
    messagingSenderId: "139202213453",
    appId: "1:139202213453:web:dd26880a3dc02633644e04",
    measurementId: "G-3C0DZDQZHV"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;