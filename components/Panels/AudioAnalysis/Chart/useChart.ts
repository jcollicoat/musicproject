import { useMemo } from 'react';
import { SpotifyAudioAnalysis } from 'spotify/types/audio.types';

const createChunks = function* (
    itr: SpotifyAudioAnalysis['segments'],
    size: number,
) {
    let chunk = [];
    for (const v of itr) {
        chunk.push(v);
        if (chunk.length === size) {
            yield chunk;
            chunk = [];
        }
    }
    if (chunk.length) yield chunk;
};

export const useChart = (analysis: SpotifyAudioAnalysis) => {
    const target = 280;
    const totalSegments = analysis.segments.length;
    const chunkSize = Math.ceil(totalSegments / target);
    const chunks = [...createChunks(analysis.segments, chunkSize)];
    const waveform = chunks.map((segments, index) => ({
        position: index,
        range: [
            60 -
                Math.floor(
                    Math.min(
                        ...segments.map((segment) => segment.loudness_max),
                    ),
                ) *
                    -1,
            -60 -
                Math.floor(
                    Math.min(
                        ...segments.map((segment) => segment.loudness_max),
                    ),
                ),
        ],
    }));
    const timeline = analysis.sections.map((section) => {
        const startPosition = Math.floor(
            (section.start / analysis.track.duration) * waveform.length,
        );
        const position = Math.floor(
            ((section.start + section.duration / 2) / analysis.track.duration) *
                waveform.length,
        );

        return {
            position,
            value: Math.max(30 - Math.floor(section.loudness) * -1, 0),
            startPosition,
            fakeValue: Math.max(30 - Math.floor(section.loudness) * -1, 0),
        };
    });

    const merged = waveform.map((wave) => ({
        ...wave,
        ...timeline.find((time) => time.position === wave.position),
    }));

    merged.unshift(...[{ position: -1, range: [0, 0], fakeValue: 0 }]);
    merged.push(
        ...[
            {
                position: waveform.length + 1,
                range: [0, 0],
                fakeValue: 0,
            },
        ],
    );

    const data = useMemo(
        () => ({
            min: -60,
            max: 60,
            merged,
        }),
        [merged],
    );

    const sections = useMemo(
        () => merged.filter((section) => section.value !== undefined),
        [merged],
    );

    return { data, sections };
};
