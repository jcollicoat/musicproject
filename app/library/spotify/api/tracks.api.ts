import axios from 'axios';
import { SpotifyTrack, SpotifyTracks } from '@spotify/types/tracks.types';

const spotifyEndpoint = 'https://api.spotify.com/v1/tracks';

const id = async (trackId: string, accessToken: string) => {
    const track = await axios.get<SpotifyTrack>(
        spotifyEndpoint + '/' + trackId,
        {
            headers: {
                Authorization: accessToken,
            },
        }
    );
    return track.data;
};

const ids = async (trackIds: string[], accessToken: string) => {
    const tracks = await axios.get<SpotifyTracks>(spotifyEndpoint, {
        headers: {
            Authorization: accessToken,
        },
        params: {
            ids: trackIds.join(','),
        },
    });
    return tracks.data.tracks;
};

const tracks = { id, ids };

export { tracks };
