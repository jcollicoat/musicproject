import { SpotifyImage } from '@spotify/types';
import { albumId } from './builders/albums.builders';
import { artist } from './builders/artists.builders';
import { audioFeatures } from './builders/audio.builders';
import { trackId, trackIds } from './builders/tracks.builders';
import { user } from './builders/user.builders';

const images = (images: SpotifyImage[]) => {
    const sorted = images.sort((a, b) => {
        if (!a.width || !b.width) return 0;
        if (a.width < b.width) return -1;
        if (a.width > b.width) return 1;
        return 0;
    });

    return {
        small: sorted[0].url,
        medium: sorted[1]?.url ?? sorted[0].url,
        large: sorted[sorted.length - 1].url,
    };
};

const builders = {
    albumId,
    artist,
    audioFeatures,
    images,
    trackId,
    trackIds,
    user,
};
export { builders };
