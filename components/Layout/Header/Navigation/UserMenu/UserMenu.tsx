import { FC } from 'react';
import { PiSignOut, PiSun } from 'react-icons/pi';
import { Button } from 'Generics/Button/Button';
import { Menu } from 'Generics/Menu/Menu';
import { useImages } from 'hooks/useImages';
import { spotify } from 'spotify/api';

export const UserMenu: FC = async () => {
    const user = await spotify.user.profile();

    const images = useImages(user.images);

    return (
        <Menu imageUrl={images.small} side="left">
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
