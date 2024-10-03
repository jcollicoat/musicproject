import { FC } from 'react';
import { DataPoint } from 'components/DataPoint/DataPoint';
import { Scroller } from 'components/Scroller/Scroller';
import { TimeText } from 'components/TimeText/TimeText';
import { WaveformChart } from 'components/WaveforrmChart/WaveformChart';
import { music } from 'music/api';
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
                    <WaveformChart chart={analysis.chart} />
                    <div className={styles.features}>
                        <DataPoint
                            name="Tempo"
                            value={analysis.features.tempo}
                            tempo={analysis.features.tempo}
                            suffix=" BPM"
                        />
                        <DataPoint
                            name="Key"
                            value={analysis.features.key}
                            suffix={` ${analysis.features.mode}`}
                        />
                        <DataPoint
                            name="Loudness"
                            value={analysis.features.loudness}
                            suffix=" dB"
                        />
                        <DataPoint
                            name="Time Signature"
                            value={analysis.features.timeSignature}
                            suffix="/4"
                        />
                    </div>
                </div>
                <div className={styles.timeline}>
                    <TimeText durationMs={0} />
                    <div className={styles.line}></div>
                    <TimeText durationMs={analysis.chart.duration} />
                </div>
            </div>
        </Scroller>
    );
};
