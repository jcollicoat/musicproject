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

export interface SpotifyFollowedArtists {
    items: SpotifyArtist[];
    next: string;
    cursors: {
        before: string;
        after: string;
    };
    limit: number;
    href: string;
}

interface RecentlyPlayedTrack {
    track: SpotifyTrack;
    played_at: string; // ISO timestamp
    context: {
        type: string;
        external_urls: SpotifyObject;
        href: string;
        uri: string;
    };
}

export interface SpotifyRecentlyPlayed {
    items: RecentlyPlayedTrack[];
    next: string;
    cursors: {
        before: string;
        after: string;
    };
    limit: number;
    href: string;
}
