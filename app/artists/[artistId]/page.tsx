import { music } from 'music/api';
import { Artist } from 'Panels/Heroes/Artist/Artist';
import { ItemsGrid } from 'Panels/ItemsGrid/ItemsGrid';
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
            <ItemsGrid
                gridArea="albums"
                heading="Albums"
                icon="Disc"
                albums={albums}
            />
            <ItemsGrid
                gridArea="related"
                heading="Related Artists"
                icon="User"
                artists={relatedArtists}
            />
        </main>
    );
}
