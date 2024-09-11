import { titleCase } from '@api/helpers';
import { builders } from '@music/builders';
import { SpotifyTrack, SpotifyTrackSimple } from '@spotify/types/tracks.types';

const trackAlbum = (album: SpotifyTrack['album']) => {
    return {
        albumType: titleCase(album.album_type),
        artists: album.artists.map((artist) => builders.idAndName(artist)),
        id: album.id,
        images: builders.images(album.images),
        name: album.name,
        releaseDate: {
            display: new Date(album.release_date).toDateString(),
            exact: album.release_date,
        },
        releaseDatePrecision: album.release_date_precision,
        totalTracks: album.total_tracks,
    };
};

const track = {
    full: (track: SpotifyTrack) => ({
        album: trackAlbum(track.album),
        artists: track.artists.map((artist) => builders.idAndName(artist)),
        durationMs: track.duration_ms,
        explicit: track.explicit,
        id: track.id,
        name: track.name,
        popularity: track.popularity,
        previewUrl: track.preview_url ?? undefined,
    }),
    simple: (track: SpotifyTrackSimple) => ({
        artists: track.artists.map((artist) => builders.idAndName(artist)),
        durationMs: track.duration_ms,
        explicit: track.explicit,
        id: track.id,
        name: track.name,
        popularity: 'popularity' in track ? track.popularity : undefined,
    }),
};

const tracks = {
    full: (tracks: SpotifyTrack[]) =>
        tracks
            .filter((track) => !track.is_local)
            .map((trackObj) => track.full(trackObj)),
    simple: (tracks: SpotifyTrackSimple[]) =>
        tracks
            .filter((track) => !track.is_local)
            .map((trackObj) => track.simple(trackObj)),
};

export { track, tracks };
