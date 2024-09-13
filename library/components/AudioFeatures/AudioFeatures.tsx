import { FC } from 'react';
import { titleCase } from '@api/helpers';
import { DataPoint } from '@components/DataPoint/DataPoint';
import { music } from '@music/api';
import styles from './AudioFeatures.module.scss';

interface Props {
    trackId: string;
}

export const AudioFeatures: FC<Props> = async ({ trackId }) => {
    const audio = await music.audio.features(trackId);

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {audio.features.map((feature) => {
                    const isPercentage = typeof feature.percent === 'number';
                    return (
                        <DataPoint
                            key={feature.name}
                            name={titleCase(feature.name)}
                            value={feature.value}
                            hasBar={isPercentage}
                            hasPercent={isPercentage}
                        />
                    );
                })}
            </div>
        </div>
    );
};
