import { titleCase } from '@api/helpers';
import { builders } from '@music/builders';
import { Track } from '@music/types/tracks.types';
import { SpotifyTrack } from '@spotify/types/tracks.types';

const albumArtist = (artist: SpotifyTrack['album']['artists'][0]) => {
    return {
        id: artist.id,
        name: artist.name,
    };
};

const albumArtists = (artists: SpotifyTrack['album']['artists']) =>
    artists.map((artist) => albumArtist(artist));

const trackAlbum = (album: SpotifyTrack['album']) => {
    return {
        albumType: titleCase(album.album_type),
        artists: albumArtists(album.artists),
        id: album.id,
        images: builders.images(album.images),
        name: album.name,
        releaseDate: album.release_date,
        releaseDatePrecision: album.release_date_precision,
        totalTracks: album.total_tracks,
    };
};

const trackArtist = (artist: SpotifyTrack['artists'][0]) => {
    return {
        id: artist.id,
        name: artist.name,
    };
};

const trackArtists = (artists: SpotifyTrack['artists']) =>
    artists.map((artist) => trackArtist(artist));

const trackId = (track: SpotifyTrack): Track => ({
    album: trackAlbum(track.album),
    artists: trackArtists(track.artists),
    durationMs: track.duration_ms,
    explicit: track.explicit,
    id: track.id,
    name: track.name,
    popularity: track.popularity,
    previewUrl: track.preview_url ?? undefined,
});

const trackIds = (tracks: SpotifyTrack[]): Track[] =>
    tracks.map((track) => trackId(track));

export { trackId, trackIds };
