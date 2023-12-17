'use client';

import { FC } from 'react';
import { Tooltip } from 'react-tooltip';
import { Icon, IconProps } from '@components/Icon/Icon';
import { AudioFeatures } from '@music/types/tracks.types';
import styles from './AudioFeature.module.scss';

type AudioFeatureKeys = keyof Omit<
    AudioFeatures,
    'id' | 'speechiness' | 'timeSignature'
>;

const icons: Record<AudioFeatureKeys, IconProps['icon']> = {
    acousticness: 'MusicNote2',
    danceability: 'Spark',
    energy: 'Pulse',
    instrumentalness: 'MusicNote',
    key: 'MusicNote',
    liveness: 'Speaker',
    loudness: 'Speaker',
    mode: 'Speaker',
    tempo: 'Speaker',
    valence: 'Speaker',
};

interface Props {
    feature: AudioFeatureKeys;
    value?: number;
}

export const AudioFeature: FC<Props> = ({ feature, value }) => {
    return (
        <div
            className={styles.wrapper}
            data-tooltip-id={feature}
            data-tooltip-content={feature}
        >
            <Icon icon={icons[feature]} />
            {value && (
                <div
                    className={styles.bar}
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        backgroundImage: `linear-gradient(to right, currentColor, currentColor ${
                            value * 100
                        }%, transparent ${value * 100}%, transparent)`,
                    }}
                ></div>
            )}
            <Tooltip id={feature} />
        </div>
    );
};
