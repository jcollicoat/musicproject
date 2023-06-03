import { Artist } from '@music/types/artists.types';
import { SpotifyArtist } from '@spotify/types/artists.types';

const buildArtist = (artist: SpotifyArtist): Artist => ({
    followers: artist.followers.total,
    genres: artist.genres,
    id: artist.id,
    images: artist.images,
    name: artist.name,
    popularity: artist.popularity,
});

const artists = { buildArtist };
export { artists };
