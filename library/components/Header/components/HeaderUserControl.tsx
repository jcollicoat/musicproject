import { getServerSession } from 'next-auth';
import { FC } from 'react';
import { Menu } from '@components/client/Menu/Menu';
import { music } from '@music/api';

export const HeaderUserControl: FC = async () => {
    const session = await getServerSession();
    if (!session) return null;

    const user = await music.user();

    return (
        <Menu
            buttons={[
                {
                    text: 'Theme',
                    iconStart: {
                        icon: 'User',
                    },
                    onClick: 'theme',
                },
                {
                    text: 'Logout',
                    iconStart: {
                        icon: 'Spotify',
                    },
                    onClick: 'signout',
                },
            ]}
            imageUrl={user.images.medium}
            side="left"
        />
    );
};
