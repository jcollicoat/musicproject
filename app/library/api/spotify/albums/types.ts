import { SpotifyArtist } from '@spotify/artists/types';
import { SpotifyTrack } from '@spotify/tracks/types';
import { SpotifyCopyright, SpotifyImage, SpotifyObject } from '@spotify/types';

type SpotifyAlbumArtist = Omit<
    SpotifyArtist,
    'followers' | 'genres' | 'images' | 'popularity'
>;

type SpotifyAlbumTrack = Omit<
    SpotifyTrack,
    'album' | 'external_ids' | 'popularity'
>;

interface SpotifyAlbumTracks {
    href: string;
    items: SpotifyAlbumTrack[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
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
    tracks: SpotifyAlbumTracks;
    type: string;
    uri: string;
}
