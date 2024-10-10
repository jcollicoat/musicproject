import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { refreshSpotifyInJwt, spotifyTokenIsExpired } from 'spotify/refresh';
import { errorResponse } from 'utilities';

const secret = process.env.NEXTAUTH_SECRET;

const authRoutes = ['/albums', '/artists', '/my-music', '/tracks'];

export async function middleware(request: NextRequest) {
    // Stop strange requests to /undefined
    if (request.url.includes('undefined')) {
        return NextResponse.redirect(new URL('/', request.url));
    }
    // Need to ensure this works in deployed envs

    try {
        let jwt = await getToken({ req: request, secret });
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
            if (spotifyTokenIsExpired(jwt.spotifyTokenExpiresAt)) {
                console.log(
                    `Refreshing spotifyToken in middleware for route: ${request.url}`,
                );
                jwt = await refreshSpotifyInJwt(jwt);
            }

            // Update spotifyCookie if jwt has different spotifyToken value
            if (jwt.spotifyToken !== spotifyCookie) {
                const cookie = {
                    name: 'spotify',
                    value: jwt.spotifyToken,
                    expires: Math.floor(jwt.spotifyTokenExpiresAt * 1000), // Cookie needs to be set in ms
                    httpOnly: true,
                };

                request.cookies.set(cookie);
                const next = NextResponse.next({ request });
                next.cookies.set(cookie);
                return next;
            }
        }

        return NextResponse.next({ request });
    } catch (error) {
        return errorResponse(error);
    }
}
