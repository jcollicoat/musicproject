import { builders } from 'music/builders';
import {
    SpotifyPlaylist,
    SpotifyPlaylistSimple,
} from 'spotify/types/playlists.types';

const playlist = {
    full: (playlist: SpotifyPlaylist) => ({
        collaborative: playlist.collaborative,
        description: playlist.description,
        followers: playlist.followers,
        id: playlist.id,
        images: playlist.images ? builders.images(playlist.images) : undefined,
        name: playlist.name,
        owner: {
            id: playlist.owner.id,
            name: playlist.owner.display_name,
        },
        public: playlist.public,
        tracks: builders.tracks.full(
            playlist.tracks.items.map((item) => item.track),
        ),
    }),
    simple: (playlist: SpotifyPlaylistSimple) => ({
        collaborative: playlist.collaborative,
        description: playlist.description,
        id: playlist.id,
        images: playlist.images ? builders.images(playlist.images) : undefined,
        name: playlist.name,
        owner: {
            id: playlist.owner.id,
            name: playlist.owner.display_name,
        },
        public: playlist.public,
        totalTracks: playlist.tracks.total,
    }),
};

const playlists = {
    full: (playlists: SpotifyPlaylist[]) =>
        playlists.map((playlistObj) => playlist.full(playlistObj)),
    simple: (playlists: SpotifyPlaylistSimple[]) =>
        playlists.map((playlistObj) => playlist.simple(playlistObj)),
};

export { playlist, playlists };
