import axios from 'axios';
import { SpotifyAudioAnalysis } from '@spotify/types/audioanalysis.types';

const spotifyEndpoint = 'https://api.spotify.com/v1/audio-analysis/';

const id = async (trackId: string, accessToken: string) => {
    const audioAnalysis = await axios.get<SpotifyAudioAnalysis>(
        spotifyEndpoint + trackId,
        {
            headers: {
                Authorization: accessToken,
            },
        }
    );
    return audioAnalysis.data;
};

const audioAnalysis = { id };

export { audioAnalysis };
