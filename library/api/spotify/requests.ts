import { cookies } from 'next/headers';

const get = async <T>(
    endpoint: string,
    config?: {
        params?: Record<string, string>;
        doNotCache?: boolean;
        cacheLifetime?: number; // seconds
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
        cache: config?.doNotCache ? 'no-store' : 'force-cache',
        next: { revalidate: config?.cacheLifetime },
    });

    if (!response.ok) {
        const message = `Bad response from Spotify API: ${endpoint} | ${response}`;
        console.error(message, response);
        throw new Error(message);
    }

    return response.json() as T;
};

const del = async (
    endpoint: string,
    config?: {
        params?: Record<string, string>;
        doNotCache?: boolean;
        cacheLifetime?: number; // seconds
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
        method: 'DELETE',
        headers: new Headers({
            Authorization: spotifyToken,
        }),
        cache: config?.doNotCache ? 'no-store' : 'force-cache',
        next: { revalidate: config?.cacheLifetime },
    });

    if (!response.ok) {
        const message = `Bad response from Spotify API: ${endpoint} | ${response.status} | ${response.statusText}`;
        console.error(message, response);
        throw new Error(message);
    }

    return response.status;
};

const put = async (
    endpoint: string,
    config?: {
        params?: Record<string, string>;
        doNotCache?: boolean;
        cacheLifetime?: number; // seconds
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
        method: 'PUT',
        headers: new Headers({
            Authorization: spotifyToken,
        }),
        cache: config?.doNotCache ? 'no-store' : 'force-cache',
        next: { revalidate: config?.cacheLifetime },
    });

    if (!response.ok) {
        const message = `Bad response from Spotify API: ${endpoint} | ${response.status} | ${response.statusText}`;
        console.error(message, response);
        throw new Error(message);
    }

    return response.status;
};

const api = { get, del, put };
export { api };
