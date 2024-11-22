import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase.js"

const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(`Signed in ${uid}.`)
  } else {
    console.log(`User signed out.`)
  }
});

const email = "branjwong@hey.com";
const password = "1234test"

signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    console.log(`Error signing in ${email}.`)
    console.log(error);
  });

signOut(auth);
