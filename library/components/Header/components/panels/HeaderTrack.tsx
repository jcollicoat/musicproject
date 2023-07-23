import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import { Panel } from '@components/Panel/Panel';
import { useTrack } from '@hooks/music/useTrack';
import styles from './HeaderTrack.module.scss';

export const HeaderTrack: FC = () => {
    const { trackId } = useParams();
    const track = useTrack(trackId);
    console.log(track);

    return (
        <Panel element="div">
            <div className={styles.track}>
                {track?.album && (
                    <Image
                        src={track.album.images[0].url}
                        alt={track.album.name}
                        height={60}
                        width={60}
                        className={styles.image}
                    />
                )}
                <div className={styles.info}>
                    <h1 className={styles.title}>{track?.name}</h1>
                    <p>
                        {track?.artists[0].name} • {track?.album?.name}
                    </p>
                </div>
            </div>
        </Panel>
    );
};
