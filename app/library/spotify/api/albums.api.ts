import { spotifyApi } from '@spotify/endpoints';
import { api } from '@spotify/requests';
import { SpotifyAlbum } from '@spotify/types/albums.types';

const endpoint = `${spotifyApi}/albums`;

const id = async (albumId: string, accessToken: string) =>
    await api.get<SpotifyAlbum>(`${endpoint}/${albumId}`, accessToken);

const albums = { id };

export { albums };
