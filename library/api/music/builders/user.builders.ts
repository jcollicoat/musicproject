import { titleCase } from '@api/helpers';
import { builders } from '@music/builders';
import { User } from '@music/types/user.types';
import { SpotifyUser } from '@spotify/types/user.types';

const user = (user: SpotifyUser): User => ({
    country: user.country,
    filterExplicit: user.explicit_content.filter_enabled,
    followers: user.followers.total,
    id: user.id,
    images: builders.images(user.images),
    name: user.display_name ?? 'Me',
    product: titleCase(user.product),
    type: user.type,
});

export { user };
