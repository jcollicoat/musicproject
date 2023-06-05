import { SpotifySearchGroup } from '@spotify/types/search.types';
import { Album } from './albums.types';
import { Artist } from './artists.types';
import { Playlist } from './playlists.types';
import { Track } from './tracks.types';

export interface Search {
    albums?: SpotifySearchGroup<Album>;
    artists?: SpotifySearchGroup<Artist>;
    tracks?: SpotifySearchGroup<Track>;
    playlists?: SpotifySearchGroup<Playlist>;
}
