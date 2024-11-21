import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.js"

const email = "branjwong@hey.com";
const password = "1234test"

const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(`Signed in ${email}.`)
    console.log(user);
  })
  .catch((error) => {
    console.log(`Error signing in ${email}.`)
    console.log(error);
  });

