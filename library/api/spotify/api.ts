import { api } from './requests';
import { SpotifyAudioFeatures } from './types/audio.types';
import { SpotifyTrack } from './types/tracks.types';
import { SpotifyUser } from './types/user.types';

const audioFeatures = async (trackId: string) => {
    return await api.get<SpotifyAudioFeatures>(`audio-features/${trackId}`);
};

const trackId = async (trackId: string) => {
    return await api.get<SpotifyTrack>(`tracks/${trackId}`);
};

const user = async () => {
    return await api.get<SpotifyUser>('me');
};

const spotify = {
    audioFeatures,
    trackId,
    user,
};
export { spotify };
