import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { music } from '@music/api';
import layout from './layout.module.scss';
import styles from './Playlist.module.scss';

interface Props {
    playlist: Awaited<ReturnType<typeof music.user.playlists>>[0];
}

export const Playlist: FC<Props> = ({ playlist }) => (
    <Link className={layout.tile} href={`/playlists/${playlist.id}`}>
        <div className={classNames(layout.image, styles.image)}>
            <Image
                src={playlist.images?.medium ?? ''}
                alt={`Image for ${playlist.name}`}
                fill
                sizes="115px"
            />
        </div>
        <div className={layout.content}>
            <span className={layout.name}>{playlist.name}</span>
            <div className={layout.label}>
                <Icon icon="Track" />
                <span>
                    {playlist.totalTracks}{' '}
                    {playlist.totalTracks === 1 ? 'track' : 'tracks'}
                </span>
            </div>
        </div>
    </Link>
);
