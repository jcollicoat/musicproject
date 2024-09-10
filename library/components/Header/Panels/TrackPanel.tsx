import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { DataPoint } from '@components/DataPoint/DataPoint';
import { Icon } from '@components/Icon/Icon';
import { LinkedAlbum } from '@components/Linked/LinkedAlbum';
import { LinkedArtists } from '@components/Linked/LinkedArtists';
import { Panel } from '@components/Panel/Panel';
import { TimeText } from '@components/TimeText/TimeText';
import { music } from '@music/api';
import sharedStyles from './sharedStyles.module.scss';
import styles from './TrackPanel.module.scss';

interface Props {
    trackId: string;
}

export const TrackPanel: FC<Props> = async ({ trackId }) => {
    const track = await music.trackId(trackId);
    const album = await music.albumId(track.album.id);

    return (
        <Panel element="div" backgroundImage={track.album.images.large}>
            <div className={sharedStyles.content}>
                <Image
                    src={track.album.images.large}
                    alt={track.album.name}
                    height={160}
                    width={160}
                    className={classNames(sharedStyles.image, styles.image)}
                />
                <div className={sharedStyles.details}>
                    <span className={sharedStyles.label}>Track</span>
                    <h1>{track.name}</h1>
                    <div className={sharedStyles.section}>
                        <div className={sharedStyles.item}>
                            <Icon icon="User" />
                            <LinkedArtists artists={track.artists} />
                        </div>
                        <div className={sharedStyles.item}>
                            <Icon icon="Disc" />
                            <LinkedAlbum album={track.album} />
                        </div>
                    </div>
                    <div className={sharedStyles.section}>
                        <div className={sharedStyles.item}>
                            <Icon icon="Clock" />
                            <TimeText durationMs={track.durationMs} />
                        </div>
                        <div className={sharedStyles.item}>
                            <Icon icon="Calendar" />
                            <span>
                                Released on {track.album.releaseDate.display}
                            </span>
                        </div>
                        {track.explicit && (
                            <span className={styles.explicit}>Explicit</span>
                        )}
                    </div>
                </div>
                <div className={sharedStyles.sidebar}>
                    <DataPoint
                        name="Popularity"
                        value={track.popularity}
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
