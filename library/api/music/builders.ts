import { SpotifyImage } from '@spotify/types';
import { album, albumSimple } from './builders/albums.builders';
import { artist } from './builders/artists.builders';
import { audioFeatures } from './builders/audio.builders';
import { track, tracks } from './builders/tracks.builders';
import { user } from './builders/user.builders';

const idAndName = (input: { id: string; name: string }) => {
    return {
        id: input.id,
        name: input.name,
    };
};

const images = (images: SpotifyImage[]) => {
    const sorted = images.sort((a, b) => {
        if (!a.width || !b.width) return 0;
        if (a.width < b.width) return -1;
        if (a.width > b.width) return 1;
        return 0;
    });

    return {
        small: sorted[0]?.url,
        medium: sorted[1]?.url ?? sorted[0]?.url,
        large: sorted[sorted.length - 1]?.url,
    };
};

const builders = {
    album,
    albumSimple,
    artist,
    audioFeatures,
    idAndName,
    images,
    track,
    tracks,
    user,
};
export { builders };
