'use client';

import classNames from 'classnames';
import { FC } from 'react';
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
}) => (
    <>
        <div className={styles.titles}>
            <Heading className={styles.title}>{title}</Heading>
            {subtitle && <p>{subtitle}</p>}
        </div>
        <ButtonContainer buttons={useHeaderButtons()} />
    </>
);

interface Props extends BaseProps {
    data?: Track;
    isSticky?: boolean;
}

export const Header: FC<Props> = ({
    title,
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
        {data && <HeaderTrack track={data} />}
    </header>
);
