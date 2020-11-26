import firebase from 'firebase';

const firebaseConfig = {
          apiKey: "AIzaSyDn1lb5lws3lKoUT4-Y-tFErQmnrJUHU-0",
          authDomain: "nextgt.firebaseapp.com",
          databaseURL: "https://nextgt.firebaseio.com",
          projectId: "nextgt",
          storageBucket: "nextgt.appspot.com",
          messagingSenderId: "231911838354",
          appId: "1:231911838354:web:5dfe502b48fa6d6e15cc4b",
          measurementId: "G-LJLJY74DT7"
        }

const app = firebase.initializeApp(firebaseConfig);
// console.log(app)
const database = app.database()
// console.log(database)
export const fundsRef = database.ref()

// rootRef.once('value').then(snapshot => console.log(snapshot.val()))

