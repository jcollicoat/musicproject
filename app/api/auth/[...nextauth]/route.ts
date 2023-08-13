import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import { refreshSpotifyInJwt, spotifyTokenIsExpired } from '@spotify/refresh';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('Missing Spotify client details.');
}

const scope =
    'user-library-read user-follow-read user-read-playback-state user-read-email user-read-recently-played user-read-private';

const handler = NextAuth({
    providers: [
        SpotifyProvider({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            authorization: {
                params: {
                    scope,
                },
            },
        }),
    ],
    callbacks: {
        // Set JWT on sign in
        jwt: async ({ account, token }) => {
            if (account) {
                const {
                    access_token: spotifyTokenNoBearer,
                    expires_at: spotifyTokenExpiresAtSeconds,
                    refresh_token: spotifyRefreshToken,
                } = account;

                if (!spotifyTokenNoBearer) {
                    throw new Error('No Spotify token on login');
                }

                token.spotifyToken = `Bearer ${spotifyTokenNoBearer}`;
                token.spotifyTokenExpiresAt =
                    spotifyTokenExpiresAtSeconds ??
                    Math.floor(Date.now() / 1000);
                token.spotifyRefreshToken = spotifyRefreshToken;
            }

            let jwt = token;
            if (spotifyTokenIsExpired(jwt.spotifyTokenExpiresAt)) {
                jwt = await refreshSpotifyInJwt(jwt);
            }

            return jwt;
        },
    },
});

export { handler as GET, handler as POST };
