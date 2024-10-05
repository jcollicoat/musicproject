import { getServerSession } from 'next-auth';
import { ComponentProps, FC } from 'react';
import { Button } from 'components/Button/Button';
import { Menu } from 'components/Menu/Menu';
import { music } from 'music/api';

const myMusic: ComponentProps<typeof Button> = {
    text: 'My Music',
    iconStart: {
        icon: 'Playlist',
    },
    link: '/me',
    style: 'tertiary',
};

const theme: ComponentProps<typeof Button> = {
    text: 'Theme',
    iconStart: {
        icon: 'Theme',
    },
    onClick: 'theme',
};

const signout: ComponentProps<typeof Button> = {
    text: 'Logout',
    iconStart: {
        icon: 'Logout',
    },
    onClick: 'signout',
};

export const UserMenu: FC = async () => {
    const session = await getServerSession();
    if (!session) return null;

    const user = await music.user.profile();

    return (
        <Menu
            buttons={[myMusic, theme, signout]}
            imageUrl={user.images.small}
            side="left"
        />
    );
};
