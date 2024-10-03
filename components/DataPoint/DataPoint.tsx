import classNames from 'classnames';
import { ComponentProps, FC } from 'react';
import { Icon } from 'components/Icon/Icon';
import styles from './DataPoint.module.scss';

interface Props {
    name: string;
    value: string | number;
    icon?: ComponentProps<typeof Icon>['icon'];
    hasBar?: boolean;
    tempo?: number;
    suffix?: string;
    smallText?: boolean;
}

export const DataPoint: FC<Props> = ({
    name,
    value,
    icon,
    hasBar,
    suffix,
    tempo,
    smallText,
}) => (
    <div className={styles.wrapper}>
        {(hasBar || tempo) && (
            <div className={styles.background}>
                {hasBar && (
                    <div
                        className={styles.bar}
                        style={{ height: `${value}%` }}
                    ></div>
                )}
                {tempo && (
                    <div
                        className={styles.tempo}
                        style={{ animationDuration: `${60 / tempo}s` }}
                    ></div>
                )}
            </div>
        )}
        <div className={styles.header}>
            {icon && <Icon icon={icon} />}
            <span>{name}</span>
        </div>
        <span
            className={classNames(styles.value, smallText && styles.smallText)}
        >
            {value}
            {suffix && <span>{suffix}</span>}
        </span>
    </div>
);
