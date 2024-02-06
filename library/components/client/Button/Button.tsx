'use client';

import { useLocalStorageValue } from '@react-hookz/web';
import classNames from 'classnames';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { FC } from 'react';
import { Menu, MenuProps } from '@components/client/Menu/Menu';
import { Icon, IconProps } from '@components/Icon/Icon';
import { useMediaMobile, useMediaTiny } from '@hooks/useMedia';
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
    tabIndex?: HTMLElement['tabIndex'];
}

interface PropsForButton extends BaseProps {
    onClick:
        | React.MouseEventHandler<HTMLButtonElement>
        | 'signin'
        | 'signout'
        | 'theme';
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
    tabIndex,
    onClick,
    link,
}) => {
    const theme = useLocalStorageValue('theme');

    if (onClick) {
        let click;
        if (onClick === 'signin') {
            click = () => signIn('spotify');
        } else if (onClick === 'signout') {
            click = () => signOut();
        } else if (onClick === 'theme') {
            click = () =>
                theme.value === 'light'
                    ? theme.set('dark')
                    : theme.set('light');
        } else {
            click = onClick;
        }

        return (
            <button
                aria-label={ariaLabel ?? text}
                className={classNames(styles.button, styles[style])}
                onClick={click}
                tabIndex={tabIndex}
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
            tabIndex={tabIndex}
        >
            <Content text={text} iconStart={iconStart} iconEnd={iconEnd} />
        </Link>
    ) : (
        <a
            aria-label={ariaLabel ?? text}
            className={classNames(styles.button, styles[style])}
            href={link}
            rel="noopener noreferrer"
            tabIndex={tabIndex}
            target="_blank"
        >
            <Content text={text} iconStart={iconStart} iconEnd={iconEnd} />
        </a>
    );
};

interface ButtonContainerProps {
    buttons?: ButtonProps[];
    menuButtons?: MenuProps[];
    collapse?: {
        breakpoint: 'tiny' | 'mobile';
        side: MenuProps['side'];
    };
}

export const ButtonContainer: FC<ButtonContainerProps> = ({
    buttons,
    menuButtons,
    collapse,
}) => {
    const isMobile = useMediaMobile();
    const isTiny = useMediaTiny();
    const collapsed =
        (collapse?.breakpoint === 'mobile' && isMobile) ||
        (collapse?.breakpoint === 'tiny' && isTiny);

    return (
        <div className={classNames(styles.container)}>
            {buttons &&
                (collapsed ? (
                    <Menu buttons={buttons} side={collapse.side} />
                ) : (
                    buttons.map((props) => (
                        <Button key={props.text} {...props} />
                    ))
                ))}
            {menuButtons?.map((props) => (
                <Menu key={props.buttons[0].text} {...props} />
            ))}
        </div>
    );
};
