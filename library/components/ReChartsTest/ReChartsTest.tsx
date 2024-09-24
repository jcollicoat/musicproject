'use client';

import { FC } from 'react';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { SpotifyAudioAnalysis } from '@spotify/types/audio.types';

interface Props {
    analysis: SpotifyAudioAnalysis;
}

export const ReChartsTest: FC<Props> = ({ analysis }) => {
    const data = analysis.sections;
    console.log(data);

    return (
        <ResponsiveContainer height={420} width="100%">
            <AreaChart data={data}>
                <defs>
                    <linearGradient
                        id="colorSections"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="0%"
                            stopColor="var(--color-primary-2)"
                            stopOpacity={0.1}
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--color-primary-2)"
                            stopOpacity={0.9}
                        />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="start"
                    type="number"
                    domain={[0, analysis.track.duration]}
                />
                <YAxis dataKey="loudness" />
                <Area
                    type="bump"
                    dataKey="loudness"
                    stroke="var(--color-primary-2)"
                    strokeWidth={2}
                    fill="url(#colorSections)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};
