import { ClientLogger } from '@components/ClientLogger/ClientLogger';
import { Header } from '@components/Header/Header';
import { ItemsList } from '@components/ItemsList/ItemsList';
import { Panel } from '@components/Panel/Panel';
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
    const albums = await music.artist.albums(artistId);

    return (
        <>
            <Header artistId={artistId} />
            <ClientLogger data={albums} />
            <main className={styles.main}>
                <Panel
                    gridArea="tracks"
                    heading={{ text: 'Top Tracks', icon: 'MusicNote2' }}
                >
                    <ItemsList tracks={topTracks} initialLimit={5} />
                </Panel>
                <Panel
                    gridArea="albums"
                    heading={{ text: 'Albums', icon: 'Disc' }}
                >
                    <ItemsList albums={albums} initialLimit={5} />
                </Panel>
                <Panel gridArea="related">Related</Panel>
                <Panel gridArea="playlists">In Playlists</Panel>
                <Panel gridArea="about">About</Panel>
            </main>
        </>
    );
}
