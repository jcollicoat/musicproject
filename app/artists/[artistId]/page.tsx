import { Panel } from 'components/Panel/Panel';
import { ItemsGrid } from 'Generics/ItemsGrid/ItemsGrid';
import { music } from 'music/api';
import { Artist } from 'Panels/Headers/Artist/Artist';
import { ItemsList } from 'Panels/ItemsList/ItemsList';
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
        <main className={styles.main}>
            <Artist gridArea="header" artistId={artistId} />
            <ItemsList
                gridArea="tracks"
                heading="Top Tracks"
                icon="Track"
                tracks={topTracks}
                fallbackImage=""
            />
            <Panel gridArea="albums" heading="Albums" icon="Disc">
                <ItemsGrid albums={albums} />
            </Panel>
            <Panel gridArea="related" heading="Related Artists" icon="User">
                <ItemsGrid artists={relatedArtists} />
            </Panel>
        </main>
    );
}
