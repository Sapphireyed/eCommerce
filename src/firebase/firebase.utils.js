import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCbBR29UmV9iWHiZpPcnJLuvT-aqurVck8",
    authDomain: "crwn-db-e281f.firebaseapp.com",
    projectId: "crwn-db-e281f",
    storageBucket: "crwn-db-e281f.appspot.com",
    messagingSenderId: "323750054532",
    appId: "1:323750054532:web:99ba036f1860d8b85fd0d1",
    measurementId: "G-HK1HMGEQ85"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const google = new firebase.auth.GoogleAuthProvider();
google.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(google);

export default firebase;