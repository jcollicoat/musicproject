import Image from 'next/image';
import { FC } from 'react';
import { Track as TrackType } from '@music/types/tracks.types';
import styles from './Track.module.scss';

interface Props {
    track: TrackType;
}

export const Track: FC<Props> = ({ track }) => {
    return (
        <div
            className={styles.wrapper}
            style={{ backgroundImage: `url(${track.album?.images[0].url})` }}
        >
            <div className={styles.content}>
                {track.album && (
                    <Image
                        src={track.album.images[0].url}
                        alt={track.album.name}
                        height={60}
                        width={60}
                        className={styles.image}
                    />
                )}
                <div className={styles.name}>{track.name}</div>
            </div>
        </div>
    );
};
