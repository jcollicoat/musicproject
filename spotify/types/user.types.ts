import {
    SpotifyFollowers,
    SpotifyImage,
    SpotifyObject,
    SpotifyPagedList,
} from 'spotify/types';
import { SpotifyArtist } from './artists.types';

export interface SpotifyUser {
    country: string;
    display_name: string | null;
    email: string;
    explicit_content: {
        filter_enabled: boolean;
        filter_locked: boolean;
    };
    external_urls: SpotifyObject;
    followers: SpotifyFollowers;
    href: string;
    id: string;
    images: SpotifyImage[] | null;
    product: string;
    type: string;
    uri: string;
}

export interface SpotifyFollowedArtists {
    artists: SpotifyPagedList<SpotifyArtist> & { total: number };
}
