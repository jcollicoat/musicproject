import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import { refreshSpotifyToken } from '@spotify/refresh';

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
        jwt: async ({ account, token }) => {
            if (account) {
                const expiryMs = account.expires_at
                    ? account.expires_at * 1000
                    : new Date().getTime() + 3600000; // One hour from now

                // Only happens on sign in
                token.spotifyToken = `Bearer ${account.access_token}`;
                token.spotifyExpires = expiryMs;
                token.spotifyRefresh = account.refresh_token ?? '';
            }

            // Happens whenever token is fetched
            let jwt = token;
            if (Date.now() > jwt.spotifyExpires) {
                jwt = await refreshSpotifyToken(jwt);
            }

            return jwt;
        },
    },
});

export { handler as GET, handler as POST };
