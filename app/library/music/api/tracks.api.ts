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

    let audioFeatures;
    if (hasAudioFeatures)
        audioFeatures = await spotify.audioFeatures.id(trackId, accessToken);

    let audioAnalysis;
    if (hasAudioAnalysis)
        audioAnalysis = await spotify.audioAnalysis.id(trackId, accessToken);

    return builders.tracks.buildTrack(track, audioFeatures, audioAnalysis);
};

const ids = async (
    trackIds: string[],
    accessToken: string,
    hasAudioFeatures: boolean
) => {
    const tracks = await spotify.tracks.ids(trackIds, accessToken);

    let audioFeatures;
    if (hasAudioFeatures)
        audioFeatures = await spotify.audioFeatures.ids(trackIds, accessToken);

    return builders.tracks.buildTracks(tracks, audioFeatures);
};

const recentlyPlayed = async (
    accessToken: string,
    hasAudioFeatures: boolean
) => {
    const recentlyPlayed = await spotify.player.recentlyPlayed(accessToken);

    let audioFeatures;
    if (hasAudioFeatures)
        audioFeatures = await spotify.audioFeatures.ids(
            recentlyPlayed.items.map((item) => item.track.id),
            accessToken
        );

    return builders.tracks.buildRecentlyPlayed(recentlyPlayed, audioFeatures);
};

const tracks = { audioAnalysis, audioFeatures, id, ids, recentlyPlayed };

export { tracks };
