import { FC } from 'react';
import { Track as TrackType } from '@music/types/tracks.types';
import styles from './Track.module.scss';

interface Props {
    track: TrackType;
}

export const Track: FC<Props> = ({ track }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{track.name}</div>
        </div>
    );
};
