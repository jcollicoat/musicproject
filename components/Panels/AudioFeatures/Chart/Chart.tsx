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
    primary: SpotifyAudioFeatures[];
    secondary?: SpotifyAudioFeatures[];
}

export const Chart: FC<Props> = ({ primary, secondary }) => {
    const { data, tracks, tick } = useChart(primary, secondary);

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
                {tracks.primary.map((track) => (
                    <Radar
                        key={track.id}
                        dataKey={track.id}
                        stroke={
                            tracks.primary.length === 1
                                ? 'var(--color-primary-2)'
                                : undefined
                        }
                        fill="var(--color-primary-2)"
                        fillOpacity={0.25}
                        animationDuration={1000}
                        dot={
                            tracks.primary.length === 1
                                ? {
                                      fill: 'var(--color-primary-2)',
                                      fillOpacity: 1,
                                      stroke: 'var(--color-primary-2)',
                                  }
                                : undefined
                        }
                        activeDot={tracks.primary.length === 1}
                    />
                ))}
                {tracks.secondary?.map((track) => (
                    <Radar
                        key={track.id}
                        dataKey={track.id}
                        stroke={
                            tracks.secondary?.length === 1
                                ? 'var(--color-secondary-2)'
                                : undefined
                        }
                        fill="var(--color-secondary-2)"
                        fillOpacity={0.25}
                        animationDuration={1000}
                        dot={
                            tracks.secondary?.length === 1
                                ? {
                                      fill: 'var(--color-secondary-2)',
                                      fillOpacity: 1,
                                      stroke: 'var(--color-secondary-2)',
                                  }
                                : undefined
                        }
                    />
                ))}
                <Tooltip
                    content={
                        <CustomTooltip
                            primaryIds={tracks.primary.map((track) => track.id)}
                            secondaryIds={tracks.secondary?.map(
                                (track) => track.id,
                            )}
                        />
                    }
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};
