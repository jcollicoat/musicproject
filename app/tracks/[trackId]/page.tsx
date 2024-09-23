import { AudioFeatures } from '@components/AudioFeatures/AudioFeatures';
import { ClientLogger } from '@components/ClientLogger/ClientLogger';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
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
    const analysis = await music.audio.analysis.id(trackId);

    return (
        <>
            <Header trackId={trackId} />
            <ClientLogger data={analysis} />
            <main className={styles.main}>
                <Panel gridArea="timeline" heading="Timeline" icon="Playlist">
                    <div className={styles.container}></div>
                </Panel>
                <Panel
                    gridArea="audio"
                    heading="Audio Features"
                    icon="AudioFeatures"
                >
                    <AudioFeatures trackId={trackId} />
                </Panel>
            </main>
        </>
    );
}
