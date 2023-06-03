import { Album } from './albums.types';
import { AudioAnalysis } from './audioanalysis.types';
import { AudioFeatures } from './audiofeatures.types';

interface TrackAlbum {
    albumType: string;
    artists: Album['artists'];
    id: string;
    name: string;
    totalTracks: number;
}

interface TrackArtist {
    id: string;
    name: string;
}

interface TrackContext {
    id: string;
    type: string;
    playedAt?: string;
}

export interface Track {
    album: TrackAlbum;
    artists: TrackArtist[];
    durationMs: number;
    explicit: boolean;
    id: string;
    name: string;
    popularity: number;
    previewUrl: string;
    audioFeatures?: AudioFeatures;
    audioAnalysis?: AudioAnalysis;
    context?: TrackContext;
}

export interface RecentlyPlayed {
    tracks: Track[];
    next: string;
}
