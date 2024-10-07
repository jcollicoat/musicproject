'use client';

import { FC } from 'react';
import {
    RadarChart,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import { SpotifyAudioFeatures } from 'spotify/types/audio.types';
import { CustomTooltip } from './CustomTooltip/CustomTooltip';
import { useChart } from './useChart';

interface Props {
    audio_features: SpotifyAudioFeatures[];
}

export const Chart: FC<Props> = ({ audio_features }) => {
    const { data, tracks, tick } = useChart(audio_features);

    return (
        <ResponsiveContainer height={420} width="100%">
            <RadarChart data={data}>
                <PolarGrid gridType="circle" stroke="var(--theme-color-4)" />
                <PolarAngleAxis
                    dataKey="name"
                    orientation="outer"
                    tick={tick}
                />
                <PolarRadiusAxis
                    domain={[0, 100]}
                    axisLine={false}
                    tick={false}
                />
                {tracks.length <= 2 ? (
                    <>
                        <Radar
                            key={tracks[0].id}
                            dataKey={tracks[0].id}
                            stroke="var(--color-primary-2)"
                            fill="var(--color-primary-2)"
                            fillOpacity={0.25}
                            animationDuration={1000}
                            dot={{
                                fill: 'var(--color-primary-2)',
                                fillOpacity: 1,
                                stroke: 'var(--color-primary-2)',
                            }}
                        />
                        {tracks[1] && (
                            <Radar
                                key={tracks[1].id}
                                dataKey={tracks[1].id}
                                stroke="var(--color-secondary-2)"
                                fill="var(--color-secondary-2)"
                                fillOpacity={0.25}
                                animationDuration={1000}
                                dot={{
                                    fill: 'var(--color-secondary-2)',
                                    fillOpacity: 1,
                                    stroke: 'var(--color-secondary-2)',
                                }}
                            />
                        )}
                    </>
                ) : (
                    tracks.map((track) => (
                        <Radar
                            key={track.id}
                            dataKey={track.id}
                            fill="var(--color-primary-2)"
                            fillOpacity={0.25}
                            animationDuration={1000}
                        />
                    ))
                )}
                <Tooltip content={<CustomTooltip />} />
            </RadarChart>
        </ResponsiveContainer>
    );
};
