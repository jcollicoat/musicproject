// import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useMemo } from 'react';
import { ButtonProps } from '@components/Button/Button';

const myMusic: ButtonProps = {
    text: 'My Music',
    iconStart: {
        icon: 'Heart',
    },
    link: '/me',
    style: 'tertiary',
};

const explore: ButtonProps = {
    text: 'Explore',
    iconStart: {
        icon: 'MusicNote',
    },
    link: '/explore',
    style: 'tertiary',
};

const login: ButtonProps = {
    text: 'Login',
    iconStart: {
        icon: 'User',
    },
    onClick: () => signIn('spotify'),
    style: 'cta',
};

const logout: ButtonProps = {
    text: 'Logout',
    iconStart: {
        icon: 'User',
    },
    onClick: () => signOut(),
    style: 'tertiary',
};

export const useHeaderButtons = (): ButtonProps[] => {
    const { status } = useSession();
    const isLoggedIn = status === 'authenticated';

    const buttons: ButtonProps[] = useMemo(() => {
        return isLoggedIn ? [explore, myMusic, logout] : [explore, login];
    }, [isLoggedIn]);

    return buttons;
};
