import { FC } from 'react';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { Scroller } from 'Generics/Scroller/Scroller';
import { TimeText } from 'Generics/TimeText/TimeText';
import { MusicalKeys, MusicalModes } from 'music/types';
import { Panel, PanelProps } from 'Panels/Panel';
import { spotify } from 'spotify/api';
import styles from './AudioAnalysis.module.scss';
import { Chart } from './Chart/Chart';

interface Props extends PanelProps {
    trackId: string;
}

export const AudioAnalysis: FC<Props> = async ({ trackId, ...props }) => {
    const analysis = await spotify.audio.analysis.id(trackId);

    return (
        <Panel {...props}>
            <Scroller direction="horizontal">
                <div className={styles.wrapper}>
                    <div className={styles.chart}>
                        <Chart analysis={analysis} />
                        <div className={styles.features}>
                            <DataPoint
                                name="Tempo"
                                primary={{
                                    value: Math.round(analysis.track.tempo),
                                    isTempo: true,
                                    suffix: ' BPM',
                                }}
                                smallText
                            />
                            <DataPoint
                                name="Key"
                                primary={{
                                    value: MusicalKeys[analysis.track.key],
                                    suffix: ` ${
                                        MusicalModes[analysis.track.mode]
                                    }`,
                                }}
                                smallText
                            />
                            <DataPoint
                                name="Loudness"
                                primary={{
                                    value: Math.round(analysis.track.loudness),
                                    suffix: ' dB',
                                }}
                                smallText
                            />
                            <DataPoint
                                name="Time Signature"
                                primary={{
                                    value: analysis.track.time_signature,
                                    suffix: '/4',
                                }}
                                smallText
                            />
                        </div>
                    </div>
                    <div className={styles.timeline}>
                        <TimeText durationMs={0} />
                        <div className={styles.line}></div>
                        <TimeText durationMs={analysis.track.duration * 1000} />
                    </div>
                </div>
            </Scroller>
        </Panel>
    );
};
