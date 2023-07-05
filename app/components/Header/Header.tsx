import classNames from 'classnames';
import { FC, useRef } from 'react';
import { useViewportLocation } from '@/library/hooks/useViewportLocation';
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
}

const SimpleHeader: FC<SimpleHeaderProps> = ({
    title,
    subtitle,
    hasPanel,
    isFixed,
    isSticky,
}) => {
    const Heading = hasPanel ? 'span' : 'h1';
    return (
        <div
            className={classNames(
                styles.header,
                hasPanel && styles.panel,
                isFixed && styles.fixed,
                isSticky && styles.sticky
            )}
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
    const { rect } = useViewportLocation(headerRef);
    console.log(rect);

    return (
        <header
            className={classNames(styles.wrapper, isSticky && styles.sticky)}
            ref={headerRef}
            style={{
                marginTop: isSticky
                    ? rect?.height && rect.height - 30
                    : undefined,
            }}
        >
            <SimpleHeader
                title={title}
                subtitle={subtitle}
                hasPanel
                isFixed={isSticky}
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
