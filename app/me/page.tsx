import { Header } from '@components/Header/Header';
import { ItemsGrid } from '@components/ItemsGrid/ItemsGrid';
import { ItemsList } from '@components/ItemsList/ItemsList';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './page.module.scss';

export const metadata = {
    title: 'My Music',
};

export default async function Page() {
    const playlists = await music.user.playlists();
    const recentTracks = await music.user.recentTracks();

    return (
        <>
            <Header user />
            <main className={styles.main}>
                <Panel gridArea="playlists" heading="Playlists" icon="Disc">
                    <ItemsGrid playlists={playlists} />
                </Panel>
                <Panel gridArea="recent" heading="Recent Tracks" icon="Recent">
                    <ItemsList tracks={recentTracks} fallbackImage="" />
                </Panel>
            </main>
        </>
    );
}
