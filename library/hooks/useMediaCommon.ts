import { useMedia } from 'react-use';

export const useMediaMobile = () => {
    const isMobile = useMedia('(max-width: 479px)', false);
    return isMobile;
};

export const useMediaTiny = () => {
    const isTiny = useMedia('(max-width: 349px)', false);
    return isTiny;
};
