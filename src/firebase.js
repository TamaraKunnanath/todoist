import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAgcdnNTt8lcXMiFkC__Cie5s-Q4lQiz7U",
    authDomain: "todoist-a0039.firebaseapp.com",
    databaseURL: "https://todoist-a0039.firebaseio.com",
    projectId: "todoist-a0039",
    storageBucket: "todoist-a0039.appspot.com",
    messagingSenderId: "327196804814",
    appId: "1:327196804814:web:d573c4dd6c6268b53d729f",
});

export { firebaseConfig as firebase };
