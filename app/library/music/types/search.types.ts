import { Album } from './albums.types';
import { Artist } from './artists.types';
import { Playlist } from './playlists.types';
import { Track } from './tracks.types';

export interface Search {
    albums?: {
        href: string;
        items: Album[];
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
    };
    artists?: {
        href: string;
        items: Artist[];
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
    };
    tracks?: {
        href: string;
        items: Track[];
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
    };
    playlists?: {
        href: string;
        items: Playlist[];
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
    };
}
