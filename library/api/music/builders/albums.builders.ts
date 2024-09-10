import { builders } from '@music/builders';
import { SpotifyAlbum } from '@spotify/types/albums.types';

const albumDuration = (tracks: SpotifyAlbum['tracks']['items']) => {
    let durationMs = 0;
    tracks.forEach((track) => {
        durationMs = durationMs + track.duration_ms;
    });
    return durationMs;
};

const albumId = (album: SpotifyAlbum) => {
    return {
        albumType: album.album_type,
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
        tracks: album.tracks.items.map((track) => builders.idAndName(track)),
    };
};

export { albumId };
