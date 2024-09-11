import { ClientLogger } from '@components/ClientLogger/ClientLogger';
import { Header } from '@components/Header/Header';
import { ItemsList } from '@components/ItemsList/ItemsList';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './page.module.scss';

export const metadata = {
    title: 'My Music',
};

export default async function Page() {
    const recentTracks = await music.user.recentTracks();

    return (
        <>
            <Header user />
            <ClientLogger data={recentTracks} />
            <main className={styles.main}>
                <Panel
                    heading={{ text: 'Playlists', icon: 'Disc' }}
                    gridArea="playlists"
                >
                    <div></div>
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
