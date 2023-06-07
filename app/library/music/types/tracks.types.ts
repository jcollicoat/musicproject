import { SpotifyAudioAnalysis } from '@spotify/types/audioanalysis.types';
import { SpotifyAudioFeatures } from '@spotify/types/audiofeatures.types';
import { SpotifyTrack } from '@spotify/types/tracks.types';
import { SpotifyPagedList } from '@spotify/types/user.types';
import { Album } from './albums.types';
import { Artist } from './artists.types';

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

interface TrackContext {
    id: string;
    type: string;
    playedAt?: string;
}

export interface Track {
    artists: Artist[];
    durationMs: number;
    explicit: boolean;
    id: string;
    name: string;
    previewUrl: string;
    album?: Album;
    popularity?: number;
    saved?: boolean;
    audioAnalysis?: AudioAnalysis;
    audioFeatures?: AudioFeatures;
    context?: TrackContext;
}

export interface TrackDto {
    track: SpotifyTrack;
    isSaved?: boolean;
    audioFeatures?: SpotifyAudioFeatures;
    audioAnalysis?: SpotifyAudioAnalysis;
    context?: TrackContext;
}

export type RecentlyPlayed = SpotifyPagedList<Track>;
