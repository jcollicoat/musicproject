import axios from 'axios';
import { SpotifyArtist } from '@spotify/artists/types';

const spotifyEndpoint = 'https://api.spotify.com/v1/artists/';

export const getSpotifyArtist = async (
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
