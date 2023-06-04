import { SpotifyFollowers, SpotifyImage, SpotifyObject } from '@spotify/types';
import { SpotifySearchGroup } from './search.types';
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

type Track = SpotifySearchGroup<{
    added_at: string;
    added_by: SpotifyPlaylistOwner;
    is_local: boolean;
    track: SpotifyTrack;
}>;

export interface SpotifyPlaylistSimple {
    collaborative: boolean;
    description: string;
    external_urls: SpotifyObject;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    owner: SpotifyPlaylistOwner;
    public: boolean;
    snapshot_id: string;
    type: string;
    uri: string;
}

export interface SpotifyPlaylist {
    followers: SpotifyFollowers;
    tracks: Track[];
}
