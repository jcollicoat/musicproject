import { SpotifyUser } from 'spotify/types/user.types';
import { titleCase } from 'utilities';

const user = (user: SpotifyUser) => ({
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
