import { getServerSession } from 'next-auth';
import { ComponentProps, FC } from 'react';
import { Button, ButtonContainer } from '@components/client/Button/Button';
import styles from './Navigation.module.scss';
import { UserMenu } from './UserMenu/UserMenu';

const explore: ComponentProps<typeof Button> = {
    text: 'Explore',
    iconStart: {
        icon: 'MusicNote',
    },
    link: '/explore',
};

const myMusic: ComponentProps<typeof Button> = {
    text: 'My Music',
    iconStart: {
        icon: 'Heart',
    },
    link: '/me',
    style: 'tertiary',
};

const signIn: ComponentProps<typeof Button> = {
    text: 'Sign In',
    iconStart: {
        icon: 'Spotify',
    },
    onClick: 'signin',
    style: 'cta',
};

export const Navigation: FC = async () => {
    const session = await getServerSession();

    const navItems = session ? [explore, myMusic] : [explore, myMusic, signIn];

    return (
        <nav className={styles.navigation}>
            <ButtonContainer
                buttons={navItems}
                collapse={{ breakpoint: 'mobile', side: 'left' }}
            />
            <UserMenu />
        </nav>
    );
};
