'use client';

import { useLocalStorageValue } from '@react-hookz/web';
import classNames from 'classnames';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { FC, PropsWithChildren } from 'react';
// import { Menu, MenuProps } from 'Generics/Menu/Menu';
// import { useMediaMobile, useMediaTiny } from 'hooks/useMediaQueries';
import styles from './Button.module.scss';

type ButtonStyles =
    | 'cta'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inMenu'
    | 'text';

interface BaseProps {
    ariaLabel: string;
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

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    ariaLabel,
    style = 'secondary',
    tabIndex,
    onClick,
    link,
}) => {
    const theme = useLocalStorageValue('theme');

    if (onClick) {
        let click;
        if (onClick === 'signin') {
            click = () => signIn('spotify', { callbackUrl: '/my-music' });
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
                aria-label={ariaLabel}
                className={classNames(styles.button, styles[style])}
                onClick={click}
                tabIndex={tabIndex}
                type="button"
            >
                {children}
            </button>
        );
    }

    return link.startsWith('/') || link.startsWith('#') ? (
        <Link
            aria-label={ariaLabel}
            className={classNames(styles.button, styles[style])}
            href={link}
            tabIndex={tabIndex}
        >
            {children}
        </Link>
    ) : (
        <a
            aria-label={ariaLabel}
            className={classNames(styles.button, styles[style])}
            href={link}
            rel="noopener noreferrer"
            tabIndex={tabIndex}
            target="_blank"
        >
            {children}
        </a>
    );
};

// interface ButtonContainerProps {
//     buttons?: ButtonProps[];
//     menuButtons?: MenuProps[];
//     collapse?: {
//         breakpoint: 'tiny' | 'mobile';
//         side: MenuProps['side'];
//     };
// }

// export const ButtonContainer: FC<ButtonContainerProps> = ({
//     buttons,
//     menuButtons,
//     collapse,
// }) => {
//     const isMobile = useMediaMobile();
//     const isTiny = useMediaTiny();
//     const collapsed =
//         (collapse?.breakpoint === 'mobile' && isMobile) ||
//         (collapse?.breakpoint === 'tiny' && isTiny);

//     return (
//         <div className={classNames(styles.container)}>
//             {buttons &&
//                 (collapsed ? (
//                     <Menu buttons={buttons} side={collapse.side} />
//                 ) : (
//                     buttons.map((props) => (
//                         <Button key={props.ariaLabel} {...props} />
//                     ))
//                 ))}
//             {menuButtons?.map((props) => (
//                 <Menu key={props.buttons[0].ariaLabel} {...props} />
//             ))}
//         </div>
//     );
// };
