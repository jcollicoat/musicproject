import axios from 'axios';
import { cookies } from 'next/headers';

// const isValid = (token?: string) => {
//     return token && token.startsWith('Bearer ') && token.length > 7
//         ? true
//         : false;
// };

const get = async <T>(endpoint: string, params?: unknown) => {
    const spotify_token = cookies().get('spotify_token')?.value;

    const response = await axios.get<T>(
        `https://api.spotify.com/v1/${endpoint}`,
        {
            headers: {
                Authorization: spotify_token,
            },
            params: params,
        },
    );
    return response.data;
};

export const getNew = async <T>(
    endpoint: string,
    config?: {
        params?: URLSearchParams;
        noCache?: boolean;
        revalidate?: number;
    },
) => {
    const spotify_token = cookies().get('spotify_token')?.value;

    if (!spotify_token) {
        throw new Error('No spotify_token');
    }

    const response = await fetch(
        `https://api.spotify.com/v1/${endpoint}` +
            new URLSearchParams(config?.params),
        {
            headers: new Headers({
                Authorization: spotify_token,
            }),
            cache: config?.noCache ? 'no-cache' : 'force-cache',
            next: { revalidate: config?.revalidate },
        },
    );

    if (!response.ok) {
        throw new Error('Bad response from Spotify API.');
    }

    return response.json() as T;
};

const api = { get, getNew };
export { api };
