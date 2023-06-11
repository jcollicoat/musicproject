import { SpotifyImage } from '@spotify/types';
import { Track } from './tracks.types';

export interface Playlist {
    collaborative: boolean;
    id: string;
    images: SpotifyImage[];
    name: string;
    owner: { id: string; name: string };
    totalTracks: number;
    type: string;
    description?: string;
    followers?: number;
    public?: boolean;
    tracks?: Track[];
}
