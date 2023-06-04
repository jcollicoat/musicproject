import axios from 'axios';
import { spotifyApi } from '@spotify/endpoints';
import { SpotifyRecentlyPlayed } from '@spotify/types/player.types';

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

const recentlyPlayed = async (accessToken: string) => {
    const recentlyPlayed = await axios.get<SpotifyRecentlyPlayed>(
        `${endpoint}/player/recently-played`,
        {
            headers: {
                Authorization: accessToken,
            },
        }
    );
    return recentlyPlayed.data;
};

const user = { tracks: { checkSaved, recentlyPlayed } };
export { user };
