import { SpotifyFollowers, SpotifyImage, SpotifyObject } from '@spotify/types';

interface SpotifyArtistSimple {
    external_urls: SpotifyObject;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface SpotifyArtist extends SpotifyArtistSimple {
    followers?: SpotifyFollowers;
    genres?: string[];
    images?: SpotifyImage[];
    popularity?: number;
}
