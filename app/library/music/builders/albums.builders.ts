import { Album } from '@music/types/albums.types';
import { SpotifyAlbum, SpotifyAlbumSimple } from '@spotify/types/albums.types';

const buildArtists = (artists: SpotifyAlbum['artists']): Album['artists'] =>
    artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
    }));

const buildTracks = (tracks: SpotifyAlbum['tracks']): Album['tracks'] =>
    tracks.items.map((track) => ({
        artists: track.artists.map((artist) => ({
            id: artist.id,
            name: artist.name,
        })),
        durationMs: track.duration_ms,
        explicit: track.explicit,
        id: track.id,
        name: track.name,
        previewUrl: track.preview_url,
    }));

const isFull = (
    album: SpotifyAlbum | SpotifyAlbumSimple
): album is SpotifyAlbum => {
    return Boolean((album as SpotifyAlbum).tracks);
};

const buildAlbum = (album: SpotifyAlbum | SpotifyAlbumSimple): Album => {
    if (isFull(album)) {
        return {
            albumType: album.album_type,
            artists: buildArtists(album.artists),
            genres: album.genres,
            id: album.id,
            images: album.images,
            label: album.label,
            name: album.name,
            popularity: album.popularity,
            releaseDate: album.release_date,
            releaseDatePrecision: album.release_date_precision,
            totalTracks: album.total_tracks,
            tracks: buildTracks(album.tracks),
        };
    }

    return {
        albumType: album.album_type,
        artists: buildArtists(album.artists),
        genres: [],
        id: album.id,
        images: album.images,
        label: '',
        name: album.name,
        popularity: 0,
        releaseDate: album.release_date,
        releaseDatePrecision: album.release_date_precision,
        totalTracks: album.total_tracks,
        tracks: [],
    };
};

const albums = { buildAlbum };
export { albums };
