import Image from 'next/image';
import { FC } from 'react';
import { AudioFeature } from '@components/AudioFeature/AudioFeature';
import { ClientLogger } from '@components/client/ClientLogger/ClientLogger';
import { LinkedAlbum } from '@components/Linked/LinkedAlbum';
import { LinkedArtists } from '@components/Linked/LinkedArtists';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './HeaderTrack.module.scss';

interface Props {
    trackId: string;
}

export const HeaderTrack: FC<Props> = async ({ trackId }) => {
    const track = await music.trackId(trackId);
    const audioFeatures = await music.audioFeatures(trackId);

    return (
        <Panel element="div" backgroundImage={track.album.images.large}>
            <ClientLogger data={[track, audioFeatures]} />
            <div className={styles.track}>
                <Image
                    src={track.album.images.large}
                    alt={track.album.name}
                    height={120}
                    width={120}
                    className={styles.image}
                />
                <div className={styles.info}>
                    <h1 className={styles.title}>{track.name}</h1>
                    <p>
                        <LinkedArtists artists={track.artists} /> •{' '}
                        <LinkedAlbum album={track.album} />
                    </p>
                </div>
                <AudioFeature feature="energy" value={audioFeatures.energy} />
                <AudioFeature
                    feature="danceability"
                    value={audioFeatures.danceability}
                />
                <AudioFeature
                    feature="liveness"
                    value={audioFeatures.liveness}
                />
            </div>
        </Panel>
    );
};
