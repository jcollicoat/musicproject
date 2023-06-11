import { SpotifyObject } from '@spotify/types';
import { SpotifyAlbum } from './albums.types';
import { SpotifyArtist } from './artists.types';

interface SpotifyTrackSimple {
    artists: SpotifyArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: SpotifyObject;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
}

export interface SpotifyTrack extends SpotifyTrackSimple {
    album?: SpotifyAlbum;
    external_ids?: SpotifyObject;
    popularity?: number;
}
