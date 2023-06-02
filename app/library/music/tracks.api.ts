import { spotify } from '@spotify/_api';
import { getSpotifyAudioFeatures } from '@spotify/audiofeatures/api';
import { buildTrack } from './tracks.builders';

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
        audioFeatures = await getSpotifyAudioFeatures(
            trackId,
            accessToken,
            true
        );

    if (hasAudioAnalysis)
        audioAnalysis = await spotify.audioAnalysis.id(trackId, accessToken);

    return buildTrack(track, audioFeatures, audioAnalysis);
};

const tracks = { id };

export { tracks };
