import { cookies } from 'next/headers';

export const get = async <T>(
    endpoint: string,
    config?: {
        params?: Record<string, string>;
        noCache?: boolean;
        revalidate?: number;
    },
) => {
    const spotifyToken = cookies().get('spotify')?.value;
    if (!spotifyToken) {
        // TODO: refresh token if auth session available
        throw new Error('No spotifyToken cookie');
    }

    endpoint = `https://api.spotify.com/v1/${endpoint}`;
    if (config?.params !== undefined) {
        const params = new URLSearchParams(config.params);
        endpoint = endpoint + `?${params.toString()}`;
    }

    const response = await fetch(endpoint, {
        headers: new Headers({
            Authorization: spotifyToken,
        }),
        cache: config?.noCache ? 'no-cache' : 'force-cache',
        next: { revalidate: config?.revalidate },
    });

    if (!response.ok) {
        const message = `Bad response from Spotify API: ${endpoint} | `;
        console.error(message, response);
        throw new Error(message);
    }

    return response.json() as T;
};

const api = { get };
export { api };
