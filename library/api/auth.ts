import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const ENV = process.env.NODE_ENV;

const oneHour = new Date().getTime() + 3600000;

const isValid = (token?: string) => {
    return token && token.startsWith('Bearer ') && token.length > 7
        ? true
        : false;
};

const setCookie = (access_token: string, expires?: number) => {
    const cookie = cookies().get('access_token')?.value;

    // Reset if cookie is invalid or has been updated
    if (!isValid(cookie) || cookie !== access_token) {
        if (!isValid(access_token)) {
            throw new Error('Invalid Spotify access token');
        }

        cookies().set({
            name: 'access_token',
            value: access_token,
            expires: expires ?? oneHour,
            httpOnly: true,
        });

        console.log(cookie);
    }

    if (!cookie || !isValid(cookie)) {
        throw new Error('Failed to set valid Spotify access token');
    }
};

export const setAccessToken = async (request: NextRequest) => {
    if (ENV === 'development') {
        const postmanToken = request.headers.get('authorization');
        postmanToken && setCookie(postmanToken);
    }

    const nextJwt = await getToken({ req: request });
    if (nextJwt) {
        const { access_token, expires } = nextJwt;
        setCookie(`Bearer ${access_token}`, expires);
    }
};

export const getAccessToken = (): string => {
    const access_token = cookies().get('access_token')?.value;
    if (access_token && isValid(access_token)) {
        return access_token;
    }

    throw new Error('No valid Spotify access token found');
};
