import { SpotifyImage } from '@spotify/types';

export interface User {
    country: string;
    filterExplicit: boolean;
    followers: number;
    id: string;
    image: SpotifyImage;
    name: string;
    product: string;
    type: string;
}
