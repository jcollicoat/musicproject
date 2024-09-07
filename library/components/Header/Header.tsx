import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.scss';
import { Navigation } from './Navigation/Navigation';
import { TrackPanel } from './Panels/TrackPanel';
import { UserPanel } from './Panels/UserPanel';

interface Props {
    trackId?: string;
    user?: boolean;
    isSticky?: boolean;
}

export const Header: FC<Props> = ({ trackId, user, isSticky }) => {
    const hasPanel = Boolean(trackId);
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
            {trackId && <TrackPanel trackId={trackId} />}
            {user && <UserPanel />}
        </header>
    );
};
