import {
    AudioFeatures,
    MusicalKeys,
    MusicalModes,
} from '@music/types/audio.types';
import { SpotifyAudioFeatures } from '@spotify/types/audio.types';

const normalize = (audioFeature: number) => Math.floor(audioFeature * 100);

const audioFeatures = (audioFeatures: SpotifyAudioFeatures): AudioFeatures => ({
    acousticness: normalize(audioFeatures.acousticness),
    danceability: normalize(audioFeatures.danceability),
    energy: normalize(audioFeatures.energy),
    id: audioFeatures.id,
    instrumentalness: normalize(audioFeatures.instrumentalness),
    key: MusicalKeys[audioFeatures.key],
    liveness: normalize(audioFeatures.liveness),
    loudness: audioFeatures.loudness,
    mode: MusicalModes[audioFeatures.mode],
    speechiness: normalize(audioFeatures.speechiness),
    tempo: Math.floor(audioFeatures.tempo),
    timeSignature: audioFeatures.time_signature,
    valence: normalize(audioFeatures.valence),
});

export { audioFeatures };
