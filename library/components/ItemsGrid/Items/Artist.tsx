import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { music } from '@music/api';
import styles from './Artist.module.scss';
import layout from './layout.module.scss';

interface Props {
    artist: Awaited<ReturnType<typeof music.artists.relatedArtists>>[0];
}

export const Artist: FC<Props> = ({ artist }) => (
    <Link className={layout.tile} href={`/artists/${artist.id}`}>
        <div className={classNames(layout.image, styles.image)}>
            <Image
                src={artist.images.medium}
                alt={`Image for ${artist.name}`}
                fill
            />
        </div>
        <span className={layout.name}>{artist.name}</span>
        <div className={layout.label}>
            <Icon icon="Heart" />
            <span>
                {artist.followers.display}{' '}
                {artist.followers.total === 1 ? 'follower' : 'followers'}
            </span>
        </div>
    </Link>
);
