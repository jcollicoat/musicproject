import axios from 'axios';
import { spotifyApi } from '@spotify/endpoints';
import { SpotifyAlbum } from '@spotify/types/albums.types';

const endpoint = `${spotifyApi}/albums`;

const id = async (albumId: string, accessToken: string) => {
    const album = await axios.get<SpotifyAlbum>(`${endpoint}/${albumId}`, {
        headers: {
            Authorization: accessToken,
        },
    });
    return album.data;
};

const albums = { id };

export { albums };
