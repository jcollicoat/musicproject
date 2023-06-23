import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { ButtonContainer } from '@components/Button/Button';
import { Panel } from '@components/Panel/Panel';
import { Track } from '@music/types/tracks.types';
import styles from './Header.module.scss';

interface SimpleHeaderProps {
    title: string;
    subtitle?: string;
}

const SimpleHeader: FC<SimpleHeaderProps> = ({ title, subtitle }) => {
    return (
        <Panel element="header">
            <div className={styles.header}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                </div>
                <ButtonContainer
                    buttons={[
                        {
                            ariaLabel: 'Explore music',
                            text: 'Explore music',
                            link: '/#',
                            style: 'tertiary',
                        },
                        {
                            ariaLabel: 'Login',
                            text: 'Login',
                            onClick: () => alert('Button clicked!'),
                            style: 'cta',
                        },
                    ]}
                />
            </div>
        </Panel>
    );
};

interface TrackHeaderProps {
    track: Track;
}

const TrackHeader: FC<TrackHeaderProps> = ({ track }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.controls}>
                <div className={styles.info}>
                    <span>Music Project</span>
                    <p>This is the music project</p>
                </div>
                <ButtonContainer
                    buttons={[
                        {
                            ariaLabel: 'Explore music',
                            text: 'Explore music',
                            link: '/#',
                            style: 'tertiary',
                        },
                        {
                            ariaLabel: 'Login',
                            text: 'Login',
                            onClick: () => alert('Button clicked!'),
                            style: 'cta',
                        },
                    ]}
                />
            </div>
            <Panel element="header">
                <div className={classNames(styles.header, styles.track)}>
                    {track.album && (
                        <Image
                            src={track.album.images[0].url}
                            alt={track.album.name}
                            height={60}
                            width={60}
                            className={styles.image}
                        />
                    )}
                    <div className={styles.info}>
                        <h1 className={styles.title}>{track.name}</h1>
                        <p>{track.artists[0].name}</p>
                    </div>
                </div>
            </Panel>
        </div>
    );
};

interface Props extends SimpleHeaderProps {
    data?: Track;
}

export const Header: FC<Props> = ({ title, subtitle, data }) => {
    return data ? (
        <TrackHeader track={data} />
    ) : (
        <SimpleHeader title={title} subtitle={subtitle} />
    );
};
