import { cookies } from 'next/headers';

const getSpotifyToken = () => {
    const spotifyToken = cookies().get('spotify')?.value;
    if (!spotifyToken) {
        // TODO: refresh token if auth session available
        throw new Error('No spotifyToken cookie');
    }
    return spotifyToken;
};

const createSpotifyEndpoint = (
    endpoint: string,
    params?: Record<string, string>,
) => {
    let spotifyEndpoint = `https://api.spotify.com/v1/${endpoint}`;
    if (params !== undefined) {
        const searchParams = new URLSearchParams(params);
        spotifyEndpoint = spotifyEndpoint + `?${searchParams.toString()}`;
    }
    return spotifyEndpoint;
};

const get = async <T>(
    endpoint: string,
    config?: {
        params?: Record<string, string>;
        doNotCache?: boolean;
        cacheLifetime?: number; // seconds
    },
) => {
    const spotifyToken = getSpotifyToken();
    const spotifyEndpoint = createSpotifyEndpoint(endpoint, config?.params);

    const response = await fetch(spotifyEndpoint, {
        headers: new Headers({
            Authorization: spotifyToken,
        }),
        cache: config?.doNotCache ? 'no-store' : 'force-cache',
        next: { revalidate: config?.cacheLifetime },
    });

    if (!response.ok) {
        const message = `Bad response from Spotify API: ${endpoint} | ${response} | ${response.statusText}`;
        console.error(message, response);
        throw new Error(message);
    }

    return response.json() as T;
};

const action = async (
    endpoint: string,
    method: 'PUT' | 'DELETE',
    config?: {
        params?: Record<string, string>;
    },
) => {
    const spotifyToken = getSpotifyToken();
    const spotifyEndpoint = createSpotifyEndpoint(endpoint, config?.params);

    const response = await fetch(spotifyEndpoint, {
        method: method,
        headers: new Headers({
            Authorization: spotifyToken,
        }),
    });

    if (!response.ok) {
        const message = `Bad response from Spotify API: ${endpoint} | ${response.status} | ${response.statusText}`;
        console.error(message, response);
        throw new Error(message);
    }

    return response.status;
};

const api = { get, action };
export { api };
