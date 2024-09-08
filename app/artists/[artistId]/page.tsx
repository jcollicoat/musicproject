import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import styles from './page.module.scss';

export const metadata = {
    title: 'Artist',
};

export default function Page({
    params: { artistId },
}: {
    params: {
        artistId: string;
    };
}) {
    return (
        <>
            <Header artistId={artistId} />
            <main className={styles.main}>
                <Panel gridArea="tracks">Top Tracks</Panel>
                <Panel gridArea="related">Related</Panel>
                <Panel gridArea="playlists">In Playlists</Panel>
                <Panel gridArea="about">About</Panel>
                <Panel gridArea="albums">Albums</Panel>
            </main>
        </>
    );
}
