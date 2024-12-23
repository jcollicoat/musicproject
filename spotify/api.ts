import { fallbacks } from './fallbacks';
import { api } from './requests';
import { SpotifyAlbum, SpotifyAlbumSimple } from './types/albums.types';
import { SpotifyArtist } from './types/artists.types';
import {
    SpotifyAudioAnalysis,
    SpotifyAudioFeatures,
} from './types/audio.types';
import { SpotifyRecentlyPlayed } from './types/player.types';
import {
    SpotifyPlaylist,
    SpotifyPlaylistSimple,
} from './types/playlists.types';
import { SpotifySearchGroup } from './types/search.types';
import { SpotifyTrack } from './types/tracks.types';
import { SpotifyUser } from './types/user.types';

const albums = {
    id: async (albumId: string) => {
        return await api.get<SpotifyAlbum>(`albums/${albumId}`);
    },
};

const artists = {
    albums: async (artistId: string) => {
        return await api.get<SpotifySearchGroup<SpotifyAlbumSimple>>(
            `artists/${artistId}/albums`,
            {
                params: {
                    include_groups: 'album,single,compilation',
                    limit: '12',
                },
            },
        );
    },
    id: async (artistId: string) => {
        return await api.get<SpotifyArtist>(`artists/${artistId}`);
    },
    relatedArtists: async (artistId: string) => {
        return await api.get<{ artists: SpotifyArtist[] }>(
            `artists/${artistId}/related-artists`,
        );
    },
    topTracks: async (artistId: string, market: string) => {
        return await api.get<{ tracks: SpotifyTrack[] }>(
            `artists/${artistId}/top-tracks`,
            {
                params: { market: market },
            },
        );
    },
};

const audio = {
    analysis: {
        id: async (trackId: string | null) => {
            if (!trackId) return null;

            return await api.get<SpotifyAudioAnalysis>(
                `audio-analysis/${trackId}`,
            );
        },
    },
    features: {
        id: async (trackId: string) => {
            return await api.get<SpotifyAudioFeatures>(
                `audio-features/${trackId}`,
                {
                    returnOn404: fallbacks.audio.features,
                },
            );
        },
        ids: async (trackIds: string[]) => {
            const response = await api.get<{
                audio_features: (SpotifyAudioFeatures | null)[];
            }>('audio-features', {
                params: {
                    ids: trackIds.join(','),
                },
            });
            return {
                audio_features: response.audio_features.filter(
                    (feature) => feature !== null,
                ),
            };
        },
    },
};

const follow = {
    add: {
        artistIds: async (artistIds: string[]) => {
            return await api.action('me/following', 'PUT', {
                params: { type: 'artist', ids: artistIds.join(',') },
            });
        },
    },
    remove: {
        artistIds: async (artistIds: string[]) => {
            return await api.action('me/following', 'DELETE', {
                params: { type: 'artist', ids: artistIds.join(',') },
            });
        },
    },
};

const playlists = {
    id: async (playlistId: string) => {
        return await api.get<SpotifyPlaylist>(`playlists/${playlistId}`);
    },
    tracks: async (playlistId: string) => {
        return await api.get<SpotifySearchGroup<SpotifyPlaylist['tracks']>>(
            `playlists/${playlistId}/tracks`,
        );
    },
};

const tracks = {
    id: async (trackId: string) => {
        return await api.get<SpotifyTrack>(`tracks/${trackId}`);
    },
};

const user = {
    following: {
        artists: async (artistIds: string[]) => {
            return await api.get<boolean[]>('me/following/contains', {
                params: { type: 'artist', ids: artistIds.join(',') },
                doNotCache: true,
            });
        },
    },
    playlists: async () => {
        return await api.get<SpotifySearchGroup<SpotifyPlaylistSimple>>(
            'me/playlists',
            { params: { limit: '20' } },
        );
    },
    profile: async () => {
        return await api.get<SpotifyUser>('me');
    },
    recentTracks: async () => {
        return await api.get<SpotifyRecentlyPlayed>(
            'me/player/recently-played',
            {
                doNotCache: true,
            },
        );
    },
};

export const spotify = {
    albums,
    artists,
    audio,
    follow,
    playlists,
    tracks,
    user,
};
