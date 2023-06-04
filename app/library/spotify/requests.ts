import axios from 'axios';

const get = async <T>(
    endpoint: string,
    accessToken: string,
    params?: unknown
) => {
    const response = await axios.get<T>(
        `https://api.spotify.com/v1/${endpoint}`,
        {
            headers: {
                Authorization: accessToken,
            },
            params: params,
        }
    );
    return response.data;
};

const api = { get };
export { api };
