'use client';

import { FC } from 'react';
import {
    Area,
    Bar,
    ComposedChart,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts';
import { music } from 'music/api';

interface Props {
    chart: Awaited<ReturnType<typeof music.audio.analysis.id>>['chart'];
}

export const Chart: FC<Props> = ({ chart }) => {
    const { merged, min, max } = chart;
    const sections = merged.filter((data) => data.value !== undefined);

    return (
        <ResponsiveContainer height="100%" width="100%">
            <ComposedChart data={merged}>
                <defs>
                    <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
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
                    name="Loudness"
                    dataKey="range"
                    fill="var(--theme-color-4)"
                    animationDuration={1000}
                    legendType="none"
                />
                {sections.map((section) => (
                    <ReferenceLine
                        key={section.startPosition}
                        x={section.startPosition}
                        stroke="var(--theme-shade-min)"
                        strokeWidth={3}
                    />
                ))}
                <Area
                    name="Section Loudness"
                    dataKey="value"
                    fill="none"
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
                    name="Fake Section Loudness"
                    dataKey="fakeValue"
                    fill="url(#area)"
                    stroke="var(--color-primary-2)"
                    strokeWidth={2}
                    animationDuration={1000}
                    connectNulls
                    type="bump"
                />
                <Legend
                    verticalAlign="top"
                    iconSize={8}
                    payload={[
                        {
                            value: 'Track Sections',
                            type: 'circle',
                            id: 'sections',
                            color: 'var(--color-primary-2)',
                        },
                    ]}
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
};