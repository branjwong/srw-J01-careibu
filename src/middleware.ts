import { NextRequest, NextResponse } from "next/server";

import { verifyAuth } from "@/lib/auth";

const protectedRoutes = ["/dashboard", "/logout"];
const publicRoutes = ["/login", "/register", "/"];

/**
 * On every request, this middleware is run to:
 * - check if the user has a valid token for protected routes
 * - redirect from dashboard to login if no token possessed
 * - redirect from public routes to dashboard if token possessed
 */
export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    console.log("[middleware] Accessing page:", path);

    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    // Decrypt the session from the cookie
    const token = await verifyAuth();
    const user = token;

    // Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !user) {
        console.log("[middleware] Rerouting to login.");
        return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
    }

    // Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        user &&
        !req.nextUrl.pathname.startsWith("/dashboard")
    ) {
        console.log("[middleware] Rerouting to dashboard.");
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }

    return NextResponse.next();
}
