import { builders } from '@music/builders';
import { spotify } from '@spotify/_api';

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
    let audioFeatures;
    let audioAnalysis;

    if (hasAudioFeatures)
        audioFeatures = await spotify.audioFeatures.id(trackId, accessToken);

    if (hasAudioAnalysis)
        audioAnalysis = await spotify.audioAnalysis.id(trackId, accessToken);

    return builders.tracks.buildTrack(track, audioFeatures, audioAnalysis);
};

const ids = async (trackIds: string[], accessToken: string) => {
    const tracks = await spotify.tracks.ids(trackIds, accessToken);
    return tracks.map((track) => builders.tracks.buildTrack(track));
};

const recentlyPlayed = async (accessToken: string) => {
    const recentlyPlayed = await spotify.player.recentlyPlayed(accessToken);
    return builders.tracks.buildRecentlyPlayed(recentlyPlayed);
};

const tracks = { audioAnalysis, audioFeatures, id, ids, recentlyPlayed };

export { tracks };
