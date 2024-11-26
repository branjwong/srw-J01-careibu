import { jwtVerify, decodeProtectedHeader, importX509 } from "jose";
import { cookies } from "next/headers";

export const USER_TOKEN = "user-token";

// interface UserJwtPayload {
//     iss: string,
//     aud: string,
//     auth_time: number,
//     user_id: string,
//     sub: string,
//     iat: number,
//     exp: number,
//     email: string,
//     email_verified: boolean,
//     firebase: object,
//     sign_in_provider: string
// }

export class AuthError extends Error {}

/**
 * Verifies the user's JWT token and returns its payload if it's valid.
 */
export async function verifyAuth() {
    const token = (await cookies()).get(USER_TOKEN)?.value;

    if (!token) throw new AuthError("Missing user token");

    const decodedToken = decodeProtectedHeader(token);

    const alg = decodedToken.alg;
    if (!alg) throw new AuthError("Missing alg");

    const kid = decodedToken.kid;
    if (!kid) throw new AuthError("Missing kid");

    const response = await fetch(
        "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com"
    );
    if (!response.ok) {
        throw new Error(`Get Google Keys Response status: ${response.status}`);
    }

    const keys = await response.json();
    const x509 = keys[kid];

    try {
        const publicKey = await importX509(x509, alg);
        const verified = await jwtVerify(
            token,
            publicKey
            // {
            //     issuer: "https://securetoken.google.com/careibu-login",
            //     audience: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-w1a9x%40careibu-login.iam.gserviceaccount.com"
            // }
        );
        return verified.payload; // as UserJwtPayload
    } catch (err) {
        console.error(err, {
            method: "middleware",
            logs: "Error verifying token.",
        });
    }
}
