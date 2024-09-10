import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { ClientLogger } from '@components/ClientLogger/ClientLogger';
import { Icon } from '@components/Icon/Icon';
import { LinkedArtists } from '@components/Linked/LinkedArtists';
import { Panel } from '@components/Panel/Panel';
import { TimeText } from '@components/TimeText/TimeText';
import { music } from '@music/api';
import styles from './AlbumPanel.module.scss';
import sharedStyles from './sharedStyles.module.scss';

interface Props {
    albumId: string;
}

export const AlbumPanel: FC<Props> = async ({ albumId }) => {
    const album = await music.albumId(albumId);

    return (
        <Panel element="div" backgroundImage={album.images.large}>
            <ClientLogger data={album} />
            <div className={sharedStyles.content}>
                <Image
                    src={album.images.large}
                    alt={album.name}
                    height={160}
                    width={160}
                    className={classNames(sharedStyles.image, styles.image)}
                />
                <div className={sharedStyles.details}>
                    <span className={sharedStyles.label}>
                        {album.albumType}
                    </span>
                    <h1>{album.name}</h1>
                    <div className={sharedStyles.section}>
                        <div className={sharedStyles.item}>
                            <Icon icon="User" />
                            <LinkedArtists artists={album.artists} />
                        </div>
                    </div>
                    <div className={sharedStyles.section}>
                        <div className={sharedStyles.item}>
                            <Icon icon="Disc" />
                            <span>{album.totalTracks} tracks</span>
                        </div>
                        <div className={sharedStyles.item}>
                            <Icon icon="Clock" />
                            <TimeText durationMs={album.length} />
                        </div>
                        <div className={sharedStyles.item}>
                            <Icon icon="Calendar" />
                            <span>Released on {album.releaseDate.display}</span>
                        </div>
                    </div>
                </div>
                <div className={sharedStyles.sidebar}>
                    <div className={sharedStyles.popularity}>
                        <div className={sharedStyles.header}>
                            <Icon icon="Heart" />
                            <span>Popularity</span>
                        </div>
                        <span>{album.popularity}</span>
                    </div>
                    <div className={styles.label}>
                        <div className={styles.header}>
                            <Icon icon="Info" />
                            <span>Label</span>
                        </div>
                        <span>{album.label}</span>
                    </div>
                </div>
            </div>
        </Panel>
    );
};
