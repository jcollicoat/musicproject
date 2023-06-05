import { SpotifyImage } from '@spotify/types';
import { Artist } from './artists.types';
import { Track } from './tracks.types';

export interface Album {
    albumType: string;
    artists: Artist[];
    id: string;
    images: SpotifyImage[];
    name: string;
    releaseDate: string;
    releaseDatePrecision: string;
    totalTracks: number;
    genres?: string[];
    label?: string;
    popularity?: number;
    tracks?: Track[];
}
