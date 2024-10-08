import { FC } from 'react';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { Scroller } from 'Generics/Scroller/Scroller';
import { TimeText } from 'Generics/TimeText/TimeText';
import { music } from 'music/api';
import { Panel, PanelProps } from 'Panels/Panel';
import styles from './AudioAnalysis.module.scss';
import { Chart } from './Chart/Chart';

interface Props extends PanelProps {
    trackId: string;
}

export const AudioAnalysis: FC<Props> = async ({ trackId, ...props }) => {
    const analysis = await music.audio.analysis.id(trackId);

    return (
        <Panel {...props}>
            <Scroller direction="horizontal">
                <div className={styles.wrapper}>
                    <div className={styles.chart}>
                        <Chart chart={analysis.chart} />
                        <div className={styles.features}>
                            <DataPoint
                                name="Tempo"
                                value={analysis.features.tempo}
                                tempo={analysis.features.tempo}
                                suffix=" BPM"
                                smallText
                            />
                            <DataPoint
                                name="Key"
                                value={analysis.features.key}
                                suffix={` ${analysis.features.mode}`}
                                smallText
                            />
                            <DataPoint
                                name="Loudness"
                                value={analysis.features.loudness}
                                suffix=" dB"
                                smallText
                            />
                            <DataPoint
                                name="Time Signature"
                                value={analysis.features.timeSignature}
                                suffix="/4"
                                smallText
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
        </Panel>
    );
};
