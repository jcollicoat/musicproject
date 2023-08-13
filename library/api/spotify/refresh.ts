import { JWT } from 'next-auth/jwt';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('Missing Spotify client details.');
}

export const spotifyTokenIsExpired = (expiry: number) =>
    Math.floor(Date.now() / 1000) > expiry;

export const refreshSpotifyInJwt = async (jwt: JWT): Promise<JWT> => {
    try {
        if (!jwt.spotifyRefreshToken) {
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
            access_token: spotifyTokenNoBearer,
            expires_in: spotifyExpiresInSeconds, // Usually 3600
            refresh_token: spotifyRefreshToken,
        } = refreshed;

        return {
            ...jwt,
            spotifyToken: `Bearer ${spotifyTokenNoBearer}`,
            spotifyTokenExpiresAt:
                Math.floor(Date.now() / 1000) + spotifyExpiresInSeconds,
            spotifyRefreshToken: spotifyRefreshToken,
        };
    } catch (error) {
        console.error(`Failed to refresh Spotify token: ${error}`);
        return jwt;
    }
};
