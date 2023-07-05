import Image from 'next/image';
import { FC } from 'react';
import { Panel } from '@components/Panel/Panel';
import { Track } from '@music/types/tracks.types';
import styles from './HeaderTrack.module.scss';

interface Props {
    track: Track;
}

export const HeaderTrack: FC<Props> = ({ track }) => {
    return (
        <Panel element="div">
            <div className={styles.track}>
                {track.album && (
                    <Image
                        src={track.album.images[0].url}
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
