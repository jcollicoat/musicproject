import {
    AudioAnalysis,
    MusicalKeys,
    MusicalModes,
    AudioFeatures,
    Track,
    RecentlyPlayed,
} from '@music/types/tracks.types';
import { SpotifyAudioAnalysis } from '@spotify/types/audioanalysis.types';
import { SpotifyAudioFeatures } from '@spotify/types/audiofeatures.types';
import { SpotifyRecentlyPlayed } from '@spotify/types/player.types';
import { SpotifyTrack } from '@spotify/types/tracks.types';

const buildAudioAnalysis = (
    audioAnalysis: SpotifyAudioAnalysis
): AudioAnalysis => ({
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
});

const buildAudioFeatures = (
    audioFeatures: SpotifyAudioFeatures
): AudioFeatures => ({
    acousticness: audioFeatures.acousticness,
    danceability: audioFeatures.danceability,
    energy: audioFeatures.energy,
    id: audioFeatures.id,
    instrumentalness: audioFeatures.instrumentalness,
    key: MusicalKeys[audioFeatures.key],
    liveness: audioFeatures.liveness,
    loudness: audioFeatures.loudness,
    mode: MusicalModes[audioFeatures.mode],
    speechiness: audioFeatures.speechiness,
    tempo: audioFeatures.tempo,
    timeSignature: audioFeatures.time_signature,
    valence: audioFeatures.valence,
});

const buildAlbum = (album: SpotifyTrack['album']): Track['album'] => ({
    albumType: album.album_type,
    artists: album.artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
    })),
    id: album.id,
    name: album.name,
    totalTracks: album.total_tracks,
});

const buildArtists = (artists: SpotifyTrack['artists']): Track['artists'] =>
    artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
    }));

const buildTrack = (
    track: SpotifyTrack,
    audioFeatures?: SpotifyAudioFeatures,
    audioAnalysis?: SpotifyAudioAnalysis,
    context?: Track['context']
): Track => ({
    album: buildAlbum(track.album),
    artists: buildArtists(track.artists),
    durationMs: track.duration_ms,
    explicit: track.explicit,
    id: track.id,
    name: track.name,
    popularity: track.popularity,
    previewUrl: track.preview_url,
    audioFeatures: audioFeatures && buildAudioFeatures(audioFeatures),
    audioAnalysis: audioAnalysis && buildAudioAnalysis(audioAnalysis),
    context: context,
});

const buildTracks = (
    tracks: SpotifyTrack[],
    audioFeaturesList?: SpotifyAudioFeatures[]
): Track[] =>
    tracks.map((track) => {
        const audioFeatures = audioFeaturesList?.find(
            (item) => item.id === track.id
        );
        return buildTrack(track, audioFeatures);
    });

const buildRecentlyPlayed = (
    recentlyPlayed: SpotifyRecentlyPlayed,
    audioFeaturesList?: SpotifyAudioFeatures[]
): RecentlyPlayed => ({
    next: recentlyPlayed.next,
    tracks: recentlyPlayed.items.map((rp) => {
        const audioFeatures = audioFeaturesList?.find(
            (item) => item.id === rp.track.id
        );
        const context: Track['context'] = {
            id: rp.context.href,
            type: rp.context.type,
            playedAt: rp.played_at,
        };
        return buildTrack(rp.track, audioFeatures, undefined, context);
    }),
});

const tracks = {
    buildAudioAnalysis,
    buildAudioFeatures,
    buildTrack,
    buildTracks,
    buildRecentlyPlayed,
};
export { tracks };
