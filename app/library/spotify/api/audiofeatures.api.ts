import axios from 'axios';
import { spotifyApi } from '@spotify/endpoints';
import {
    SpotifyAudioFeatures,
    SpotifyAudioFeaturesList,
} from '@spotify/types/audiofeatures.types';

const endpoint = `${spotifyApi}/audio-features`;

const id = async (trackId: string, accessToken: string) => {
    const audioFeatures = await axios.get<SpotifyAudioFeatures>(
        `${endpoint}/${trackId}`,
        {
            headers: {
                Authorization: accessToken,
            },
        }
    );
    return audioFeatures.data;
};

const ids = async (trackIds: string[], accessToken: string) => {
    const audioFeatures = await axios.get<SpotifyAudioFeaturesList>(endpoint, {
        headers: {
            Authorization: accessToken,
        },
        params: {
            ids: trackIds.join(','),
        },
    });
    return audioFeatures.data.audio_features;
};

const audioFeatures = { id, ids };

export { audioFeatures };
