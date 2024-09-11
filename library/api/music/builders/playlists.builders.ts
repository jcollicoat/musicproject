import { builders } from '@music/builders';
import { SpotifyPlaylistSimple } from '@spotify/types/playlists.types';

const playlist = {
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
    simple: (playlists: SpotifyPlaylistSimple[]) =>
        playlists.map((playlistObj) => playlist.simple(playlistObj)),
};

export { playlist, playlists };
