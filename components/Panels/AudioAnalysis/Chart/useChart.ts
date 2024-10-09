import { useMemo } from 'react';
import { SpotifyAudioAnalysis } from 'spotify/types/audio.types';

const createChunks = function* (
    iterator: SpotifyAudioAnalysis['segments'],
    size: number,
) {
    let chunk = [];
    for (const segment of iterator) {
        chunk.push(segment);
        if (chunk.length === size) {
            yield chunk;
            chunk = [];
        }
    }
    if (chunk.length) yield chunk;
};

const createWaveform = (
    chunks: SpotifyAudioAnalysis['segments'][],
    set: 'primary' | 'secondary',
) => {
    return chunks.map((chunk, index) => ({
        startPosition: null,
        position: index,
        [set]: [
            0,
            60 -
                Math.round(
                    Math.max(
                        ...chunk.map((segment) => segment.loudness_max * -1),
                    ),
                ),
        ],
    }));
};

const createTimeline = (
    sections: SpotifyAudioAnalysis['sections'],
    set: 'primary' | 'secondary',
    waveformLength: number,
    duration: number,
) => {
    return [
        {
            startPosition: -1,
            position: -1,
            [`${set}Value`]: 0,
        },
        ...sections.map((section) => ({
            startPosition: Math.floor(
                (section.start / duration) * waveformLength,
            ),
            position: Math.floor(
                ((section.start + section.duration / 2) / duration) *
                    waveformLength,
            ),
            [`${set}Value`]: Math.max(
                45 - Math.floor(section.loudness) * -1,
                0,
            ),
        })),
        {
            startPosition: waveformLength,
            position: waveformLength,
            [`${set}Value`]: 0,
        },
    ];
};

export const useChart = (
    primary: SpotifyAudioAnalysis,
    secondary?: SpotifyAudioAnalysis,
) => {
    const chunksTarget = 200;
    const longestDuration = Math.ceil(
        Math.max(primary.track.duration, secondary?.track.duration ?? 0),
    );

    const primaryChunksTarget =
        chunksTarget * (primary.track.duration / longestDuration);
    const primaryChunkSize = Math.ceil(
        primary.segments.length / primaryChunksTarget,
    );
    const primaryChunks = [...createChunks(primary.segments, primaryChunkSize)];

    let waveform = createWaveform(primaryChunks, 'primary');

    let timeline = createTimeline(
        primary.sections,
        'primary',
        waveform.length,
        primary.track.duration,
    );

    if (secondary) {
        const secondaryChunksTarget =
            chunksTarget * (secondary.track.duration / longestDuration);
        const secondaryChunkSize = Math.ceil(
            secondary.segments.length / secondaryChunksTarget,
        );
        const secondaryChunks = [
            ...createChunks(secondary.segments, secondaryChunkSize),
        ];

        const secondaryWaveform = createWaveform(secondaryChunks, 'secondary');

        waveform = waveform.concat(secondaryWaveform);

        const secondaryTimeline = createTimeline(
            secondary.sections,
            'secondary',
            secondaryWaveform.length,
            secondary.track.duration,
        );

        timeline = timeline.concat(secondaryTimeline);
    }

    const data = useMemo(
        () => [...waveform, ...timeline],
        [timeline, waveform],
    );

    return data;
};
