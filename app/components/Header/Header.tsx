import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { Button } from '@components/Button/Button';
import { Panel } from '@components/Panel/Panel';
import { Track } from '@music/types/tracks.types';
import styles from './Header.module.scss';

interface SimpleHeaderProps {
    title: string;
    subtitle?: string;
}

const SimpleHeader: FC<SimpleHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className={styles.header}>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
            <div className={styles.buttons}>
                <Button
                    ariaLabel="Explore music"
                    text="Explore music"
                    onClick={() => alert('Button clicked!')}
                    style="tertiary"
                />
                <Button
                    ariaLabel="Login"
                    text="Login"
                    onClick={() => alert('Button clicked!')}
                    style="cta"
                />
            </div>
        </div>
    );
};

interface TrackHeaderProps {
    track: Track;
}

const TrackHeader: FC<TrackHeaderProps> = ({ track }) => {
    return (
        <div className={classNames(styles.header, styles.track)}>
            {track.album && (
                <Image
                    src={track.album.images[0].url}
                    alt={track.album.name}
                    height={80}
                    width={80}
                    className={styles.image}
                />
            )}
            <div className={styles.info}>
                <h1 className={styles.title}>{track.name}</h1>
                <p>{track.artists[0].name}</p>
            </div>
        </div>
    );
};

interface Props extends SimpleHeaderProps {
    data?: Track;
}

export const Header: FC<Props> = ({ title, subtitle, data }) => {
    return (
        <Panel element="header">
            {data ? (
                <TrackHeader track={data} />
            ) : (
                <SimpleHeader title={title} subtitle={subtitle} />
            )}
        </Panel>
    );
};
