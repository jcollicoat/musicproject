import { FC } from 'react';
import { Icon, IconProps } from '@components/Icon/Icon';
import { AudioFeatures } from '@music/types/audio.types';
import styles from './AudioFeature.module.scss';

type Keys = keyof Omit<AudioFeatures, 'id'>;

const icons: Record<Keys, IconProps['icon']> = {
    acousticness: 'MusicNote2',
    danceability: 'Spark',
    energy: 'Pulse',
    instrumentalness: 'MusicNote',
    key: 'MusicNote',
    liveness: 'Speaker',
    loudness: 'Speaker',
    mode: 'Speaker',
    speechiness: 'Speaker',
    tempo: 'Speaker',
    timeSignature: 'Speaker',
    valence: 'Speaker',
};

interface Props {
    feature: Keys;
    value: number;
}

export const AudioFeature: FC<Props> = ({ feature, value }) => {
    const radius = 24;
    const diameter = radius * 2;
    const strokeDasharray = diameter * 3.14;
    const strokeDashoffset = strokeDasharray - strokeDasharray * (value / 100);

    return (
        <div className={styles.feature}>
            <div className={styles.icon}>
                <Icon icon={icons[feature]} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={`0 0 ${diameter} ${diameter}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className={styles.circle}
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                >
                    <circle cx={radius} cy={radius} r={radius - 1} />
                </svg>
            </div>
            <span>{feature[0].toUpperCase() + feature.slice(1)}</span>
        </div>
    );
};
