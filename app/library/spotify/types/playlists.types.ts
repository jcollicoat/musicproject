import { SpotifyFollowers, SpotifyImage, SpotifyObject } from '@spotify/types';
import { SpotifySearchGroup } from './search.types';
import { SpotifyTrack } from './tracks.types';

interface PlaylistOwner {
    external_urls: SpotifyObject;
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string | null;
}

interface PlaylistTrack extends SpotifyTrack {
    episode: boolean;
    track: boolean;
}

interface PlaylistTrackContext {
    added_at: string;
    added_by: Omit<PlaylistOwner, 'display_name'>;
    is_local: boolean;
    primary_color: string | null;
    track: PlaylistTrack;
    video_thumbnail: SpotifyObject;
}

interface PlaylistTracksSimple {
    href: string;
    total: number;
    items?: PlaylistTrackContext[];
}

type PlaylistTracks = SpotifySearchGroup<PlaylistTrackContext>;

export const spotifyPlaylistHasTracks = (
    tracks: PlaylistTracksSimple | PlaylistTracks
): tracks is PlaylistTracks => {
    return tracks.items ? true : false;
};

interface SpotifyPlaylistSimple {
    collaborative: boolean;
    description: string | null;
    external_urls: SpotifyObject;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    owner: PlaylistOwner;
    primary_color: string | null;
    public: boolean | null;
    snapshot_id: string;
    tracks: PlaylistTracksSimple;
    type: string;
    uri: string;
}

export interface SpotifyPlaylist extends SpotifyPlaylistSimple {
    followers?: SpotifyFollowers;
    tracks: PlaylistTracks | PlaylistTracksSimple;
}
