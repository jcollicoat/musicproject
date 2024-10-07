import { AudioAnalysis } from 'components/AudioAnalysis/AudioAnalysis';
import { Panel } from 'components/Panel/Panel';
import { AudioFeatures } from 'Panels/AudioFeatures/AudioFeatures';
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
            <AudioFeatures
                gridArea="audio"
                heading="Audio Features"
                icon="AudioFeatures"
                trackIds={[trackId]}
            />
            <AudioFeatures
                gridArea="audio2"
                heading="Audio Features"
                icon="AudioFeatures"
                trackIds={[trackId]}
                display="grid"
            />
        </main>
    );
}
