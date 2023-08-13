import { JWT } from 'next-auth/jwt';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('Missing Spotify client details.');
}

export const refreshSpotifyToken = async (jwt: JWT): Promise<JWT> => {
    try {
        if (!jwt.refresh_token) {
            console.log('No Spotify refresh token, logging out');
            // TODO: Logout
        }

        console.log('Refreshing Spotify token');

        const basic = `Basic ${Buffer.from(
            `${CLIENT_ID}:${CLIENT_SECRET}`,
        ).toString('base64')}`;

        const response = await fetch(
            `https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${jwt.refresh_token}`,
            {
                method: 'POST',
                headers: new Headers({
                    Authorization: basic,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }),
            },
        );

        if (!response.ok) {
            console.log('Bad response from Spotify token refresh API');
            // TODO: handle
        }

        const refreshed = await response.json();

        const {
            access_token,
            expires_in, // in seconds
            refresh_token,
        } = refreshed;

        const expiryMs = Date.now() + expires_in ? expires_in * 1000 : 3600000; // One hour from now

        return {
            ...jwt,
            spotifyToken: `Bearer ${access_token}`,
            spotifyExpires: expiryMs,
            spotifyRefresh: refresh_token ?? '',
        };
    } catch (error) {
        console.error(`Failed to refresh Spotify token: ${error}`);
        return jwt;
    }
};
