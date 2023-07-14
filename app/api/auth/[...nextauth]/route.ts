import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
    throw new Error('Missing Spotify client details.');
}

const handler = NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: 'user-library-read user-follow-read user-read-playback-state user-read-email user-read-recently-played user-read-private',
                },
            },
        }),
    ],
    callbacks: {
        // eslint-disable-next-line require-await
        jwt: async ({ account, token }) => {
            if (account) {
                token.access_token = account.access_token;
                token.refresh_token = account.refresh_token;
                token.expires = account.expires_at;
            }

            return token;
        },
    },
});

export { handler as GET, handler as POST };
