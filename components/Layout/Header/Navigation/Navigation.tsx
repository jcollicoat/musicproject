import { getServerSession } from 'next-auth';
import { FC } from 'react';
import {
    PiArrowsCounterClockwise,
    PiMusicNotes,
    PiSpotifyLogo,
} from 'react-icons/pi';
import { Button } from 'Generics/Button/Button';
import styles from './Navigation.module.scss';
import { UserMenu } from './UserMenu/UserMenu';

export const Navigation: FC = async () => {
    const session = await getServerSession();

    return (
        <nav className={styles.navigation}>
            {session ? (
                <>
                    <Button
                        ariaLabel="Compare Tracks"
                        link="/compare"
                        style="tertiary"
                    >
                        <PiArrowsCounterClockwise />
                        Compare
                    </Button>
                    <Button
                        ariaLabel="My Music"
                        link="/my-music"
                        style="tertiary"
                    >
                        <PiMusicNotes />
                        My Music
                    </Button>
                    <UserMenu />
                </>
            ) : (
                <Button
                    ariaLabel="Sign in with Spotify"
                    onClick="signin"
                    style="cta"
                >
                    <PiSpotifyLogo />
                    Sign In
                </Button>
            )}
        </nav>
    );
};
