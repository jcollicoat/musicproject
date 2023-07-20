import { NextRequest, NextResponse } from 'next/server';

const ENV = process.env.NODE_ENV;

const oneHour = new Date().getTime() + 3600000;

export function middleware(request: NextRequest) {
    const next = NextResponse.next({ request });

    if (ENV === 'development') {
        const spotify_token = request.headers.get('authorization');
        spotify_token &&
            next.cookies.set({
                name: 'spotify_token',
                value: spotify_token,
                expires: oneHour,
                httpOnly: true,
            });
    }

    return next;
}

export const config = {
    matcher: ['/api/:path*'],
};
