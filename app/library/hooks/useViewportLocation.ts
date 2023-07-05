import { RefObject, useEffect, useState } from 'react';

export const useViewportLocation = <T extends HTMLElement>(
    element: RefObject<T | null>
) => {
    const [rect, setRect] = useState<DOMRect>();
    const [viewport, setViewort] = useState<{
        width: number;
        height: number;
    }>();

    useEffect(() => {
        const rect = element.current?.getBoundingClientRect();
        setRect(rect);
        setViewort({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const onScroll = () => {
            const rect = element.current?.getBoundingClientRect();
            setRect(rect);
            setViewort({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [element]);

    return { rect, viewport };
};
