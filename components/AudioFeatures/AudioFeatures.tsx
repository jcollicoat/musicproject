import { FC } from 'react';
import { DataPoint } from 'components/DataPoint/DataPoint';
import { FeaturesChart } from 'components/FeaturesChart/FeaturesChart';
import { music } from 'music/api';
import { titleCase } from 'utilities';
import styles from './AudioFeatures.module.scss';

type Props = {
    trackId?: string;
    trackIds?: string[];
};

export const AudioFeatures: FC<Props> = async ({ trackId, trackIds }) => {
    let audio;
    if (trackId) {
        audio = await music.audio.features.id(trackId);
    } else if (trackIds) {
        audio = await music.audio.features.ids(trackIds);
    }

    if (!audio) return null;

    return (
        <div className={styles.container}>
            <FeaturesChart audio={audio} />
            <div className={styles.grid}>
                {audio.features.map((feature) => {
                    const isPercentage = typeof feature.percent === 'number';
                    return (
                        <DataPoint
                            key={feature.name}
                            name={titleCase(feature.name)}
                            value={feature.value}
                            isPercentage={isPercentage}
                        />
                    );
                })}
            </div>
        </div>
    );
};
