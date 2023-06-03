import axios from 'axios';
import {
    SpotifyAudioFeatures,
    SpotifyAudioFeaturesList,
} from '@spotify/types/audiofeatures.types';

const spotifyEndpoint = 'https://api.spotify.com/v1/audio-features';

const id = async (trackId: string, accessToken: string) => {
    const audioFeatures = await axios.get<SpotifyAudioFeatures>(
        spotifyEndpoint + '/' + trackId,
        {
            headers: {
                Authorization: accessToken,
            },
        }
    );
    return audioFeatures.data;
};

const ids = async (trackIds: string[], accessToken: string) => {
    const audioFeatures = await axios.get<SpotifyAudioFeaturesList>(
        spotifyEndpoint,
        {
            headers: {
                Authorization: accessToken,
            },
            params: {
                ids: trackIds.join(','),
            },
        }
    );
    return audioFeatures.data.audio_features;
};

const audioFeatures = { id, ids };

export { audioFeatures };
