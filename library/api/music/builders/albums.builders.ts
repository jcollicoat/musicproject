import { titleCase } from '@api/helpers';
import { builders } from '@music/builders';
import { SpotifyAlbum, SpotifyAlbumSimple } from '@spotify/types/albums.types';

const albumDuration = (tracks: SpotifyAlbum['tracks']['items']) => {
    let durationMs = 0;
    tracks.forEach((track) => {
        durationMs += track.duration_ms;
    });
    return durationMs;
};

const album = (album: SpotifyAlbum) => {
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
};

const albumSimple = (album: SpotifyAlbumSimple) => {
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
};

export { album, albumSimple };
