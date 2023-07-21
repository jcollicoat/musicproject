import axios from 'axios';
import { cookies } from 'next/headers';
import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('Missing Spotify client details.');
}

const oneHour = new Date().getTime() + 3600000;

const scope =
    'user-library-read user-follow-read user-read-playback-state user-read-email user-read-recently-played user-read-private';

const refreshToken = async (token: JWT) => {
    try {
        if (!token.refresh_token) {
            console.log('No Spotify refresh token');
            return token;
        }

        console.log('Attempting to refresh Spotify token');
        const endpoint = 'https://accounts.spotify.com/api/token';
        const basic = `Basic ${Buffer.from(
            `${CLIENT_ID}:${CLIENT_SECRET}`,
        ).toString('base64')}`;

        const response = await axios.post(
            endpoint,
            new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: token.refresh_token,
            }).toString(),
            {
                headers: {
                    Authorization: basic,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        );

        return {
            ...token,
            spotify_token: response.data.access_token,
            expires: Date.now() + response.data.expires_in * 1000,
        };
    } catch (error) {
        console.error(`Failed to refresh Spotify token: ${error}`);
        return {
            ...token,
        };
    }
};

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
        // eslint-disable-next-line require-await
        jwt: async ({ account, token }) => {
            if (account) {
                token.spotify_token = account.access_token;
                token.expires = account.expires_at;
                token.refresh_token = account.refresh_token;
            }

            let jwt = token;
            if (token.expires && Date.now() > token.expires) {
                jwt = await refreshToken(token);
            }

            jwt.spotify_token &&
                cookies().set({
                    name: 'spotify_token',
                    value: `Bearer ${jwt.spotify_token}`,
                    expires: jwt.expires ?? oneHour,
                    httpOnly: true,
                });

            return jwt;
        },
    },
});

export { handler as GET, handler as POST };
