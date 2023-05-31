import axios from 'axios';
import { buildSpotifyTrack } from '@data/tracks/builders';
import { getSpotifyAudioAnalysis } from '@spotify/audioanalysis/api';
import { getSpotifyAudioFeatures } from '@spotify/audiofeatures/api';
import { SpotifyTrack } from '@spotify/tracks/types';

const spotifyEndpoint = 'https://api.spotify.com/v1/tracks/';

const isRejected = (
    input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => input.status === 'rejected';

// const isFulfilled = <T>(
//     input: PromiseSettledResult<T>
// ): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';

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
    audioFeatures: boolean,
    audioAnalysis: boolean
) => {
    if (audioFeatures && audioAnalysis) {
        try {
            const [track, audioFeatures, audioAnalysis] =
                await Promise.allSettled([
                    await getSpotifyTrack(trackId, accessToken),
                    await getSpotifyAudioFeatures(trackId, accessToken),
                    await getSpotifyAudioAnalysis(trackId, accessToken),
                ]);

            if (isRejected(track)) {
                throw new Error(`Error fetching track: ${trackId}`, {
                    cause: track.reason,
                });
            }

            if (isRejected(audioFeatures))
                console.warn(
                    `Failed fetching audio features for track ${trackId}`
                );

            if (isRejected(audioAnalysis))
                console.warn(
                    `Failed fetching audio analysis for track ${trackId}`
                );

            return buildSpotifyTrack(
                track.value,
                audioFeatures.status === 'fulfilled'
                    ? audioFeatures.value
                    : undefined,
                audioAnalysis.status === 'fulfilled'
                    ? audioAnalysis.value
                    : undefined
            );
        } catch (error) {
            console.warn(error);
        }
    }

    if (audioFeatures) {
        try {
            const [track, audioFeatures] = await Promise.allSettled([
                await getSpotifyTrack(trackId, accessToken),
                await getSpotifyAudioFeatures(trackId, accessToken),
            ]);

            if (isRejected(track)) {
                throw new Error(`Error fetching track: ${trackId}`, {
                    cause: track.reason,
                });
            }

            if (isRejected(audioFeatures))
                console.warn(
                    `Failed fetching audio features for track ${trackId}`
                );

            return buildSpotifyTrack(
                track.value,
                audioFeatures.status === 'fulfilled'
                    ? audioFeatures.value
                    : undefined
            );
        } catch (error) {
            console.warn(error);
        }
    }

    if (audioAnalysis) {
        try {
            const [track, audioAnalysis] = await Promise.allSettled([
                await getSpotifyTrack(trackId, accessToken),
                await getSpotifyAudioAnalysis(trackId, accessToken),
            ]);

            if (isRejected(track)) {
                throw new Error(`Error fetching track: ${trackId}`, {
                    cause: track.reason,
                });
            }

            if (isRejected(audioAnalysis))
                console.warn(
                    `Failed fetching audio features for track ${trackId}`
                );

            return buildSpotifyTrack(
                track.value,
                undefined,
                audioAnalysis.status === 'fulfilled'
                    ? audioAnalysis.value
                    : undefined
            );
        } catch (error) {
            console.warn(error);
        }
    }

    const track = await getSpotifyTrack(trackId, accessToken);

    return buildSpotifyTrack(track);
};

const tracks = { get: id };

export { tracks };
