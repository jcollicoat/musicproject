import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { LinkedAlbum } from '@components/Linked/LinkedAlbum';
import { LinkedArtists } from '@components/Linked/LinkedArtists';
import { TimeText } from '@components/TimeText/TimeText';
import { music } from '@music/api';
import sharedStyles from './sharedStyles.module.scss';

interface Props {
    track: Awaited<ReturnType<typeof music.trackId>>;
}

export const Track: FC<Props> = ({ track }) => {
    const { album, artists, durationMs, id, name } = track;

    return (
        <div
            className={sharedStyles.item}
            style={{ backgroundImage: `url(${album.images.large})` }}
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
                        <Link href={`/tracks/${id}`}>{name}</Link>
                    </div>
                    <div className={sharedStyles.section}>
                        <Icon icon="User" />
                        <LinkedArtists artists={artists} />
                    </div>
                    <div className={sharedStyles.section}>
                        <Icon icon="Disc" />
                        <LinkedAlbum album={album} />
                    </div>
                </div>
                <div className={sharedStyles.data}>
                    <TimeText durationMs={durationMs} title="Track length" />
                </div>
            </div>
        </div>
    );
};
