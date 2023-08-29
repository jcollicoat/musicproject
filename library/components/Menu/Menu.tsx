'use client';

import { useClickOutside } from '@react-hookz/web';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import Image from 'next/image';
import { FC, useMemo, useRef, useState } from 'react';
import { Button, ButtonProps } from '@components/Button/Button';
import { Icon } from '@components/Icon/Icon';
import styles from './Menu.module.scss';

export interface MenuProps {
    buttons: ButtonProps[];
    imageUrl?: string;
    side?: 'left' | 'right';
}

export const Menu: FC<MenuProps> = ({ buttons, imageUrl, side }) => {
    const src = useMemo(() => imageUrl, [imageUrl]);
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
                    {src && <Image alt="Me" src={src} height={30} width={30} />}
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
                    {buttons.map((props) => (
                        <li key={props.text}>
                            <Button
                                {...props}
                                style="inMenu"
                                tabIndex={isOpen ? 0 : -1}
                            />
                        </li>
                    ))}
                </menu>
            </div>
        </FocusTrap>
    );
};
