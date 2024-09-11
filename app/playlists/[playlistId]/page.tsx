import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import styles from './page.module.scss';

export const metadata = {
    title: 'Playlist',
};

export default async function Page({
    params: { playlistId },
}: {
    params: { playlistId: string };
}) {
    console.log(playlistId);
    return (
        <>
            <Header />
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
