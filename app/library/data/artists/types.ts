import { SpotifyImage } from "@/library/spotify/types";

export interface Artist {
    followers: number;
    genres: string[];
    id: string;
    images: SpotifyImage[];
    name: string;
    popularity: number;
}
