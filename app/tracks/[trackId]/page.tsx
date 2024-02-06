import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import styles from './page.module.scss';

export const metadata = {
    title: 'Track',
};

export default function Page({
    params: { trackId },
}: {
    params: { trackId: string };
}) {
    return (
        <>
            <Header subtitle="Track" trackId={trackId} />
            <main className={styles.main}>
                <Panel position="timeline">Timeline</Panel>
                <Panel position="related">Related</Panel>
                <Panel position="playlists">In Playlists</Panel>
                <Panel position="artist">Artist</Panel>
                <Panel position="album">Album</Panel>
            </main>
        </>
    );
}
