import { AudioAnalysis, RecentlyPlayed, Track } from '@music/tracks.types';
import { SpotifyAudioAnalysis } from '@spotify/audioanalysis.types';
import { SpotifyAudioFeatures } from '@spotify/audiofeatures.types';
import { SpotifyRecentlyPlayed } from '@spotify/player.types';
import { SpotifyTrack } from '@spotify/tracks.types';
import { buildAudioFeatures } from './audiofeatures.builders';
import { mapKey } from './helpers';

export const buildAudioAnalysis = (
    audioAnalysis: SpotifyAudioAnalysis
): AudioAnalysis => {
    return {
        bars: audioAnalysis.bars.map((bar) => ({
            duration: bar.duration,
            start: bar.start,
        })),
        beats: audioAnalysis.beats.map((beat) => ({
            duration: beat.duration,
            start: beat.start,
        })),
        sections: audioAnalysis.sections.map((section) => ({
            duration: section.duration,
            start: section.start,
            key: mapKey(section.key),
            loudness: section.loudness,
            mode: section.mode === 0 ? 'Minor' : 'Major',
            tempo: section.tempo,
            timeSignature: section.time_signature,
        })),
        endOfFadeIn: audioAnalysis.track.end_of_fade_in,
        startOfFadeOut: audioAnalysis.track.start_of_fade_out,
    };
};

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

export const buildTrack = (
    track: SpotifyTrack,
    audioFeatures?: SpotifyAudioFeatures,
    audioAnalysis?: SpotifyAudioAnalysis
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
        audioFeatures: audioFeatures && buildAudioFeatures(audioFeatures),
        audioAnalysis: audioAnalysis && buildAudioAnalysis(audioAnalysis),
    };
};

export const buildRecentlyPlayed = (
    recentlyPlayed: SpotifyRecentlyPlayed
): RecentlyPlayed => {
    return {
        next: recentlyPlayed.next,
        tracks: recentlyPlayed.items.map((item) => buildTrack(item.track)),
    };
};
