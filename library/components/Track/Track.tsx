import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ClientLogger } from '@components/ClientLogger/ClientLogger';
import { TimeText } from '@components/TimeText/TimeText';
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
            <ClientLogger data={track} name={track.name} />
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
                <div className={styles.details}>
                    <div className={styles.name}>
                        <Link href={`/tracks/${track.id}`}>{track.name}</Link>
                    </div>
                    <div className={styles.meta}>
                        <Link href={`/artists/${track.artists[0].id}`}>
                            {track.artists[0].name}
                        </Link>{' '}
                        •{' '}
                        <Link href={`/albums/${track.album?.id}`}>
                            {track.album?.name}
                        </Link>
                    </div>
                </div>
                <div className={styles.data}>
                    <TimeText durationMs={track.durationMs} />
                </div>
            </div>
        </div>
    );
};
