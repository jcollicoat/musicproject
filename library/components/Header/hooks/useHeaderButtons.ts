// import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useMemo } from 'react';
import { ButtonProps } from '@components/Button/Button';

export const useHeaderButtons = (): ButtonProps[] => {
    const { status } = useSession();
    const isLoggedIn = status === 'authenticated';

    const buttons: ButtonProps[] = useMemo(() => {
        return [
            {
                text: 'Home',
                iconStart: {
                    icon: 'Home',
                },
                link: '/',
                style: 'tertiary',
            },
            {
                text: 'Explore',
                iconStart: {
                    icon: 'MusicNote',
                },
                link: '/explore',
                style: 'tertiary',
            },
            {
                text: 'My Music',
                iconStart: {
                    icon: 'Heart',
                },
                link: '/me',
                style: 'tertiary',
            },
            {
                text: isLoggedIn ? 'Logout' : 'Login',
                iconStart: {
                    icon: 'User',
                },
                onClick: isLoggedIn ? () => signOut() : () => signIn('spotify'),
                style: isLoggedIn ? 'tertiary' : 'cta',
            },
        ];
    }, [isLoggedIn]);

    return buttons;
};
