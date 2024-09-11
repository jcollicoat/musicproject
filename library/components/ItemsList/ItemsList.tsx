'use client';

import classNames from 'classnames';
import { FC, useRef, useState } from 'react';
import { music } from '@music/api';
import { Album } from './Items/Album';
import { Track } from './Items/Track';
import styles from './ItemsList.module.scss';

type Albums = Awaited<ReturnType<typeof music.artists.albums>>;
type Tracks =
    | Awaited<ReturnType<typeof music.trackId>>[]
    | Awaited<ReturnType<typeof music.albums.id>>['tracks'];

interface Props {
    albums?: Albums;
    tracks?: Tracks;
    fallbackImage: string;
}

export const ItemsList: FC<Props> = ({ albums, tracks, fallbackImage }) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [hasOverflowTop, setHasOverflowTop] = useState(false);
    const [hasOverflowBottom, setHasOverflowBottom] = useState(false);

    const calculate = () => {
        const scrollerHeight = scrollerRef.current?.clientHeight;
        const contentHeight = scrollerRef.current?.scrollHeight;
        const scrollTop = scrollerRef.current?.scrollTop;

        if (!scrollerHeight || !contentHeight || scrollTop === undefined) {
            return;
        }

        if (scrollTop > 0) {
            setHasOverflowTop(true);
        } else {
            setHasOverflowTop(false);
        }

        if (scrollerHeight + scrollTop < contentHeight) {
            setHasOverflowBottom(true);
        } else if (scrollerHeight + scrollTop === contentHeight) {
            setHasOverflowBottom(false);
        }
    };

    const items = albums || tracks;
    if (!items) return null;

    return (
        <div
            className={classNames(
                styles.scroller,
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
