import axios from 'axios';
import { SpotifyAlbum } from '@spotify/albums.types';

const spotifyEndpoint = 'https://api.spotify.com/v1/albums/';

const id = async (albumId: string, accessToken: string) => {
    const album = await axios.get<SpotifyAlbum>(spotifyEndpoint + albumId, {
        headers: {
            Authorization: accessToken,
        },
    });
    return album.data;
};

const albums = { id };

export { albums };
