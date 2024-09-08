import { spotify } from '@spotify/api';
import { builders } from './builders';

const albumId = async (albumId: string) => {
    const album = await spotify.albumId(albumId);
    return builders.albumId(album);
};

const artistId = async (artistId: string) => {
    const artist = await spotify.artistId(artistId);
    return builders.artistId(artist);
};

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

const music = { albumId, artistId, audioFeatures, trackId, user };
export { music };
