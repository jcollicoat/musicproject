import { SelectorContextProvider } from 'context/SelectorContext';
import { AudioAnalysis } from 'Panels/AudioAnalysis/AudioAnalysis';
import { AudioFeatures } from 'Panels/AudioFeatures/AudioFeatures';
import { Selector } from 'Panels/Selector/Selector';
import styles from './page.module.scss';

export const metadata = {
    title: 'Compare Tracks',
};

export default function Page() {
    const trackId1 = '4a8P8qqreTbmxsd0Eais85';
    const trackId2 = '6i0s4IJiM6hzhh4eBbtnme';

    return (
        <main className={styles.main}>
            <SelectorContextProvider>
                <Selector
                    gridArea="selector"
                    heading="Select Tracks"
                    icon="Compare"
                />
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
            </SelectorContextProvider>
        </main>
    );
}
