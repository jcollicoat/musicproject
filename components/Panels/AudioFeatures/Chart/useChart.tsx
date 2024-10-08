import { useCallback, useMemo } from 'react';
import { IconType } from 'react-icons';
import {
    PiGuitar,
    PiHeart,
    PiLightning,
    PiMicrophone,
    PiMicrophoneStage,
    PiPersonSimpleTaiChi,
    PiPianoKeys,
    PiSmiley,
} from 'react-icons/pi';
import { SpotifyAudioFeatures } from 'spotify/types/audio.types';

interface TickInput {
    payload: {
        value: string;
    };
    x: number;
    y: number;
}

const toPercentage = (value: number) => Math.round(value * 100);

export const useChart = (audio_features: SpotifyAudioFeatures[]) => {
    const data = useMemo(
        () => [
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
        ],
        [audio_features],
    );

    const tracks = useMemo(
        () =>
            audio_features.map((track) => ({
                id: track.id,
            })),
        [audio_features],
    );

    const tick = useCallback(({ payload, x, y }: TickInput) => {
        let Icon: IconType = PiHeart;

        switch (payload.value) {
            case 'Acousticness':
                Icon = PiGuitar;
                break;
            case 'Danceability':
                Icon = PiPersonSimpleTaiChi;
                break;
            case 'Energy':
                Icon = PiLightning;
                break;
            case 'Instrumentalness':
                Icon = PiPianoKeys;
                break;
            case 'Liveness':
                Icon = PiMicrophoneStage;
                break;
            case 'Speechiness':
                Icon = PiMicrophone;
                break;
            case 'Valence':
                Icon = PiSmiley;
                break;
        }

        return (
            <foreignObject
                x={x}
                y={y}
                dy="0em"
                width="1.25em"
                height="1.25em"
                style={{
                    fontSize: '1.25em',
                    transform: 'scale(105%) translate(-0.5em, -0.5em)',
                    transformOrigin: 'center',
                }}
            >
                <Icon />
            </foreignObject>
        );
    }, []);

    return { data, tracks, tick };
};
