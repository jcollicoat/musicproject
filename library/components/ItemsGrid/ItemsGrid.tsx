'use client';

import { FC, useState } from 'react';
import { Button } from '@components/Button/Button';
import { music } from '@music/api';
import { Album } from './Items/Album';
import { Artist } from './Items/Artist';
import styles from './ItemsGrid.module.scss';

type Albums = Awaited<ReturnType<typeof music.artists.albums>>;
type Artists = Awaited<ReturnType<typeof music.artists.relatedArtists>>;

interface Props {
    albums?: Albums;
    artists?: Artists;
    initialLimit: number;
}

export const ItemsGrid: FC<Props> = ({ albums, artists, initialLimit }) => {
    const [limit, setLimit] = useState(initialLimit);
    const isExpanded = limit !== initialLimit;

    const items = albums || artists;
    if (!items) return null;

    const toggle = () => {
        setLimit(isExpanded ? initialLimit : items.length);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                {albums &&
                    albums
                        .slice(0, limit)
                        .map((album) => <Album key={album.id} album={album} />)}
                {artists &&
                    artists
                        .slice(0, limit)
                        .map((artist) => (
                            <Artist key={artist.id} artist={artist} />
                        ))}
            </div>
            <Button
                text={isExpanded ? 'Show less' : 'Show more'}
                onClick={toggle}
                iconEnd={isExpanded ? { icon: 'Minus' } : { icon: 'Plus' }}
                style="text"
            />
        </div>
    );
};
