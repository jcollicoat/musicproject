import { SpotifyImage } from '@spotify/types';
import { Artist } from './artists.types';
import { Playlist } from './playlists.types';
import { RecentlyPlayed, Track } from './tracks.types';

export interface User {
    country: string;
    filterExplicit: boolean;
    followers: number;
    id: string;
    image: SpotifyImage;
    name: string;
    product: string;
    type: string;
}

export interface FullUser {
    details: User;
    followedArtists: Artist[];
    playlists: Playlist[];
    recentlyPlayed: RecentlyPlayed;
    topArtists: Artist[];
    topTracks: Track[];
}
