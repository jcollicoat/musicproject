import { User } from '@music/types/user.types';
import { SpotifyFollowedArtists, SpotifyUser } from '@spotify/types/user.types';

const buildUser = (user: SpotifyUser): User => ({
    country: user.country,
    filterExplicit: user.explicit_content.filter_enabled,
    followers: user.followers.total,
    id: user.id,
    image: user.images[0],
    name: user.display_name ?? 'Spotify User',
    product: user.product,
    type: user.type,
});

const buildFullUser = (
    details: SpotifyUser,
    followedArtists: SpotifyFollowedArtists,
) => ({ details, followedArtists });

const user = { buildUser, buildFullUser };
export { user };
