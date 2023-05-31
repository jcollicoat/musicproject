import axios from 'axios';
import { SpotifyAudioAnalysis } from '@spotify/audioanalysis/types';

const spotifyEndpoint = 'https://api.spotify.com/v1/audio-analysis/';

export const getSpotifyAudioAnalysis = async (
    trackId: string,
    accessToken: string,
    optional?: boolean
) => {
    if (optional) {
        try {
            const audioAnalysis = await axios.get<SpotifyAudioAnalysis>(
                spotifyEndpoint + trackId,
                {
                    headers: {
                        Authorization: accessToken,
                    },
                }
            );
            return audioAnalysis.data;
        } catch (error) {
            console.warn(error);
        }
    } else {
        const audioAnalysis = await axios.get<SpotifyAudioAnalysis>(
            spotifyEndpoint + trackId,
            {
                headers: {
                    Authorization: accessToken,
                },
            }
        );
        return audioAnalysis.data;
    }
};
