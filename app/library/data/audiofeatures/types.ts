import { MusicalKey } from '@data/types';

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
