'use server'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";

import app from "@/app/lib/firebase"
import { createSession } from "../lib/session";

export async function login(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const auth = getAuth(app);
    console.log(`Attempting sign-in for ${email}`);
    try {
        const credential = await signInWithEmailAndPassword(auth, email, password);
        const token = await credential.user.getIdToken();
        await createSession(token);
    }
    catch (error) {
        console.log(`Error signing in ${email}.`)
        console.log(error);
        throw error;
    }

    redirect('/dashboard');
}