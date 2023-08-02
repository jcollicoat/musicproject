// import Image from 'next/image';
import { FC } from 'react';
import { Panel } from '@components/Panel/Panel';
import { Artist } from '@music/types/artists.types';
import styles from './HeaderArtist.module.scss';

interface Props {
    artist: Artist;
}

export const HeaderArtist: FC<Props> = ({ artist }) => {
    return (
        <Panel element="div">
            <div className={styles.track}>
                {/* {track.album && (
                    <Image
                        src={track.album.images[0].url}
                        alt={track.album.name}
                        height={60}
                        width={60}
                        className={styles.image}
                    />
                )} */}
                <div className={styles.info}>
                    <h1 className={styles.title}>{artist.name}</h1>
                    {/* <p>
                        {track.artists[0].name} • {track.album?.name}
                    </p> */}
                </div>
            </div>
        </Panel>
    );
};
