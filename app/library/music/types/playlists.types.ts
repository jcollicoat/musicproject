import { SpotifyImage } from '@spotify/types';
import { Track } from './tracks.types';

interface PlaylistOwner {
    id: string;
    name: string;
}

export interface Playlist {
    collaborative: boolean;
    description: string;
    followers: number;
    id: string;
    images: SpotifyImage[];
    name: string;
    owner: PlaylistOwner;
    public: boolean;
    tracks: Track[];
    type: string;
}
