import { Album } from './albums.types';

export enum MusicalKeys {
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
}

export enum MusicalModes {
    'Minor',
    'Major',
}

interface Interval {
    duration: number;
    start: number;
}

interface Section extends Interval {
    key: string;
    loudness: number;
    mode: string;
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
    key: string;
    liveness: number;
    loudness: number;
    mode: string;
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
    saved: boolean;
    audioAnalysis?: AudioAnalysis;
    audioFeatures?: AudioFeatures;
    context?: TrackContext;
}

export interface RecentlyPlayed {
    tracks: Track[];
    next: string;
}
