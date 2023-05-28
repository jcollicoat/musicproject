import { SpotifyImage } from "@/library/spotify/types";

interface AlbumArtist {
    id: string;
    name: string;
}

interface AlbumTrackArtist {
    id: string;
    name: string;
}

interface AlbumTrack {
    artists: AlbumTrackArtist[];
    durationMs: number;
    explicit: boolean;
    id: string;
    name: string;
    previewUrl: string;
}

export interface Album {
    albumType: string;
    artists: AlbumArtist[];
    genres: string[];
    id: string;
    images: SpotifyImage[];
    label: string;
    name: string;
    popularity: number;
    releaseDate: string;
    releaseDatePrecision: string;
    tracks: AlbumTrack[];
}
