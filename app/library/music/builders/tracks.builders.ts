import { getUrlSlug } from '@api/helpers';
import { builders } from '@music/builders';
import {
    AudioAnalysis,
    AudioFeatures,
    Track,
    RecentlyPlayed,
    TrackDto,
} from '@music/types/tracks.types';
import { SpotifyAudioAnalysis } from '@spotify/types/audioanalysis.types';
import { SpotifyAudioFeatures } from '@spotify/types/audiofeatures.types';
import { SpotifyRecentlyPlayed } from '@spotify/types/user.types';

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
        previewUrl: track.preview_url,
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

const buildRecentlyPlayed = (
    recentlyPlayed: SpotifyRecentlyPlayed,
    isSavedList: boolean[],
    audioFeaturesList?: SpotifyAudioFeatures[]
): RecentlyPlayed => ({
    ...recentlyPlayed,
    items: recentlyPlayed.items.map((rp, index) => {
        const isSaved = isSavedList[index];
        const audioFeatures = audioFeaturesList?.find(
            (item) => item.id === rp.track.id
        );
        const context: Track['context'] = {
            id: getUrlSlug(rp.context.href),
            type: rp.context.type,
            playedAt: rp.played_at,
        };
        return buildTrack({ track: rp.track, isSaved, audioFeatures, context });
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
