import { PiMusicNote } from 'react-icons/pi';
import { music } from 'music/api';
import { AudioFeatures } from 'Panels/AudioFeatures/AudioFeatures';
import { Album } from 'Panels/Heroes/Album/Album';
import { ItemsList } from 'Panels/ItemsList/ItemsList';
import styles from './page.module.scss';

export const metadata = {
    title: 'Album',
};

export default async function Page({
    params: { albumId },
}: {
    params: { albumId: string };
}) {
    const album = await music.albums.id(albumId);

    return (
        <main className={styles.main}>
            <Album gridArea="header" albumId={albumId} />
            <ItemsList
                gridArea="tracks"
                heading="Tracks"
                icon={PiMusicNote}
                tracks={album.tracks}
                fallbackImage={album.images.medium}
                overflowScroll={false}
            />
            <AudioFeatures
                gridArea="audio"
                heading="Audio Features"
                trackIds={album.tracks.map((track) => track.id)}
            />
        </main>
    );
}
