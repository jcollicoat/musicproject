import { getServerSession } from 'next-auth';
import { FC } from 'react';
import { Menu } from '@components/Menu/Menu';
import { music } from '@music/api';

export const HeaderUserControl: FC = async () => {
    const session = await getServerSession();
    if (!session) return null;

    const user = await music.user.details();

    return (
        <Menu
            buttons={[
                {
                    text: 'Track',
                    iconStart: {
                        icon: 'User',
                    },
                    link: '/tracks/21p0edNF107qz1uPc9F7EK',
                },
                {
                    text: 'Artist',
                    iconStart: {
                        icon: 'User',
                    },
                    link: '/artists/0GG2cWaonE4JPrjcCCQ1EG',
                },
                {
                    text: 'Album',
                    iconStart: {
                        icon: 'User',
                    },
                    link: '/albums/2gwNU1WsZEOcCSyKHsXKs5',
                },
                {
                    text: 'Logout',
                    iconStart: {
                        icon: 'Spotify',
                    },
                    onClick: 'signout',
                },
            ]}
            image={user.images.small}
            side="left"
        />
    );
};
