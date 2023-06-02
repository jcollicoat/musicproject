import axios from 'axios';
import { SpotifyAlbum } from '@spotify/albums.types';

const spotifyEndpoint = 'https://api.spotify.com/v1/albums/';

export const getSpotifyAlbum = async (
    albumId: string,
    accessToken: string
): Promise<SpotifyAlbum> => {
    const album = await axios.get<SpotifyAlbum>(spotifyEndpoint + albumId, {
        headers: {
            Authorization: accessToken,
        },
    });
    return album.data;
};
