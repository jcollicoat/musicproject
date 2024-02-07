import Image from 'next/image';
import { FC } from 'react';
import { ClientLogger } from '@components/client/ClientLogger/ClientLogger';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './HeaderTrack.module.scss';

interface Props {
    trackId: string;
}

export const HeaderTrack: FC<Props> = async ({ trackId }) => {
    const track = await music.trackId(trackId);

    return (
        <Panel element="div">
            <ClientLogger data={track} />
            <div className={styles.track}>
                {track.album && (
                    <Image
                        src={track.album.images.small.url}
                        alt={track.album.name}
                        height={60}
                        width={60}
                        className={styles.image}
                    />
                )}
                <div className={styles.info}>
                    <h1 className={styles.title}>{track.name}</h1>
                    <p>
                        {track.artists[0].name} • {track.album?.name}
                    </p>
                </div>
            </div>
        </Panel>
    );
};
