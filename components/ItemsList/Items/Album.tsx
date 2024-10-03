import Link from 'next/link';
import { FC } from 'react';
import { Icon } from 'components/Icon/Icon';
import { music } from '@music/api';
import layout from './layout.module.scss';

interface Props {
    album: Awaited<ReturnType<typeof music.artists.albums>>[0];
}

export const Album: FC<Props> = ({ album }) => {
    const { albumType, id, images, name, releaseDate, totalTracks } = album;

    return (
        <div className={layout.item}>
            <div className={layout.content}>
                <img
                    src={images.medium}
                    alt={name}
                    height={60}
                    width={60}
                    className={layout.image}
                />
                <div className={layout.details}>
                    <div className={layout.name}>
                        <Link href={`/albums/${id}`}>{name}</Link>
                    </div>
                    <div className={layout.section}>
                        <Icon icon="Playlist" />
                        <span>{albumType}</span>
                    </div>
                    <div className={layout.section}>
                        <Icon icon="Calendar" />
                        <span>Released on {releaseDate.display}</span>
                    </div>
                </div>
                <div className={layout.data}>
                    <span>
                        {totalTracks} {totalTracks === 1 ? 'track' : 'tracks'}
                    </span>
                </div>
            </div>
        </div>
    );
};
