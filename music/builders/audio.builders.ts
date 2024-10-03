import { MusicalKeys, MusicalModes } from 'music/types';
import {
    SpotifyAudioAnalysis,
    SpotifyAudioFeatures,
} from '@spotify/types/audio.types';

const normalize = (features: number) => Math.floor(features * 100);

const getMean = (features: number[]) =>
    features.reduce((previous, current) => (previous += current)) /
    features.length;

const getMode = (features: number[]) =>
    features.sort((a, b) => {
        return (
            features.filter((feature) => feature === a).length -
            features.filter((feature) => feature === b).length
        );
    })[features.length - 1];

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

const audio = {
    analysis: {
        single: (analysis: SpotifyAudioAnalysis) => {
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
                                ...segments.map(
                                    (segment) => segment.loudness_max,
                                ),
                            ),
                        ) *
                            -1,
                    -60 -
                        Math.floor(
                            Math.min(
                                ...segments.map(
                                    (segment) => segment.loudness_max,
                                ),
                            ),
                        ),
                ],
            }));

            const timeline = analysis.sections.map((section) => {
                const startPosition = Math.floor(
                    (section.start / analysis.track.duration) * waveform.length,
                );
                const position = Math.floor(
                    ((section.start + section.duration / 2) /
                        analysis.track.duration) *
                        waveform.length,
                );

                return {
                    position,
                    value: Math.max(30 - Math.floor(section.loudness) * -1, 0),
                    startPosition,
                    fakeValue: Math.max(
                        30 - Math.floor(section.loudness) * -1,
                        0,
                    ),
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

            return {
                duration: analysis.track.duration * 1000,
                min: -60,
                max: 60,
                merged,
            };
        },
    },
    features: {
        single: (features: SpotifyAudioFeatures) => {
            const built = {
                acousticness: normalize(features.acousticness),
                danceability: normalize(features.danceability),
                energy: normalize(features.energy),
                instrumentalness: normalize(features.instrumentalness),
                liveness: normalize(features.liveness),
                speechiness: normalize(features.speechiness),
                valence: normalize(features.valence),
                mode: MusicalModes[features.mode],
                tempo: Math.floor(features.tempo),
                loudness: `${Math.round(features.loudness)}dB`,
                key: MusicalKeys[features.key],
                timeSignature: `${features.time_signature}/4`,
            };

            const array = Object.keys(built).map((name) => {
                switch (name) {
                    case 'acousticness':
                    case 'danceability':
                    case 'energy':
                    case 'instrumentalness':
                    case 'liveness':
                    case 'speechiness':
                    case 'valence':
                        return {
                            name: name,
                            value: built[name as keyof typeof built],
                            percent:
                                typeof built[name as keyof typeof built] ===
                                'number'
                                    ? built[name as keyof typeof built]
                                    : undefined,
                        };
                    case 'timeSignature':
                        return {
                            name: 'Time Signature',
                            value: built[name as keyof typeof built],
                        };
                }
                return {
                    name: name,
                    value: built[name as keyof typeof built],
                };
            });

            const sorted = array.sort((a, b) => {
                if (a.percent === undefined || b.percent === undefined)
                    return 0;
                if (a.percent > b.percent) {
                    return -1;
                }
                if (a.percent < b.percent) {
                    return 1;
                }
                return 0;
            });

            return {
                id: features.id,
                features: sorted,
            };
        },
        multiple: (features: SpotifyAudioFeatures[]) => {
            if (features.length === 1) {
                return audio.features.single(features[0]);
            }

            const combined: SpotifyAudioFeatures = {
                acousticness: getMean(
                    features.map((feature) => feature.acousticness),
                ),
                danceability: getMean(
                    features.map((feature) => feature.danceability),
                ),
                energy: getMean(features.map((feature) => feature.energy)),
                instrumentalness: getMean(
                    features.map((feature) => feature.instrumentalness),
                ),
                liveness: getMean(features.map((feature) => feature.liveness)),
                speechiness: getMean(
                    features.map((feature) => feature.speechiness),
                ),
                valence: getMean(features.map((feature) => feature.valence)),
                mode: getMode(features.map((feature) => feature.mode)),
                tempo: getMean(features.map((feature) => feature.tempo)),
                loudness: getMean(features.map((feature) => feature.loudness)),
                key: getMode(features.map((feature) => feature.key)),
                time_signature: getMode(
                    features.map((feature) => feature.time_signature),
                ),
                // Satisfy Typescript, unused fields
                analysis_url: '',
                duration_ms: 0,
                id: '',
                track_href: '',
                type: '',
                uri: '',
            };

            return audio.features.single(combined);
        },
    },
};

export { audio };
