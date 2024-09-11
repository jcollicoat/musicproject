import { Header } from '@components/Header/Header';
import { ItemsList } from '@components/ItemsList/ItemsList';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './page.module.scss';

export const metadata = {
    title: 'Album',
};

export default async function Page({
    params: { albumId },
}: {
    params: { albumId: string };
}) {
    const album = await music.albums.id(albumId);

    return (
        <>
            <Header albumId={albumId} />
            <main className={styles.main}>
                <Panel gridArea="tracks">
                    <ItemsList
                        tracks={album.tracks}
                        fallbackImage={album.images.medium}
                    />
                </Panel>
                <Panel gridArea="related">Related</Panel>
                <Panel gridArea="playlists">In Playlists</Panel>
                <Panel gridArea="artist">Artist</Panel>
                <Panel gridArea="about">About</Panel>
            </main>
        </>
    );
}
