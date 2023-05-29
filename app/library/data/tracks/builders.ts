import { buildSpotifyAudioFeatures } from '@data/audiofeatures/builders';
import { Track } from '@data/tracks/types';
import { SpotifyAudioFeatures } from '@spotify/audiofeatures/types';
import { SpotifyTrack } from '@spotify/tracks/types';

const buildAlbum = (album: SpotifyTrack['album']): Track['album'] => {
    return {
        albumType: album.album_type,
        artists: album.artists.map((artist) => ({
            id: artist.id,
            name: artist.name,
        })),
        id: album.id,
        name: album.name,
        totalTracks: album.total_tracks,
    };
};

const buildArtists = (artists: SpotifyTrack['artists']): Track['artists'] => {
    return artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
    }));
};

export const buildSpotifyTrack = (
    track: SpotifyTrack,
    audioFeatures?: SpotifyAudioFeatures
): Track => {
    const { duration_ms, explicit, id, name, popularity, preview_url } = track;

    return {
        album: buildAlbum(track.album),
        artists: buildArtists(track.artists),
        durationMs: duration_ms,
        explicit,
        id,
        name,
        popularity,
        previewUrl: preview_url,
        audioFeatures:
            audioFeatures && buildSpotifyAudioFeatures(audioFeatures),
    };
};
