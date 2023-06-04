import { albums } from './api/albums.api';
import { artists } from './api/artists.api';
import { audioAnalysis } from './api/audioanalysis.api';
import { audioFeatures } from './api/audiofeatures.api';
import { player } from './api/player.api';
import { playlists } from './api/playlists.api';
import { tracks } from './api/tracks.api';
import { user } from './api/user.api';

const spotify = {
    albums,
    artists,
    audioAnalysis,
    audioFeatures,
    player,
    playlists,
    tracks,
    user,
};

export { spotify };
