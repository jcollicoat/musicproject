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
