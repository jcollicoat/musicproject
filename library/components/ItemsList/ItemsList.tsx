'use client';

import { FC, useState } from 'react';
import { Button } from '@components/Button/Button';
import { music } from '@music/api';
import { Album } from './Items/Album';
import { Track } from './Items/Track';
import styles from './ItemsList.module.scss';

type Albums = Awaited<ReturnType<typeof music.artist.albums>>;
type Tracks = Awaited<ReturnType<typeof music.trackId>>[];

interface Props {
    albums?: Albums;
    tracks?: Tracks;
    initialLimit: number;
}

export const ItemsList: FC<Props> = ({ albums, tracks, initialLimit }) => {
    const [limit, setLimit] = useState(initialLimit);
    const isExpanded = limit !== initialLimit;

    const items = albums || tracks;
    if (!items) return null;

    const toggle = () => {
        setLimit(isExpanded ? initialLimit : items.length);
    };

    return (
        <div className={styles.list}>
            {tracks &&
                tracks
                    .slice(0, limit)
                    .map((track) => <Track key={track.id} track={track} />)}
            {albums &&
                albums
                    .slice(0, limit)
                    .map((album) => <Album key={album.id} album={album} />)}
            <Button
                text={isExpanded ? 'Show less' : 'Show more'}
                onClick={toggle}
                iconEnd={isExpanded ? { icon: 'Minus' } : { icon: 'Plus' }}
                style="text"
            />
        </div>
    );
};
