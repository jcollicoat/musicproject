import { AudioFeatures } from 'components/AudioFeatures/AudioFeatures';
import { ItemsList } from 'components/ItemsList/ItemsList';
import { Panel } from 'components/Panel/Panel';
import { music } from 'music/api';
import { Album } from 'Panels/Headers/Album/Album';
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
            <Panel gridArea="tracks" heading="Tracks" icon="Track">
                <ItemsList
                    tracks={album.tracks}
                    fallbackImage={album.images.medium}
                    overflowScroll={false}
                />
            </Panel>
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
