import { music } from 'music/api';
import { MyMusic } from 'Panels/Heroes/MyMusic/MyMusic';
import { ItemsGrid } from 'Panels/ItemsGrid/ItemsGrid';
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
            <ItemsGrid
                gridArea="playlists"
                heading="Playlists"
                icon="Disc"
                playlists={playlists}
            />
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
