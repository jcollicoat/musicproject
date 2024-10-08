import { spotify } from 'spotify/api';
import { builders } from './builders';

const albums = {
    id: async (albumId: string) => {
        const album = await spotify.albums.id(albumId);
        return builders.album.full(album);
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
            .map((album) => builders.album.simple(album));
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

const audio = {
    analysis: {
        id: async (trackId: string) => {
            const analysis = await spotify.audio.analysis.id(trackId);
            return builders.audio.analysis.single(analysis);
        },
    },
    features: {
        id: async (trackId: string) => {
            const audio = await spotify.audio.features.id(trackId);
            return builders.audio.features.single(audio);
        },
        ids: async (trackIds: string[]) => {
            const response = await spotify.audio.features.ids(trackIds);
            return builders.audio.features.multiple(response.audio_features);
        },
    },
};

const playlists = {
    id: async (playlistId: string) => {
        const playlist = await spotify.playlists.id(playlistId);
        return builders.playlist.full(playlist);
    },
    tracks: async (playlistId: string) => {
        const tracks = await spotify.playlists.tracks(playlistId);
        return tracks;
    },
};

const tracks = {
    id: async (trackId: string) => {
        const track = await spotify.tracks.id(trackId);
        return builders.track.full(track);
    },
};

const user = {
    following: {
        artist: async (artistId: string) => {
            const isFollowing = await spotify.user.following.artists([
                artistId,
            ]);
            return isFollowing[0];
        },
    },
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

export const music = {
    albums,
    artists,
    audio,
    playlists,
    tracks,
    user,
};
