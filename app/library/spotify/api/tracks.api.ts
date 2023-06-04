import { api } from '@spotify/requests';
import { SpotifyTrack, SpotifyTracks } from '@spotify/types/tracks.types';

const id = async (trackId: string, accessToken: string) =>
    await api.get<SpotifyTrack>(`tracks/${trackId}`, accessToken);

const ids = async (trackIds: string[], accessToken: string) =>
    await api.get<SpotifyTracks>('tracks', accessToken, {
        ids: trackIds.join(','),
    });

const tracks = { id, ids };

export { tracks };
