import axios from 'axios';
import { buildSpotifyTrack } from '@data/tracks/builders';
import { getSpotifyAudioAnalysis } from '@spotify/audioanalysis/api';
import { getSpotifyAudioFeatures } from '@spotify/audiofeatures/api';
import { SpotifyTrack } from '@spotify/tracks/types';

const spotifyEndpoint = 'https://api.spotify.com/v1/tracks/';

const isFulfilled = <T>(
    input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';

const getSpotifyTrack = async (trackId: string, accessToken: string) => {
    const track = await axios.get<SpotifyTrack>(spotifyEndpoint + trackId, {
        headers: {
            Authorization: accessToken,
        },
    });
    return track.data;
};

const id = async (
    trackId: string,
    accessToken: string,
    hasAudioFeatures: boolean,
    hasAudioAnalysis: boolean
) => {
    const track = await getSpotifyTrack(trackId, accessToken);
    let audioFeatures;
    let audioAnalysis;

    if (hasAudioFeatures && hasAudioAnalysis) {
        const addons = await Promise.allSettled([
            await getSpotifyAudioFeatures(trackId, accessToken, true),
            await getSpotifyAudioAnalysis(trackId, accessToken, true),
        ]);

        if (isFulfilled(addons[0])) audioFeatures = addons[0].value;
        if (isFulfilled(addons[1])) audioAnalysis = addons[1].value;

        return buildSpotifyTrack(track, audioFeatures, audioAnalysis);
    }

    if (hasAudioFeatures)
        audioFeatures = await getSpotifyAudioFeatures(
            trackId,
            accessToken,
            true
        );

    if (hasAudioAnalysis)
        audioAnalysis = await getSpotifyAudioAnalysis(
            trackId,
            'accessToken',
            true
        );

    return buildSpotifyTrack(track, audioFeatures, audioAnalysis);
};

const tracks = { id };

export { tracks };
