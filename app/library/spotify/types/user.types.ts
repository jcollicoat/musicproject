import { SpotifyFollowers, SpotifyImage, SpotifyObject } from '@spotify/types';
import { SpotifyArtist } from './artists.types';
import { SpotifyTrack } from './tracks.types';

export interface SpotifyUser {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
        filter_enabled: boolean;
        filter_locked: boolean;
    };
    external_urls: SpotifyObject;
    followers: SpotifyFollowers;
    href: string;
    id: string;
    images: SpotifyImage[];
    product: string;
    type: string;
    uri: string;
}

export interface SpotifyPagedList<T> {
    items: T[];
    next: string | null;
    cursors: {
        before?: string | null;
        after: string | null;
    };
    limit: number;
    href: string;
}

export interface SpotifyFollowedArtists {
    artists: SpotifyPagedList<SpotifyArtist> & { total: number };
}

interface RecentlyPlayedTrack {
    track: SpotifyTrack;
    played_at: string;
    context: {
        type: string;
        external_urls: SpotifyObject;
        href: string;
        uri: string;
    };
}

export type SpotifyRecentlyPlayed = SpotifyPagedList<RecentlyPlayedTrack>;
