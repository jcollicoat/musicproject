export const useDuration = (items: { duration_ms: number }[]) =>
    items
        .map((track) => track.duration_ms)
        .reduce((previous, current) => (previous += current));
