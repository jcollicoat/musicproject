'use client';

import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { music } from '@music/api';
import { Album } from './Items/Album';
import { Artist } from './Items/Artist';
import styles from './ItemsGrid.module.scss';

type Albums = Awaited<ReturnType<typeof music.artists.albums>>;
type Artists = Awaited<ReturnType<typeof music.artists.relatedArtists>>;

interface Props {
    albums?: Albums;
    artists?: Artists;
}

export const ItemsGrid: FC<Props> = ({ albums, artists }) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [hasOverflowLeft, setHasOverflowLeft] = useState(false);
    const [hasOverflowRight, setHasOverflowRight] = useState(false);

    const calculate = () => {
        const scrollerWidth = scrollerRef.current?.clientWidth;
        const contentWidth = scrollerRef.current?.scrollWidth;
        const scrollLeft = scrollerRef.current?.scrollLeft;

        if (!scrollerWidth || !contentWidth || scrollLeft === undefined) {
            return;
        }

        if (scrollLeft > 0) {
            setHasOverflowLeft(true);
        } else {
            setHasOverflowLeft(false);
        }

        if (scrollerWidth + scrollLeft < contentWidth) {
            setHasOverflowRight(true);
        } else if (scrollerWidth + scrollLeft === contentWidth) {
            setHasOverflowRight(false);
        }
    };

    useEffect(() => {
        calculate();
    }, []);

    const items = albums || artists;
    if (!items) return null;

    return (
        <div
            className={classNames(
                styles.scroller,
                hasOverflowLeft && styles.overflowLeft,
                hasOverflowRight && styles.overflowRight,
            )}
        >
            <div
                className={classNames(styles.grid)}
                ref={scrollerRef}
                onScroll={calculate}
            >
                {albums &&
                    albums.map((album) => (
                        <Album key={album.id} album={album} />
                    ))}
                {artists &&
                    artists.map((artist) => (
                        <Artist key={artist.id} artist={artist} />
                    ))}
            </div>
        </div>
    );
};
