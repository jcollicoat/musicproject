import { api } from '@spotify/requests';
import { SpotifyAudioAnalysis } from '@spotify/types/audioanalysis.types';

const id = async (trackId: string, accessToken: string) =>
    await api.get<SpotifyAudioAnalysis>(
        `audio-analysis/${trackId}`,
        accessToken
    );

const audioAnalysis = { id };
export { audioAnalysis };
