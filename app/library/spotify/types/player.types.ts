import { SpotifyObject, SpotifyPagedList } from '@spotify/types';
import { SpotifyTrack } from './tracks.types';

export interface SpotifyPlaybackState {
    device: {
        id: string | null;
        is_active: boolean;
        is_private_session: boolean;
        is_restricted: boolean;
        name: string;
        type: string;
        volume_percent: number | null;
    };
    repeat_state: 'off' | 'track' | 'context';
    shuffle_state: boolean;
    timestamp: number;
    context: {
        type: string;
        href: string;
        external_urls: SpotifyObject;
        uri: string;
    } | null;
    progress_ms: number | null;
    is_playing: boolean;
    item: SpotifyTrack | null;
    currently_playing_type: string;
    actions: {
        disallows: {
            interrupting_playback?: boolean;
            pausing?: boolean;
            resuming?: boolean;
            seeking?: boolean;
            skipping_next?: boolean;
            skipping_prev?: boolean;
            toggling_repeat_context?: boolean;
            toggling_shuffle?: boolean;
            toggling_repeat_track?: boolean;
            transferring_playback?: boolean;
        };
    };
}

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
