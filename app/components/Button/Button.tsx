import classNames from 'classnames';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Icon, IconProps } from '@components/Icon/Icon';
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
    onClick: () => void;
    link?: never;
}

interface PropsForLink extends BaseProps {
    link: string;
    onClick?: never;
}

type ButtonProps = PropsForButton | PropsForLink;

export const Button: FC<ButtonProps> = ({
    text,
    ariaLabel,
    iconStart,
    iconEnd,
    style = 'primary',
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

interface MenuButtonProps {
    buttons: ButtonProps[];
    side?: 'left' | 'right';
}

const MenuButton: FC<MenuButtonProps> = ({ buttons, side }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.menuwrapper}>
            <button
                aria-label="Menu"
                className={classNames(
                    styles.button,
                    styles.trigger,
                    isOpen && styles.open,
                )}
                onClick={toggle}
                type="button"
            >
                <Icon icon="Menu" isAlternate={isOpen} size="24px" />
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
                        <Button {...props} style="inMenu" />
                    </li>
                ))}
            </menu>
        </div>
    );
};

interface ButtonContainerProps {
    buttons?: ButtonProps[];
    menuButtons?: MenuButtonProps[];
}

export const ButtonContainer: FC<ButtonContainerProps> = ({
    buttons,
    menuButtons,
}) => {
    return (
        <div className={styles.container}>
            {buttons?.map((props) => <Button key={props.text} {...props} />)}
            {menuButtons?.map((props) => (
                <MenuButton key={props.buttons[0].text} {...props} />
            ))}
        </div>
    );
};
