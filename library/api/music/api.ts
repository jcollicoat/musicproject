import { spotify } from '@spotify/api';
import { tracks } from './api.tracks';
import { builders } from './builders';

const albums = {
    get: async (albumId: string) => {
        return builders.albums.buildAlbum(await spotify.albums.get(albumId));
    },
};

const artists = {
    get: async (artistId: string) => {
        return builders.artists.buildArtist(
            await spotify.artists.get(artistId),
        );
    },
};

const playlists = {
    get: async (playlistId: string) => {
        return builders.playlists.buildPlaylist(
            await spotify.playlists.get(playlistId),
        );
    },
};

const search = async (query: string, types?: string[]) => {
    return builders.search.buildSearch(await spotify.search(query, types));
};

const user = {
    details: async () => {
        return builders.user.buildUser(await spotify.user.get());
    },
    full: async () => {
        return builders.user.buildFullUser(
            await spotify.user.get(),
            await spotify.user.artists.followed(),
        );
    },
    tracks: {
        liked: async () => {
            const search = await spotify.user.tracks.liked();
            return search;
        },
    },
};

const music = { albums, artists, playlists, search, tracks, user };
export { music };
