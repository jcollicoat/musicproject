import { SpotifyCopyright, SpotifyImage, SpotifyObject } from '@spotify/types';
import { SpotifyArtist } from './artists.types';
import { SpotifySearchGroup } from './search.types';
import { SpotifyTrack } from './tracks.types';

interface SpotifyAlbumSimple {
    album_type: string;
    artists: SpotifyArtist[];
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

export interface SpotifyAlbum extends SpotifyAlbumSimple {
    copyrights?: SpotifyCopyright[];
    external_ids?: SpotifyObject;
    genres?: string[];
    label?: string;
    popularity?: number;
    tracks?: SpotifySearchGroup<SpotifyTrack>;
}
