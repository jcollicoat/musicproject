'use client';

import Link from 'next/link';
import { FC } from 'react';
import { ButtonContainer } from '@components/Button/Button';
import { useHeaderButtons } from '../hooks/useHeaderButtons';
import styles from './HeaderContent.module.scss';
import { HeaderUserControl } from './HeaderUserControl';

interface BaseProps {
    title?: string;
    subtitle?: string;
}

interface ContentProps extends BaseProps {
    headingElement: 'h1' | 'span';
}

export const HeaderContent: FC<ContentProps> = ({
    headingElement: Heading,
    title,
    subtitle,
}) => {
    return (
        <>
            <div className={styles.titles}>
                <Link href="/" className={styles.link}>
                    <Heading className={styles.title}>{title}</Heading>
                </Link>
                {subtitle && <p>{subtitle}</p>}
            </div>
            <nav className={styles.navigation}>
                <ButtonContainer
                    buttons={useHeaderButtons()}
                    collapse={{ breakpoint: 'tiny', side: 'left' }}
                />
                <HeaderUserControl />
            </nav>
        </>
    );
};
