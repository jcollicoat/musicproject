import { AudioAnalysis } from 'components/AudioAnalysis/AudioAnalysis';
import { AudioFeatures } from 'components/AudioFeatures/AudioFeatures';
import { Panel } from 'components/Panel/Panel';
import { Track } from 'Panels/Headers/Track/Track';
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
        <main className={styles.main}>
            <Track gridArea="header" trackId={trackId} />
            <Panel gridArea="timeline" heading="Timeline" icon="Playlist">
                <AudioAnalysis trackId={trackId} />
            </Panel>
            <Panel
                gridArea="audio"
                heading="Audio Features"
                icon="AudioFeatures"
            >
                <AudioFeatures trackId={trackId} display="chart" />
            </Panel>
            <Panel
                gridArea="audio2"
                heading="Audio Features"
                icon="AudioFeatures"
            >
                <AudioFeatures trackId={trackId} display="grid" />
            </Panel>
        </main>
    );
}
