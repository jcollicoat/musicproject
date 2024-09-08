import { builders } from '@music/builders';
import { Artist } from '@music/types/artists.types';
import { SpotifyArtist } from '@spotify/types/artists.types';

const artistId = (artist: SpotifyArtist): Artist => ({
    id: artist.id,
    name: artist.name,
    followers: artist.followers.total,
    genres: artist.genres,
    images: builders.images(artist.images),
    popularity: artist.popularity,
});

export { artistId };
