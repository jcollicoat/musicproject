import { SpotifyAudioFeatures } from './types/audio.types';

const audio: { features: SpotifyAudioFeatures } = {
    features: {
        acousticness: 0,
        analysis_url: '',
        danceability: 0,
        duration_ms: 0,
        energy: 0,
        id: '',
        instrumentalness: 0,
        key: 12,
        liveness: 0,
        loudness: 0,
        mode: 2,
        speechiness: 0,
        tempo: 0,
        time_signature: 0,
        track_href: '',
        type: '',
        uri: '',
        valence: 0,
    },
};

export const fallbacks = { audio };
