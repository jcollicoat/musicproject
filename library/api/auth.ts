import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const ENV = process.env.NODE_ENV;

const isValid = (token: string) => token.match(/Bearer /g) && token.length > 7;

export const setAccessToken = async (request: NextRequest) => {
    const access_token = cookies().get('access_token')?.value;

    if (ENV === 'development') {
        const postmanToken = request.headers.get('authorization');
        if (postmanToken && isValid(postmanToken)) {
            console.log('Using Postman access token');
            cookies().set('access_token', postmanToken);
        }
    }

    const nextAuth = await getToken({ req: request });
    if (nextAuth?.access_token) {
        cookies().set('access_token', `Bearer ${nextAuth.access_token}`);
    }

    if (!access_token || !isValid(access_token)) {
        throw new Error('Failed to set Spotify access token');
    }
};

export const getAccessToken = (): string => {
    const access_token = cookies().get('access_token')?.value;
    if (access_token && isValid(access_token)) {
        return access_token;
    }

    throw new Error('No valid Spotify access token set');
};
