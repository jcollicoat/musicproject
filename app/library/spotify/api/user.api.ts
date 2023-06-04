import axios from 'axios';
import { spotifyApi } from '@spotify/endpoints';

const endpoint = `${spotifyApi}/me`;

const checkSaved = async (trackIds: string[], accessToken: string) => {
    const result = await axios.get<boolean[]>(`${endpoint}/tracks/contains`, {
        headers: {
            Authorization: accessToken,
        },
        params: {
            ids: trackIds.join(','),
        },
    });
    return result.data;
};

const user = { checkSaved };
export { user };
