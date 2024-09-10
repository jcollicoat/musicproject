import { spotify } from '@spotify/api';
import { builders } from './builders';

const albumId = async (albumId: string) => {
    const album = await spotify.albumId(albumId);
    return builders.album(album);
};

const artists = {
    albums: async (artistId: string) => {
        const albums = await spotify.artists.albums(artistId);
        return albums.items
            .sort((a, b) => {
                if (a.release_date > b.release_date) {
                    return -1;
                }
                if (a.release_date < b.release_date) {
                    return 1;
                }
                return 0;
            })
            .map((album) => builders.albumSimple(album));
    },
    id: async (artistId: string) => {
        const artist = await spotify.artists.id(artistId);
        return builders.artist(artist);
    },
    relatedArtists: async (artistId: string) => {
        const artists = await spotify.artists.relatedArtists(artistId);
        return artists;
    },
    topTracks: async (artistId: string) => {
        // eslint-disable-next-line no-use-before-define
        const region = (await user()).country;
        const response = await spotify.artists.topTracks(artistId, region);
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
    artists,
    audioFeatures,
    following,
    trackId,
    user,
};
export { music };
