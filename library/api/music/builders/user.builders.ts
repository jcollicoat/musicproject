import { titleCase } from '@api/helpers';
import { builders } from '@music/builders';
import { User } from '@music/types/user.types';
import { SpotifyFollowedArtists, SpotifyUser } from '@spotify/types/user.types';

const buildUser = (user: SpotifyUser): User => ({
    country: user.country,
    filterExplicit: user.explicit_content.filter_enabled,
    followers: user.followers.total,
    id: user.id,
    images: {
        small: user.images[0],
        large: user.images[user.images.length - 1],
    },
    name: user.display_name ?? 'Me',
    product: titleCase(user.product),
    type: user.type,
});

const buildFullUser = (
    details: SpotifyUser,
    followedArtists: SpotifyFollowedArtists,
) => ({
    details: buildUser(details),
    followedArtists: followedArtists.artists.items.map((artist) =>
        builders.artists.buildArtist(artist),
    ),
});

const user = { buildUser, buildFullUser };
export { user };
