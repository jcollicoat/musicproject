'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { Icon, IconProps } from '@components/Icon/Icon';
import { Menu, MenuProps } from '@components/Menu/Menu';
import styles from './Button.module.scss';

interface ContentProps {
    text: string;
    iconStart?: IconProps;
    iconEnd?: IconProps;
}

const Content: FC<ContentProps> = ({ text, iconStart, iconEnd }) => (
    <>
        {iconStart && <Icon {...iconStart} />}
        {text}
        {iconEnd && <Icon {...iconEnd} />}
    </>
);

type ButtonStyles = 'cta' | 'primary' | 'secondary' | 'tertiary' | 'inMenu';

interface BaseProps {
    text: string;
    ariaLabel?: string;
    iconStart?: IconProps;
    iconEnd?: IconProps;
    style?: ButtonStyles;
}

interface PropsForButton extends BaseProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    link?: never;
}

interface PropsForLink extends BaseProps {
    link: string;
    onClick?: never;
}

export type ButtonProps = PropsForButton | PropsForLink;

export const Button: FC<ButtonProps> = ({
    text,
    ariaLabel,
    iconStart,
    iconEnd,
    style = 'secondary',
    onClick,
    link,
}) => {
    if (onClick) {
        return (
            <button
                aria-label={ariaLabel ?? text}
                className={classNames(styles.button, styles[style])}
                onClick={onClick}
                type="button"
            >
                <Content text={text} iconStart={iconStart} iconEnd={iconEnd} />
            </button>
        );
    }

    return link.startsWith('/') || link.startsWith('#') ? (
        <Link
            aria-label={ariaLabel ?? text}
            className={classNames(styles.button, styles[style])}
            href={link}
        >
            <Content text={text} iconStart={iconStart} iconEnd={iconEnd} />
        </Link>
    ) : (
        <a
            aria-label={ariaLabel ?? text}
            className={classNames(styles.button, styles[style])}
            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <Content text={text} iconStart={iconStart} iconEnd={iconEnd} />
        </a>
    );
};

interface ButtonContainerProps {
    buttons?: ButtonProps[];
    menuButtons?: MenuProps[];
}

export const ButtonContainer: FC<ButtonContainerProps> = ({
    buttons,
    menuButtons,
}) => {
    return (
        <div className={styles.container}>
            {buttons?.map((props) => <Button key={props.text} {...props} />)}
            {menuButtons?.map((props) => (
                <Menu key={props.buttons[0].text} {...props} />
            ))}
        </div>
    );
};
