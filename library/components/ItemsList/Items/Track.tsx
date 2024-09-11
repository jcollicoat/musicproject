import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { LinkedAlbum } from '@components/Linked/LinkedAlbum';
import { LinkedArtists } from '@components/Linked/LinkedArtists';
import { TimeText } from '@components/TimeText/TimeText';
import { music } from '@music/api';
import layout from './layout.module.scss';

interface Props {
    track: Awaited<ReturnType<typeof music.trackId>>;
}

export const Track: FC<Props> = ({ track }) => {
    const { album, artists, durationMs, id, name } = track;

    return (
        <div
            className={layout.item}
            style={{ backgroundImage: `url(${album.images.large})` }}
        >
            <div className={layout.content}>
                <Image
                    src={album.images.medium}
                    alt={album.name}
                    height={60}
                    width={60}
                    className={layout.image}
                />
                <div className={layout.details}>
                    <div className={layout.name}>
                        <Link href={`/tracks/${id}`}>{name}</Link>
                    </div>
                    <div className={layout.section}>
                        <Icon icon="User" />
                        <LinkedArtists artists={artists} />
                    </div>
                    <div className={layout.section}>
                        <Icon icon="Disc" />
                        <LinkedAlbum album={album} />
                    </div>
                </div>
                <div className={layout.data}>
                    <TimeText durationMs={durationMs} title="Track length" />
                </div>
            </div>
        </div>
    );
};
