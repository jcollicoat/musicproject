import { getServerSession } from 'next-auth';
import { FC } from 'react';
import { PiSignOut, PiSun } from 'react-icons/pi';
import { Button } from 'Generics/Button/Button';
import { Menu } from 'Generics/Menu/Menu';
import { music } from 'music/api';

export const UserMenu: FC = async () => {
    const session = await getServerSession();
    if (!session) return null;

    const user = await music.user.profile();

    return (
        <Menu imageUrl={user.images.small} side="left">
            <Button ariaLabel="Toggle Theme" onClick="theme" style="inMenu">
                <PiSun />
                Theme
            </Button>
            <Button ariaLabel="Sign Out" onClick="signout" style="inMenu">
                <PiSignOut />
                Sign Out
            </Button>
        </Menu>
    );
};
