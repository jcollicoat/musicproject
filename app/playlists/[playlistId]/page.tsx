import { AudioFeatures } from 'components/AudioFeatures/AudioFeatures';
import { ItemsList } from 'components/ItemsList/ItemsList';
import { Panel } from 'components/Panel/Panel';
import { music } from 'music/api';
import styles from './page.module.scss';

export const metadata = {
    title: 'Playlist',
};

export default async function Page({
    params: { playlistId },
}: {
    params: { playlistId: string };
}) {
    const playlist = await music.playlists.id(playlistId);

    return (
        <main className={styles.main}>
            <Panel gridArea="tracks" heading="Tracks" icon="Track">
                <ItemsList
                    tracks={playlist.tracks}
                    fallbackImage={playlist.images?.medium ?? ''}
                    overflowScroll={false}
                />
            </Panel>
            <Panel
                gridArea="audio"
                heading="Audio Features (Average)"
                icon="AudioFeatures"
            >
                <AudioFeatures
                    trackIds={playlist.tracks.map((track) => track.id)}
                    display="chart"
                />
            </Panel>
        </main>
    );
}
