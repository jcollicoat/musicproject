'use client';

import { ComponentProps, FC } from 'react';
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import { Icon } from 'Generics/Icon/Icon';
import { music } from 'music/api';
import { CustomTooltip } from './CustomTooltip';

interface Props {
    audio: Awaited<ReturnType<typeof music.audio.features.id>>;
}

function iconTick({
    payload,
    x,
    y,
}: {
    payload: { value: string };
    x: number;
    y: number;
}) {
    let icon: ComponentProps<typeof Icon>['icon'] = 'Heart';

    switch (payload.value) {
        case 'instrumentalness':
            icon = 'Info';
            break;
        case 'energy':
            icon = 'Spark';
            break;
        case 'speechiness':
            icon = 'Microphone';
            break;
        case 'acousticness':
            icon = 'Playlist';
            break;
        case 'valence':
            icon = 'Smile';
            break;
        case 'danceability':
            icon = 'Pulse';
            break;
        case 'liveness':
            icon = 'Recent';
            break;
        default:
            icon = 'Heart';
    }

    return (
        <g
            className="recharts-layer recharts-polar-angle-axis-tick"
            style={{ transform: 'scale(105%)', transformOrigin: 'center' }}
        >
            <foreignObject
                x={x}
                y={y}
                dy="0em"
                width="1.25em"
                height="1.25em"
                style={{
                    fontSize: '1.25em',
                    transform: 'translate(-0.5em, -0.5em)',
                }}
            >
                <Icon icon={icon} />
            </foreignObject>
        </g>
    );
}

export const FeaturesChart: FC<Props> = ({ audio }) => {
    const features = audio.features.filter(
        (feature) => feature.percent !== undefined,
    );

    return (
        <ResponsiveContainer height={420} width="100%">
            <RadarChart data={features}>
                <PolarGrid gridType="circle" stroke="var(--theme-color-4)" />
                <PolarAngleAxis
                    dataKey="name"
                    orientation="outer"
                    tick={iconTick}
                />
                <PolarRadiusAxis
                    domain={[0, 100]}
                    axisLine={false}
                    tick={false}
                />
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
                <Tooltip content={<CustomTooltip />} />
            </RadarChart>
        </ResponsiveContainer>
    );
};
