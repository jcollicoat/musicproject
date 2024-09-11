import { useRef, useState, useEffect } from 'react';

export const useOverflow = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [hasOverflowLeft, setHasOverflowLeft] = useState(false);
    const [hasOverflowRight, setHasOverflowRight] = useState(false);

    const calculate = () => {
        const scrollerWidth = scrollerRef.current?.clientWidth;
        const contentWidth = scrollerRef.current?.scrollWidth;
        const scrollLeft = scrollerRef.current?.scrollLeft;

        if (!scrollerWidth || !contentWidth || scrollLeft === undefined) {
            return;
        }

        if (scrollLeft > 0) {
            setHasOverflowLeft(true);
        } else {
            setHasOverflowLeft(false);
        }

        if (scrollerWidth + scrollLeft < contentWidth) {
            setHasOverflowRight(true);
        } else if (scrollerWidth + scrollLeft === contentWidth) {
            setHasOverflowRight(false);
        }
    };

    useEffect(() => {
        calculate();
    }, []);

    return { scrollerRef, calculate, hasOverflowLeft, hasOverflowRight };
};
