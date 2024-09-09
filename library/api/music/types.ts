export interface ItemGroup<T> {
    items: T[];
    limit?: number;
    offset?: number;
    next?: string;
    previous?: string;
    total?: number;
}
