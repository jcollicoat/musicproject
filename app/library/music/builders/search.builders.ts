import { builders } from '@music/builders';
import { Album } from '@music/types/albums.types';
import { Search } from '@music/types/search.types';
import { SpotifySearch, SpotifySearchAlbum } from '@spotify/types/search.types';

const buildSearchAlbum = (album: SpotifySearchAlbum): Album => ({
    albumType: album.album_type,
    artists: album.artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
    })),
    genres: [],
    id: album.id,
    images: album.images,
    label: '',
    name: album.name,
    popularity: 0,
    releaseDate: album.release_date,
    releaseDatePrecision: album.release_date_precision,
    tracks: [],
});

const buildSearch = (search: SpotifySearch): Search => {
    return {
        albums: search.albums && {
            ...search.albums,
            items: search.albums.items.map((album) => buildSearchAlbum(album)),
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
                builders.playlists.buildPlaylist(playlist)
            ),
        },
    };
};

const search = { buildSearch };
export { search };
