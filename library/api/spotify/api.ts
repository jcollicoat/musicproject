import { api } from './requests';
import { SpotifyAlbum } from './types/albums.types';
import { SpotifyArtist } from './types/artists.types';
import {
    SpotifyPlaybackState,
    SpotifyRecentlyPlayed,
} from './types/player.types';
import { SpotifyPlaylist } from './types/playlists.types';
import { SpotifySearch, SpotifySearchGroup } from './types/search.types';
import {
    SpotifyAudioAnalysis,
    SpotifyAudioFeatures,
    SpotifyTrack,
} from './types/tracks.types';
import { SpotifyUser, SpotifyFollowedArtists } from './types/user.types';

const albums = {
    get: async (albumId: string) => {
        return await api.get<SpotifyAlbum>(`albums/${albumId}`);
    },
};

const artists = {
    get: async (artistId: string) => {
        return await api.get<SpotifyArtist>(`artists/${artistId}`);
    },
};

const audioAnalysis = {
    get: async (trackId: string) => {
        return await api.get<SpotifyAudioAnalysis>(`audio-analysis/${trackId}`);
    },
};

const audioFeatures = {
    get: async (trackId: string) => {
        return await api.get<SpotifyAudioFeatures>(`audio-features/${trackId}`);
    },
    getList: async (trackIds: string[]) => {
        return await api.get<{ audio_features: SpotifyAudioFeatures[] }>(
            'audio-features',
            {
                ids: trackIds.join(','),
            },
        );
    },
};

const playlists = {
    get: async (playlistId: string) => {
        return await api.get<SpotifyPlaylist>(`playlists/${playlistId}`);
    },
};

const search = async (query: string, types?: string[]) => {
    return await api.get<SpotifySearch>('search', {
        q: query,
        type: types?.join(',') ?? 'album,artist,track,playlist',
    });
};

const tracks = {
    get: async (trackId: string) => {
        return await api.get<SpotifyTrack>(`tracks/${trackId}`);
    },
    getList: async (trackIds: string[]) => {
        return await api.get<{ tracks: SpotifyTrack[] }>('tracks', {
            ids: trackIds.join(','),
        });
    },
};

const user = {
    get: async () => {
        return await api.get<SpotifyUser>('me');
    },
    artists: {
        followed: async () => {
            return await api.get<SpotifyFollowedArtists>('me/following', {
                type: 'artist',
            });
        },
    },
    tracks: {
        isSaved: async (trackIds: string[]) => {
            return await api.get<boolean[]>('me/tracks/contains', {
                ids: trackIds.join(','),
            });
        },
        liked: async () => {
            return await api.get<
                SpotifySearchGroup<{ added_at: string; track: SpotifyTrack }>
            >('me/tracks');
        },
        player: async () => {
            return await api.get<SpotifyPlaybackState>('me/player');
        },
        recent: async () => {
            return await api.get<SpotifyRecentlyPlayed>(
                'me/player/recently-played',
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
