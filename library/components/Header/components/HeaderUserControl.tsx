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
