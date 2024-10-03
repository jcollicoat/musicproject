import { Header } from 'components/Header/Header';
import { ItemsGrid } from 'components/ItemsGrid/ItemsGrid';
import { ItemsList } from 'components/ItemsList/ItemsList';
import { Panel } from 'components/Panel/Panel';
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
                <Panel gridArea="tracks" heading="Top Tracks" icon="Track">
                    <ItemsList tracks={topTracks} fallbackImage="" />
                </Panel>
                <Panel gridArea="albums" heading="Albums" icon="Disc">
                    <ItemsGrid albums={albums} />
                </Panel>
                <Panel gridArea="related" heading="Related Artists" icon="User">
                    <ItemsGrid artists={relatedArtists} />
                </Panel>
            </main>
        </>
    );
}
