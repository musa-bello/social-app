import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCIIUMc9ev1XdgCTY7C9OTnLDdWxU4EL0I",
    authDomain: "media-app-49f7a.firebaseapp.com",
    databaseURL: "https://media-app-49f7a.firebaseio.com",
    projectId: "media-app-49f7a",
    storageBucket: "media-app-49f7a.appspot.com",
    messagingSenderId: "968935401000",
    appId: "1:968935401000:web:e342fe23737353ce83b71d"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  
  export default firebase