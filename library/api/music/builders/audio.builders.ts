import { MusicalKeys, MusicalModes } from '@music/types';
import { SpotifyAudioFeatures } from '@spotify/types/audio.types';

const normalize = (features: number) => Math.floor(features * 100);

const audio = (features: SpotifyAudioFeatures) => {
    const built = {
        acousticness: normalize(features.acousticness),
        danceability: normalize(features.danceability),
        energy: normalize(features.energy),
        instrumentalness: normalize(features.instrumentalness),
        liveness: normalize(features.liveness),
        loudness: normalize((features.loudness * -1) / 60), // loudness ranges from 0 - -60
        speechiness: normalize(features.speechiness),
        valence: normalize(features.valence),
        mode: `${MusicalModes[features.mode]} Key`,
        key: MusicalKeys[features.key],
        tempo: Math.floor(features.tempo),
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

export { audio };
