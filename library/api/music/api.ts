import { spotify } from '@spotify/api';
import { builders } from './builders';

const trackId = async (trackId: string) => {
    const track = await spotify.trackId(trackId);
    return builders.trackId(track);
};

const user = async () => {
    const user = await spotify.user();
    return builders.user(user);
};

const music = { trackId, user };
export { music };
