'use client';

import { FC } from 'react';
import { music } from '@music/api';
import { Album } from './Items/Album';
import { Track } from './Items/Track';
import styles from './ItemsList.module.scss';

type Albums = Awaited<ReturnType<typeof music.artists.albums>>;
type Tracks = Awaited<ReturnType<typeof music.trackId>>[];

interface Props {
    albums?: Albums;
    tracks?: Tracks;
}

export const ItemsList: FC<Props> = ({ albums, tracks }) => {
    const items = albums || tracks;
    if (!items) return null;

    return (
        <div className={styles.scroller}>
            <div className={styles.list}>
                {tracks &&
                    tracks.map((track) => (
                        <Track key={track.id} track={track} />
                    ))}
                {albums &&
                    albums.map((album) => (
                        <Album key={album.id} album={album} />
                    ))}
            </div>
        </div>
    );
};
