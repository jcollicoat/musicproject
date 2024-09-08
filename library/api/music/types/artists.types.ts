import { Images } from '@music/types';

export interface Artist {
    id: string;
    name: string;
    followers?: number;
    genres?: string[];
    images?: Images;
    popularity?: number;
}
