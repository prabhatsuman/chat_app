
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChAnegSGp1G_AtX75OHSj7BFN6tRFPdfE",
  authDomain: "group-chat-app-c3664.firebaseapp.com",
  projectId: "group-chat-app-c3664",
  storageBucket: "group-chat-app-c3664.appspot.com",
  messagingSenderId: "480815429436",
  appId: "1:480815429436:web:b3d6fdece8c62dc9385039",
  measurementId: "G-Z0P3ZDHLRK"
  };


  //this special line of code connects everything
const firebaseApp = firebase.initializeApp(firebaseConfig);



//this is for database connection
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider}
export default db;