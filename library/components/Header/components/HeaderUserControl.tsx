import { signOut } from 'next-auth/react';
import { FC } from 'react';
import { Menu } from '@components/Menu/Menu';
import { useProfile } from '@hooks/music/useProfile';

export const HeaderUserControl: FC = () => {
    const user = useProfile();

    return (
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
            image={user?.image}
            side="left"
        />
    );
};
