export interface Images {
    large: string;
    medium: string;
    small: string;
}

export interface ItemGroup<T> {
    items: T[];
    limit?: number;
    offset?: number;
    next?: string;
    previous?: string;
    total?: number;
}
