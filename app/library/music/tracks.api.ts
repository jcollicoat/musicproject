import { spotify } from '@spotify/_api';
import {
    buildAudioAnalysis,
    buildAudioFeatures,
    buildRecentlyPlayed,
    buildTrack,
} from './tracks.builders';

const audioAnalysis = async (trackId: string, accessToken: string) => {
    const audioAnalysis = await spotify.audioAnalysis.id(trackId, accessToken);
    return buildAudioAnalysis(audioAnalysis);
};

const audioFeatures = async (trackId: string, accessToken: string) => {
    const audioFeatures = await spotify.audioFeatures.id(trackId, accessToken);
    return buildAudioFeatures(audioFeatures);
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

    return buildTrack(track, audioFeatures, audioAnalysis);
};

const ids = async (trackIds: string[], accessToken: string) => {
    const tracks = await spotify.tracks.ids(trackIds, accessToken);
    return tracks.map((track) => buildTrack(track));
};

const recentlyPlayed = async (accessToken: string) => {
    const recentlyPlayed = await spotify.player.recentlyPlayed(accessToken);
    return buildRecentlyPlayed(recentlyPlayed);
};

const tracks = { audioAnalysis, audioFeatures, id, ids, recentlyPlayed };

export { tracks };
