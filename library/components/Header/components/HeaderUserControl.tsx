'use client';

import { signOut } from 'next-auth/react';
import { FC } from 'react';
import { Menu } from '@components/Menu/Menu';
import { useUser } from '@hooks/music/useUser';
import { useAuth } from '@hooks/useAuth';

export const HeaderUserControl: FC = () => {
    const auth = useAuth();
    const user = useUser();

    return auth ? (
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
                        icon: 'User',
                    },
                    onClick: () => signOut(),
                },
            ]}
            image={user?.images.small}
            side="left"
        />
    ) : null;
};
