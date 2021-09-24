import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCYPDwLVXfUtCL33ESlvpe9_DvH0pbj83U",
  authDomain: "proyecto-react-2bcc5.firebaseapp.com",
  projectId: "proyecto-react-2bcc5",
  storageBucket: "proyecto-react-2bcc5.appspot.com",
  messagingSenderId: "98913946360",
  appId: "1:98913946360:web:156168bc882c333825490d"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)