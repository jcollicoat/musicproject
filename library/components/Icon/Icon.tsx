import { CSSProperties, FC } from 'react';
import { Calendar } from './Glyphs/Calendar';
import { Clock } from './Glyphs/Clock';
import { Disc } from './Glyphs/Disc';
import { Heart } from './Glyphs/Heart';
import { Home } from './Glyphs/Home';
import { Info } from './Glyphs/Info';
import { Lock } from './Glyphs/Lock';
import { Menu } from './Glyphs/Menu';
import { MusicNote } from './Glyphs/MusicNote';
import { MusicNote2 } from './Glyphs/MusicNote2';
import { Pulse } from './Glyphs/Pulse';
import { Recent } from './Glyphs/Recent';
import { Spark } from './Glyphs/Spark';
import { Speaker } from './Glyphs/Speaker';
import { Spotify } from './Glyphs/Spotify';
import { Star } from './Glyphs/Star';
import { User } from './Glyphs/User';
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
    | 'Loading'
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
            Icon = Calendar;
            break;
        case 'Clock':
            Icon = Clock;
            break;
        case 'Disc':
            Icon = Disc;
            break;
        case 'Heart':
            Icon = Heart;
            break;
        case 'Home':
            Icon = Home;
            break;
        case 'Info':
            Icon = Info;
            break;
        case 'Lock':
            Icon = Lock;
            break;
        case 'Menu':
            Icon = Menu;
            break;
        case 'MusicNote':
            Icon = MusicNote;
            break;
        case 'MusicNote2':
            Icon = MusicNote2;
            break;
        case 'Pulse':
            Icon = Pulse;
            break;
        case 'Recent':
            Icon = Recent;
            break;
        case 'Spark':
            Icon = Spark;
            break;
        case 'Speaker':
            Icon = Speaker;
            break;
        case 'Spotify':
            Icon = Spotify;
            break;
        case 'Star':
            Icon = Star;
            break;
        case 'User':
            Icon = User;
            break;
        case 'Loading':
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
