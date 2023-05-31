import axios from 'axios';
import { buildSpotifyTrack } from '@data/tracks/builders';
import { Track } from '@data/tracks/types';
import { getSpotifyAudioAnalysis } from '@spotify/audioanalysis/api';
import { getSpotifyAudioFeatures } from '@spotify/audiofeatures/api';
import { SpotifyTrack } from '@spotify/tracks/types';

const spotifyEndpoint = 'https://api.spotify.com/v1/tracks/';

const getSpotifyTrack = async (
    trackId: string,
    accessToken: string
): Promise<SpotifyTrack> => {
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
): Promise<Track> => {
    const getTrack = getSpotifyTrack(trackId, accessToken);

    if (audioFeatures && audioAnalysis) {
        const getAudioFeatures = getSpotifyAudioFeatures(trackId, accessToken);
        const getAudioAnalysis = getSpotifyAudioAnalysis(trackId, accessToken);

        const [track, audioFeatures, audioAnalysis] = await Promise.allSettled([
            getTrack,
            getAudioFeatures,
            getAudioAnalysis,
        ]);

        if (track.status === 'rejected') {
            throw new Error(track.reason);
        }

        if (audioFeatures.status === 'rejected')
            console.warn(`Failed fetching audio features for track ${trackId}`);

        if (audioAnalysis.status === 'rejected')
            console.warn(`Failed fetching audio analysis for track ${trackId}`);

        return buildSpotifyTrack(
            track.value,
            audioFeatures.status === 'fulfilled'
                ? audioFeatures.value
                : undefined,
            audioAnalysis.status === 'fulfilled'
                ? audioAnalysis.value
                : undefined
        );
    }

    const track = await getTrack;

    return buildSpotifyTrack(track);
};

const tracks = { get: id };

export { tracks };
