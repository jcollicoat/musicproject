import { signOut } from 'next-auth/react';
import { FC } from 'react';
import { Menu } from '@components/Menu/Menu';
import { useUserProfile } from '@hooks/music/useUserProfile';

export const HeaderUser: FC = () => {
    const user = useUserProfile();
    console.log(user);

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
