import { User } from '@music/types/user.types';
import { SpotifyUser } from '@spotify/types/user.types';

const buildUser = (user: SpotifyUser): User => ({
    country: user.country,
    filterExplicit: user.explicit_content.filter_enabled,
    followers: user.followers.total,
    id: user.id,
    image: user.images[user.images.length - 1],
    name: user.display_name,
    product: user.product,
    type: user.type,
});

const user = { buildUser };
export { user };
