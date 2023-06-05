import { SpotifyImage } from '@spotify/types';
import { Track } from './tracks.types';

interface AlbumArtist {
    id: string;
    name: string;
}

interface AlbumTrack {
    artists: Track['artists'];
    durationMs: number;
    explicit: boolean;
    id: string;
    name: string;
    previewUrl: string;
}

export interface Album {
    albumType: string;
    artists: AlbumArtist[];
    genres?: string[];
    id: string;
    images: SpotifyImage[];
    label?: string;
    name: string;
    popularity?: number;
    releaseDate: string;
    releaseDatePrecision: string;
    totalTracks: number;
    tracks?: AlbumTrack[];
}
