import { spotify } from '@spotify/_api';
import { buildAudioAnalysis } from './audioanalysis.builders';

const id = async (trackId: string, accessToken: string) => {
    const audioAnalysis = await spotify.audioAnalysis.id(trackId, accessToken);
    return buildAudioAnalysis(audioAnalysis);
};

const audioAnalysis = { id };

export { audioAnalysis };
