import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYU7EJuRiP06ayzPCNhYvupMTAW0LdBjY",
  authDomain: "disneyplus-clone-a403e.firebaseapp.com",
  projectId: "disneyplus-clone-a403e",
  storageBucket: "disneyplus-clone-a403e.appspot.com",
  messagingSenderId: "1082035194560",
  appId: "1:1082035194560:web:f4acb9e2d2e97255a1fb25",
  measurementId: "G-PB3FWYZV3T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
