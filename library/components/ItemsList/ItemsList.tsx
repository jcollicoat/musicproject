'use client';

import classNames from 'classnames';
import { FC } from 'react';
import { music } from '@music/api';
import { Album } from './Items/Album';
import { Track } from './Items/Track';
import styles from './ItemsList.module.scss';
import { useOverflow } from './useOverflow';

type Albums = Awaited<ReturnType<typeof music.artists.albums>>;
type Tracks =
    | Awaited<ReturnType<typeof music.tracks.id>>[]
    | Awaited<ReturnType<typeof music.albums.id>>['tracks'];

interface Props {
    albums?: Albums;
    tracks?: Tracks;
    fallbackImage: string;
    overflowScroll?: boolean;
}

export const ItemsList: FC<Props> = ({
    albums,
    tracks,
    fallbackImage,
    overflowScroll = true,
}) => {
    const { scrollerRef, calculate, hasOverflowTop, hasOverflowBottom } =
        useOverflow(overflowScroll);

    const items = albums || tracks;
    if (!items) return null;

    return (
        <div
            className={classNames(
                styles.wrapper,
                overflowScroll && styles.scroller,
                hasOverflowTop && styles.overflowTop,
                hasOverflowBottom && styles.overflowBottom,
            )}
        >
            <div className={styles.list} ref={scrollerRef} onScroll={calculate}>
                {tracks &&
                    tracks.map((track) => (
                        <Track
                            key={track.id}
                            track={track}
                            fallbackImage={fallbackImage}
                        />
                    ))}
                {albums &&
                    albums.map((album) => (
                        <Album key={album.id} album={album} />
                    ))}
            </div>
        </div>
    );
};
