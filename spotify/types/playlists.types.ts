import { SpotifyFollowers, SpotifyImage, SpotifyObject } from 'spotify/types';
import { SpotifySearchGroup } from './search.types';
import { SpotifyTrack } from './tracks.types';

interface SpotifyPlaylistOwner {
    external_urls: SpotifyObject;
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string | null;
}

interface SpotifyPlaylistTrack extends SpotifyTrack {
    episode: boolean;
    track: boolean;
}

type SpotifyPlaylistTracks = SpotifySearchGroup<{
    added_at: string;
    added_by: Omit<SpotifyPlaylistOwner, 'display_name'>;
    is_local: boolean;
    primary_color: string | null;
    track: SpotifyPlaylistTrack;
    video_thumbnail: SpotifyObject;
}>;

export interface SpotifyPlaylist {
    collaborative: boolean;
    description: string | null;
    external_urls: SpotifyObject;
    followers: SpotifyFollowers;
    href: string;
    id: string;
    images: SpotifyImage[] | null;
    name: string;
    owner: SpotifyPlaylistOwner;
    primary_color: string | null;
    public: boolean | null;
    snapshot_id: string;
    tracks: SpotifyPlaylistTracks;
    type: string;
    uri: string;
}

export type SpotifyPlaylistSimple = Omit<
    SpotifyPlaylist,
    'followers' | 'primary_color' | 'tracks'
> & {
    tracks: {
        href: string;
        total: number;
    };
};
