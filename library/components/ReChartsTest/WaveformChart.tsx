'use client';

import { FC } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { music } from '@music/api';

interface Props {
    analysis: Awaited<ReturnType<typeof music.audio.analysis.id>>;
}

export const WaveformChart: FC<Props> = ({ analysis }) => {
    const data = analysis.waveform;
    console.log(data);

    return (
        <ResponsiveContainer height="100%" width="100%">
            <BarChart data={data}>
                <XAxis
                    dataKey="position"
                    type="number"
                    domain={[-1, analysis.waveform.length]}
                    hide
                />
                <YAxis
                    dataKey="range"
                    domain={[analysis.min, analysis.max]}
                    allowDataOverflow
                    hide
                />
                <Bar
                    dataKey="range"
                    fill="var(--color-primary-2)"
                    animationEasing="ease-in-out"
                />
            </BarChart>
        </ResponsiveContainer>
    );
};
