import { SpotifyAlbum } from '@spotify/albums.types';
import { Album } from './albums.types';

const buildArtists = (artists: SpotifyAlbum['artists']): Album['artists'] => {
    return artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
    }));
};

const buildTracks = (tracks: SpotifyAlbum['tracks']): Album['tracks'] => {
    return tracks.items.map((track) => ({
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
};

export const buildSpotifyAlbum = (album: SpotifyAlbum): Album => {
    const {
        album_type,
        genres,
        id,
        images,
        label,
        name,
        popularity,
        release_date,
        release_date_precision,
    } = album;

    return {
        albumType: album_type,
        artists: buildArtists(album.artists),
        genres: genres,
        id: id,
        images: images,
        label: label,
        name: name,
        popularity: popularity,
        releaseDate: release_date,
        releaseDatePrecision: release_date_precision,
        tracks: buildTracks(album.tracks),
    };
};
