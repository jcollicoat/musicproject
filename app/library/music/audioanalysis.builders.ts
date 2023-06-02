import { mapKey } from '@/library/music/helpers';
import { SpotifyAudioAnalysis } from '@spotify/audioanalysis.types';
import { AudioAnalysis } from './audioanalysis.types';

export const buildAudioAnalysis = (
    audioAnalysis: SpotifyAudioAnalysis
): AudioAnalysis => {
    return {
        bars: audioAnalysis.bars.map((bar) => ({
            duration: bar.duration,
            start: bar.start,
        })),
        beats: audioAnalysis.beats.map((beat) => ({
            duration: beat.duration,
            start: beat.start,
        })),
        sections: audioAnalysis.sections.map((section) => ({
            duration: section.duration,
            start: section.start,
            key: mapKey(section.key),
            loudness: section.loudness,
            mode: section.mode === 0 ? 'Minor' : 'Major',
            tempo: section.tempo,
            timeSignature: section.time_signature,
        })),
        endOfFadeIn: audioAnalysis.track.end_of_fade_in,
        startOfFadeOut: audioAnalysis.track.start_of_fade_out,
    };
};
