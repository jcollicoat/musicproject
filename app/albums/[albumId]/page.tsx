import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import styles from './page.module.scss';

export const metadata = {
    title: 'Album',
};

export default function Page({
    params: { albumId },
}: {
    params: { albumId: string };
}) {
    return (
        <>
            <Header albumId={albumId} />
            <main className={styles.main}>
                <Panel gridArea="tracks">Tracks</Panel>
                <Panel gridArea="related">Related</Panel>
                <Panel gridArea="playlists">In Playlists</Panel>
                <Panel gridArea="artist">Artist</Panel>
                <Panel gridArea="about">About</Panel>
            </main>
        </>
    );
}
