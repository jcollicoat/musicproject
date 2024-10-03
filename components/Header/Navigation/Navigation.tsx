import { getServerSession } from 'next-auth';
import { ComponentProps, FC } from 'react';
import { Button } from 'components/Button/Button';
import styles from './Navigation.module.scss';
import { UserMenu } from './UserMenu/UserMenu';

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
            {session ? <UserMenu /> : <Button {...signIn} />}
        </nav>
    );
};
