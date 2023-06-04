import { SpotifyObject } from '@spotify/types';
import { SpotifyAlbumSimple } from '@spotify/types/albums.types';
import { SpotifyArtist } from './artists.types';

type SpotifyTrackArtist = Omit<
    SpotifyArtist,
    'followers' | 'genres' | 'images' | 'popularity'
>;

export interface SpotifyTrack {
    album: SpotifyAlbumSimple;
    artists: SpotifyTrackArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: SpotifyObject;
    external_urls: SpotifyObject;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface SpotifyTracks {
    tracks: SpotifyTrack[];
}
