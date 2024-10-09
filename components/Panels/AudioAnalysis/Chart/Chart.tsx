'use client';

import { FC } from 'react';
import {
    Area,
    Bar,
    ComposedChart,
    ReferenceLine,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts';
import { SpotifyAudioAnalysis } from 'spotify/types/audio.types';
import { useChart } from './useChart';

interface Props {
    primary: SpotifyAudioAnalysis;
    secondary?: SpotifyAudioAnalysis;
}

export const Chart: FC<Props> = ({ primary, secondary }) => {
    const data = useChart(primary, secondary);

    return (
        <ResponsiveContainer height="100%" width="100%">
            <ComposedChart data={data}>
                <defs>
                    <linearGradient id="primary" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-primary-2)"
                            stopOpacity={0.5}
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--color-primary-2)"
                            stopOpacity={0}
                        />
                    </linearGradient>
                    <linearGradient id="secondary" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-secondary-2)"
                            stopOpacity={0.5}
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--color-secondary-2)"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="position"
                    xAxisId="primary"
                    type="number"
                    domain={[data[0].position, data[data.length - 1].position]}
                    hide
                />
                <XAxis
                    dataKey="position"
                    xAxisId="secondary"
                    type="number"
                    domain={[data[0].position, data[data.length - 1].position]}
                    hide
                />
                <YAxis domain={[0, 60]} allowDataOverflow hide />
                <Bar
                    name="Primary Waveform"
                    dataKey="primary"
                    xAxisId="primary"
                    barSize={2}
                    fill={
                        secondary
                            ? 'rgba(var(--color-primary-2-rgb), 0.25)'
                            : 'var(--theme-color-4)'
                    }
                    animationDuration={1000}
                    legendType="none"
                />
                <Bar
                    name="Secondary Waveform"
                    dataKey="secondary"
                    xAxisId="secondary"
                    barSize={2}
                    fill="rgba(var(--color-secondary-2-rgb), 0.25)"
                    animationDuration={1000}
                    legendType="none"
                />
                {data
                    .filter((section) => section.startPosition !== null)
                    .map((section) => (
                        <ReferenceLine
                            key={section.startPosition}
                            x={section.startPosition}
                            xAxisId="primary"
                            stroke={
                                secondary
                                    ? 'none'
                                    : 'rgba(var(--theme-shade-min-rgb), 0.75)'
                            }
                            strokeWidth={2}
                        />
                    ))}
                <Area
                    name="Primary Sections"
                    dataKey="primaryValue"
                    xAxisId="primary"
                    fill="url(#primary)"
                    stroke="var(--color-primary-2)"
                    strokeWidth={2}
                    animationDuration={1000}
                    connectNulls
                    type="bump"
                    dot={{
                        fill: 'var(--color-primary-2)',
                        fillOpacity: 1,
                        stroke: 'var(--color-primary-2)',
                    }}
                />
                <Area
                    name="Secondary Sections"
                    dataKey="secondaryValue"
                    xAxisId="secondary"
                    fill="url(#secondary)"
                    stroke="var(--color-secondary-2)"
                    strokeWidth={2}
                    animationDuration={1000}
                    connectNulls
                    type="bump"
                    dot={{
                        fill: 'var(--color-secondary-2)',
                        fillOpacity: 1,
                        stroke: 'var(--color-secondary-2)',
                    }}
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
};
