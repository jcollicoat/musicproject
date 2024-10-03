import { SpotifyImage, SpotifyObject } from 'spotify/types';
import { SpotifyArtistSimple } from './artists.types';

interface SpotifyTrackAlbum {
    album_type: string;
    artists: {
        external_urls: SpotifyObject;
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
    }[];
    available_markets: string[];
    external_urls: SpotifyObject;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface SpotifyTrack {
    album: SpotifyTrackAlbum;
    artists: SpotifyArtistSimple[];
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
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
}

export type SpotifyTrackSimple = Omit<
    SpotifyTrack,
    'album' | 'external_ids' | 'popularity'
>;
