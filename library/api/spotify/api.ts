import { api } from './requests';
import { SpotifyTrack } from './types/tracks.types';
import { SpotifyUser } from './types/user.types';

const trackId = async (trackId: string) => {
    return await api.get<SpotifyTrack>(`tracks/${trackId}`);
};

const user = async () => {
    return await api.get<SpotifyUser>('me');
};

const spotify = {
    trackId,
    user,
};
export { spotify };
