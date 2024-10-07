import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.scss';
import { Navigation } from './Navigation/Navigation';
import { ArtistPanel } from './Panels/ArtistPanel';
import { PlaylistPanel } from './Panels/PlaylistPanel';
import { TrackPanel } from './Panels/TrackPanel';
import { UserPanel } from './Panels/UserPanel';

interface Props {
    artistId?: string;
    playlistId?: string;
    trackId?: string;
    user?: boolean;
    isSticky?: boolean;
}

export const Header: FC<Props> = ({
    artistId,
    playlistId,
    trackId,
    user,
    isSticky,
}) => {
    const hasPanel = Boolean(artistId || playlistId || trackId || user);
    const HeadingElement = hasPanel ? 'span' : 'h1';

    return (
        <header
            className={classNames(styles.header, isSticky && styles.isSticky)}
        >
            <div
                className={classNames(
                    styles.navBar,
                    hasPanel && styles.hasPanel,
                )}
            >
                <Link href="/" className={styles.link}>
                    <HeadingElement className={styles.title}>
                        Music Project
                    </HeadingElement>
                </Link>
                <Navigation />
            </div>
            {artistId && <ArtistPanel artistId={artistId} />}
            {playlistId && <PlaylistPanel playlistId={playlistId} />}
            {trackId && <TrackPanel trackId={trackId} />}
            {user && <UserPanel />}
        </header>
    );
};
