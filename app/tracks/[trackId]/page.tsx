import { AudioFeatures } from '@components/AudioFeature/AudioFeatures';

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
                <Panel
                    gridArea="timeline"
                    heading={{ text: 'Timeline', icon: 'Playlist' }}
                >
                    <div className={styles.container}></div>
                </Panel>
                <Panel
                    gridArea="audio"
                    heading={{ text: 'Audio Features', icon: 'Track' }}
                >
                    <AudioFeatures trackId={trackId} />
                </Panel>
            </main>
        </>
    );
}
