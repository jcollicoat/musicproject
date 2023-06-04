import { api } from './requests';
import { SpotifyAlbum } from './types/albums.types';
import { SpotifyArtist } from './types/artists.types';
import { SpotifyAudioAnalysis } from './types/audioanalysis.types';
import {
    SpotifyAudioFeatures,
    SpotifyAudioFeaturesList,
} from './types/audiofeatures.types';
import { SpotifyPlaylist } from './types/playlists.types';
import { SpotifySearch } from './types/search.types';
import { SpotifyTrack, SpotifyTracks } from './types/tracks.types';
import {
    SpotifyUser,
    SpotifyFollowedArtists,
    SpotifyRecentlyPlayed,
} from './types/user.types';

const albums = {
    get: async (albumId: string, accessToken: string) => {
        return await api.get<SpotifyAlbum>(`albums/${albumId}`, accessToken);
    },
};

const artists = {
    get: async (artistId: string, accessToken: string) => {
        return await api.get<SpotifyArtist>(`artists/${artistId}`, accessToken);
    },
};

const audioAnalysis = {
    get: async (trackId: string, accessToken: string) => {
        return await api.get<SpotifyAudioAnalysis>(
            `audio-analysis/${trackId}`,
            accessToken
        );
    },
};

const audioFeatures = {
    get: async (trackId: string, accessToken: string) => {
        return await api.get<SpotifyAudioFeatures>(
            `audio-features/${trackId}`,
            accessToken
        );
    },
    getList: async (trackIds: string[], accessToken: string) => {
        return await api.get<SpotifyAudioFeaturesList>(
            'audio-features',
            accessToken,
            {
                ids: trackIds.join(','),
            }
        );
    },
};

const playlists = {
    get: async (playlistId: string, accessToken: string) => {
        return await api.get<SpotifyPlaylist>(
            `playlists/${playlistId}`,
            accessToken
        );
    },
};

const search = async (query: string, types: string[], accessToken: string) => {
    return await api.get<SpotifySearch>('search', accessToken, {
        q: query,
        type: types.join(','),
    });
};

const tracks = {
    get: async (trackId: string, accessToken: string) => {
        return await api.get<SpotifyTrack>(`tracks/${trackId}`, accessToken);
    },
    getList: async (trackIds: string[], accessToken: string) => {
        return await api.get<SpotifyTracks>('tracks', accessToken, {
            ids: trackIds.join(','),
        });
    },
};

const user = {
    get: async (accessToken: string) => {
        return await api.get<SpotifyUser>('me', accessToken);
    },
    artists: {
        followed: async (accessToken: string) => {
            return await api.get<SpotifyFollowedArtists>(
                'me/following',
                accessToken,
                {
                    type: 'artist',
                }
            );
        },
    },
    tracks: {
        isSaved: async (trackIds: string[], accessToken: string) => {
            return await api.get<boolean[]>('me/tracks/contains', accessToken, {
                ids: trackIds.join(','),
            });
        },
        recent: async (accessToken: string) => {
            return await api.get<SpotifyRecentlyPlayed>(
                'me/player/recently-played',
                accessToken
            );
        },
    },
};

const spotify = {
    albums,
    artists,
    audioAnalysis,
    audioFeatures,
    playlists,
    search,
    tracks,
    user,
};
export { spotify };
