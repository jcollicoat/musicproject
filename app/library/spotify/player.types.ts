import { SpotifyTrack } from './tracks.types';
import { SpotifyObject } from './types';

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
