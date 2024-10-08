import { FC } from 'react';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import styles from './CustomTooltip.module.scss';

interface Props {
    primaryIds: string[];
    secondaryIds?: string[];
    active?: boolean;
    payload?: {
        dataKey: string;
        value: number;
    }[];
    label?: string;
}

const getMean = (values: number[]) =>
    Math.round(
        values.reduce((previous, current) => (previous += current)) /
            values.length,
    );

export const CustomTooltip: FC<Props> = ({
    primaryIds,
    secondaryIds,
    active,
    payload,
    label,
}) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
                <DataPoint
                    name={`${label} ${primaryIds.length !== 1 ? '(avg)' : ''}`}
                    value={getMean(
                        payload
                            .filter((track) =>
                                primaryIds.includes(track.dataKey),
                            )
                            .map((track) => track.value),
                    )}
                    suffix="%"
                    hasBar
                />
                {secondaryIds && (
                    <DataPoint
                        name={`${label} ${
                            secondaryIds.length !== 1 ? '(avg)' : ''
                        }`}
                        value={getMean(
                            payload
                                .filter((track) =>
                                    secondaryIds.includes(track.dataKey),
                                )
                                .map((track) => track.value),
                        )}
                        suffix="%"
                        hasBar
                        color="secondary"
                    />
                )}
            </div>
        );
    }

    return null;
};
