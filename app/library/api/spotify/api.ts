import axios from 'axios';
import { SpotifyTrack } from '@spotify/tracks/types';

const spotifyEndpoint = 'https://api.spotify.com/v1/tracks/';

export const getSpotifyTrack = async (
    trackId: string,
    accessToken: string
): Promise<SpotifyTrack> => {
    const track = await axios.get<SpotifyTrack>(spotifyEndpoint + trackId, {
        headers: {
            Authorization: accessToken,
        },
    });
    return track.data;
};
