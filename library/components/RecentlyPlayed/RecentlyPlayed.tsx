import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { Track } from '@components/Track/Track';
import { music } from '@music/api';
import styles from './RecentlyPlayed.module.scss';

const getRecentlyPlayed = async () => {
    return await music.tracks.recentlyPlayed(true);
};

export const RecentlyPlayed: FC = async () => {
    const recent = await getRecentlyPlayed();

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>
                <Icon icon="Recent" />
                Recent Tracks
            </h2>
            <div className={styles.tracks}>
                {recent.items.map((track) => {
                    return (
                        <Track key={track.context?.playedAt} track={track} />
                    );
                })}
            </div>
        </div>
    );
};
