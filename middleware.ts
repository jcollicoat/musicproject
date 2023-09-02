import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

const authRoutes = ['/albums', '/artists', '/me', '/tracks'];

export async function middleware(request: NextRequest) {
    // TODO: This doesn't work when session is revived after a long time - Spotify token is invalid
    const jwt = await getToken({ req: request, secret });
    const spotifyCookie = request.cookies.get('spotify')?.value;

    if (!jwt) {
        // Redirect auth routes to home
        const isAuthRoute = authRoutes.some((route) =>
            request.nextUrl.pathname.includes(route),
        );
        if (isAuthRoute) {
            return NextResponse.redirect(new URL('/', request.url));
        }

        // Clean up spotifyCookie if user has signed out
        if (spotifyCookie) {
            request.cookies.delete('spotify');
            const next = NextResponse.next({ request });
            next.cookies.delete('spotify');
            return next;
        }
    } else {
        const { spotifyToken, spotifyTokenExpiresAt } = jwt;

        console.log('spotifyToken in middleware.ts:', spotifyToken);
        console.log(
            'spotifyTokenExpiresAt in middleware.ts:',
            spotifyTokenExpiresAt,
        );

        // Update spotifyCookie if jwt has different spotifyToken value
        if (spotifyToken !== spotifyCookie) {
            const cookie = {
                name: 'spotify',
                value: spotifyToken,
                expires: Math.floor(spotifyTokenExpiresAt * 1000), // Cookie set in ms
                httpOnly: true,
            };

            request.cookies.set(cookie);
            const next = NextResponse.next({ request });
            next.cookies.set(cookie);
            return next;
        }
    }

    return NextResponse.next({ request });
}
