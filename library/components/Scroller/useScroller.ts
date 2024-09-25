import { useCallback, useEffect, useRef, useState } from 'react';

export const useScroller = ({
    direction,
    enabled,
}: {
    direction: 'horizontal' | 'vertical';
    enabled: boolean;
}) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [hasOverflowStart, setHasOverflowStart] = useState(false);
    const [hasOverflowEnd, setHasOverflowEnd] = useState(false);

    const calculate = useCallback(() => {
        if (!enabled) {
            return;
        }

        const scrollerSize =
            direction === 'horizontal'
                ? scrollerRef.current?.clientWidth
                : scrollerRef.current?.clientHeight;
        const contentSize =
            direction === 'horizontal'
                ? scrollerRef.current?.scrollWidth
                : scrollerRef.current?.scrollHeight;
        const scrollDistance =
            direction === 'horizontal'
                ? scrollerRef.current?.scrollLeft
                : scrollerRef.current?.scrollTop;

        if (!scrollerSize || !contentSize || scrollDistance === undefined) {
            return;
        }

        setHasOverflowStart(scrollDistance > 0);
        setHasOverflowEnd(
            scrollerSize + Math.ceil(scrollDistance) < contentSize,
        );
    }, [direction, enabled]);

    useEffect(() => {
        calculate();
    }, [calculate]);

    return { scrollerRef, calculate, hasOverflowStart, hasOverflowEnd };
};
