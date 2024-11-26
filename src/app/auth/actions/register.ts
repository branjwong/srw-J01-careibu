"use server";

import { FirebaseError } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";

import app from "@/app/lib/firebase";
import { createSession } from "@/app/lib/session";

/**
 * A server action that registers a user. The server retrieves a token from the Firebase authentication server and packages it as a session.
 */
export default async function register(prevState: any, formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const auth = getAuth(app);
    console.log(`[auth] Attempting registration for ${email}`);

    try {
        const credential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const token = await credential.user.getIdToken();
        await createSession(token);
    } catch (error) {
        if (
            error instanceof FirebaseError &&
            error.code == "auth/weak-password"
        )
            return {
                message:
                    "The password you’ve entered is too weak. Try another password.",
            };

        if (
            error instanceof FirebaseError &&
            error.code == "auth/email-already-in-use"
        )
            return {
                message: "The email you’ve entered is already in use.",
            };

        console.error(error, {
            method: "auth.login",
            logs: `Error signing in ${email}.`,
        });

        return {
            message: "An error occurred while registering your account.",
        };
    }

    redirect("/dashboard");
}
