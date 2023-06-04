import { api } from '@spotify/requests';
import {
    SpotifyAudioFeatures,
    SpotifyAudioFeaturesList,
} from '@spotify/types/audiofeatures.types';

const id = async (trackId: string, accessToken: string) =>
    await api.get<SpotifyAudioFeatures>(
        `audio-features/${trackId}`,
        accessToken
    );

const ids = async (trackIds: string[], accessToken: string) =>
    await api.get<SpotifyAudioFeaturesList>('audio-features', accessToken, {
        ids: trackIds.join(','),
    });

const audioFeatures = { id, ids };
export { audioFeatures };
