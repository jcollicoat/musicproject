import { SpotifyImage } from '@spotify/types';
import { albumId } from './builders/albums.builders';
import { artistId } from './builders/artists.builders';
import { audioFeatures } from './builders/audio.builders';
import { trackId, trackIds } from './builders/tracks.builders';
import { user } from './builders/user.builders';
import { Images } from './types';

const images = (images: SpotifyImage[]): Images => {
    if (images.length === 1) {
        return {
            large: images[0].url,
            medium: images[0].url,
            small: images[1].url,
        };
    } else if (images.length === 2) {
        return {
            large: images[0].url,
            medium: images[1].url,
            small: images[1].url,
        };
    } else {
        return {
            large: images[0].url,
            medium: images[1].url,
            small: images[2].url,
        };
    }
};

const builders = {
    albumId,
    artistId,
    audioFeatures,
    images,
    trackId,
    trackIds,
    user,
};
export { builders };
