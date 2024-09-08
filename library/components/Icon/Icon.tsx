import { CSSProperties, FC } from 'react';
import { IconCalendar } from './Glyphs/Calendar';
import { IconClock } from './Glyphs/Clock';
import { IconDisc } from './Glyphs/Disc';
import { IconHeart } from './Glyphs/Heart';
import { IconHome } from './Glyphs/Home';
import { IconInfo } from './Glyphs/Info';
import { IconLock } from './Glyphs/Lock';
import { IconMenu } from './Glyphs/Menu';
import { IconMusicNote } from './Glyphs/MusicNote';
import { IconMusicNote2 } from './Glyphs/MusicNote2';
import { IconPulse } from './Glyphs/Pulse';
import { IconRecent } from './Glyphs/Recent';
import { IconSpark } from './Glyphs/Spark';
import { IconSpeaker } from './Glyphs/Speaker';
import { IconSpotify } from './Glyphs/Spotify';
import { IconStar } from './Glyphs/Star';
import { IconUser } from './Glyphs/User';
import styles from './Icon.module.scss';

const Fallback: FC = () => (
    <g className={styles.fallback}>
        <path d="M4 7.25C3.86193 7.25 3.75 7.13807 3.75 7C3.75 6.86193 3.86193 6.75 4 6.75"></path>
        <path d="M4 7.25C4.13807 7.25 4.25 7.13807 4.25 7C4.25 6.86193 4.13807 6.75 4 6.75"></path>
        <path d="M7 7.25C6.86193 7.25 6.75 7.13807 6.75 7C6.75 6.86193 6.86193 6.75 7 6.75"></path>
        <path d="M7 7.25C7.13807 7.25 7.25 7.13807 7.25 7C7.25 6.86193 7.13807 6.75 7 6.75"></path>
        <path d="M10 7.25C9.86193 7.25 9.75 7.13807 9.75 7C9.75 6.86193 9.86193 6.75 10 6.75"></path>
        <path d="M10 7.25C10.1381 7.25 10.25 7.13807 10.25 7C10.25 6.86193 10.1381 6.75 10 6.75"></path>
    </g>
);

type Icons =
    | 'Calendar'
    | 'Clock'
    | 'Disc'
    | 'Heart'
    | 'Home'
    | 'Info'
    | 'Lock'
    | 'Menu'
    | 'MusicNote'
    | 'MusicNote2'
    | 'Pulse'
    | 'Recent'
    | 'Spark'
    | 'Speaker'
    | 'Spotify'
    | 'Star'
    | 'User';

export interface IconProps {
    icon?: Icons;
    isAlternate?: boolean;
    size?: CSSProperties['fontSize'];
}

export const Icon: FC<IconProps> = ({ icon, isAlternate, size }) => {
    let Icon: FC<{ isAlternate?: boolean }> = Fallback;
    switch (icon) {
        case 'Calendar':
            Icon = IconCalendar;
            break;
        case 'Clock':
            Icon = IconClock;
            break;
        case 'Disc':
            Icon = IconDisc;
            break;
        case 'Heart':
            Icon = IconHeart;
            break;
        case 'Home':
            Icon = IconHome;
            break;
        case 'Info':
            Icon = IconInfo;
            break;
        case 'Lock':
            Icon = IconLock;
            break;
        case 'Menu':
            Icon = IconMenu;
            break;
        case 'MusicNote':
            Icon = IconMusicNote;
            break;
        case 'MusicNote2':
            Icon = IconMusicNote2;
            break;
        case 'Pulse':
            Icon = IconPulse;
            break;
        case 'Recent':
            Icon = IconRecent;
            break;
        case 'Spark':
            Icon = IconSpark;
            break;
        case 'Speaker':
            Icon = IconSpeaker;
            break;
        case 'Spotify':
            Icon = IconSpotify;
            break;
        case 'Star':
            Icon = IconStar;
            break;
        case 'User':
            Icon = IconUser;
            break;
        default:
            Icon = Fallback;
    }

    return (
        <div className={styles.container} style={{ fontSize: size }}>
            <svg
                className={styles.container}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
            >
                <Icon isAlternate={isAlternate} />
            </svg>
        </div>
    );
};
