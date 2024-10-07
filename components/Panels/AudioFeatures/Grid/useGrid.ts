import { builders } from 'builders';
import { SpotifyAudioFeatures } from 'spotify/types/audio.types';

export const useGrid = (audio_features: SpotifyAudioFeatures[]) => {
    return builders.audio.features.multiple(audio_features);
};
