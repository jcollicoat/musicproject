import { FC } from 'react';
import { Track } from '@music/types/tracks.types';

type Props = Pick<Track, 'durationMs'>;

export const TimeText: FC<Props> = ({ durationMs }) => {
    const seconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds - minutes * 60;
    const secondsDisplay =
        secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;

    return (
        <>
            {minutes}:{secondsDisplay}
        </>
    );
};
