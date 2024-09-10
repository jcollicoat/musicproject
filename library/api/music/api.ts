import { spotify } from '@spotify/api';
import { builders } from './builders';

const albumId = async (albumId: string) => {
    const album = await spotify.albumId(albumId);
    return builders.album(album);
};

const artist = {
    albums: async (artistId: string) => {
        const albums = await spotify.artist.albums(artistId);
        return albums.items.map((album) => builders.albumSimple(album));
    },
    id: async (artistId: string) => {
        const artist = await spotify.artist.id(artistId);
        return builders.artist(artist);
    },
    topTracks: async (artistId: string) => {
        // eslint-disable-next-line no-use-before-define
        const region = (await user()).country;
        const response = await spotify.artist.topTracks(artistId, region);
        return builders.tracks(response.tracks);
    },
};

const audioFeatures = async (trackId: string) => {
    const audioFeatures = await spotify.audioFeatures(trackId);
    return builders.audioFeatures(audioFeatures);
};

const following = {
    artistId: async (artistId: string) => {
        const isFollowing = await spotify.following.check.artistIds([artistId]);
        return isFollowing[0];
    },
};

const trackId = async (trackId: string) => {
    const track = await spotify.trackId(trackId);
    return builders.track(track);
};

const user = async () => {
    const user = await spotify.user();
    return builders.user(user);
};

const music = {
    albumId,
    artist,
    audioFeatures,
    following,
    trackId,
    user,
};
export { music };
