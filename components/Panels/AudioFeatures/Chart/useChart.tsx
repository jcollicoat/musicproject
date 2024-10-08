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

export const useChart = (
    primary: SpotifyAudioFeatures[],
    secondary?: SpotifyAudioFeatures[],
) => {
    const data = useMemo(
        () => [
            {
                name: 'Acousticness',
                ...Object.fromEntries(
                    primary.map((track) => [
                        track.id,
                        toPercentage(track.acousticness),
                    ]),
                ),
                ...(secondary &&
                    Object.fromEntries(
                        secondary.map((track) => [
                            track.id,
                            toPercentage(track.acousticness),
                        ]),
                    )),
            },
            {
                name: 'Danceability',
                ...Object.fromEntries(
                    primary.map((track) => [
                        track.id,
                        toPercentage(track.danceability),
                    ]),
                ),
                ...(secondary &&
                    Object.fromEntries(
                        secondary.map((track) => [
                            track.id,
                            toPercentage(track.danceability),
                        ]),
                    )),
            },
            {
                name: 'Energy',
                ...Object.fromEntries(
                    primary.map((track) => [
                        track.id,
                        toPercentage(track.energy),
                    ]),
                ),
                ...(secondary &&
                    Object.fromEntries(
                        secondary.map((track) => [
                            track.id,
                            toPercentage(track.energy),
                        ]),
                    )),
            },
            {
                name: 'Instrumentalness',
                ...Object.fromEntries(
                    primary.map((track) => [
                        track.id,
                        toPercentage(track.instrumentalness),
                    ]),
                ),
                ...(secondary &&
                    Object.fromEntries(
                        secondary.map((track) => [
                            track.id,
                            toPercentage(track.instrumentalness),
                        ]),
                    )),
            },
            {
                name: 'Liveness',
                ...Object.fromEntries(
                    primary.map((track) => [
                        track.id,
                        toPercentage(track.liveness),
                    ]),
                ),
                ...(secondary &&
                    Object.fromEntries(
                        secondary.map((track) => [
                            track.id,
                            toPercentage(track.liveness),
                        ]),
                    )),
            },
            {
                name: 'Speechiness',
                ...Object.fromEntries(
                    primary.map((track) => [
                        track.id,
                        toPercentage(track.speechiness),
                    ]),
                ),
                ...(secondary &&
                    Object.fromEntries(
                        secondary.map((track) => [
                            track.id,
                            toPercentage(track.speechiness),
                        ]),
                    )),
            },
            {
                name: 'Valence',
                ...Object.fromEntries(
                    primary.map((track) => [
                        track.id,
                        toPercentage(track.valence),
                    ]),
                ),
                ...(secondary &&
                    Object.fromEntries(
                        secondary.map((track) => [
                            track.id,
                            toPercentage(track.valence),
                        ]),
                    )),
            },
        ],
        [primary, secondary],
    );

    const tracks = useMemo(
        () => ({
            primary: primary.map((track) => ({
                id: track.id,
            })),
            secondary: secondary?.map((track) => ({
                id: track.id,
            })),
        }),
        [primary, secondary],
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
