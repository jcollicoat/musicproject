import { Track } from '@data/tracks/types';
import { SpotifyImage } from '@spotify/types';

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
    genres: string[];
    id: string;
    images: SpotifyImage[];
    label: string;
    name: string;
    popularity: number;
    releaseDate: string;
    releaseDatePrecision: string;
    tracks: AlbumTrack[];
}
