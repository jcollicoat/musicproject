// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth/jwt' {
    /**
     * Returned by the `jwt` callback and `getToken`, when using JWT sessions
     */
    interface JWT {
        /**
         * @description Spotify API access token with Bearer prefix
         */
        spotifyToken: string;
        /**
         * @description jwt.spotifyToken expiry timestamp in seconds
         */
        spotifyTokenExpiresAt: number;
        /**
         * @description Spotify API access refresh token.
         * If undefined, user is signed out on jwt.spotifyToken expiry
         */
        spotifyRefreshToken?: string;
    }
}
