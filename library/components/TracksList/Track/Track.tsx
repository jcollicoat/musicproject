import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { LinkedAlbum } from '@components/Linked/LinkedAlbum';
import { LinkedArtists } from '@components/Linked/LinkedArtists';
import { TimeText } from '@components/TimeText/TimeText';
import { music } from '@music/api';
import styles from './Track.module.scss';

interface Props {
    track: Awaited<ReturnType<typeof music.trackId>>;
}

export const Track: FC<Props> = ({ track }) => {
    const { album, artists, durationMs, id, name } = track;

    return (
        <div
            className={styles.track}
            style={{ backgroundImage: `url(${album.images.large})` }}
        >
            <div className={styles.content}>
                <Image
                    src={album.images.medium}
                    alt={album.name}
                    height={60}
                    width={60}
                    className={styles.image}
                />

                <div className={styles.details}>
                    <div className={styles.name}>
                        <Link href={`/tracks/${id}`}>{name}</Link>
                    </div>
                    <div className={styles.artists}>
                        <Icon icon="User" />
                        <LinkedArtists artists={artists} />
                    </div>
                    <div className={styles.album}>
                        <Icon icon="Disc" />
                        <LinkedAlbum album={album} />
                    </div>
                </div>
                <div className={styles.data}>
                    <TimeText durationMs={durationMs} title="Track length" />
                </div>
            </div>
        </div>
    );
};
