import { Artist } from '@music/types/artists.types';
import { SpotifyArtist } from '@spotify/artists.types';

const buildArtist = (artist: SpotifyArtist): Artist => {
    const { genres, id, images, name, popularity } = artist;

    return {
        followers: artist.followers.total,
        genres: genres,
        id: id,
        images: images,
        name: name,
        popularity: popularity,
    };
};

const artists = { buildArtist };
export { artists };
