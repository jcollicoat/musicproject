'use client';

import classNames from 'classnames';
import { FC } from 'react';
import { useWindowScroll } from 'react-use';
import { ButtonContainer } from '@components/Button/Button';
import { useHeaderButtons } from '@hooks/useHeaderButtons';
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
    headingElement: Heading,
    title,
    subtitle,
}) => {
    return (
        <>
            <div className={styles.titles}>
                <Heading className={styles.title}>{title}</Heading>
                {subtitle && <p>{subtitle}</p>}
            </div>
            <ButtonContainer buttons={useHeaderButtons()} />
        </>
    );
};

interface Props extends BaseProps {
    data?: Track;
    isSticky?: boolean;
}

export const Header: FC<Props> = ({
    title,
    subtitle,
    data,
    isSticky = true,
}) => {
    const { y } = useWindowScroll();
    const isScrolled = y >= 100;

    return (
        <header
            className={classNames(
                styles.header,
                isSticky && styles.isSticky,
                isScrolled && styles.isScrolled,
            )}
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
