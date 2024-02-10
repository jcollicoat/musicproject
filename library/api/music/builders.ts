import { SpotifyImage } from '@spotify/types';
import { trackId, trackIds } from './builders/tracks.builders';
import { user } from './builders/user.builders';
import { Images } from './types';

const images = (images: SpotifyImage[]): Images => ({
    large: images[0]?.url,
    medium: images[1]?.url,
    small: images[2]?.url,
});

const builders = {
    images,
    trackId,
    trackIds,
    user,
};
export { builders };
