import { builders } from '@music/builders';
import { spotify } from '@spotify/api';

const audioAnalysis = async (trackId: string, accessToken: string) => {
    const audioAnalysis = await spotify.audioAnalysis.get(trackId, accessToken);
    return builders.tracks.buildAudioAnalysis(audioAnalysis);
};

const audioFeatures = async (trackId: string, accessToken: string) => {
    const audioFeatures = await spotify.audioFeatures.get(trackId, accessToken);
    return builders.tracks.buildAudioFeatures(audioFeatures);
};

const id = async (
    trackId: string,
    accessToken: string,
    hasAudioFeatures: boolean,
    hasAudioAnalysis: boolean
) => {
    const track = await spotify.tracks.get(trackId, accessToken);
    const [isSaved] = await spotify.user.tracks.isSaved([trackId], accessToken);

    let audioFeatures;
    if (hasAudioFeatures)
        audioFeatures = await spotify.audioFeatures.get(trackId, accessToken);

    let audioAnalysis;
    if (hasAudioAnalysis)
        audioAnalysis = await spotify.audioAnalysis.get(trackId, accessToken);

    return builders.tracks.buildTrack(track, isSaved, {
        audioFeatures,
        audioAnalysis,
    });
};

const ids = async (
    trackIds: string[],
    accessToken: string,
    hasAudioFeatures: boolean
) => {
    const { tracks } = await spotify.tracks.getList(trackIds, accessToken);
    const isSavedList = await spotify.user.tracks.isSaved(
        trackIds,
        accessToken
    );

    let audioFeatures;
    if (hasAudioFeatures)
        audioFeatures = await spotify.audioFeatures.getList(
            trackIds,
            accessToken
        );

    return builders.tracks.buildTracks(
        tracks,
        isSavedList,
        audioFeatures?.audio_features
    );
};

const recentlyPlayed = async (
    accessToken: string,
    hasAudioFeatures: boolean
) => {
    const recentlyPlayed = await spotify.user.tracks.recent(accessToken);
    const trackIds = recentlyPlayed.items.map((item) => item.track.id);
    const isSavedList = await spotify.user.tracks.isSaved(
        trackIds,
        accessToken
    );

    let audioFeatures;
    if (hasAudioFeatures)
        audioFeatures = await spotify.audioFeatures.getList(
            trackIds,
            accessToken
        );

    return builders.tracks.buildRecentlyPlayed(
        recentlyPlayed,
        isSavedList,
        audioFeatures?.audio_features
    );
};

const tracks = { audioAnalysis, audioFeatures, id, ids, recentlyPlayed };

export { tracks };
