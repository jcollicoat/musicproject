import { api } from '@spotify/requests';
import { SpotifyAlbum } from '@spotify/types/albums.types';

const id = async (albumId: string, accessToken: string) =>
    await api.get<SpotifyAlbum>(`albums/${albumId}`, accessToken);

const albums = { id };
export { albums };
