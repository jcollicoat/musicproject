import { SpotifyFollowers, SpotifyImage, SpotifyObject } from '@spotify/types';
import { SpotifySearchGroup } from './search.types';
import { SpotifyTrack } from './tracks.types';

interface SpotifyPlaylistOwner {
    external_urls: SpotifyObject;
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
}

interface SpotifyPlaylistSimple {
    collaborative: boolean;
    description: string;
    external_urls: SpotifyObject;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    owner: SpotifyPlaylistOwner;
    primary_color: string | null;
    public: boolean | null;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number;
    };
    type: string;
    uri: string;
}

interface PlaylistTrack extends SpotifyTrack {
    episode: boolean;
    track: boolean;
}

export interface SpotifyPlaylist extends SpotifyPlaylistSimple {
    followers?: SpotifyFollowers;
    tracks: SpotifySearchGroup<{
        added_at: string;
        added_by: Omit<SpotifyPlaylistOwner, 'display_name'>;
        is_local: boolean;
        primary_color: string | null;
        track: PlaylistTrack;
        video_thumbnail: SpotifyObject;
    }>;
}
