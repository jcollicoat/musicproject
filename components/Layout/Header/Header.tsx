import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.scss';
import { Navigation } from './Navigation/Navigation';
import { PlaylistPanel } from './Panels/PlaylistPanel';
import { TrackPanel } from './Panels/TrackPanel';

interface Props {
    playlistId?: string;
    trackId?: string;
    isSticky?: boolean;
}

export const Header: FC<Props> = ({ playlistId, trackId, isSticky }) => {
    const hasPanel = Boolean(playlistId || trackId);
    const HeadingElement = hasPanel ? 'span' : 'h1';

    return (
        <header
            className={classNames(styles.header, isSticky && styles.isSticky)}
        >
            <div className={styles.navBar}>
                <Link href="/" className={styles.link}>
                    <HeadingElement className={styles.title}>
                        Music Project
                    </HeadingElement>
                </Link>
                <Navigation />
            </div>
            {playlistId && <PlaylistPanel playlistId={playlistId} />}
            {trackId && <TrackPanel trackId={trackId} />}
        </header>
    );
};
