import {
    SpotifyFollowers,
    SpotifyImage,
    SpotifyObject,
} from "@/library/spotify/types";

export interface SpotifyArtist {
    external_urls: SpotifyObject;
    followers: SpotifyFollowers;
    genres: string[];
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}
