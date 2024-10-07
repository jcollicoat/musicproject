import { FC } from 'react';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import styles from './CustomTooltip.module.scss';

interface Props {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
}

const getMean = (values: number[]) =>
    Math.round(
        values.reduce((previous, current) => (previous += current)) /
            values.length,
    );

export const CustomTooltip: FC<Props> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        if (payload.length <= 2) {
            return (
                <div className={styles.tooltip}>
                    <DataPoint
                        name={label ?? ''}
                        value={payload[0].value}
                        suffix="%"
                        hasBar
                    />
                    {payload[1] && (
                        <DataPoint
                            name={label ?? ''}
                            value={payload[1].value}
                            suffix="%"
                            hasBar
                            color="secondary"
                        />
                    )}
                </div>
            );
        }

        return (
            <div className={styles.tooltip}>
                <DataPoint
                    name={`${label} (average)`}
                    value={getMean(payload.map((track) => track.value))}
                    suffix="%"
                    hasBar
                />
            </div>
        );
    }

    return null;
};
