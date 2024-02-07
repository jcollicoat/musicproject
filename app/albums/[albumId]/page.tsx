import { cache } from 'react';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './page.module.scss';

export const metadata = {
    title: 'Album',
};

const getAlbum = cache(async (albumId: string) => {
    return await music.albums.get(albumId);
});

export default async function Page({
    params: { albumId },
}: {
    params: { albumId: string };
}) {
    const album = await getAlbum(albumId);

    return (
        <>
            <Header subtitle="Artist" album={album} />
            <main className={styles.main}>
                <Panel gridArea="tracks">Tracks</Panel>
                <Panel gridArea="related">Related</Panel>
                <Panel gridArea="playlists">In Playlists</Panel>
                <Panel gridArea="artist">Artist</Panel>
                <Panel gridArea="about">About</Panel>
            </main>
        </>
    );
}
