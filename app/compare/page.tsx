import { AudioAnalysis } from 'Panels/AudioAnalysis/AudioAnalysis';
import { AudioFeatures } from 'Panels/AudioFeatures/AudioFeatures';
import { Panel } from 'Panels/Panel';
import styles from './page.module.scss';

export const metadata = {
    title: 'Compare Tracks',
};

export default function Page() {
    const trackId1 = '4a8P8qqreTbmxsd0Eais85';
    const trackId2 = '0m902KgphfY1cKdWmxNGPX';

    return (
        <main className={styles.main}>
            <Panel gridArea="selector">SELECTOR</Panel>
            <Panel
                gridArea="features"
                heading="Audio Features"
                icon="AudioFeatures"
                loading={<AudioFeatures.Loading />}
            >
                <AudioFeatures.Component trackIds={[trackId1, trackId2]} />
            </Panel>
            <Panel
                gridArea="timeline"
                heading="Timeline"
                icon="Playlist"
                loading={<AudioAnalysis.Loading />}
            >
                <AudioAnalysis.Component trackId={trackId1} />
            </Panel>
        </main>
    );
}
