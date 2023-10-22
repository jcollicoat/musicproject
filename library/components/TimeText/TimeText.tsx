import { FC } from 'react';

interface Props {
    durationMs: number;
    title: string;
}

export const TimeText: FC<Props> = ({ durationMs, title }) => {
    const seconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds - minutes * 60;
    const secondsDisplay =
        secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;

    return (
        <span
            aria-label={`${title}: ${minutes} minutes, ${secondsRemaining} seconds`}
            style={{ whiteSpace: 'nowrap' }}
        >
            {minutes}
            <span
                style={{
                    display: 'inline-block',
                    transform: 'translateY(-0.1em)',
                }}
            >
                :
            </span>
            {secondsDisplay}
        </span>
    );
};
