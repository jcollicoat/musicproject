import { useRef, useState, useCallback, useEffect } from 'react';

export const useOverflow = (enabled: boolean) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [hasOverflowTop, setHasOverflowTop] = useState(false);
    const [hasOverflowBottom, setHasOverflowBottom] = useState(false);

    const calculate = useCallback(() => {
        if (enabled) {
            const scrollerHeight = scrollerRef.current?.clientHeight;
            const contentHeight = scrollerRef.current?.scrollHeight;
            const scrollTop = scrollerRef.current?.scrollTop;

            if (!scrollerHeight || !contentHeight || scrollTop === undefined) {
                return;
            }

            if (scrollTop > 0) {
                setHasOverflowTop(true);
            } else {
                setHasOverflowTop(false);
            }

            if (scrollerHeight + Math.ceil(scrollTop) < contentHeight) {
                setHasOverflowBottom(true);
            } else if (
                scrollerHeight + Math.ceil(scrollTop) ===
                contentHeight
            ) {
                setHasOverflowBottom(false);
            }
        }
    }, [enabled]);

    useEffect(() => {
        if (enabled) {
            calculate();
        }
    }, [calculate, enabled]);

    return { scrollerRef, calculate, hasOverflowTop, hasOverflowBottom };
};
