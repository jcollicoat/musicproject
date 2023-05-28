interface TrackAlbumArtist {
    id: string;
    name: string;
}

interface TrackAlbum {
    albumType: string;
    artists: TrackAlbumArtist[];
    id: string;
    name: string;
    totalTracks: number;
}

interface TrackArtist {
    id: string;
    name: string;
}

export interface Track {
    album: TrackAlbum;
    artists: TrackArtist[];
    durationMs: number;
    explicit: boolean;
    id: string;
    name: string;
    popularity: number;
    previewUrl: string;
}
