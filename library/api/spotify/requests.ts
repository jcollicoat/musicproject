import axios from 'axios';
import { getAccessToken } from '@api/auth';

const get = async <T>(endpoint: string, params?: unknown) => {
    const token = getAccessToken();
    const response = await axios.get<T>(
        `https://api.spotify.com/v1/${endpoint}`,
        {
            headers: {
                Authorization: token,
            },
            params: params,
        },
    );
    return response.data;
};

const api = { get };
export { api };
