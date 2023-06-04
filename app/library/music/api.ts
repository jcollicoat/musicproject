import { albums } from './api/albums.api';
import { artists } from './api/artists.api';
import { playlists } from './api/playlists.api';
import { search } from './api/search.api';
import { tracks } from './api/tracks.api';
import { user } from './api/user.api';

const music = { albums, artists, playlists, search, tracks, user };
export { music };
