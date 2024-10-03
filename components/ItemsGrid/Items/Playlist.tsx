import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { Icon } from 'components/Icon/Icon';
import { music } from 'music/api';
import layout from './layout.module.scss';
import styles from './Playlist.module.scss';

interface Props {
    playlist: Awaited<ReturnType<typeof music.user.playlists>>[0];
}

export const Playlist: FC<Props> = ({ playlist }) => (
    <Link className={layout.tile} href={`/playlists/${playlist.id}`}>
        <div className={classNames(layout.image, styles.image)}>
            <img
                src={playlist.images?.medium ?? ''}
                alt={playlist.name}
                height="100%"
                width="100%"
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
