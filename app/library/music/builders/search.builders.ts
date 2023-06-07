import { builders } from '@music/builders';
import { Search } from '@music/types/search.types';
import { SpotifySearch } from '@spotify/types/search.types';

const buildSearch = (search: SpotifySearch): Search => ({
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
            builders.tracks.buildTrack({ track })
        ),
    },
    playlists: search.playlists && {
        ...search.playlists,
        items: search.playlists.items.map((playlist) =>
            builders.playlists.buildPlaylist(playlist)
        ),
    },
});

const search = { buildSearch };
export { search };
