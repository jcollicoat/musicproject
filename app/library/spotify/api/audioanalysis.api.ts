import axios from 'axios';
import { spotifyApi } from '@spotify/endpoints';
import { SpotifyAudioAnalysis } from '@spotify/types/audioanalysis.types';

const endpoint = `${spotifyApi}/audio-analysis`;

const id = async (trackId: string, accessToken: string) => {
    const audioAnalysis = await axios.get<SpotifyAudioAnalysis>(
        `${endpoint}/${trackId}`,
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
