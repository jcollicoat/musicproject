'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Button } from '@components/Button/Button';
import { Icon } from '@components/Icon/Icon';
import { music } from '@music/api';
import styles from './ItemsGrid.module.scss';

type Artists = Awaited<ReturnType<typeof music.artists.relatedArtists>>;

interface Props {
    artists?: Artists;
    initialLimit: number;
}

export const ItemsGrid: FC<Props> = ({ artists, initialLimit }) => {
    const [limit, setLimit] = useState(initialLimit);
    const isExpanded = limit !== initialLimit;

    if (!artists) return null;

    const toggle = () => {
        setLimit(isExpanded ? initialLimit : 18);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                {artists.slice(0, limit).map((artist) => (
                    <Link
                        key={artist.id}
                        className={styles.artist}
                        href={`/artists/${artist.id}`}
                    >
                        <div className={styles.image}>
                            <Image
                                src={artist.images.medium}
                                alt={`Image for ${artist.name}`}
                                fill
                            />
                        </div>
                        <span className={styles.name}>{artist.name}</span>
                        <div className={styles.followers}>
                            <Icon icon="Heart" />
                            <span>
                                {artist.followers.display}{' '}
                                {artist.followers.total === 1
                                    ? 'follower'
                                    : 'followers'}
                            </span>
                        </div>
                    </Link>
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
