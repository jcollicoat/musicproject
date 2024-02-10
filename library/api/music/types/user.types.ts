import { Images } from '@music/types';

export interface User {
    country: string;
    filterExplicit: boolean;
    followers: number;
    id: string;
    images: Images;
    name: string;
    product: string;
    type: string;
}
