import {
    AudioAnalysis,
    AudioFeatures,
    Track,
    RecentlyPlayed,
    MusicalKeys,
    MusicalModes,
} from '@music/types/tracks.types';
import { SpotifyAudioAnalysis } from '@spotify/audioanalysis.types';
import { SpotifyAudioFeatures } from '@spotify/audiofeatures.types';
import { SpotifyRecentlyPlayed } from '@spotify/player.types';
import { SpotifyTrack } from '@spotify/tracks.types';

const buildAudioAnalysis = (
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
            key: MusicalKeys[section.key],
            loudness: section.loudness,
            mode: MusicalModes[section.mode],
            tempo: section.tempo,
            timeSignature: section.time_signature,
        })),
        endOfFadeIn: audioAnalysis.track.end_of_fade_in,
        startOfFadeOut: audioAnalysis.track.start_of_fade_out,
    };
};

const buildAudioFeatures = (
    audioFeatures: SpotifyAudioFeatures
): AudioFeatures => {
    const {
        acousticness,
        danceability,
        energy,
        id,
        instrumentalness,
        liveness,
        loudness,
        speechiness,
        tempo,
        time_signature,
        valence,
    } = audioFeatures;

    return {
        acousticness,
        danceability,
        energy,
        id,
        instrumentalness,
        key: MusicalKeys[audioFeatures.key],
        liveness,
        loudness,
        mode: MusicalModes[audioFeatures.mode],
        speechiness,
        tempo,
        timeSignature: time_signature,
        valence,
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

const buildTrack = (
    track: SpotifyTrack,
    audioAnalysis?: SpotifyAudioAnalysis,
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
        audioAnalysis: audioAnalysis && buildAudioAnalysis(audioAnalysis),
        audioFeatures: audioFeatures && buildAudioFeatures(audioFeatures),
    };
};

const buildTracks = (
    tracks: SpotifyTrack[],
    audioFeaturesList?: SpotifyAudioFeatures[]
): Track[] => {
    return tracks.map((track) => {
        const audioFeatures = audioFeaturesList?.find(
            (item) => item.id === track.id
        );

        return buildTrack(track, undefined, audioFeatures);
    });
};

const buildRecentlyPlayed = (
    recentlyPlayed: SpotifyRecentlyPlayed
): RecentlyPlayed => {
    return {
        next: recentlyPlayed.next,
        tracks: recentlyPlayed.items.map((item) => buildTrack(item.track)),
    };
};

const tracks = {
    buildAudioAnalysis,
    buildAudioFeatures,
    buildTrack,
    buildTracks,
    buildRecentlyPlayed,
};
export { tracks };
