import { getServerSession } from 'next-auth';
import { ComponentProps, FC } from 'react';
import { Button } from 'components/Button/Button';
import styles from './Navigation.module.scss';
import { UserMenu } from './UserMenu/UserMenu';

const explore: ComponentProps<typeof Button> = {
    text: 'Explore',
    iconStart: {
        icon: 'Track',
    },
    link: '/explore',
};

const compare: ComponentProps<typeof Button> = {
    text: 'Compare',
    iconStart: {
        icon: 'Track',
    },
    link: '/compare',
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

    return (
        <nav className={styles.navigation}>
            {session ? (
                <>
                    <Button {...explore} />
                    <Button {...compare} />
                    <UserMenu />
                </>
            ) : (
                <Button {...signIn} />
            )}
        </nav>
    );
};
