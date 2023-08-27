'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC, useMemo, useState } from 'react';
import { Button, ButtonProps } from '@components/Button/Button';
import { Icon } from '@components/Icon/Icon';
import { SpotifyImage } from '@spotify/types';
import styles from './Menu.module.scss';

export interface MenuProps {
    buttons: ButtonProps[];
    image?: SpotifyImage;
    side?: 'left' | 'right';
}

export const Menu: FC<MenuProps> = ({ buttons, image, side }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const imageUrl = useMemo(() => image?.url, [image?.url]);

    return (
        <div className={styles.wrapper}>
            <button
                aria-label="Menu"
                className={classNames(styles.trigger, isOpen && styles.open)}
                onClick={toggle}
                type="button"
            >
                {imageUrl ? (
                    <Image alt="Me" src={imageUrl} height={30} width={30} />
                ) : (
                    <Icon icon="Menu" isAlternate={isOpen} size="30px" />
                )}
            </button>
            <menu
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
    );
};
