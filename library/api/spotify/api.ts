import { api } from './requests';
import { SpotifyAlbum } from './types/albums.types';
import { SpotifyArtist } from './types/artists.types';
import { SpotifyAudioFeatures } from './types/audio.types';
import { SpotifyTrack } from './types/tracks.types';
import { SpotifyUser } from './types/user.types';

const albumId = async (albumId: string) => {
    return await api.get<SpotifyAlbum>(`albums/${albumId}`);
};

const artistId = async (artistId: string) => {
    return await api.get<SpotifyArtist>(`artists/${artistId}`);
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
            return await api.put('me/following', {
                params: { type: 'artist', ids: artistIds.join(',') },
            });
        },
    },
    remove: {
        artistIds: async (artistIds: string[]) => {
            return await api.del('me/following', {
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
    artistId,
    audioFeatures,
    following,
    trackId,
    user,
};
export { spotify };
