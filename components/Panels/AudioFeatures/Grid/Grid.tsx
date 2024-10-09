import { FC } from 'react';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { SpotifyAudioFeatures } from 'spotify/types/audio.types';
import { titleCase } from 'utilities';
import styles from './Grid.module.scss';
import { useGrid } from './useGrid';

interface Props {
    audio_features: SpotifyAudioFeatures[];
}

export const Grid: FC<Props> = ({ audio_features }) => {
    const data = useGrid(audio_features);

    return (
        <div className={styles.grid}>
            {data.features.map((feature) => {
                const isPercent = typeof feature.percent === 'number';
                return (
                    <DataPoint
                        key={feature.name}
                        name={titleCase(feature.name)}
                        primary={{
                            value: feature.value,
                            isPercent: isPercent,
                            isTempo: feature.name === 'tempo',
                            suffix: isPercent ? '%' : undefined,
                        }}
                    />
                );
            })}
        </div>
    );
};
