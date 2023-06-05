import { SpotifyObject } from '@spotify/types';
import { SpotifyAlbum } from './albums.types';
import { SpotifyArtistSimple } from './artists.types';

export interface SpotifyTrack {
    album: SpotifyAlbum;
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
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface SpotifyTracks {
    tracks: SpotifyTrack[];
}
