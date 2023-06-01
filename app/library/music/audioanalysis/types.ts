import { MusicalKey } from '@/library/music/types';

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
