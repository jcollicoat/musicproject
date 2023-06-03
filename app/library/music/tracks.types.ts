import { Album } from './albums.types';
import { MusicalKey } from './types';

interface Interval {
    duration: number;
    start: number;
}

interface Section extends Interval {
    key: MusicalKey;
    loudness: number;
    mode: 'Major' | 'Minor';
    tempo: number;
    timeSignature: number;
}

export interface AudioAnalysis {
    bars: Interval[];
    beats: Interval[];
    endOfFadeIn: number;
    sections: Section[];
    startOfFadeOut: number;
}

export interface AudioFeatures {
    acousticness: number;
    danceability: number;
    energy: number;
    id: string;
    instrumentalness: number;
    key: MusicalKey;
    liveness: number;
    loudness: number;
    mode: 'Major' | 'Minor';
    speechiness: number;
    tempo: number;
    timeSignature: number;
    valence: number;
}

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
