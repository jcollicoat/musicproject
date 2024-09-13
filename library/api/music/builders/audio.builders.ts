import { MusicalKeys, MusicalModes } from '@music/types';
import { SpotifyAudioFeatures } from '@spotify/types/audio.types';

const normalize = (features: number) => Math.floor(features * 100);

const mean = (features: number[]) =>
    features.reduce((previous, current) => (previous += current)) /
    features.length;

const mode = (features: number[]) =>
    features.sort((a, b) => {
        return (
            features.filter((feature) => feature === a).length -
            features.filter((feature) => feature === b).length
        );
    })[features.length - 1];

const audio = (features: SpotifyAudioFeatures) => {
    const built = {
        acousticness: normalize(features.acousticness),
        danceability: normalize(features.danceability),
        energy: normalize(features.energy),
        instrumentalness: normalize(features.instrumentalness),
        liveness: normalize(features.liveness),
        speechiness: normalize(features.speechiness),
        valence: normalize(features.valence),
        mode: `${MusicalModes[features.mode]} Key`,
        tempo: Math.floor(features.tempo),
        loudness: `${Math.round(features.loudness)}dB`,
        key: MusicalKeys[features.key],
        timeSignature: features.time_signature,
    };

    const array = Object.keys(built).map((name) => {
        switch (name) {
            case 'acousticness':
            case 'danceability':
            case 'energy':
            case 'instrumentalness':
            case 'liveness':
            case 'loudness':
            case 'speechiness':
            case 'valence':
                return {
                    name: name,
                    value: built[name as keyof typeof built],
                    percent:
                        typeof built[name as keyof typeof built] === 'number'
                            ? built[name as keyof typeof built]
                            : undefined,
                };
            case 'timeSignature':
                return {
                    name: 'Time Signature',
                    value: built[name as keyof typeof built],
                };
        }
        return {
            name: name,
            value: built[name as keyof typeof built],
        };
    });

    const sorted = array.sort((a, b) => {
        if (a.percent === undefined || b.percent === undefined) return 0;
        if (a.percent > b.percent) {
            return -1;
        }
        if (a.percent < b.percent) {
            return 1;
        }
        return 0;
    });

    return {
        id: features.id,
        features: sorted,
    };
};

const audios = (features: SpotifyAudioFeatures[]) => {
    const combined: SpotifyAudioFeatures = {
        acousticness: mean(features.map((feature) => feature.acousticness)),
        danceability: mean(features.map((feature) => feature.danceability)),
        energy: mean(features.map((feature) => feature.energy)),
        instrumentalness: mean(
            features.map((feature) => feature.instrumentalness),
        ),
        liveness: mean(features.map((feature) => feature.liveness)),
        speechiness: mean(features.map((feature) => feature.speechiness)),
        valence: mean(features.map((feature) => feature.valence)),
        mode: mode(features.map((feature) => feature.mode)),
        tempo: mean(features.map((feature) => feature.tempo)),
        loudness: mean(features.map((feature) => feature.loudness)),
        key: mode(features.map((feature) => feature.key)),
        time_signature: mode(features.map((feature) => feature.time_signature)),
        // TS
        analysis_url: '',
        duration_ms: 0,
        id: '',
        track_href: '',
        type: '',
        uri: '',
    };

    return audio(combined);
};

export { audio, audios };
