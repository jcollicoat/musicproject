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
    secondaryTrackId?: string;
}

export const AudioAnalysis: FC<Props> = async ({
    trackId,
    secondaryTrackId,
    ...props
}) => {
    const primary = await spotify.audio.analysis.id(trackId);
    const secondary = secondaryTrackId
        ? await spotify.audio.analysis.id(secondaryTrackId)
        : undefined;

    // TODO: Build first track chart data here and pass to Chart

    const duration =
        Math.max(primary.track.duration, secondary?.track.duration ?? 0) * 1000;

    return (
        <Panel {...props}>
            <Scroller direction="horizontal">
                <div className={styles.wrapper}>
                    <div className={styles.chart}>
                        <Chart primary={primary} secondary={secondary} />
                        <div className={styles.features}>
                            <DataPoint
                                name="Tempo"
                                primary={{
                                    value: Math.round(primary.track.tempo),
                                    isTempo: true,
                                    suffix: ' BPM',
                                }}
                                secondary={
                                    secondary && {
                                        value: Math.round(
                                            secondary.track.tempo,
                                        ),
                                        isTempo: true,
                                        suffix: ' BPM',
                                    }
                                }
                                smallText
                            />
                            <div className={styles.divider}></div>
                            <DataPoint
                                name="Key"
                                primary={{
                                    value: MusicalKeys[primary.track.key],
                                    suffix: ` ${
                                        MusicalModes[primary.track.mode]
                                    }`,
                                }}
                                secondary={
                                    secondary && {
                                        value: MusicalKeys[secondary.track.key],
                                        suffix: ` ${
                                            MusicalModes[secondary.track.mode]
                                        }`,
                                    }
                                }
                                smallText
                            />
                            <div className={styles.divider}></div>
                            <DataPoint
                                name="Loudness"
                                primary={{
                                    value: Math.round(primary.track.loudness),
                                    suffix: ' dB',
                                }}
                                secondary={
                                    secondary && {
                                        value: Math.round(
                                            secondary.track.loudness,
                                        ),
                                        suffix: ' dB',
                                    }
                                }
                                smallText
                            />
                            <div className={styles.divider}></div>
                            <DataPoint
                                name="Time Signature"
                                primary={{
                                    value: primary.track.time_signature,
                                    suffix: '/4',
                                }}
                                secondary={
                                    secondary && {
                                        value: secondary.track.time_signature,
                                        suffix: '/4',
                                    }
                                }
                                smallText
                            />
                        </div>
                    </div>
                    <div className={styles.timeline}>
                        <TimeText durationMs={0} />
                        <div className={styles.line}></div>
                        <TimeText durationMs={duration} />
                    </div>
                </div>
            </Scroller>
        </Panel>
    );
};
