import { Header } from '@components/Header/Header';
import { ItemsList } from '@components/ItemsList/ItemsList';
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
            <main className={styles.main}>
                <Panel
                    gridArea="tracks"
                    heading={{ text: 'Tracks', icon: 'MusicNote2' }}
                >
                    <ItemsList
                        tracks={playlist.tracks}
                        fallbackImage={playlist.images?.medium ?? ''}
                        overflowScroll={false}
                    />
                </Panel>
            </main>
        </>
    );
}
