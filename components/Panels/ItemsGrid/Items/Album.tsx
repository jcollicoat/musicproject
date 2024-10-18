import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { PiCalendarBlank, PiMusicNote } from 'react-icons/pi';
import { music } from 'music/api';
import styles from './Album.module.scss';
import layout from './layout.module.scss';

interface Props {
    album: Awaited<ReturnType<typeof music.artists.albums>>[0];
}

export const Album: FC<Props> = ({ album }) => (
    <Link className={layout.tile} href={`/albums/${album.id}`}>
        <div className={classNames(layout.image, styles.image)}>
            <img
                src={album.images.medium}
                alt={album.name}
                height="100%"
                width="100%"
            />
        </div>
        <div className={layout.content}>
            <span className={layout.name}>{album.name}</span>
            <div className={layout.label}>
                <PiMusicNote />
                <span>
                    {album.totalTracks}{' '}
                    {album.totalTracks === 1 ? 'track' : 'tracks'}
                </span>
            </div>
            <div className={layout.label}>
                <PiCalendarBlank />
                <span>{album.releaseDate.exact.split('-')[0]}</span>
            </div>
        </div>
    </Link>
);
