// import { usePathname } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useMemo } from 'react';
import { ButtonProps } from '@components/Button/Button';
import { useAuth } from '@hooks/useAuth';

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

export const useHeaderButtons = (): ButtonProps[] => {
    const auth = useAuth();

    const buttons: ButtonProps[] = useMemo(() => {
        return auth ? [explore, myMusic] : [explore, login];
    }, [auth]);

    return buttons;
};
