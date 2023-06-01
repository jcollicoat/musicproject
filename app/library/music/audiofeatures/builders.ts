import { mapKey } from '@/library/music/helpers';
import { SpotifyAudioFeatures } from '@spotify/audiofeatures/types';
import { AudioFeatures } from './types';

export const buildSpotifyAudioFeatures = (
    audioFeatures: SpotifyAudioFeatures
): AudioFeatures => {
    const {
        acousticness,
        danceability,
        energy,
        id,
        instrumentalness,
        liveness,
        loudness,
        speechiness,
        tempo,
        time_signature,
        valence,
    } = audioFeatures;

    return {
        acousticness,
        danceability,
        energy,
        id,
        instrumentalness,
        key: mapKey(audioFeatures.key),
        liveness,
        loudness,
        mode: audioFeatures.mode === 0 ? 'Minor' : 'Major',
        speechiness,
        tempo,
        timeSignature: time_signature,
        valence,
    };
};
