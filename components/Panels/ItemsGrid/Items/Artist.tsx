import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { PiHeart } from 'react-icons/pi';
import { music } from 'music/api';
import styles from './Artist.module.scss';
import layout from './layout.module.scss';

interface Props {
    artist: Awaited<ReturnType<typeof music.artists.relatedArtists>>[0];
}

export const Artist: FC<Props> = ({ artist }) => (
    <Link className={layout.tile} href={`/artists/${artist.id}`}>
        <div className={classNames(layout.image, styles.image)}>
            <img
                src={artist.images.medium}
                alt={artist.name}
                height="100%"
                width="100%"
            />
        </div>
        <div className={layout.content}>
            <span className={layout.name}>{artist.name}</span>
            <div className={layout.label}>
                <PiHeart />
                <span>
                    {artist.followers.display}{' '}
                    {artist.followers.total === 1 ? 'follower' : 'followers'}
                </span>
            </div>
        </div>
    </Link>
);
