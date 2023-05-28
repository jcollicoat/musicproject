import { SpotifyImage } from "@spotify/types";

export interface Artist {
    followers: number;
    genres: string[];
    id: string;
    images: SpotifyImage[];
    name: string;
    popularity: number;
}
