import classNames from 'classnames';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Icon, IconProps } from '@components/Icon/Icon';
import styles from './Button.module.scss';

type ButtonStyles = 'cta' | 'primary' | 'secondary' | 'tertiary' | 'inMenu';

interface BaseProps {
    text: string;
    ariaLabel?: string;
    iconEnd?: IconProps;
    iconStart?: IconProps;
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
    iconEnd,
    iconStart,
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
                {iconStart && (
                    <Icon {...iconStart} size={iconStart.size ?? '1rem'} />
                )}
                {text}
                {iconEnd && <Icon {...iconEnd} size={iconEnd.size ?? '1rem'} />}
            </button>
        );
    }

    return link.startsWith('https://') ? (
        <a
            aria-label={ariaLabel ?? text}
            className={classNames(styles.button, styles[style])}
            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            {iconStart && (
                <Icon {...iconStart} size={iconStart.size ?? '1rem'} />
            )}
            {text}
            {iconEnd && <Icon {...iconEnd} size={iconEnd.size ?? '1rem'} />}
        </a>
    ) : (
        <Link
            aria-label={ariaLabel ?? text}
            className={classNames(styles.button, styles[style])}
            href={link}
        >
            {iconStart && (
                <Icon {...iconStart} size={iconStart.size ?? '1rem'} />
            )}
            {text}
            {iconEnd && <Icon {...iconEnd} size={iconEnd.size ?? '1rem'} />}
        </Link>
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
                    isOpen && styles.open
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
                    side && styles[side]
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
            {buttons?.map((props) => (
                <Button key={props.text} {...props} />
            ))}
            {menuButtons?.map((props) => (
                <MenuButton key={props.buttons[0].text} {...props} />
            ))}
        </div>
    );
};
