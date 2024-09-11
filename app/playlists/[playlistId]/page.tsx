import { ClientLogger } from '@components/ClientLogger/ClientLogger';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
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
        <>
            <Header />
            <ClientLogger data={playlist} />
            <main className={styles.main}>
                <Panel
                    gridArea="tracks"
                    heading={{ text: 'Tracks', icon: 'MusicNote2' }}
                >
                    <div></div>
                </Panel>
            </main>
        </>
    );
}
