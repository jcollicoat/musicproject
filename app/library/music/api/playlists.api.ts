import { builders } from '@music/builders';
import { spotify } from '@spotify/api';

const id = async (playlistId: string, accessToken: string) => {
    const playlist = await spotify.playlists.id(playlistId, accessToken);

    return builders.playlists.buildPlaylist(playlist);
};

const playlists = { id };
export { playlists };
