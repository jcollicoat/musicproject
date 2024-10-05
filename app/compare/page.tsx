import { AudioAnalysis } from 'components/AudioAnalysis/AudioAnalysis';
import { AudioFeatures } from 'components/AudioFeatures/AudioFeatures';
import { Header } from 'components/Header/Header';
import { Panel } from 'components/Panel/Panel';
import styles from './page.module.scss';

export const metadata = {
    title: 'Compare Tracks',
};

export default function Page() {
    const trackId1 = '4a8P8qqreTbmxsd0Eais85';
    const trackId2 = '2AnLGd3dk55Z57VXMGLdmR';

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Panel
                    gridArea="selector"
                    // heading="Audio Features"
                    // icon="AudioFeatures"
                >
                    SELECTOR
                </Panel>
                <Panel
                    gridArea="features"
                    heading="Audio Features"
                    icon="AudioFeatures"
                >
                    <AudioFeatures trackId={trackId1} display="chart" />
                </Panel>
                <Panel gridArea="timeline" heading="Timeline" icon="Playlist">
                    <AudioAnalysis trackId={trackId1} />
                </Panel>
            </main>
        </>
    );
}
