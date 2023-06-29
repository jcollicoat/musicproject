import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { ButtonContainer } from '@components/Button/Button';
import { Panel } from '@components/Panel/Panel';
import { Track } from '@music/types/tracks.types';
import styles from './Header.module.scss';
import { HeaderControls } from './HeaderComponents/HeaderControls';

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
                            text: 'Explore music',
                            link: '/#',
                            style: 'tertiary',
                        },
                        {
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
        <header className={styles.wrapper}>
            <HeaderControls />
            <Panel element="div">
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
                        <p>
                            {track.artists[0].name} • {track.album?.name}
                        </p>
                    </div>
                </div>
            </Panel>
        </header>
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
