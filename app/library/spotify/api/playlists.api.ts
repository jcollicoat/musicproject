import axios from 'axios';
import { spotifyApi } from '@spotify/endpoints';
import { SpotifyPlaylist } from '@spotify/types/playlists.types';

const endpoint = `${spotifyApi}/playlists`;

const id = async (playlistId: string, accessToken: string) => {
    const playlist = await axios.get<SpotifyPlaylist>(
        `${endpoint}/${playlistId}`,
        {
            headers: {
                Authorization: accessToken,
            },
        }
    );
    return playlist.data;
};

const playlists = { id };
export { playlists };
