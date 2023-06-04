import { SpotifyAlbumSimple } from './albums.types';
import { SpotifyArtist } from './artists.types';
import { SpotifyPlaylistSimple } from './playlists.types';
import { SpotifyTrack } from './tracks.types';

export interface SpotifySearchGroup<T> {
    items: T[];
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}

export interface SpotifySearch {
    albums?: SpotifySearchGroup<SpotifyAlbumSimple>;
    artists?: SpotifySearchGroup<SpotifyArtist>;
    tracks?: SpotifySearchGroup<SpotifyTrack>;
    playlists?: SpotifySearchGroup<SpotifyPlaylistSimple>;
}
