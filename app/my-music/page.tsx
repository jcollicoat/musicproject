import { Panel } from 'components/Panel/Panel';
import { ItemsGrid } from 'Generics/ItemsGrid/ItemsGrid';
import { music } from 'music/api';
import { MyMusic } from 'Panels/Headers/MyMusic/MyMusic';
import { ItemsList } from 'Panels/ItemsList/ItemsList';
import styles from './page.module.scss';

export const metadata = {
    title: 'My Music',
};

export default async function Page() {
    const playlists = await music.user.playlists();
    const recentTracks = await music.user.recentTracks();

    return (
        <main className={styles.main}>
            <MyMusic gridArea="header" />
            <Panel gridArea="playlists" heading="Playlists" icon="Disc">
                <ItemsGrid playlists={playlists} />
            </Panel>
            <ItemsList
                gridArea="recent"
                heading="Recent Tracks"
                icon="Recent"
                tracks={recentTracks}
                fallbackImage=""
            />
        </main>
    );
}
