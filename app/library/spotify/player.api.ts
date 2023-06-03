import axios from 'axios';
import { SpotifyRecentlyPlayed } from './player.types';

const recentlyPlayedEndpoint =
    'https://api.spotify.com/v1/me/player/recently-played';

const recentlyPlayed = async (accessToken: string) => {
    const recentlyPlayed = await axios.get<SpotifyRecentlyPlayed>(
        recentlyPlayedEndpoint,
        {
            headers: {
                Authorization: accessToken,
            },
        }
    );
    return recentlyPlayed.data;
};

const player = { recentlyPlayed };

export { player };
