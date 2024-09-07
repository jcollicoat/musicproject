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
            <Header trackId={trackId} />
            <main className={styles.main}>
                <Panel gridArea="timeline">Timeline</Panel>
                <Panel gridArea="related">Related</Panel>
                <Panel gridArea="playlists">In Playlists</Panel>
                <Panel gridArea="artist">Artist</Panel>
                <Panel gridArea="album">Album</Panel>
            </main>
        </>
    );
}
