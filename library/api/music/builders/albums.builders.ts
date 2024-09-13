import { titleCase } from '@api/helpers';
import { builders } from '@music/builders';
import { SpotifyAlbum, SpotifyAlbumSimple } from '@spotify/types/albums.types';

const albumDuration = (tracks: SpotifyAlbum['tracks']['items']) =>
    tracks
        .map((track) => track.duration_ms)
        .reduce((previous, current) => (previous += current));

const album = {
    full: (album: SpotifyAlbum) => {
        return {
            albumType: titleCase(album.album_type),
            artists: album.artists.map((artist) => builders.idAndName(artist)),
            genres: album.genres,
            id: album.id,
            images: builders.images(album.images),
            label: album.label,
            length: albumDuration(album.tracks.items),
            name: album.name,
            popularity: album.popularity,
            releaseDate: {
                display: new Date(album.release_date).toDateString(),
                exact: album.release_date,
            },
            totalTracks: album.total_tracks,
            tracks: builders.tracks.simple(album.tracks.items),
        };
    },
    simple: (album: SpotifyAlbumSimple) => {
        return {
            albumType: titleCase(album.album_type),
            id: album.id,
            images: builders.images(album.images),
            name: album.name,
            releaseDate: {
                display: new Date(album.release_date).toDateString(),
                exact: album.release_date,
            },
            totalTracks: album.total_tracks,
        };
    },
};

export { album };
