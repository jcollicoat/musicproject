import { SpotifyCopyright, SpotifyImage, SpotifyObject } from 'spotify/types';
import { SpotifyArtistSimple } from './artists.types';
import { SpotifySearchGroup } from './search.types';
import { SpotifyTrackSimple } from './tracks.types';

export interface SpotifyAlbum {
    album_type: string;
    artists: SpotifyArtistSimple[];
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
    tracks: SpotifySearchGroup<SpotifyTrackSimple>;
    type: string;
    uri: string;
}

export type SpotifyAlbumSimple = Omit<
    SpotifyAlbum,
    'artists' | 'copyrights' | 'genres' | 'label' | 'popularity' | 'tracks'
>;
