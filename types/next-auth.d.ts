// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth/jwt' {
    /**
     * Returned by the `jwt` callback and `getToken`, when using JWT sessions
     */
    interface JWT {
        access_token?: string;
        refresh_token?: string;
        expires?: number;
    }
}
