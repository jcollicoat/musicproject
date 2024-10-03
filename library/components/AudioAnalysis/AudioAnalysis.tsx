import { FC } from 'react';
import { DataPoint } from '@components/DataPoint/DataPoint';
import { Scroller } from '@components/Scroller/Scroller';
import { TimeText } from '@components/TimeText/TimeText';
import { WaveformChart } from '@components/WaveforrmChart/WaveformChart';
import { music } from '@music/api';
import styles from './AudioAnalysis.module.scss';

interface Props {
    trackId: string;
}

export const AudioAnalysis: FC<Props> = async ({ trackId }) => {
    const analysis = await music.audio.analysis.id(trackId);

    return (
        <Scroller direction="horizontal">
            <div className={styles.wrapper}>
                <div className={styles.chart}>
                    <WaveformChart analysis={analysis} />
                    <div className={styles.features}>
                        <DataPoint name="Tempo" value="120bpm" />
                        <DataPoint name="Key" value="B Minor" />
                        <DataPoint name="Loudness" value="-10dB" />
                        <DataPoint name="Time Signature" value="4/4" />
                    </div>
                </div>
                <div className={styles.timeline}>
                    <TimeText durationMs={0} />
                    <div className={styles.line}></div>
                    <TimeText durationMs={analysis.duration} />
                </div>
            </div>
        </Scroller>
    );
};
