import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { ButtonProps } from '@components/Button/Button';

export const useHeaderButtons = (): ButtonProps[] => {
    const route = usePathname();
    const { status } = useSession();
    const isLoggedIn = status === 'authenticated';

    const home: ButtonProps = {
        text: 'Home',
        iconStart: {
            icon: 'Heart',
        },
        link: '/',
    };

    const me: ButtonProps = {
        text: 'My Music',
        iconStart: {
            icon: 'MusicNote',
        },
        link: '/me',
    };

    const login: ButtonProps = {
        text: isLoggedIn ? 'Logout' : 'Login',
        iconStart: {
            icon: 'User',
        },
        onClick: isLoggedIn ? () => signOut() : () => signIn(),
        style: isLoggedIn ? 'tertiary' : 'cta',
    };

    return [home, me, login].filter((button) => button.link !== route);
};
