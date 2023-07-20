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

const api = { get };
export { api };
