import { builders } from 'builders';
import { SpotifyAudioFeatures } from 'spotify/types/audio.types';

interface Input {
    audio_features: SpotifyAudioFeatures[];
    display?: 'grid';
}

const toPercentage = (value: number) => Math.round(value * 100);

export const useAudioFeatures = ({ audio_features, display }: Input) => {
    if (display === 'grid') {
        return { audio: builders.audio.features.multiple(audio_features) };
    } else {
        const data = [
            {
                name: 'Acousticness',
                ...Object.fromEntries(
                    audio_features.map((track) => [
                        track.id,
                        toPercentage(track.acousticness),
                    ]),
                ),
            },
            {
                name: 'Danceability',
                ...Object.fromEntries(
                    audio_features.map((track) => [
                        track.id,
                        toPercentage(track.danceability),
                    ]),
                ),
            },
            {
                name: 'Energy',
                ...Object.fromEntries(
                    audio_features.map((track) => [
                        track.id,
                        toPercentage(track.energy),
                    ]),
                ),
            },
            {
                name: 'Instrumentalness',
                ...Object.fromEntries(
                    audio_features.map((track) => [
                        track.id,
                        toPercentage(track.instrumentalness),
                    ]),
                ),
            },
            {
                name: 'Liveness',
                ...Object.fromEntries(
                    audio_features.map((track) => [
                        track.id,
                        toPercentage(track.liveness),
                    ]),
                ),
            },
            {
                name: 'Speechiness',
                ...Object.fromEntries(
                    audio_features.map((track) => [
                        track.id,
                        toPercentage(track.speechiness),
                    ]),
                ),
            },
            {
                name: 'Valence',
                ...Object.fromEntries(
                    audio_features.map((track) => [
                        track.id,
                        toPercentage(track.valence),
                    ]),
                ),
            },
        ];

        const datasets = audio_features.map((track, index) => ({
            id: track.id,
            color:
                index === 1
                    ? 'var(--color-secondary-2)'
                    : 'var(--color-primary-2)',
        }));

        return { data, datasets };
    }
};
