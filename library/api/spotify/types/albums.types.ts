import { SpotifyCopyright, SpotifyImage, SpotifyObject } from '@spotify/types';
import { SpotifySearchGroup } from './search.types';

interface SpotifyAlbumArtist {
    external_urls: SpotifyObject;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

interface SpotifyAlbumTrack {
    artists: SpotifyAlbumArtist[];
    available_markets: string;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: SpotifyObject;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface SpotifyAlbum {
    album_type: string;
    artists: SpotifyAlbumArtist[];
    available_markets: string[];
    copyrights: SpotifyCopyright[];
    external_ids: SpotifyObject;
    external_urls: SpotifyObject;
    genres: string[];
    href: string;
    id: string;
    images: SpotifyImage[];
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    tracks: SpotifySearchGroup<SpotifyAlbumTrack>;
    type: string;
    uri: string;
}
