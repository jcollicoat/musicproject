import { Album } from '@music/albums/albums.types';
import { AudioAnalysis } from '@/library/music/audioanalysis/types';
import { AudioFeatures } from '@/library/music/audiofeatures/types';

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
