import { FC } from 'react';
import { music } from '@music/api';
import Image from 'next/image';
import sharedStyles from './sharedStyles.module.scss';
import Link from 'next/link';
import { Icon } from '@components/Icon/Icon';

interface Props {
    album: Awaited<ReturnType<typeof music.artists.albums>>[0];
}

export const Album: FC<Props> = ({ album }) => {
    const { albumType, id, images, name, releaseDate, totalTracks } = album;

    return (
        <div
            className={sharedStyles.item}
            style={{ backgroundImage: `url(${images.large})` }}
        >
            <div className={sharedStyles.content}>
                <Image
                    src={album.images.medium}
                    alt={album.name}
                    height={60}
                    width={60}
                    className={sharedStyles.image}
                />
                <div className={sharedStyles.details}>
                    <div className={sharedStyles.name}>
                        <Link href={`/albums/${id}`}>{name}</Link>
                    </div>
                    <div className={sharedStyles.section}>
                        <Icon icon="MusicNote2" />
                        <span>{albumType}</span>
                    </div>
                    <div className={sharedStyles.section}>
                        <Icon icon="Calendar" />
                        <span>Released on {releaseDate.display}</span>
                    </div>
                </div>
                <div className={sharedStyles.data}>
                    <span>
                        {totalTracks} {totalTracks === 1 ? 'track' : 'tracks'}
                    </span>
                </div>
            </div>
        </div>
    );
};
