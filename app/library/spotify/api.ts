import { albums } from './api/albums.api';
import { artists } from './api/artists.api';
import { audioAnalysis } from './api/audioanalysis.api';
import { audioFeatures } from './api/audiofeatures.api';
import { player } from './api/player.api';
import { tracks } from './api/tracks.api';

const spotify = {
    albums,
    artists,
    audioAnalysis,
    audioFeatures,
    player,
    tracks,
};

export { spotify };
