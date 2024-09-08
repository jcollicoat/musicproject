import { FC } from 'react';
import styles from './TimeText.module.scss';

interface Props {
    durationMs: number;
    title?: string;
}

export const TimeText: FC<Props> = ({ durationMs, title = 'Duration' }) => {
    const totalSeconds = Math.floor(durationMs / 1000);
    const hours = Math.floor(totalSeconds / 60 / 60);
    const minutes = Math.floor(totalSeconds / 60 - hours * 60);
    const seconds = totalSeconds % 60;

    return (
        <span
            aria-label={`${title}: ${
                hours !== 0
                    ? `${hours} ${hours === 1 ? 'hour' : 'hours'}, `
                    : ''
            }${minutes} minutes, ${seconds} seconds`}
            className={styles.time}
        >
            {hours !== 0 && (
                <>
                    {hours}
                    <span className={styles.separator}>:</span>
                </>
            )}
            {hours !== 0 && minutes === 0 ? `0${minutes}` : minutes}
            <span className={styles.separator}>:</span>
            {seconds < 10 ? `0${seconds}` : seconds}
        </span>
    );
};
