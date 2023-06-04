import axios from 'axios';
import { spotifyApi } from '@spotify/endpoints';
import { SpotifyTrack, SpotifyTracks } from '@spotify/types/tracks.types';

const endpoint = `${spotifyApi}/tracks`;

const id = async (trackId: string, accessToken: string) => {
    const track = await axios.get<SpotifyTrack>(`${endpoint}/${trackId}`, {
        headers: {
            Authorization: accessToken,
        },
    });
    return track.data;
};

const ids = async (trackIds: string[], accessToken: string) => {
    const tracks = await axios.get<SpotifyTracks>(endpoint, {
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
