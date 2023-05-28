import { Track } from "@data/tracks/types";
import { SpotifyTrack } from "@spotify/tracks/types";

const buildAlbumArtists = (
    artists: SpotifyTrack["album"]["artists"]
): Track["album"]["artists"] => {
    return artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
    }));
};

const buildAlbum = (album: SpotifyTrack["album"]): Track["album"] => {
    return {
        albumType: album.album_type,
        artists: buildAlbumArtists(album.artists),
        id: album.id,
        name: album.name,
        totalTracks: album.total_tracks,
    };
};

const buildArtists = (artists: SpotifyTrack["artists"]): Track["artists"] => {
    return artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
    }));
};

export const buildSpotifyTrack = (track: SpotifyTrack): Track => {
    const { duration_ms, explicit, id, name, popularity, preview_url } = track;

    return {
        album: buildAlbum(track.album),
        artists: buildArtists(track.artists),
        durationMs: duration_ms,
        explicit: explicit,
        id: id,
        name: name,
        popularity: popularity,
        previewUrl: preview_url,
    };
};
