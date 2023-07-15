import classNames from 'classnames';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FC } from 'react';
import { ButtonContainer } from '@components/Button/Button';
import { Track } from '@music/types/tracks.types';
import styles from './Header.module.scss';
import { HeaderTrack } from './HeaderComponents/HeaderTrack';

interface BaseProps {
    title: string;
    subtitle?: string;
}

interface ContentProps extends BaseProps {
    headingElement: 'h1' | 'span';
}

const HeaderContent: FC<ContentProps> = ({
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

interface Props extends BaseProps {
    data?: Track;
    isSticky?: boolean;
}

export const Header: FC<Props> = ({ title, subtitle, data, isSticky }) => {
    return (
        <header
            className={classNames(styles.header, isSticky && styles.isSticky)}
        >
            <div
                className={classNames(
                    styles.content,
                    data && styles.hasData,
                    isSticky && styles.isSticky,
                )}
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
