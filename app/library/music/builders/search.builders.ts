import { builders } from '@music/builders';
import { Search } from '@music/types/search.types';
import { SpotifySearch } from '@spotify/types/search.types';

const buildSearch = (search: SpotifySearch): Search => ({
    albums: search.albums && {
        ...search.albums,
        items: search.albums.items.map((album) =>
            builders.albums.buildAlbum(album)
        ),
        next: search.albums.next ?? undefined,
        previous: search.albums.previous ?? undefined,
    },
    artists: search.artists && {
        ...search.artists,
        items: search.artists.items.map((album) =>
            builders.artists.buildArtist(album)
        ),
        next: search.artists.next ?? undefined,
        previous: search.artists.previous ?? undefined,
    },
    tracks: search.tracks && {
        ...search.tracks,
        items: search.tracks.items.map((track) =>
            builders.tracks.buildTrack({ track })
        ),
        next: search.tracks.next ?? undefined,
        previous: search.tracks.previous ?? undefined,
    },
    playlists: search.playlists && {
        ...search.playlists,
        items: search.playlists.items.map((playlist) =>
            builders.playlists.buildPlaylist(playlist)
        ),
        next: search.playlists.next ?? undefined,
        previous: search.playlists.previous ?? undefined,
    },
});

const search = { buildSearch };
export { search };
