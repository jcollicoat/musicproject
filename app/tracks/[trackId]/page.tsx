import { AudioFeatures } from '@components/AudioFeature/AudioFeatures';
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
    const audio = await music.audio.features(trackId);

    return (
        <>
            <ClientLogger data={audio} />
            <Header trackId={trackId} />
            <main className={styles.main}>
                <Panel
                    gridArea="timeline"
                    heading={{ text: 'Timeline', icon: 'MusicNote2' }}
                >
                    <div className={styles.container}></div>
                </Panel>
                <Panel
                    gridArea="audio"
                    heading={{ text: 'Audio Features', icon: 'MusicNote' }}
                >
                    <AudioFeatures trackId={trackId} />
                </Panel>
            </main>
        </>
    );
}
