import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Button.module.scss';

type ButtonStyles = 'cta' | 'primary' | 'secondary' | 'tertiary';

interface BaseProps {
    ariaLabel: string;
    text: string;
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
    ariaLabel,
    text,
    style = 'primary',
    onClick,
    link,
}) => {
    if (onClick) {
        return (
            <button
                aria-label={ariaLabel}
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
            aria-label={ariaLabel}
            className={classNames(styles.button, styles[style])}
            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            {text}
        </a>
    ) : (
        <Link
            aria-label={ariaLabel}
            className={classNames(styles.button, styles[style])}
            href={link}
        >
            {text}
        </Link>
    );
};

interface ButtonsProps {
    buttons: Props[];
}

export const Buttons: FC<ButtonsProps> = ({ buttons }) => {
    return (
        <div className={styles.container}>
            {buttons.map((props) => (
                <Button key={props.text + props.ariaLabel} {...props} />
            ))}
        </div>
    );
};
