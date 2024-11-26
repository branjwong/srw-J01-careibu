"use server";

import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";

import app from "@/app/lib/firebase";
import { createSession } from "@/app/lib/session";

import { State } from "./types";

/**
 * A server action that logs a user in. The server retrieves a token from the Firebase authentication server and packages it as a session.
 */
export default async function login(prevState: any, formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const auth = getAuth(app);
    console.log(`[auth] Attempting sign-in for ${email}`);

    try {
        const credential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const token = await credential.user.getIdToken();
        await createSession(token);
    } catch (error) {
        if (
            error instanceof FirebaseError &&
            error.code == "auth/invalid-credential"
        )
            return { message: "The password you’ve entered is incorrect." };

        console.error(error, {
            method: "auth.login",
            logs: `Error signing in ${email}.`,
        });

        return {
            message: "An error occurred while logging into your account.",
        } as State;
    }

    redirect("/dashboard");
}
