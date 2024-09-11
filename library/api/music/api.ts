import { spotify } from '@spotify/api';
import { builders } from './builders';

const albums = {
    id: async (albumId: string) => {
        const album = await spotify.albums.id(albumId);
        return builders.album(album);
    },
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
        const response = await spotify.artists.relatedArtists(artistId);
        return response.artists.map((artist) => builders.artist(artist));
    },
    topTracks: async (artistId: string) => {
        // eslint-disable-next-line no-use-before-define
        const region = (await user.profile()).country;
        const response = await spotify.artists.topTracks(artistId, region);
        return builders.tracks.full(response.tracks);
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
    return builders.track.full(track);
};

const user = {
    playlists: async () => {
        const playlists = await spotify.user.playlists();
        return builders.playlists.simple(playlists.items);
    },
    profile: async () => {
        const user = await spotify.user.profile();
        return builders.user(user);
    },
    recentTracks: async () => {
        const recentTracks = await spotify.user.recentTracks();
        return builders.tracks.full(
            recentTracks.items.map((item) => item.track),
        );
    },
};

const music = {
    albums,
    artists,
    audioFeatures,
    following,
    trackId,
    user,
};
export { music };
