import { cookies } from 'next/headers';

export const get = async <T>(
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
        `https://api.spotify.com/v1/${endpoint}` + config?.params,
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

const api = { get };
export { api };
