import { SpotifyAudioFeatures } from 'spotify/types/audio.types';

interface Input {
    features: SpotifyAudioFeatures[];
}

const toPercentage = (value: number) => Math.round(value * 100);

export const useAudioFeatures = ({ features }: Input) => {
    const data = [
        {
            name: 'Acousticness',
            ...Object.fromEntries(
                features.map((track) => [
                    track.id,
                    toPercentage(track.acousticness),
                ]),
            ),
        },
        {
            name: 'Danceability',
            ...Object.fromEntries(
                features.map((track) => [
                    track.id,
                    toPercentage(track.danceability),
                ]),
            ),
        },
        {
            name: 'Energy',
            ...Object.fromEntries(
                features.map((track) => [track.id, toPercentage(track.energy)]),
            ),
        },
        {
            name: 'Instrumentalness',
            ...Object.fromEntries(
                features.map((track) => [
                    track.id,
                    toPercentage(track.instrumentalness),
                ]),
            ),
        },
        {
            name: 'Liveness',
            ...Object.fromEntries(
                features.map((track) => [
                    track.id,
                    toPercentage(track.liveness),
                ]),
            ),
        },
        {
            name: 'Speechiness',
            ...Object.fromEntries(
                features.map((track) => [
                    track.id,
                    toPercentage(track.speechiness),
                ]),
            ),
        },
        {
            name: 'Valence',
            ...Object.fromEntries(
                features.map((track) => [
                    track.id,
                    toPercentage(track.valence),
                ]),
            ),
        },
    ];

    const datasets = features.map((track, index) => ({
        id: track.id,
        color:
            index === 1 ? 'var(--color-secondary-2)' : 'var(--color-primary-2)',
    }));

    return { data, datasets };
};
