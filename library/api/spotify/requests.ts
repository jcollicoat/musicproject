import { cookies } from 'next/headers';

export const get = async <T>(
    endpoint: string,
    config?: {
        params?: Record<string, string>;
        noCache?: boolean;
        revalidate?: number;
    },
) => {
    const spotify_token = cookies().get('spotifyToken')?.value;
    if (!spotify_token) {
        // TODO: refresh token if auth session available
        throw new Error('No spotifyToken cookie');
    }

    endpoint = `https://api.spotify.com/v1/${endpoint}`;
    if (config?.params !== undefined) {
        const params = new URLSearchParams(config.params);
        endpoint = endpoint + `?${params}`;
    }

    const response = await fetch(endpoint, {
        headers: new Headers({
            Authorization: spotify_token,
        }),
        cache: config?.noCache ? 'no-cache' : 'force-cache',
        next: { revalidate: config?.revalidate },
    });

    if (!response.ok) {
        throw new Error(`Bad response from Spotify API: ${endpoint}`);
    }

    return response.json() as T;
};

const api = { get };
export { api };
