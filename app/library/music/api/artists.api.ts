import { builders } from '@music/builders';
import { spotify } from '@spotify/_api';

const id = async (artistId: string, accessToken: string) => {
    const artist = await spotify.artists.id(artistId, accessToken);
    return builders.artists.buildArtist(artist);
};

const artists = { id };

export { artists };
