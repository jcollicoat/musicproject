import { builders } from '@music/builders';
import { spotify } from '@spotify/api';

const id = async (albumId: string, accessToken: string) => {
    const album = await spotify.albums.id(albumId, accessToken);
    return builders.albums.buildAlbum(album);
};

const albums = { id };

export { albums };
