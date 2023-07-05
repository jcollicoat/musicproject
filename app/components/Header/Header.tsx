import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { ButtonContainer } from '@components/Button/Button';
import { Track } from '@music/types/tracks.types';
import styles from './Header.module.scss';
import { HeaderTrack } from './HeaderComponents/HeaderTrack';

interface SimpleHeaderProps {
    title: string;
    subtitle?: string;
    hasPanel?: boolean;
    isFixed?: boolean;
    isSticky?: boolean;
    setHeight?: (height: number) => void;
}

const SimpleHeader: FC<SimpleHeaderProps> = ({
    title,
    subtitle,
    hasPanel,
    isFixed,
    isSticky,
    setHeight,
}) => {
    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const rect = headerRef.current?.getBoundingClientRect();
        console.log(rect);
        setHeight && setHeight(rect?.height ?? 0);
    }, [isSticky, setHeight]);

    const Heading = hasPanel ? 'span' : 'h1';
    return (
        <div
            className={classNames(
                styles.header,
                hasPanel && styles.panel,
                isFixed && styles.fixed,
                isSticky && styles.sticky
            )}
            ref={headerRef}
        >
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
                        text: 'Login',
                        iconStart: {
                            icon: 'User',
                        },
                        onClick: () => alert('Button clicked!'),
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
        </div>
    );
};

interface TrackHeaderProps extends SimpleHeaderProps {
    track: Track;
}

const TrackHeader: FC<TrackHeaderProps> = ({
    title,
    subtitle,
    track,
    isSticky,
}) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<DOMRect['height']>();
    const set = (height: number) => setHeight(height);
    useEffect(() => {
        const rect = headerRef.current?.getBoundingClientRect();
        console.log(rect);
        set(rect?.height ?? 0);
    }, [isSticky]);
    console.log('height:', height);
    return (
        <header
            className={classNames(styles.wrapper, isSticky && styles.sticky)}
            style={{ paddingTop: `${height}px` }}
        >
            <SimpleHeader
                title={title}
                subtitle={subtitle}
                hasPanel
                isFixed={isSticky}
                setHeight={set}
            />
            <HeaderTrack track={track} />
        </header>
    );
};

interface Props extends SimpleHeaderProps {
    data?: Track;
}

export const Header: FC<Props> = ({ title, subtitle, data, isSticky }) => {
    return data ? (
        <TrackHeader
            title={title}
            subtitle={subtitle}
            track={data}
            isSticky={isSticky}
        />
    ) : (
        <SimpleHeader title={title} subtitle={subtitle} isSticky={isSticky} />
    );
};
