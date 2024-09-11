'use client';

import classNames from 'classnames';
import { FC } from 'react';
import { music } from '@music/api';
import { Album } from './Items/Album';
import { Artist } from './Items/Artist';
import { Playlist } from './Items/Playlist';
import styles from './ItemsGrid.module.scss';
import { useOverflow } from './useOverflow';

type Albums = Awaited<ReturnType<typeof music.artists.albums>>;
type Artists = Awaited<ReturnType<typeof music.artists.relatedArtists>>;
type Playlists = Awaited<ReturnType<typeof music.user.playlists>>;

interface Props {
    albums?: Albums;
    artists?: Artists;
    playlists?: Playlists;
}

export const ItemsGrid: FC<Props> = ({ albums, artists, playlists }) => {
    const { scrollerRef, calculate, hasOverflowLeft, hasOverflowRight } =
        useOverflow();

    const items = albums || artists || playlists;
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
                {playlists &&
                    playlists.map((playlist) => (
                        <Playlist key={playlist.id} playlist={playlist} />
                    ))}
            </div>
        </div>
    );
};
