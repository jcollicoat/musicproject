import { builders } from '@music/builders';
import { Album } from '@music/types/albums.types';
import { SpotifyAlbum } from '@spotify/types/albums.types';

const buildAlbum = (album: SpotifyAlbum): Album => ({
    // Simple
    albumType: album.album_type,
    artists: album.artists.map((artist) =>
        builders.artists.buildArtist(artist)
    ),
    id: album.id,
    images: album.images,
    name: album.name,
    releaseDate: album.release_date,
    releaseDatePrecision: album.release_date_precision,
    totalTracks: album.total_tracks,
    // Full
    genres: album.genres,
    label: album.label,
    popularity: album.popularity,
    tracks:
        album.tracks &&
        builders.tracks.buildTracks(
            album.tracks.items.map((item) => ({
                track: item,
            }))
        ),
});

const albums = { buildAlbum };
export { albums };
