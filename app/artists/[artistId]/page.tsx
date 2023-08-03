import { cache } from 'react';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './page.module.scss';

export const metadata = {
    title: 'Artist',
};

const getArtist = cache(async (artistId: string) => {
    return await music.artists.get(artistId);
});

export default async function Page({
    params,
}: {
    params: { artistId: string };
}) {
    const artist = await getArtist(params.artistId);

    return (
        <>
            <Header subtitle="Artist" artist={artist} />
            <main className={styles.main}>
                <Panel position="tracks">Top Tracks</Panel>
                <Panel position="related">Related</Panel>
                <Panel position="playlists">In Playlists</Panel>
                <Panel position="about">About</Panel>
                <Panel position="albums">Albums</Panel>
            </main>
        </>
    );
}
