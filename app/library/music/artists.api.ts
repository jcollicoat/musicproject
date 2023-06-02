import { spotify } from '@spotify/_api';
import { buildArtist } from './artists.builders';

const id = async (artistId: string, accessToken: string) => {
    const artist = await spotify.artists.id(artistId, accessToken);
    return buildArtist(artist);
};

const artists = { id };

export { artists };
