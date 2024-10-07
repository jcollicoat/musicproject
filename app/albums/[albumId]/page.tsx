import { AudioFeatures } from 'components/AudioFeatures/AudioFeatures';
import { Panel } from 'components/Panel/Panel';
import { music } from 'music/api';
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
            <Panel
                gridArea="audio"
                heading="Audio Features (Average)"
                icon="AudioFeatures"
            >
                <AudioFeatures
                    trackIds={album.tracks.map((track) => track.id)}
                    display="chart"
                />
            </Panel>
        </main>
    );
}
