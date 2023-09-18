import firebase from 'firebase/app'; 
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqb5tehm7cWG0A9uneNYZmOJ39fpXIS64",
  authDomain: "react-hooks-blog-2cd98.firebaseapp.com",
  projectId: "react-hooks-blog-2cd98",
  storageBucket: "react-hooks-blog-2cd98.appspot.com",
  messagingSenderId: "182027058267",
  appId: "1:182027058267:web:38b4b8e303d4f762bbd37e"
};

// Initialize Firebase
if (!firebase.apps.length) {  
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();