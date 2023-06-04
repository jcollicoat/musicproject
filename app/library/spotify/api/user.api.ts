import { api } from '@spotify/requests';
import {
    SpotifyFollowedArtists,
    SpotifyRecentlyPlayed,
    SpotifyUser,
} from '@spotify/types/user.types';

const me = async (accessToken: string) =>
    await api.get<SpotifyUser>('me', accessToken);

const followedArtists = async (accessToken: string) =>
    await api.get<SpotifyFollowedArtists>('me/following', accessToken, {
        type: 'artist',
    });

const checkSaved = async (trackIds: string[], accessToken: string) =>
    await api.get<boolean[]>('me/tracks/contains', accessToken, {
        ids: trackIds.join(','),
    });

const recentlyPlayed = async (accessToken: string) =>
    await api.get<SpotifyRecentlyPlayed>(
        'me/player/recently-played',
        accessToken
    );

const user = { me, followedArtists, tracks: { checkSaved, recentlyPlayed } };
export { user };
