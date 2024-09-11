import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { DataPoint } from '@components/DataPoint/DataPoint';
import { Icon } from '@components/Icon/Icon';
import { LinkedArtists } from '@components/Linked/LinkedArtists';
import { Panel } from '@components/Panel/Panel';
import { TimeText } from '@components/TimeText/TimeText';
import { music } from '@music/api';
import styles from './AlbumPanel.module.scss';
import layout from './layout.module.scss';

interface Props {
    albumId: string;
}

export const AlbumPanel: FC<Props> = async ({ albumId }) => {
    const album = await music.albumId(albumId);

    return (
        <Panel element="div" backgroundImage={album.images.large}>
            <div className={layout.content}>
                <Image
                    src={album.images.large}
                    alt={album.name}
                    height={160}
                    width={160}
                    className={classNames(layout.image, styles.image)}
                />
                <div className={layout.details}>
                    <span className={layout.label}>{album.albumType}</span>
                    <h1>{album.name}</h1>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <Icon icon="User" />
                            <LinkedArtists artists={album.artists} />
                        </div>
                    </div>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <Icon icon="Disc" />
                            <span>
                                {album.totalTracks}{' '}
                                {album.totalTracks === 1 ? 'track' : 'tracks'}
                            </span>
                        </div>
                        <div className={layout.item}>
                            <Icon icon="Clock" />
                            <TimeText durationMs={album.length} />
                        </div>
                        <div className={layout.item}>
                            <Icon icon="Calendar" />
                            <span>Released on {album.releaseDate.display}</span>
                        </div>
                    </div>
                </div>
                <div className={layout.sidebar}>
                    <DataPoint
                        name="Popularity"
                        value={album.popularity}
                        icon="Heart"
                    />
                    <DataPoint
                        name="Label"
                        value={album.label}
                        icon="MusicNote"
                    />
                </div>
            </div>
        </Panel>
    );
};
