import { ClientLogger } from '@components/ClientLogger/ClientLogger';
import { Header } from '@components/Header/Header';
import { ItemsGrid } from '@components/ItemsGrid/ItemsGrid';
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
    const topTracks = await music.artists.topTracks(artistId);
    const albums = await music.artists.albums(artistId);
    const relatedArtists = await music.artists.relatedArtists(artistId);

    return (
        <>
            <Header artistId={artistId} />
            <main className={styles.main}>
                <ClientLogger data={relatedArtists} />
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
                <Panel
                    gridArea="related"
                    heading={{ text: 'Related Artists', icon: 'User' }}
                >
                    <ItemsGrid artists={relatedArtists} initialLimit={12} />
                </Panel>
            </main>
        </>
    );
}
