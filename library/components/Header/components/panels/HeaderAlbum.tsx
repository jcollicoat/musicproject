// import Image from 'next/image';
import { FC } from 'react';
import { Panel } from '@components/Panel/Panel';
import { Artist } from '@music/types/artists.types';
import styles from './HeaderAlbum.module.scss';

interface Props {
    album: Artist;
}

export const HeaderAlbum: FC<Props> = ({ album }) => {
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
                    <h1 className={styles.title}>{album.name}</h1>
                    {/* <p>
                        {track.artists[0].name} • {track.album?.name}
                    </p> */}
                </div>
            </div>
        </Panel>
    );
};
