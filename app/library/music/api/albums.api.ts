import { spotify } from '@spotify/_api';
import { buildAlbum } from '../builders/albums.builders';

const id = async (albumId: string, accessToken: string) => {
    const album = await spotify.albums.id(albumId, accessToken);
    return buildAlbum(album);
};

const albums = { id };

export { albums };
