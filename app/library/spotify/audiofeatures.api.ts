import axios from 'axios';
import { SpotifyAudioFeatures } from '@spotify/audiofeatures.types';

const spotifyEndpoint = 'https://api.spotify.com/v1/audio-features/';

const id = async (trackId: string, accessToken: string) => {
    const audioFeatures = await axios.get<SpotifyAudioFeatures>(
        spotifyEndpoint + trackId,
        {
            headers: {
                Authorization: accessToken,
            },
        }
    );
    return audioFeatures.data;
};

const audioFeatures = { id };

export { audioFeatures };
