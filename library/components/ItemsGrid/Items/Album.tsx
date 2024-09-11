import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { music } from '@music/api';
import styles from './Album.module.scss';
import layout from './layout.module.scss';

interface Props {
    album: Awaited<ReturnType<typeof music.artists.albums>>[0];
}

export const Album: FC<Props> = ({ album }) => (
    <Link className={layout.tile} href={`/albums/${album.id}`}>
        <div className={classNames(layout.image, styles.image)}>
            <Image
                src={album.images.medium}
                alt={`Image for ${album.name}`}
                fill
                sizes="115px"
            />
        </div>
        <div className={layout.content}>
            <span className={layout.name}>{album.name}</span>
            <div className={layout.label}>
                <Icon icon="Disc" />
                <span>
                    {album.totalTracks}{' '}
                    {album.totalTracks === 1 ? 'track' : 'tracks'}
                </span>
            </div>
            <div className={layout.label}>
                <Icon icon="Calendar" />
                <span>{album.releaseDate.exact.split('-')[0]}</span>
            </div>
        </div>
    </Link>
);
