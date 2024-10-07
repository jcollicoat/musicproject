import { FC } from 'react';
import { builders } from 'builders';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { titleCase } from 'utilities';
import styles from './Grid.module.scss';

interface Props {
    audio: ReturnType<typeof builders.audio.features.multiple>;
}

export const Grid: FC<Props> = ({ audio }) => {
    return (
        <div className={styles.grid}>
            {audio.features.map((feature) => {
                const isPercentage = typeof feature.percent === 'number';
                return (
                    <DataPoint
                        key={feature.name}
                        name={titleCase(feature.name)}
                        value={feature.value}
                        hasBar={isPercentage}
                        tempo={
                            feature.name === 'tempo'
                                ? (feature.value as number)
                                : undefined
                        }
                        suffix={isPercentage ? '%' : undefined}
                    />
                );
            })}
        </div>
    );
};
