import { AudioAnalysis } from 'Panels/AudioAnalysis/AudioAnalysis';
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
            <AudioAnalysis
                gridArea="timeline"
                heading="Timeline"
                icon="Playlist"
                trackId={trackId}
            />
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
