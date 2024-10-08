import classNames from 'classnames';
import { FC } from 'react';
import { IconType } from 'react-icons';
import styles from './DataPoint.module.scss';

interface Props {
    name: string;
    value: string | number;
    color?: 'primary' | 'secondary';
    icon?: IconType;
    hasBar?: boolean;
    tempo?: number;
    suffix?: string;
    smallText?: boolean;
}

export const DataPoint: FC<Props> = ({
    name,
    value,
    color = 'primary',
    icon: Icon,
    hasBar,
    suffix,
    tempo,
    smallText,
}) => (
    <div className={classNames(styles.wrapper, styles[color])}>
        {(hasBar || Boolean(tempo)) && (
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
            {Icon && <Icon />}
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
