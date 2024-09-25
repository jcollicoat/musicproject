'use client';

import { FC } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { music } from '@music/api';

interface Props {
    analysis: Awaited<ReturnType<typeof music.audio.analysis.id>>;
}

export const WaveformChart: FC<Props> = ({ analysis }) => {
    const { waveform, min, max } = analysis;

    return (
        <ResponsiveContainer height="100%" width="100%">
            <BarChart data={waveform}>
                <XAxis
                    dataKey="position"
                    type="number"
                    domain={[0, waveform.length - 1]}
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
                    fill="var(--color-primary-3)"
                    animationDuration={1000}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};
