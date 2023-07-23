import { SpotifyImage } from '@spotify/types';

export interface Images {
    small?: SpotifyImage;
    medium?: SpotifyImage;
    large: SpotifyImage;
}

export interface ItemGroup<T> {
    items: T[];
    limit?: number;
    offset?: number;
    next?: string;
    previous?: string;
    total?: number;
}
