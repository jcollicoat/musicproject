type MusicalKeys = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';

export interface AudioFeatures {
    acousticness: number;
    danceability: number;
    energy: number;
    id: string;
    instrumentalness: number;
    key: MusicalKeys;
    liveness: number;
    loudness: number;
    mode: 'Major' | 'Minor';
    speechiness: number;
    tempo: number;
    timeSignature: number;
    valence: number;
}