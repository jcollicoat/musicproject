import { spotify } from '@spotify/api';
import { tracks } from './api.tracks';
import { builders } from './builders';

const albums = {
    get: async (albumId: string, accessToken: string) => {
        return builders.albums.buildAlbum(
            await spotify.albums.get(albumId, accessToken)
        );
    },
};

const artists = {
    get: async (artistId: string, accessToken: string) => {
        return builders.artists.buildArtist(
            await spotify.artists.get(artistId, accessToken)
        );
    },
};

const playlists = {
    get: async (playlistId: string, accessToken: string) => {
        return builders.playlists.buildPlaylist(
            await spotify.playlists.get(playlistId, accessToken)
        );
    },
};

const search = async (
    config: {
        query: string;
        types?: string[];
    },
    accessToken: string
) => {
    return builders.search.buildSearch(
        await spotify.search(config, accessToken)
    );
};

const user = {
    details: async (accessToken: string) => {
        return builders.user.buildUser(await spotify.user.get(accessToken));
    },
    full: async (accessToken: string) => {
        return builders.user.buildFullUser(
            await spotify.user.get(accessToken),
            await spotify.user.artists.followed(accessToken)
        );
    },
};

const music = { albums, artists, playlists, search, tracks, user };
export { music };
