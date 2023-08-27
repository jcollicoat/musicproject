import { useMediaQuery } from '@react-hookz/web';

export const useMediaMobile = () => {
    const isMobile = useMediaQuery('(max-width: 479px)', {
        initializeWithValue: false,
    });
    return isMobile;
};

export const useMediaTiny = () => {
    const isTiny = useMediaQuery('(max-width: 349px)', {
        initializeWithValue: false,
    });
    return isTiny;
};
