export interface SpotifyCopyright {
    text: string;
    type: string;
}

export interface SpotifyFollowers {
    href: string | null;
    total: number;
}

export interface SpotifyImage {
    height: number | null;
    url: string;
    width: number | null;
}

export type SpotifyObject = Record<string, string>;
