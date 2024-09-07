import Image from 'next/image';
import { FC } from 'react';
import { AudioFeature } from '@components/AudioFeature/AudioFeature';
import { Icon } from '@components/Icon/Icon';
import { LinkedAlbum } from '@components/Linked/LinkedAlbum';
import { LinkedArtists } from '@components/Linked/LinkedArtists';
import { Panel } from '@components/Panel/Panel';
import { TimeText } from '@components/TimeText/TimeText';
import { music } from '@music/api';
import styles from './TrackPanel.module.scss';

interface Props {
    trackId: string;
}

export const TrackPanel: FC<Props> = async ({ trackId }) => {
    const track = await music.trackId(trackId);
    const audioFeatures = await music.audioFeatures(trackId);

    return (
        <Panel element="div" backgroundImage={track.album.images.large}>
            <div className={styles.content}>
                <div className={styles.main}>
                    <Image
                        src={track.album.images.large}
                        alt={track.album.name}
                        height={160}
                        width={160}
                        className={styles.image}
                    />
                    <div className={styles.details}>
                        <h1 className={styles.title}>{track.name}</h1>
                        <div className={styles.section}>
                            <div className={styles.artists}>
                                <Icon icon="User" />
                                <LinkedArtists artists={track.artists} />
                            </div>
                            <div className={styles.album}>
                                <Icon icon="Spotify" />
                                <LinkedAlbum album={track.album} />
                            </div>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.duration}>
                                <Icon icon="Pulse" />
                                <TimeText durationMs={track.durationMs} />
                            </div>
                            <div className={styles.release}>
                                <Icon icon="Recent" />
                                <span>
                                    Released on{' '}
                                    {track.album.releaseDate.display}
                                </span>
                            </div>
                            {track.explicit && (
                                <span className={styles.explicit}>
                                    Explicit
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <AudioFeature
                        feature="energy"
                        value={audioFeatures.energy}
                    />
                    <AudioFeature
                        feature="danceability"
                        value={audioFeatures.danceability}
                    />
                    <AudioFeature
                        feature="liveness"
                        value={audioFeatures.liveness}
                    />
                </div>
            </div>
        </Panel>
    );
};
