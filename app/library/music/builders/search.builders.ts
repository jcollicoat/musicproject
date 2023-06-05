import { builders } from '@music/builders';
import { Playlist } from '@music/types/playlists.types';
import { Search } from '@music/types/search.types';
import { SpotifyPlaylistSimple } from '@spotify/types/playlists.types';
import { SpotifySearch } from '@spotify/types/search.types';

const buildSearchPlaylist = (playlist: SpotifyPlaylistSimple): Playlist => ({
    collaborative: playlist.collaborative,
    description: playlist.description,
    followers: 0,
    id: playlist.id,
    images: playlist.images,
    name: playlist.name,
    owner: { id: playlist.owner.id, name: playlist.owner.display_name },
    public: playlist.public ?? true,
    tracks: [],
    type: playlist.type,
});

const buildSearch = (search: SpotifySearch): Search => {
    return {
        albums: search.albums && {
            ...search.albums,
            items: search.albums.items.map((album) =>
                builders.albums.buildAlbum(album)
            ),
        },
        artists: search.artists && {
            ...search.artists,
            items: search.artists.items.map((album) =>
                builders.artists.buildArtist(album)
            ),
        },
        tracks: search.tracks && {
            ...search.tracks,
            items: search.tracks.items.map((track) =>
                builders.tracks.buildTrack(track, false)
            ),
        },
        playlists: search.playlists && {
            ...search.playlists,
            items: search.playlists.items.map((playlist) =>
                buildSearchPlaylist(playlist)
            ),
        },
    };
};

const search = { buildSearch };
export { search };
