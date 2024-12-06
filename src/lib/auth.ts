// Reference: https://firebase.google.com/docs/auth/admin/verify-id-tokens

import { jwtVerify, decodeProtectedHeader, importX509, JWTPayload } from "jose";
import { cookies } from "next/headers";

import { USER_TOKEN, TOKEN_API, ISSUER, AUDIENCE } from "./constants";

export class AuthError extends Error {}

/**
 * Verifies the user's JWT token and returns its payload if it's valid.
 * @returns {Promise<JWTPayload | undefined>} a JWT token, if found and valid
 */
export async function verifyAuth(): Promise<JWTPayload | undefined> {
    // Get token from brower's cookies.
    const token = (await cookies()).get(USER_TOKEN)?.value;

    if (!token) return undefined;

    const decodedToken = decodeProtectedHeader(token);

    try {
        // Ensure algorithm token header claim present
        const alg = decodedToken.alg;
        if (!alg) throw new AuthError("Decoded token missing `alg` property");

        // Ensure KeyID token header claim present
        const kid = decodedToken.kid;
        if (!kid) throw new AuthError("Decoded token `kid` property");

        // Get public keys from Google
        const googleKeysResponse = await fetch(TOKEN_API);
        if (!googleKeysResponse.ok) {
            throw new AuthError(
                `Get Google Keys Response status: ${googleKeysResponse.status}`
            );
        }

        const keys = await googleKeysResponse.json();

        // Use X.509 string certificate for token's KeyID
        const x509 = keys[kid];

        // Use public key for token's KeyID and algorithm
        const publicKey = await importX509(x509, alg);

        // Check token validity
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
