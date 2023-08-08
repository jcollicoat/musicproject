import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

const authRoutes = ['/albums', '/artists', '/me', '/tracks'];

export async function middleware(request: NextRequest) {
    const jwt = await getToken({ req: request, secret });

    if (authRoutes.some((route) => request.nextUrl.pathname.includes(route))) {
        if (!jwt) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    if (jwt) {
        if (!request.cookies.has('spotifyToken')) {
            // Set cookie for this request
            request.cookies.set({
                name: 'spotifyToken',
                value: jwt.spotifyToken,
            });
        }

        // Set cookie in response
        const nextWithCookie = NextResponse.next({ request });
        nextWithCookie.cookies.set({
            name: 'spotifyToken',
            value: jwt.spotifyToken,
            expires: jwt.spotifyExpires,
            httpOnly: true,
        });
        return nextWithCookie;
    }

    return NextResponse.next({ request });
}
