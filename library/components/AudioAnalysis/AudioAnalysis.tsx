import { FC } from 'react';
import { WaveformChart } from '@components/ReChartsTest/WaveformChart';
import { TimeText } from '@components/TimeText/TimeText';
import { music } from '@music/api';
import styles from './AudioAnalysis.module.scss';

interface Props {
    trackId: string;
}

export const AudioAnalysis: FC<Props> = async ({ trackId }) => {
    const analysis = await music.audio.analysis.id(trackId);

    return (
        <div className={styles.wrapper}>
            <div className={styles.chart}>
                <WaveformChart analysis={analysis} />
            </div>
            <div className={styles.timeline}>
                <TimeText durationMs={0} />
                <div className={styles.line}></div>
                <TimeText durationMs={analysis.duration} />
            </div>
        </div>
    );
};
