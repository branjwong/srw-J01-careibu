import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.js"

console.log(app);

const email = "branjwong@hey.com";
const password = "1234test"

const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log(`Signed up ${email}.`)
    console.log(user);
  })
  .catch((error) => {
    console.log(`Error signing up ${email}.`)
    console.log(error);
  });