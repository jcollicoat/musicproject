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
import { CustomTooltip } from 'Charts/CustomTooltip';
import { useIconTick } from './useIconTick';

interface Data extends Record<string, string | number> {
    name: string;
}

interface Props {
    data: Data[];
    datasets: { id: string; color: string }[];
}

export const Chart: FC<Props> = ({ data, datasets }) => {
    const { tickFunction } = useIconTick();

    return (
        <ResponsiveContainer height={420} width="100%">
            <RadarChart data={data}>
                <PolarGrid gridType="circle" stroke="var(--theme-color-4)" />
                <PolarAngleAxis
                    dataKey="name"
                    orientation="outer"
                    tick={tickFunction}
                />
                <PolarRadiusAxis
                    domain={[0, 100]}
                    axisLine={false}
                    tick={false}
                />
                {datasets.map((dataset) => (
                    <Radar
                        key={dataset.id}
                        dataKey={dataset.id}
                        stroke={dataset.color}
                        fill={dataset.color}
                        fillOpacity={0.25}
                        animationDuration={1000}
                        dot={{
                            fill: dataset.color,
                            fillOpacity: 1,
                            stroke: dataset.color,
                        }}
                    />
                ))}
                <Tooltip content={<CustomTooltip />} />
            </RadarChart>
        </ResponsiveContainer>
    );
};
