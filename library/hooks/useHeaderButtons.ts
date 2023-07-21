// import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { ButtonProps } from '@components/Button/Button';

export const useHeaderButtons = (): ButtonProps[] => {
    // const route = usePathname();
    const { status } = useSession();
    const isLoggedIn = status === 'authenticated';

    const buttons: ButtonProps[] = [
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

    return buttons; //.filter((button) => button.link !== route);
};
