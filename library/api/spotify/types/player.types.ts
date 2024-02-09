import { SpotifyObject, SpotifyPagedList } from '@spotify/types';
import { SpotifyTrack } from './tracks.types';

interface RecentlyPlayedTrack {
    track: SpotifyTrack;
    played_at: string;
    context: {
        type: string;
        external_urls: SpotifyObject;
        href: string;
        uri: string;
    } | null;
}

export type SpotifyRecentlyPlayed = SpotifyPagedList<RecentlyPlayedTrack>;
