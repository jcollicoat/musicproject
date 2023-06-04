import { builders } from '@music/builders';
import { Playlist } from '@music/types/playlists.types';
import { SpotifyPlaylist } from '@spotify/types/playlists.types';

const buildPlaylist = (playlist: SpotifyPlaylist): Playlist => {
    return {
        collaborative: playlist.collaborative,
        description: playlist.description,
        followers: playlist.followers.total,
        id: playlist.id,
        images: playlist.images,
        name: playlist.name,
        owner: {
            id: playlist.owner.id,
            name: playlist.owner.display_name,
        },
        public: playlist.public,
        tracks: playlist.tracks.items.map((item) =>
            builders.tracks.buildTrack(item.track, false)
        ),
        type: playlist.type,
    };
};

const playlists = { buildPlaylist };
export { playlists };
