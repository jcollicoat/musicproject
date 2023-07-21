import { NextRequest, NextResponse } from 'next/server';

const ENV = process.env.NODE_ENV;

const oneHour = new Date().getTime() + 3600000;

export function middleware(request: NextRequest) {
    if (ENV === 'development' && !request.cookies.has('spotify_token')) {
        const spotify_token = request.headers.get('authorization');
        if (spotify_token) {
            // Set cookie for this request
            request.cookies.set({
                name: 'spotify_token',
                value: spotify_token,
            });

            // Set cookie in response
            const nextWithCookie = NextResponse.next({ request });
            nextWithCookie.cookies.set({
                name: 'spotify_token',
                value: spotify_token,
                expires: oneHour,
                httpOnly: true,
            });
            return nextWithCookie;
        }
    }

    return NextResponse.next({ request });
}

export const config = {
    matcher: ['/api/((?!auth).*)'],
};
