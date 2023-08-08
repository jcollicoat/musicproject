import { cache } from 'react';
import { authGuard } from '@api/helpers';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './page.module.scss';

export const metadata = {
    title: 'Track',
};

const getTrack = cache(async (trackId: string) => {
    return await music.tracks.id(trackId, true, true);
});

export default async function Page({
    params,
}: {
    params: { trackId: string };
}) {
    await authGuard();
    const track = await getTrack(params.trackId);

    return (
        <>
            <Header subtitle="Track" track={track} />
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
