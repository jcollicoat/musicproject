import { SpotifyImage } from '@spotify/types';

export interface Artist {
    id: string;
    name: string;
    followers?: number;
    genres?: string[];
    images?: SpotifyImage[];
    popularity?: number;
}
