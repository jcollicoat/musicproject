import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(request: NextRequest) {
    const jwt = await getToken({ req: request, secret });
    if (!jwt) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // if (!request.cookies.has('spotify_token')) {
    //     const jwt = await refreshSpotifyToken(token);

    //     if (typeof jwt.spotify_token !== 'string') {
    //         throw new Error('Could not automatically refresh spotify_token');
    //     }

    //     // Set cookie for this request
    //     request.cookies.set({
    //         name: 'spotify_token',
    //         value: jwt.spotify_token,
    //     });

    //     // Set cookie in response
    //     const nextWithCookie = NextResponse.next({ request });
    //     nextWithCookie.cookies.set({
    //         name: 'spotify_token',
    //         value: jwt.spotify_token,
    //         expires: oneHour,
    //         httpOnly: true,
    //     });
    //     return nextWithCookie;
    // }

    return NextResponse.next({ request });
}

export const config = {
    matcher: [
        '/albums/(.*)',
        '/artists/(.*)',
        '/playlists/(.*)',
        '/search',
        '/tracks/(.*)',
        '/user/(.*)',
    ],
};
