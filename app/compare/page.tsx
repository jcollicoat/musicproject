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
            <AudioFeatures
                gridArea="features"
                heading="Audio Features"
                icon="AudioFeatures"
                trackIds={[trackId1]}
                secondaryTrackIds={[trackId2]}
            />
            <AudioAnalysis
                gridArea="timeline"
                heading="Timeline"
                icon="Playlist"
                trackId={trackId1}
                secondaryTrackId={trackId2}
            />
        </main>
    );
}
