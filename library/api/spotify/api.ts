import { api } from './requests';
import { SpotifyAlbum, SpotifyAlbumSimple } from './types/albums.types';
import { SpotifyArtist, SpotifyArtistTopTracks } from './types/artists.types';
import { SpotifyAudioFeatures } from './types/audio.types';
import { SpotifySearchGroup } from './types/search.types';
import { SpotifyTrack } from './types/tracks.types';
import { SpotifyUser } from './types/user.types';

const albumId = async (albumId: string) => {
    return await api.get<SpotifyAlbum>(`albums/${albumId}`);
};

const artist = {
    albums: async (artistId: string) => {
        return await api.get<SpotifySearchGroup<SpotifyAlbumSimple>>(
            `artists/${artistId}/albums`,
            {
                params: {
                    include_groups: 'album,single,compilation',
                    limit: '10',
                },
            },
        );
    },
    id: async (artistId: string) => {
        return await api.get<SpotifyArtist>(`artists/${artistId}`);
    },
    topTracks: async (artistId: string, market: string) => {
        return await api.get<SpotifyArtistTopTracks>(
            `artists/${artistId}/top-tracks`,
            {
                params: { market },
            },
        );
    },
};

const audioFeatures = async (trackId: string) => {
    return await api.get<SpotifyAudioFeatures>(`audio-features/${trackId}`);
};

const following = {
    check: {
        artistIds: async (artistIds: string[]) => {
            return await api.get<boolean[]>('me/following/contains', {
                params: { type: 'artist', ids: artistIds.join(',') },
                doNotCache: true,
            });
        },
    },
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

const trackId = async (trackId: string) => {
    return await api.get<SpotifyTrack>(`tracks/${trackId}`);
};

const user = async () => {
    return await api.get<SpotifyUser>('me');
};

const spotify = {
    albumId,
    artist,
    audioFeatures,
    following,
    trackId,
    user,
};
export { spotify };
