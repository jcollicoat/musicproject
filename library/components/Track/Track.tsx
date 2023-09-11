import Image from 'next/image';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import { ClientLogger } from '@components/ClientLogger/ClientLogger';
import { TimeText } from '@components/TimeText/TimeText';
import { Track as TrackType } from '@music/types/tracks.types';
import styles from './Track.module.scss';

type Artists = Pick<TrackType, 'artists'>;

const Artists: FC<Artists> = ({ artists }) => {
    return artists.map((artist, index) => (
        <Fragment key={artist.id}>
            <Link href={`/artists/${artist.id}`}>{artist.name}</Link>
            {index !== artists.length - 1 && <>, </>}
        </Fragment>
    ));
};

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
                        <Artists artists={track.artists} /> •{' '}
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
