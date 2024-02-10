import classNames from 'classnames';
import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import styles from './RecentlyPlayed.module.scss';

// const useBpm = (tracks: Props['items']) => {
//     const bpms = tracks.map((track) => {
//         return track.audioFeatures?.tempo ?? 1;
//     });
//     return Math.floor(bpms.reduce((a, b) => a + b) / bpms.length);
// };

export const RecentlyPlayed: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.item, styles.bpm)}>
                <h3>
                    <Icon icon="Recent" />
                    Average BPM
                </h3>
                {/* <span>{bpm}</span> */}
            </div>
            <div className={classNames(styles.item, styles.danceability)}>
                <h3>
                    <Icon icon="Spark" />
                    Danceability
                </h3>
                {/* <span>{recent.items[0].audioFeatures?.danceability}</span> */}
            </div>
            <div className={classNames(styles.item, styles.energy)}>
                <h3>
                    <Icon icon="Pulse" />
                    Energy
                </h3>
                {/* <span>{recent.items[0].audioFeatures?.energy}</span> */}
            </div>
            <div className={styles.tracks}>
                {/* {recent.items.map((track) => {
                    return (
                        <Track key={track.context?.playedAt} track={track} />
                    );
                })} */}
            </div>
        </div>
    );
};
