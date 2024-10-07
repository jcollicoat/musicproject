import Link from 'next/link';
import { FC } from 'react';
import { Icon } from 'Generics/Icon/Icon';
import { LinkedAlbum } from 'Generics/Linked/LinkedAlbum';
import { LinkedArtists } from 'Generics/Linked/LinkedArtists';
import { TimeText } from 'Generics/TimeText/TimeText';
import { music } from 'music/api';
import layout from './layout.module.scss';

interface Props {
    track:
        | Awaited<ReturnType<typeof music.tracks.id>>
        | Awaited<ReturnType<typeof music.albums.id>>['tracks'][0];
    fallbackImage: string;
}

export const Track: FC<Props> = ({ track, fallbackImage }) => {
    const { artists, durationMs, id, name } = track;

    const image = 'album' in track ? track.album.images.medium : fallbackImage;

    return (
        <div className={layout.item}>
            <div className={layout.content}>
                <img
                    src={image}
                    alt={name}
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
                    {'album' in track && (
                        <div className={layout.section}>
                            <Icon icon="Disc" />
                            <LinkedAlbum album={track.album} />
                        </div>
                    )}
                </div>
                <div className={layout.data}>
                    <TimeText durationMs={durationMs} title="Track length" />
                </div>
            </div>
        </div>
    );
};
