import { spotify } from '@spotify/_api';
import { buildAudioFeatures } from './audiofeatures.builders';

const id = async (trackId: string, accessToken: string) => {
    const audioFeatures = await spotify.audioFeatures.id(trackId, accessToken);
    return buildAudioFeatures(audioFeatures);
};

const audioFeatures = { id };

export { audioFeatures };
