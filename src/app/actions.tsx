'use server'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import app from "./firebase.js"

export async function login(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const auth = getAuth(app);
    console.log(`Attempting sign-in for ${email}`);
    signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            console.log(`Error signing in ${email}.`)
            console.log(error);
        });
}