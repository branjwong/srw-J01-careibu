import "server-only";

import { cookies } from "next/headers";
import { USER_TOKEN } from "@/lib/constants";

export async function createSession(token: string) {
    console.log("Saving session.");
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    (await cookies()).set(USER_TOKEN, token, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
    });
}
