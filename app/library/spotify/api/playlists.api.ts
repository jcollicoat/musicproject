import axios from 'axios';
import { SpotifyPlaylist } from '@spotify/types/playlists.types';

const spotifyEndpoint = 'https://api.spotify.com/v1/playlists/';

const id = async (playlistId: string, accessToken: string) => {
    const playlist = await axios.get<SpotifyPlaylist>(
        spotifyEndpoint + playlistId,
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
