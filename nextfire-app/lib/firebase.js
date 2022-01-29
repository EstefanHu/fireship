import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCmcTgZo0EJ-ssg_xE_kVDhupAaxUi9K7k",
    authDomain: "next-firebase-6660c.firebaseapp.com",
    projectId: "next-firebase-6660c",
    storageBucket: "next-firebase-6660c.appspot.com",
    messagingSenderId: "176878511397",
    appId: "1:176878511397:web:f119665fb1bcbc61ffa6cc"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();