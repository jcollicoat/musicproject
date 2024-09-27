'use client';

import { FC } from 'react';
import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from 'recharts';
import { music } from '@music/api';

interface Props {
    audio: Awaited<ReturnType<typeof music.audio.features.id>>;
}

export const FeaturesChart: FC<Props> = ({ audio }) => {
    const features = audio.features.filter(
        (feature) => feature.percent !== undefined,
    );

    return (
        <ResponsiveContainer height={420} width="100%">
            <RadarChart data={features}>
                <PolarGrid gridType="circle" stroke="var(--theme-color-4)" />
                <PolarAngleAxis dataKey="name" orientation="outer" />
                <Radar
                    dataKey="percent"
                    stroke="var(--color-primary-2)"
                    fill="var(--color-primary-3)"
                    fillOpacity={0.25}
                    animationDuration={1000}
                    dot={{
                        fill: 'var(--color-primary-2)',
                        fillOpacity: 1,
                        stroke: 'var(--color-primary-2)',
                    }}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};
