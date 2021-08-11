import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAT68ra0rVqIHW2pV_DieHRWlUsjMFOCD4",

  authDomain: "letmeask-45b8c.firebaseapp.com",

  databaseURL: "https://letmeask-45b8c-default-rtdb.firebaseio.com",

  projectId: "letmeask-45b8c",

  storageBucket: "letmeask-45b8c.appspot.com",

  messagingSenderId: "591929900069",

  appId: "1:591929900069:web:3fc3c96e17280a723f93cc"

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
