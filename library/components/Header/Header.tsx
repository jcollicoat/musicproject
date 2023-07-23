'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { ButtonContainer } from '@components/Button/Button';
import { useAuth } from '@hooks/useAuth';
// import { Track } from '@music/types/tracks.types';
// import { HeaderTrack } from './components/HeaderTrack';
import { HeaderUserControl } from './components/HeaderUserControl';
import { HeaderUser } from './components/panels/HeaderUser';
import styles from './Header.module.scss';
import { useHeaderButtons } from './hooks/useHeaderButtons';

interface BaseProps {
    title?: string;
    subtitle?: string;
}

interface ContentProps extends BaseProps {
    headingElement: 'h1' | 'span';
}

const HeaderContent: FC<ContentProps> = ({
    headingElement: Heading,
    title,
    subtitle,
}) => {
    const auth = useAuth();
    return (
        <>
            <div className={styles.titles}>
                <Link href="/" className={styles.link}>
                    <Heading className={styles.title}>{title}</Heading>
                </Link>
                {subtitle && <p>{subtitle}</p>}
            </div>
            <nav className={styles.navigation}>
                <ButtonContainer buttons={useHeaderButtons()} />
                {auth && <HeaderUserControl />}
            </nav>
        </>
    );
};

interface Props extends BaseProps {
    data?: 'user';
    isSticky?: boolean;
}

export const Header: FC<Props> = ({
    title = 'Music Project',
    subtitle,
    data,
    isSticky = true,
}) => (
    <header className={classNames(styles.header, isSticky && styles.isSticky)}>
        <div className={classNames(styles.content, data && styles.hasData)}>
            <HeaderContent
                headingElement={data ? 'span' : 'h1'}
                title={title}
                subtitle={subtitle}
            />
        </div>
        {data === 'user' && <HeaderUser />}
        {/* {data && <HeaderTrack track={data} />} */}
    </header>
);
