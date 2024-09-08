import { api } from './requests';
import { SpotifyAlbum } from './types/albums.types';
import { SpotifyAudioFeatures } from './types/audio.types';
import { SpotifyTrack } from './types/tracks.types';
import { SpotifyUser } from './types/user.types';

const albumId = async (albumId: string) => {
    return await api.get<SpotifyAlbum>(`albums/${albumId}`);
};

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
    albumId,
    audioFeatures,
    trackId,
    user,
};
export { spotify };
