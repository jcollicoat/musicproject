import { signOut } from 'next-auth/react';
import { FC } from 'react';
import { Menu } from '@components/Menu/Menu';
import { useUser } from '@hooks/music/useUser';

export const HeaderUserControl: FC = () => {
    const user = useUser();

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
            image={user?.images.small}
            side="left"
        />
    );
};
