import { api } from '@spotify/requests';
import { SpotifyPlaylist } from '@spotify/types/playlists.types';

const id = async (playlistId: string, accessToken: string) =>
    await api.get<SpotifyPlaylist>(`playlists/${playlistId}`, accessToken);

const playlists = { id };
export { playlists };
