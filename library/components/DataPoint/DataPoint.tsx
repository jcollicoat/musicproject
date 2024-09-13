import classNames from 'classnames';
import { ComponentProps, FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import styles from './DataPoint.module.scss';

interface Props {
    name: string;
    value: string | number;
    icon?: ComponentProps<typeof Icon>['icon'];
    hasBar?: boolean;
    hasPercent?: boolean;
    smallText?: boolean;
}

export const DataPoint: FC<Props> = ({
    name,
    value,
    icon,
    hasBar,
    hasPercent,
    smallText,
}) => (
    <div className={styles.wrapper}>
        {hasBar && (
            <>
                <div className={styles.background}></div>
                <div
                    className={styles.bar}
                    style={{ height: `${value}%` }}
                ></div>
            </>
        )}
        <div className={styles.header}>
            {icon && <Icon icon={icon} />}
            <span>{name}</span>
        </div>
        <span
            className={classNames(styles.value, smallText && styles.smallText)}
        >
            {value}
            {hasPercent ? <span>%</span> : null}
        </span>
    </div>
);
