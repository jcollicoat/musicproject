import { SpotifyAlbum } from './albums.types';
import { SpotifyArtist } from './artists.types';
import { SpotifyPlaylist } from './playlists.types';
import { SpotifyTrack } from './tracks.types';

interface SearchGroup<T> {
    href: string;
    items: T[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export type SpotifySearchAlbum = Omit<
    SpotifyAlbum,
    'external_ids' | 'genres' | 'label' | 'popularity' | 'tracks'
>;

export interface SpotifySearch {
    albums?: SearchGroup<SpotifySearchAlbum>;
    artists?: SearchGroup<SpotifyArtist>;
    tracks?: SearchGroup<SpotifyTrack>;
    playlists?: SearchGroup<SpotifyPlaylist>;
}
