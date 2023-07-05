import { Dispatch, SetStateAction, useLayoutEffect } from 'react';

// interface Position {
//     height?: number;
//     width?: number;
//     top?: number;
//     right?: number;
//     bottom?: number;
//     left?: number;
// }

export const useViewportLocation = <T extends HTMLElement>(
    element: T | null,
    setter: Dispatch<SetStateAction<number>>
) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    useLayoutEffect(() => {
        const rect = element?.getBoundingClientRect();
        console.log(rect);
        () => setter(rect?.height ?? 0);
    }, [viewportWidth, viewportHeight, element, setter]);
};
