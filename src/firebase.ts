import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'my-contacts-27cc7.firebaseapp.com',
  projectId: 'my-contacts-27cc7',
  storageBucket: 'my-contacts-27cc7.appspot.com',
  messagingSenderId: '323409419800',
  appId: '1:323409419800:web:38fac735d9ed1388642d6d',
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
