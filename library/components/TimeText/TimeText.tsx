import { FC } from 'react';

interface Props {
    durationMs: number;
    title: string;
}

export const TimeText: FC<Props> = ({ durationMs, title }) => {
    const totalSeconds = Math.ceil(durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return (
        <span
            aria-label={`${title}: ${minutes} minutes, ${seconds} seconds`}
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
            {seconds < 10 ? `0${seconds}` : seconds}
        </span>
    );
};
