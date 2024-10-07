import { SpotifyImage } from 'spotify/types';
import { album } from './albums.builders';
import { artist } from './artists.builders';
import { audio } from './audio.builders';
import { playlist, playlists } from './playlists.builders';
import { track, tracks } from './tracks.builders';
import { user } from './user.builders';

const idAndName = (input: { id: string; name: string }) => {
    return {
        id: input.id,
        name: input.name,
    };
};

const images = (images: SpotifyImage[]) => {
    const sorted = images.sort((a, b) => {
        if (!a.width || !b.width) return 0;
        if (a.width < b.width) return -1;
        if (a.width > b.width) return 1;
        return 0;
    });

    return {
        small: sorted[0]?.url,
        medium: sorted[1]?.url ?? sorted[0]?.url,
        large: sorted[sorted.length - 1]?.url,
    };
};

export const builders = {
    album,
    artist,
    audio,
    idAndName,
    images,
    playlist,
    playlists,
    track,
    tracks,
    user,
};
