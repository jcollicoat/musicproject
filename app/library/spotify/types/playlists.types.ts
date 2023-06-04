import { SpotifyFollowers, SpotifyImage, SpotifyObject } from '@spotify/types';
import { SpotifyTrack } from './tracks.types';

interface SpotifyPlaylistOwner {
    external_urls: SpotifyObject;
    followers: SpotifyFollowers;
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
}

export interface SpotifyPlaylist {
    collaborative: boolean;
    description: string;
    external_urls: SpotifyObject;
    followers: SpotifyFollowers;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    owner: SpotifyPlaylistOwner;
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
        items: {
            added_at: string;
            added_by: SpotifyPlaylistOwner;
            is_local: boolean;
            track: SpotifyTrack;
        }[];
    };
    type: string;
    uri: string;
}
