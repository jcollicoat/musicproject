import { AudioFeatures } from '@/library/music/audiofeatures/types';
import { Album } from './albums.types';
import { AudioAnalysis } from './audioanalysis.types';

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
}
