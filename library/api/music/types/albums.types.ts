import { Images } from '@music/types';

interface AlbumArtist {
    id: string;
    name: string;
}

interface AlbumTrack {
    id: string;
    name: string;
}

export interface Album {
    albumType: string;
    artists: AlbumArtist[];
    id: string;
    images: Images;
    length: number;
    name: string;
    releaseDate: {
        display: string;
        exact: string;
    };
    totalTracks: number;
    genres?: string[];
    label?: string;
    popularity?: number;
    tracks?: AlbumTrack[];
}
