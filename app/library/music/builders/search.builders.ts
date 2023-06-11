import { builders } from '@music/builders';
import { Search } from '@music/types/search.types';
import { SpotifySearch } from '@spotify/types/search.types';

const buildSearch = (search: SpotifySearch): Search => ({
    albums: search.albums && {
        items: search.albums.items.map((album) =>
            builders.albums.buildAlbum(album)
        ),
        limit: search.albums.limit,
        next: search.albums.next ?? undefined,
        offset: search.albums.offset,
        previous: search.albums.previous ?? undefined,
        total: search.albums.total,
    },
    artists: search.artists && {
        items: search.artists.items.map((album) =>
            builders.artists.buildArtist(album)
        ),
        limit: search.artists.limit,
        next: search.artists.next ?? undefined,
        offset: search.artists.offset,
        previous: search.artists.previous ?? undefined,
        total: search.artists.total,
    },
    tracks: search.tracks && {
        items: search.tracks.items.map((track) =>
            builders.tracks.buildTrack({ track })
        ),
        limit: search.tracks.limit,
        next: search.tracks.next ?? undefined,
        offset: search.tracks.offset,
        previous: search.tracks.previous ?? undefined,
        total: search.tracks.total,
    },
    playlists: search.playlists && {
        items: search.playlists.items.map((playlist) =>
            builders.playlists.buildPlaylist(playlist)
        ),
        limit: search.playlists.limit,
        next: search.playlists.next ?? undefined,
        offset: search.playlists.offset,
        previous: search.playlists.previous ?? undefined,
        total: search.playlists.total,
    },
});

const search = { buildSearch };
export { search };
