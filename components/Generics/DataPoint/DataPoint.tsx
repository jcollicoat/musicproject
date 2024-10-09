import classNames from 'classnames';
import { FC } from 'react';
import { IconType } from 'react-icons';
import styles from './DataPoint.module.scss';

interface Data {
    value: string | number;
    isPercent?: boolean;
    isTempo?: boolean;
    suffix?: string;
}

interface Props {
    name: string;
    primary: Data;
    secondary?: Data;
    icon?: IconType;
    smallText?: boolean;
}

export const DataPoint: FC<Props> = ({
    name,
    primary,
    secondary,
    icon: Icon,
    smallText,
}) => (
    <div className={styles.wrapper}>
        {(primary.isPercent || primary.isTempo) && (
            <div className={classNames(styles.bar, styles.primary)}>
                {primary.isPercent && (
                    <div
                        className={styles.percent}
                        style={{ height: `${primary.value}%` }}
                    ></div>
                )}
                {primary.isTempo && typeof primary.value === 'number' && (
                    <div
                        className={styles.tempo}
                        style={{ animationDuration: `${60 / primary.value}s` }}
                    ></div>
                )}
            </div>
        )}
        <div className={styles.content}>
            <div className={styles.header}>
                {Icon && <Icon />}
                {name}
            </div>
            <div className={styles.values}>
                <span
                    className={classNames(
                        styles.value,
                        smallText && styles.smallText,
                        secondary && styles.primary,
                    )}
                >
                    {primary.value}
                    {primary.suffix && <span>{primary.suffix}</span>}
                </span>
                {secondary && (
                    <span
                        className={classNames(
                            styles.value,
                            smallText && styles.smallText,
                            styles.secondary,
                        )}
                    >
                        {secondary.value}
                        {secondary.suffix && <span>{secondary.suffix}</span>}
                    </span>
                )}
            </div>
        </div>
        {(secondary?.isPercent || secondary?.isTempo) && (
            <div className={classNames(styles.bar, styles.secondary)}>
                {primary.isPercent && (
                    <div
                        className={styles.percent}
                        style={{ height: `${secondary.value}%` }}
                    ></div>
                )}
                {secondary.isTempo && typeof secondary.value === 'number' && (
                    <div
                        className={styles.tempo}
                        style={{
                            animationDuration: `${60 / secondary.value}s`,
                        }}
                    ></div>
                )}
            </div>
        )}
    </div>
);
