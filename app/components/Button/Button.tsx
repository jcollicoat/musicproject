import classNames from 'classnames';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Icon } from '@components/Icon/Icon';
import styles from './Button.module.scss';

type ButtonStyles = 'cta' | 'primary' | 'secondary' | 'tertiary';

interface BaseProps {
    text: string;
    ariaLabel?: string;
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

type Props = PropsForButton | PropsForLink;

export const Button: FC<Props> = ({
    text,
    ariaLabel,
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
                {text}
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
            {text}
        </a>
    ) : (
        <Link
            aria-label={ariaLabel ?? text}
            className={classNames(styles.button, styles[style])}
            href={link}
        >
            {text}
        </Link>
    );
};

interface MenuButtonProps {
    side?: 'left' | 'right';
}

const MenuButton: FC<MenuButtonProps> = ({ side }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.menuwrapper}>
            <button
                aria-label="Menu"
                className={classNames(styles.button, styles.trigger)}
                onClick={toggle}
                type="button"
            >
                <Icon icon="Menu" />
            </button>
            <menu
                className={classNames(
                    styles.menu,
                    isOpen && styles.open,
                    side && styles[side]
                )}
            >
                <li>
                    <Button
                        ariaLabel="Menu item 1"
                        text="Menu item 1"
                        onClick={() => alert('Button clicked')}
                        style="secondary"
                    />
                </li>
                <li>
                    <Button
                        ariaLabel="Menu item 2"
                        text="Menu item 2"
                        onClick={() => alert('Button clicked')}
                        style="secondary"
                    />
                </li>
            </menu>
        </div>
    );
};

interface ButtonContainerProps {
    buttons: Props[];
}

export const ButtonContainer: FC<ButtonContainerProps> = ({ buttons }) => {
    return (
        <div className={styles.container}>
            {buttons.map((props) => (
                <Button key={props.text + props.ariaLabel} {...props} />
            ))}
            <MenuButton side="left" />
        </div>
    );
};
