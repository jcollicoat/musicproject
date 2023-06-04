import axios from 'axios';
import { spotifyApi } from '@spotify/endpoints';
import { SpotifyRecentlyPlayed } from '@spotify/types/player.types';
import { SpotifyUser } from '@spotify/types/user.types';

const endpoint = `${spotifyApi}/me`;

const me = async (accessToken: string) => {
    const user = await axios.get<SpotifyUser>(endpoint, {
        headers: {
            Authorization: accessToken,
        },
    });
    return user.data;
};

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

const user = { me, tracks: { checkSaved, recentlyPlayed } };
export { user };
