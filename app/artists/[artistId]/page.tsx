import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { TracksList } from '@components/TracksList/TracksList';
import { music } from '@music/api';
import styles from './page.module.scss';

export const metadata = {
    title: 'Artist',
};

export default async function Page({
    params: { artistId },
}: {
    params: {
        artistId: string;
    };
}) {
    const topTracks = await music.artist.topTracks(artistId);

    return (
        <>
            <Header artistId={artistId} />
            <main className={styles.main}>
                <Panel
                    gridArea="tracks"
                    heading={{ text: 'Top Tracks', icon: 'MusicNote2' }}
                >
                    <TracksList tracks={topTracks} initialLimit={5} />
                </Panel>
                <Panel gridArea="related">Related</Panel>
                <Panel gridArea="playlists">In Playlists</Panel>
                <Panel gridArea="about">About</Panel>
                <Panel gridArea="albums">Albums</Panel>
            </main>
        </>
    );
}
