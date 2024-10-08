'use client';

import { useClickOutside } from '@react-hookz/web';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import { FC, PropsWithChildren, useRef, useState } from 'react';
import { Icon } from 'Generics/Icon/Icon';
import styles from './Menu.module.scss';

export interface MenuProps {
    imageUrl?: string;
    side?: 'left' | 'right';
}

export const Menu: FC<PropsWithChildren<MenuProps>> = ({
    children,
    imageUrl,
    side,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    useClickOutside(wrapperRef, () => {
        setIsOpen(false);
    });

    return (
        <FocusTrap active={isOpen}>
            <div className={styles.wrapper} ref={wrapperRef}>
                <button
                    aria-label="Menu"
                    className={classNames(
                        styles.trigger,
                        isOpen && styles.open,
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                >
                    {imageUrl && (
                        <img alt="" src={imageUrl} height={30} width={30} />
                    )}
                    <Icon icon="Menu" isAlternate={isOpen} size="30px" />
                </button>
                <menu
                    aria-hidden={!isOpen}
                    className={classNames(
                        styles.menu,
                        isOpen && styles.open,
                        side && styles[side],
                    )}
                >
                    {children}
                </menu>
            </div>
        </FocusTrap>
    );
};
