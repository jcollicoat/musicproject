import { FC, cache } from 'react';
import { music } from '@music/api';
import styles from './RecentlyPlayed.module.scss';

const getRecentlyPlayed = cache(async () => {
    return await music.tracks.recentlyPlayed(true);
});

export const RecentlyPlayed: FC = async () => {
    const recent = await getRecentlyPlayed();

    return (
        <div className={styles.wrapper}>
            <h2>Play History</h2>
            {recent.items.map((track) => {
                console.log(track.name);
                return (
                    <div key={track.context?.playedAt}>
                        <p>{track.name}</p>
                    </div>
                );
            })}
        </div>
    );
};
