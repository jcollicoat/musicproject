import { FC } from 'react';
import { DataPoint } from 'components/DataPoint/DataPoint';
import styles from './CustomTooltip.module.scss';

interface Props {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
}

export const CustomTooltip: FC<Props> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return payload.map((item, index) => (
            <div key={item.value} className={styles.tooltip}>
                <DataPoint
                    name={label ?? ''}
                    value={item.value}
                    color={index === 1 ? 'secondary' : 'primary'}
                    suffix="%"
                    hasBar
                />
            </div>
        ));
    }

    return null;
};
