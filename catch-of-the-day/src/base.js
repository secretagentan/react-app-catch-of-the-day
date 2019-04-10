import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCkMwsPZxa_-Bo_HasNfG9RTSJ0ePdhZH0",
  authDomain: "react-app-catch-of-the-day-an.firebaseapp.com",
  databaseURL: "https://react-app-catch-of-the-day-an.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
