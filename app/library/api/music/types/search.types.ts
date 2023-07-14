import { ItemGroup } from '@music/types';
import { Album } from './albums.types';
import { Artist } from './artists.types';
import { Playlist } from './playlists.types';
import { Track } from './tracks.types';

export interface Search {
    albums?: ItemGroup<Album>;
    artists?: ItemGroup<Artist>;
    tracks?: ItemGroup<Track>;
    playlists?: ItemGroup<Playlist>;
}
