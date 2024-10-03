import { FC } from 'react';
import { DataPoint } from 'components/DataPoint/DataPoint';
import { titleCase } from 'utilities';
import styles from './CustomTooltip.module.scss';

interface Props {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
}

export const CustomTooltip: FC<Props> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
                <DataPoint
                    name={label ? titleCase(label) : ''}
                    value={payload[0].value}
                    hasBar
                    isPercentage
                />
            </div>
        );
    }

    return null;
};
