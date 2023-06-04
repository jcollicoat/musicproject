import { api } from '@spotify/requests';
import { SpotifyArtist } from '@spotify/types/artists.types';

export const id = async (artistId: string, accessToken: string) =>
    await api.get<SpotifyArtist>(`artists/${artistId}`, accessToken);

const artists = { id };
export { artists };
