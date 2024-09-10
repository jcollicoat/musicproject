'use client';

import { FC, useState } from 'react';
import { Button } from '@components/Button/Button';
import { music } from '@music/api';
import { Track } from './Track/Track';
import styles from './TracksList.module.scss';

interface Props {
    tracks: Awaited<ReturnType<typeof music.trackId>>[];
    initialLimit: number;
}

export const TracksList: FC<Props> = ({ tracks, initialLimit }) => {
    const [limit, setLimit] = useState(initialLimit);
    const isExpanded = limit !== initialLimit;

    const toggle = () => {
        setLimit(isExpanded ? initialLimit : tracks.length);
    };

    return (
        <div className={styles.list}>
            {tracks.slice(0, limit).map((track) => (
                <Track key={track.id} track={track} />
            ))}
            <Button
                text={isExpanded ? 'Show less' : 'Show more'}
                onClick={toggle}
                style="tertiary"
            />
        </div>
    );
};
