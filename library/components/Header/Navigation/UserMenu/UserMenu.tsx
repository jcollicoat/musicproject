import { getServerSession } from 'next-auth';
import { ComponentProps, FC } from 'react';
import { Button } from '@components/Button/Button';
import { Menu } from '@components/Menu/Menu';
import { music } from '@music/api';

const ENV = process.env.NODE_ENV;

const theme: ComponentProps<typeof Button> = {
    text: 'Theme',
    iconStart: {
        icon: 'User',
    },
    onClick: 'theme',
};

const signout: ComponentProps<typeof Button> = {
    text: 'Logout',
    iconStart: {
        icon: 'Spotify',
    },
    onClick: 'signout',
};

const devTrack: ComponentProps<typeof Button> = {
    text: '[DEV] Track',
    iconStart: {
        icon: 'Spotify',
    },
    link: '/tracks/21p0edNF107qz1uPc9F7EK',
    style: 'tertiary',
};

const devArtist: ComponentProps<typeof Button> = {
    text: '[DEV] Artist',
    iconStart: {
        icon: 'Spotify',
    },
    link: '/artists/0GG2cWaonE4JPrjcCCQ1EG',
    style: 'tertiary',
};

const devAlbum: ComponentProps<typeof Button> = {
    text: '[DEV] Album',
    iconStart: {
        icon: 'Spotify',
    },
    link: '/albums/2gwNU1WsZEOcCSyKHsXKs5',
    style: 'tertiary',
};

export const UserMenu: FC = async () => {
    const session = await getServerSession();
    if (!session) return null;

    const user = await music.user();

    const buttons: ComponentProps<typeof Button>[] = [theme, signout];
    if (ENV === 'development') {
        buttons.push(devTrack, devArtist, devAlbum);
    }

    return <Menu buttons={buttons} imageUrl={user.images.medium} side="left" />;
};
