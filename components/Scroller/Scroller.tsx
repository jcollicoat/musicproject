'use client';

import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './Scroller.module.scss';
import { useScroller } from './useScroller';

interface Props {
    direction: 'horizontal' | 'vertical';
    enabled?: boolean;
}

export const Scroller: FC<PropsWithChildren<Props>> = ({
    direction,
    enabled = true,
    children,
}) => {
    const { scrollerRef, calculate, hasOverflowStart, hasOverflowEnd } =
        useScroller({ direction, enabled });

    return (
        <div
            className={classNames(
                styles.scroller,
                styles[direction],
                hasOverflowStart && styles.overflowStart,
                hasOverflowEnd && styles.overflowEnd,
            )}
        >
            <div
                className={classNames(
                    styles.content,
                    enabled && styles.fixedHeight,
                )}
                ref={scrollerRef}
                onScroll={calculate}
            >
                {children}
            </div>
        </div>
    );
};
