import { ClientLogger } from '@components/ClientLogger/ClientLogger';
import { Header } from '@components/Header/Header';
import { music } from '@music/api';
import styles from './page.module.scss';

export const metadata = {
    title: 'Track',
};

export default async function Page({
    params: { trackId },
}: {
    params: { trackId: string };
}) {
    const track = await music.tracks.id(trackId);

    return (
        <>
            <ClientLogger data={track} />
            <Header trackId={trackId} />
            <main className={styles.main}></main>
        </>
    );
}
