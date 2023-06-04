import axios from 'axios';
import { spotifyApi } from '@spotify/endpoints';
import { SpotifyArtist } from '@spotify/types/artists.types';

const endpoint = `${spotifyApi}/artists`;

export const id = async (
    artistId: string,
    accessToken: string
): Promise<SpotifyArtist> => {
    const artist = await axios.get<SpotifyArtist>(`${endpoint}/${artistId}`, {
        headers: {
            Authorization: accessToken,
        },
    });
    return artist.data;
};

const artists = { id };

export { artists };
