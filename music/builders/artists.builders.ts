import { titleCase } from '@api/helpers';
import { builders } from 'music/builders';
import { SpotifyArtist } from '@spotify/types/artists.types';

const artist = (artist: SpotifyArtist) => {
    let followersDisplay = artist.followers.total.toString();
    if (artist.followers.total > 1000000) {
        followersDisplay = `${Math.floor(artist.followers.total / 1000000)}m`;
    } else if (artist.followers.total > 1000) {
        followersDisplay = `${Math.floor(artist.followers.total / 1000)}k`;
    }

    return {
        id: artist.id,
        followers: {
            total: artist.followers.total,
            display: followersDisplay,
        },
        genres:
            artist.genres.length === 0
                ? null
                : artist.genres.map((genre) => titleCase(genre)),
        images: builders.images(artist.images),
        name: artist.name,
        popularity: artist.popularity,
    };
};

export { artist };
