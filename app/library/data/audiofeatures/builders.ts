import { SpotifyAudioFeatures } from '@spotify/audiofeatures/types';
import { AudioFeatures } from './types';

const mapKey = (key: number): AudioFeatures['key'] => {
    switch (key) {
    case 0:
        return 'C';
    case 1:
        return 'C#';
    case 2:
        return 'D'
    case 3:
        return 'D#';
    case 4:
        return 'E';
    case 5:
        return 'F';
    case 6:
        return 'F#';
    case 7:
        return 'G';
    case 8:
        return 'G#'
    case 9:
        return 'A';
    case 10:
        return 'A#';
    case 11:
        return 'B'
    default:
        return 'C';
    }
}

export const buildSpotifyAudioFeatures = (audioFeatures: SpotifyAudioFeatures): AudioFeatures => {
    const {acousticness, danceability, energy, id, instrumentalness, liveness, loudness, speechiness, tempo, time_signature, valence} = audioFeatures;

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
        valence
    }
}