import { SpotifyImage } from 'spotify/types';

type Input = SpotifyImage[] | null;

export const useImages = (images: Input) => {
    if (!images) {
        // TODO: Fallback images
        return {
            small: '',
            medium: '',
            large: '',
        };
    } else {
        const sorted = images.sort((a, b) => {
            if (!a.width || !b.width) return 0;
            if (a.width < b.width) return -1;
            if (a.width > b.width) return 1;
            return 0;
        });

        return {
            small: sorted[0]?.url,
            medium: sorted[1]?.url ?? sorted[0]?.url,
            large: sorted[sorted.length - 1]?.url,
        };
    }
};
