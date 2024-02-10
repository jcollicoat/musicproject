import { spotify } from '@spotify/api';
import { builders } from './builders';

const audioFeatures = async (trackId: string) => {
    const audioFeatures = await spotify.audioFeatures(trackId);
    return builders.audioFeatures(audioFeatures);
};

const trackId = async (trackId: string) => {
    const track = await spotify.trackId(trackId);
    return builders.trackId(track);
};

const user = async () => {
    const user = await spotify.user();
    return builders.user(user);
};

const music = { audioFeatures, trackId, user };
export { music };
