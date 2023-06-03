import axios from 'axios';
import { SpotifyArtist } from '@spotify/types/artists.types';

const spotifyEndpoint = 'https://api.spotify.com/v1/artists/';

export const id = async (
    artistId: string,
    accessToken: string
): Promise<SpotifyArtist> => {
    const artist = await axios.get<SpotifyArtist>(spotifyEndpoint + artistId, {
        headers: {
            Authorization: accessToken,
        },
    });
    return artist.data;
};

const artists = { id };

export { artists };
