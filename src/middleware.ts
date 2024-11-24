import { NextRequest, NextResponse } from 'next/server'

import { verifyAuth } from '@/lib/auth'

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/signup', '/']


export default async function middleware(req: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    console.log("[middleware] Accessing page:", path);

    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. Decrypt the session from the cookie
    const token = await verifyAuth().catch((err) => {
        console.error(err.message)
    })
    const user = token;
    console.log("user token", user);

    // 4. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !user) {
        console.log("[middleware] Rerouting to login.")
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 5. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        user &&
        !req.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}