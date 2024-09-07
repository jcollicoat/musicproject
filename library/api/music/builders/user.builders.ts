import { titleCase } from '@api/helpers';
import { User } from '@music/types/user.types';
import { SpotifyUser } from '@spotify/types/user.types';

const user = (user: SpotifyUser): User => ({
    country: user.country,
    filterExplicit: user.explicit_content.filter_enabled,
    followers: user.followers.total,
    id: user.id,
    images: {
        small: user.images[0].url,
        medium: user.images[1].url,
        large: user.images[1].url,
    },
    name: user.display_name ?? 'Me',
    product: titleCase(user.product),
    type: user.type,
});

export { user };
