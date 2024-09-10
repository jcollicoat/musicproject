import classNames from 'classnames';
import { ComponentProps, FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import styles from './DataPoint.module.scss';

interface Props {
    name: string;
    value: string | number;
    icon?: ComponentProps<typeof Icon>['icon'];
}

export const DataPoint: FC<Props> = ({ name, value, icon }) => (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            {icon && <Icon icon={icon} />}
            <span>{name}</span>
        </div>
        <span
            className={classNames(
                styles.value,
                typeof value === 'number' && styles.large,
            )}
        >
            {value}
        </span>
    </div>
);
