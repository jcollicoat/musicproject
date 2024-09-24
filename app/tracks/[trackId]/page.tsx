import { AudioAnalysis } from '@components/AudioAnalysis/AudioAnalysis';
import { AudioFeatures } from '@components/AudioFeatures/AudioFeatures';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import styles from './page.module.scss';

export const metadata = {
    title: 'Track',
};

export default function Page({
    params: { trackId },
}: {
    params: { trackId: string };
}) {
    return (
        <>
            <Header trackId={trackId} />
            <main className={styles.main}>
                <Panel gridArea="timeline" heading="Timeline" icon="Playlist">
                    <AudioAnalysis trackId={trackId} />
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
