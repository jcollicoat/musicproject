import classNames from 'classnames';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FC, useRef } from 'react';
import { useViewportLocation } from '@/library/hooks/useViewportLocation';
import { ButtonContainer } from '@components/Button/Button';
import { Track } from '@music/types/tracks.types';
import styles from './Header.module.scss';
import { HeaderTrack } from './HeaderComponents/HeaderTrack';

interface HeaderContentProps {
    headingElement: 'h1' | 'span';
    title: string;
    subtitle?: string;
}

const HeaderContent: FC<HeaderContentProps> = ({
    headingElement,
    title,
    subtitle,
}) => {
    const Heading = headingElement;

    const session = useSession();
    const onClick = () => {
        session.status === 'authenticated' ? signOut() : signIn();
    };

    return (
        <>
            <div className={styles.titles}>
                <Heading className={styles.title}>{title}</Heading>
                {subtitle && <p>{subtitle}</p>}
            </div>
            <ButtonContainer
                buttons={[
                    {
                        text: 'Explore',
                        iconStart: {
                            icon: 'MusicNote',
                        },
                        link: '/#',
                        style: 'tertiary',
                    },
                    {
                        text:
                            session.status === 'authenticated'
                                ? 'Logout'
                                : 'Login',
                        iconStart: {
                            icon: 'User',
                        },
                        onClick: onClick,
                        style: 'cta',
                    },
                ]}
                menuButtons={[
                    {
                        buttons: [
                            {
                                text: 'Explore music',
                                iconStart: {
                                    icon: 'MusicNote',
                                },
                                link: '/#',
                            },
                            {
                                text: 'Login',
                                iconStart: {
                                    icon: 'User',
                                },
                                onClick: () => alert('Button clicked!'),
                            },
                        ],
                        side: 'left',
                    },
                ]}
            />
        </>
    );
};

interface Props extends HeaderContentProps {
    data?: Track;
    isSticky?: boolean;
}

export const Header: FC<Props> = ({ title, subtitle, data, isSticky }) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const { rect } = useViewportLocation(headerRef);
    // console.log(rect);

    return (
        <header
            className={classNames(styles.wrapper, isSticky && styles.sticky)}
            style={{ marginTop: rect?.height }}
        >
            <div
                className={classNames(
                    styles.header,
                    data && styles.data,
                    isSticky && styles.sticky,
                )}
                ref={headerRef}
            >
                <HeaderContent
                    headingElement={data ? 'span' : 'h1'}
                    title={title}
                    subtitle={subtitle}
                />
            </div>
            {data && <HeaderTrack track={data} />}
        </header>
    );
};
