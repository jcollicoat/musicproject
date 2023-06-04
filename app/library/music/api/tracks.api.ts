import { builders } from '@music/builders';
import { spotify } from '@spotify/api';

const audioAnalysis = async (trackId: string, accessToken: string) => {
    const audioAnalysis = await spotify.audioAnalysis.id(trackId, accessToken);
    return builders.tracks.buildAudioAnalysis(audioAnalysis);
};

const audioFeatures = async (trackId: string, accessToken: string) => {
    const audioFeatures = await spotify.audioFeatures.id(trackId, accessToken);
    return builders.tracks.buildAudioFeatures(audioFeatures);
};

const id = async (
    trackId: string,
    accessToken: string,
    hasAudioFeatures: boolean,
    hasAudioAnalysis: boolean
) => {
    const track = await spotify.tracks.id(trackId, accessToken);
    const [isSaved] = await spotify.user.tracks.checkSaved(
        [trackId],
        accessToken
    );

    let audioFeatures;
    if (hasAudioFeatures)
        audioFeatures = await spotify.audioFeatures.id(trackId, accessToken);

    let audioAnalysis;
    if (hasAudioAnalysis)
        audioAnalysis = await spotify.audioAnalysis.id(trackId, accessToken);

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
    const tracks = await spotify.tracks.ids(trackIds, accessToken);
    const isSavedList = await spotify.user.tracks.checkSaved(
        trackIds,
        accessToken
    );

    let audioFeatures;
    if (hasAudioFeatures)
        audioFeatures = await spotify.audioFeatures.ids(trackIds, accessToken);

    return builders.tracks.buildTracks(tracks, isSavedList, audioFeatures);
};

const recentlyPlayed = async (
    accessToken: string,
    hasAudioFeatures: boolean
) => {
    const recentlyPlayed = await spotify.user.tracks.recentlyPlayed(
        accessToken
    );
    const trackIds = recentlyPlayed.items.map((item) => item.track.id);
    const isSavedList = await spotify.user.tracks.checkSaved(
        trackIds,
        accessToken
    );

    let audioFeatures;
    if (hasAudioFeatures)
        audioFeatures = await spotify.audioFeatures.ids(trackIds, accessToken);

    return builders.tracks.buildRecentlyPlayed(
        recentlyPlayed,
        isSavedList,
        audioFeatures
    );
};

const tracks = { audioAnalysis, audioFeatures, id, ids, recentlyPlayed };

export { tracks };
