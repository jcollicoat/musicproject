import { builders } from '@music/builders';
import { Playlist } from '@music/types/playlists.types';
import {
    SpotifyPlaylist,
    spotifyPlaylistHasTracks,
} from '@spotify/types/playlists.types';

const buildPlaylist = (playlist: SpotifyPlaylist): Playlist => ({
    // Simple
    collaborative: playlist.collaborative,
    description: playlist.description ?? '',
    id: playlist.id,
    images: playlist.images,
    name: playlist.name,
    owner: {
        id: playlist.owner.id,
        name: playlist.owner.display_name ?? 'User',
    },
    public: Boolean(playlist.public),
    totalTracks: playlist.tracks.total,
    type: playlist.type,
    // Full
    followers: playlist.followers?.total,
    tracks: spotifyPlaylistHasTracks(playlist.tracks)
        ? builders.tracks.buildTracks(
              playlist.tracks.items.map((item) => ({
                  track: item.track,
              }))
          )
        : undefined,
});

const playlists = { buildPlaylist };
export { playlists };
