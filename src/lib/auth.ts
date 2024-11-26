import { jwtVerify, decodeProtectedHeader, importX509 } from "jose";
import { cookies } from "next/headers";

import { USER_TOKEN, TOKEN_API, ISSUER, AUDIENCE } from "./constants";

export class AuthError extends Error {}

/**
 * Verifies the user's JWT token and returns its payload if it's valid.
 */
export async function verifyAuth() {
    const token = (await cookies()).get(USER_TOKEN)?.value;

    if (!token) return undefined;

    const decodedToken = decodeProtectedHeader(token);

    try {
        const alg = decodedToken.alg;
        if (!alg) throw new AuthError("Decoded token missing `alg` property");

        const kid = decodedToken.kid;
        if (!kid) throw new AuthError("Decoded token `kid` property");

        const response = await fetch(TOKEN_API);
        if (!response.ok) {
            throw new AuthError(
                `Get Google Keys Response status: ${response.status}`
            );
        }

        const keys = await response.json();
        const x509 = keys[kid];

        const publicKey = await importX509(x509, alg);
        const verified = await jwtVerify(token, publicKey, {
            issuer: ISSUER,
            audience: AUDIENCE,
        });

        return verified.payload;
    } catch (err) {
        console.error(err, {
            method: "middleware",
            logs: "Error verifying token.",
        });
    }
}
