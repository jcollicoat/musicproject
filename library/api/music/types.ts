export interface ItemGroup<T> {
    items: T[];
    limit?: number;
    offset?: number;
    next?: string;
    previous?: string;
    total?: number;
}

export enum MusicalKeys {
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
    'Unknown',
}

export enum MusicalModes {
    'Minor Key',
    'Major Key',
    'Unknown',
}
