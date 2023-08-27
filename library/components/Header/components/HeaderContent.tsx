import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { FC } from 'react';
import { ButtonContainer, ButtonProps } from '@components/Button/Button';
import styles from './HeaderContent.module.scss';
import { HeaderUserControl } from './HeaderUserControl';

const blah: ButtonProps = {
    text: 'Blah',
    iconStart: {
        icon: 'Heart',
    },
    link: '#',
    style: 'tertiary',
};

const myMusic: ButtonProps = {
    text: 'My Music',
    iconStart: {
        icon: 'Heart',
    },
    link: '/me',
};

const explore: ButtonProps = {
    text: 'Explore',
    iconStart: {
        icon: 'MusicNote',
    },
    link: '/explore',
    style: 'primary',
};

const login: ButtonProps = {
    text: 'Sign In',
    iconStart: {
        icon: 'Spotify',
    },
    onClick: 'signin',
    style: 'cta',
};

interface Props {
    headingElement: 'h1' | 'span';
    title?: string;
}

export const HeaderContent: FC<Props> = async ({
    headingElement: Heading,
    title = 'Music Project',
}) => {
    const session = await getServerSession();

    return (
        <>
            <div className={styles.titles}>
                <Link href="/" className={styles.link}>
                    <Heading className={styles.title}>{title}</Heading>
                </Link>
            </div>
            <nav className={styles.navigation}>
                <ButtonContainer
                    buttons={
                        session
                            ? [explore, myMusic, blah]
                            : [login, explore, myMusic, blah]
                    }
                    menuButtons={
                        session
                            ? [
                                  {
                                      buttons: [explore, myMusic, blah],
                                      side: 'left',
                                  },
                              ]
                            : [
                                  {
                                      buttons: [login, explore, myMusic, blah],
                                      side: 'left',
                                  },
                              ]
                    }
                    collapse={{ breakpoint: 'tiny', side: 'left' }}
                    reversed
                />
                <HeaderUserControl />
            </nav>
        </>
    );
};
