import { CSSProperties, FC } from 'react';
import { AudioFeatures } from './Glyphs/AudioFeatures';
import { Calendar } from './Glyphs/Calendar';
import { Clock } from './Glyphs/Clock';
import { Disc } from './Glyphs/Disc';
import { Heart } from './Glyphs/Heart';
import { Home } from './Glyphs/Home';
import { Info } from './Glyphs/Info';
import { Lock } from './Glyphs/Lock';
import { Logout } from './Glyphs/Logout';
import { Menu } from './Glyphs/Menu';
import { Microphone } from './Glyphs/Microphone';
import { Minus } from './Glyphs/Minus';
import { Playlist } from './Glyphs/Playlist';
import { Plus } from './Glyphs/Plus';
import { Pulse } from './Glyphs/Pulse';
import { Recent } from './Glyphs/Recent';
import { Smile } from './Glyphs/Smile';
import { Spark } from './Glyphs/Spark';
import { Speaker } from './Glyphs/Speaker';
import { Spotify } from './Glyphs/Spotify';
import { Star } from './Glyphs/Star';
import { Theme } from './Glyphs/Theme';
import { Track } from './Glyphs/Track';
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
    | 'AudioFeatures'
    | 'Calendar'
    | 'Clock'
    | 'Disc'
    | 'Heart'
    | 'Home'
    | 'Info'
    | 'Loading'
    | 'Lock'
    | 'Logout'
    | 'Menu'
    | 'Microphone'
    | 'Minus'
    | 'Playlist'
    | 'Plus'
    | 'Pulse'
    | 'Recent'
    | 'Smile'
    | 'Spark'
    | 'Speaker'
    | 'Spotify'
    | 'Theme'
    | 'Track'
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
        case 'AudioFeatures':
            Icon = AudioFeatures;
            break;
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
        case 'Logout':
            Icon = Logout;
            break;
        case 'Menu':
            Icon = Menu;
            break;
        case 'Microphone':
            Icon = Microphone;
            break;
        case 'Minus':
            Icon = Minus;
            break;
        case 'Playlist':
            Icon = Playlist;
            break;
        case 'Plus':
            Icon = Plus;
            break;
        case 'Pulse':
            Icon = Pulse;
            break;
        case 'Recent':
            Icon = Recent;
            break;
        case 'Smile':
            Icon = Smile;
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
        case 'Theme':
            Icon = Theme;
            break;
        case 'Track':
            Icon = Track;
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
