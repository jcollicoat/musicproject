import { music } from 'music/api';
import { AudioFeatures } from 'Panels/AudioFeatures/AudioFeatures';
import { Album } from 'Panels/Headers/Album/Album';
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
                icon="Track"
                tracks={album.tracks}
                fallbackImage={album.images.medium}
                overflowScroll={false}
            />
            <AudioFeatures
                gridArea="audio"
                heading="Audio Features"
                icon="AudioFeatures"
                trackIds={album.tracks.map((track) => track.id)}
            />
        </main>
    );
}
