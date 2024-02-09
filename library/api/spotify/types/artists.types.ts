import { SpotifyFollowers, SpotifyImage, SpotifyObject } from '@spotify/types';

export interface SpotifyArtist {
    external_urls: SpotifyObject;
    followers: SpotifyFollowers;
    genres: string[];
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    type: string;
    uri: string;
    popularity?: number;
}
