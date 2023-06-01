import axios from 'axios';
import { SpotifyTrack } from '@spotify/tracks.types';

const spotifyEndpoint = 'https://api.spotify.com/v1/tracks/';

const id = async (trackId: string, accessToken: string) => {
    const track = await axios.get<SpotifyTrack>(spotifyEndpoint + trackId, {
        headers: {
            Authorization: accessToken,
        },
    });
    return track.data;
};

const tracks = { id };

export { tracks };
