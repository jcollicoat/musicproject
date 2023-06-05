import { SpotifyImage } from '@spotify/types';
import { Track } from './tracks.types';

export interface Playlist {
    collaborative: boolean;
    description: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    owner: { id: string; name: string };
    public: boolean;
    totalTracks: number;
    type: string;
    followers?: number;
    tracks?: Track[];
}
