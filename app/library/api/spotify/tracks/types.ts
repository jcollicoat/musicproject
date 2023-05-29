import { SpotifyAlbum } from '@spotify/albums/types';
import { SpotifyArtist } from '@spotify/artists/types';
import { SpotifyObject } from '@spotify/types';

type SpotifyTrackAlbum = Omit<
    SpotifyAlbum,
    'copyrights' | 'external_ids' | 'genres' | 'label' | 'popularity' | 'tracks'
>;

type SpotifyTrackArtist = Omit<
    SpotifyArtist,
    'followers' | 'genres' | 'images' | 'popularity'
>;

export interface SpotifyTrack {
    album: SpotifyTrackAlbum;
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
