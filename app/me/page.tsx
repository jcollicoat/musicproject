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
                <Panel
                    heading={{ text: 'Playlists', icon: 'Disc' }}
                    gridArea="playlists"
                >
                    <ItemsGrid playlists={playlists} />
                </Panel>
                <Panel
                    heading={{ text: 'Recent Tracks', icon: 'Recent' }}
                    gridArea="recent"
                >
                    <ItemsList tracks={recentTracks} fallbackImage="" />
                </Panel>
            </main>
        </>
    );
}
