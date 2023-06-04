import { SpotifyAlbum } from './albums.types';
import { SpotifyArtist } from './artists.types';
import { SpotifyPlaylist } from './playlists.types';
import { SpotifyTrack } from './tracks.types';

export interface SpotifySearchResults {
    albums?: {
        href: string;
        items: SpotifyAlbum[];
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
    };
    artists?: {
        href: string;
        items: SpotifyArtist[];
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
    };
    tracks?: {
        href: string;
        items: SpotifyTrack[];
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
    };
    playlists?: {
        href: string;
        items: SpotifyPlaylist[];
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
    };
}
