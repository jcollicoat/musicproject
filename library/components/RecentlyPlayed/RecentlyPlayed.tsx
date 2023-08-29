import { FC, cache } from 'react';
import { Track } from '@components/Track/Track';
import { music } from '@music/api';
import styles from './RecentlyPlayed.module.scss';

const getRecentlyPlayed = cache(async () => {
    return await music.tracks.recentlyPlayed(true);
});

export const RecentlyPlayed: FC = async () => {
    const recent = await getRecentlyPlayed();

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Play History</h2>
            <div className={styles.tracks}>
                {recent.items.map((track) => {
                    console.log(track.name);
                    return (
                        <Track key={track.context?.playedAt} track={track} />
                    );
                })}
            </div>
        </div>
    );
};
