import axios from 'axios';
import { SpotifyAudioFeatures } from '@spotify/audiofeatures/types';

const spotifyEndpoint = 'https://api.spotify.com/v1/audio-features/';

export const getSpotifyAudioFeatures = async (
    trackId: string,
    accessToken: string
): Promise<SpotifyAudioFeatures> => {
    const audioFeatures = await axios.get<SpotifyAudioFeatures>(
        spotifyEndpoint + trackId,
        {
            headers: {
                Authorization: accessToken,
            },
        }
    );
    return audioFeatures.data;
};
