import { getUrlSlug } from '@api/helpers';
import { builders } from '@music/builders';
import {
    AudioAnalysis,
    AudioFeatures,
    Track,
    RecentlyPlayed,
    TrackDto,
    NowPlaying,
} from '@music/types/tracks.types';
import {
    SpotifyPlaybackState,
    SpotifyRecentlyPlayed,
} from '@spotify/types/player.types';
import {
    SpotifyAudioAnalysis,
    SpotifyAudioFeatures,
} from '@spotify/types/tracks.types';

enum MusicalKeys {
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
}

enum MusicalModes {
    'Minor',
    'Major',
}

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

const buildTrack = (trackDto: TrackDto): Track => {
    const { track, isSaved, audioFeatures, audioAnalysis, context } = trackDto;
    return {
        // Simple
        artists: track.artists.map((artist) =>
            builders.artists.buildArtist(artist)
        ),
        durationMs: track.duration_ms,
        explicit: track.explicit,
        id: track.id,
        name: track.name,
        // Simple Nullable
        previewUrl: track.preview_url ?? undefined,
        // Full
        album: track.album && builders.albums.buildAlbum(track.album),
        popularity: track.popularity,
        saved: isSaved,
        audioFeatures: audioFeatures && buildAudioFeatures(audioFeatures),
        audioAnalysis: audioAnalysis && buildAudioAnalysis(audioAnalysis),
        context: context,
    };
};

const buildTracks = (trackDtos: TrackDto[]): Track[] =>
    trackDtos.map((trackDto) => {
        return buildTrack(trackDto);
    });

const buildNowPlaying = (nowPlaying: SpotifyPlaybackState): NowPlaying => ({
    device: {
        isActive: nowPlaying.device.is_active,
        isPrivate: nowPlaying.device.is_private_session,
        isRestricted: nowPlaying.device.is_restricted,
        name: nowPlaying.device.name,
        type: nowPlaying.device.type,
    },
    repeat: nowPlaying.repeat_state === 'off' ? false : nowPlaying.repeat_state,
    shuffle: nowPlaying.shuffle_state,
    context: {
        id: getUrlSlug(nowPlaying.context?.href) ?? undefined,
        type: nowPlaying.context?.type ?? undefined,
        playedAt: new Date(
            nowPlaying.timestamp - (nowPlaying.progress_ms ?? 0)
        ).toISOString(),
    },
    progressMs: nowPlaying.progress_ms ?? 0,
    isPlaying: nowPlaying.is_playing,
    track:
        nowPlaying.item !== null
            ? buildTrack({ track: nowPlaying.item })
            : undefined,
});

const buildRecentlyPlayed = (
    recentlyPlayed: SpotifyRecentlyPlayed,
    isSavedList: boolean[],
    audioFeaturesList?: SpotifyAudioFeatures[]
): RecentlyPlayed => ({
    items: recentlyPlayed.items.map((rp, index) => {
        const isSaved = isSavedList[index];
        const audioFeatures = audioFeaturesList?.find(
            (item) => item.id === rp.track.id
        );
        const context: Track['context'] = {
            id: getUrlSlug(rp.context?.href) ?? undefined,
            type: rp.context?.type ?? undefined,
            playedAt: rp.played_at,
        };
        return buildTrack({ track: rp.track, isSaved, audioFeatures, context });
    }),
    limit: recentlyPlayed.limit,
    next: recentlyPlayed.next ?? undefined,
    previous: recentlyPlayed.cursors.before ?? undefined,
});

const tracks = {
    buildAudioAnalysis,
    buildAudioFeatures,
    buildTrack,
    buildTracks,
    buildNowPlaying,
    buildRecentlyPlayed,
};
export { tracks };
