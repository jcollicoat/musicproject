import Image from 'next/image';
import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { LinkedArtists } from '@components/Linked/LinkedArtists';
import { Panel } from '@components/Panel/Panel';
import { TimeText } from '@components/TimeText/TimeText';
import { music } from '@music/api';
import styles from './AlbumPanel.module.scss';

interface Props {
    albumId: string;
}

export const AlbumPanel: FC<Props> = async ({ albumId }) => {
    const album = await music.albumId(albumId);

    return (
        <Panel element="div" backgroundImage={album.images.large}>
            <div className={styles.content}>
                <Image
                    src={album.images.large}
                    alt={album.name}
                    height={160}
                    width={160}
                    className={styles.image}
                />
                <div className={styles.details}>
                    <h1>{album.name}</h1>
                    <div className={styles.section}>
                        <div className={styles.artists}>
                            <Icon icon="User" />
                            <LinkedArtists artists={album.artists} />
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.length}>
                            <Icon icon="Disc" />
                            <span>{album.totalTracks} tracks</span>
                        </div>
                        <div className={styles.duration}>
                            <Icon icon="Clock" />
                            <TimeText durationMs={album.length} />
                        </div>
                        <div className={styles.release}>
                            <Icon icon="Calendar" />
                            <span>Released on {album.releaseDate.display}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    );
};
