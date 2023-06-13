import { builders } from '@music/builders';
import { Playlist } from '@music/types/playlists.types';
import { SpotifyPlaylist, IsFullTracks } from '@spotify/types/playlists.types';

const buildPlaylist = (playlist: SpotifyPlaylist): Playlist => ({
    // Simple
    collaborative: playlist.collaborative,
    id: playlist.id,
    images: playlist.images,
    name: playlist.name,
    owner: {
        id: playlist.owner.id,
        name: playlist.owner.display_name ?? 'Spotify User',
    },
    totalTracks: playlist.tracks.total,
    type: playlist.type,
    // Simple Nullable
    description: playlist.description ?? undefined,
    public: playlist.public ?? undefined,
    // Full
    followers: playlist.followers?.total,
    tracks: IsFullTracks(playlist.tracks)
        ? builders.tracks.buildTracks(
              playlist.tracks.items.map((item) => ({
                  track: item.track,
              }))
          )
        : undefined,
});

const playlists = { buildPlaylist };
export { playlists };
