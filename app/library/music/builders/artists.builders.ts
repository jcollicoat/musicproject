import { Artist } from '@music/types/artists.types';
import { SpotifyArtist } from '@spotify/types/artists.types';

const buildArtist = (artist: SpotifyArtist): Artist => ({
    // Simple
    id: artist.id,
    name: artist.name,
    // Full
    followers: artist.followers?.total,
    genres: artist.genres,
    images: artist.images,
    popularity: artist.popularity,
});

const artists = { buildArtist };
export { artists };
