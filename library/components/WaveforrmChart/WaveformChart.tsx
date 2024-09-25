'use client';

import { FC } from 'react';
import {
    Area,
    Bar,
    ComposedChart,
    Legend,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts';
import { music } from '@music/api';

interface Props {
    analysis: Awaited<ReturnType<typeof music.audio.analysis.id>>;
}

export const WaveformChart: FC<Props> = ({ analysis }) => {
    const { merged, min, max } = analysis;

    return (
        <ResponsiveContainer height="100%" width="100%">
            <ComposedChart data={merged}>
                <defs>
                    <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-primary-2)"
                            stopOpacity={0.75}
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--color-primary-2)"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="position"
                    type="number"
                    domain={[0, merged.length - 1]}
                    hide
                />
                <YAxis
                    dataKey="range"
                    domain={[min, max]}
                    allowDataOverflow
                    hide
                />
                <Bar
                    dataKey="range"
                    fill="var(--theme-color-tertiary)"
                    animationDuration={1000}
                    legendType="none"
                />
                <Area
                    name="Track Sections"
                    dataKey="value"
                    fill="url(#area)"
                    stroke="var(--color-primary-2)"
                    strokeWidth={2}
                    animationDuration={1000}
                    connectNulls
                    type="bump"
                    id="sections"
                    dot
                />
                <Legend verticalAlign="top" />
            </ComposedChart>
        </ResponsiveContainer>
    );
};
