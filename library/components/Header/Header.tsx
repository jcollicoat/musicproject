import classNames from 'classnames';
import { FC } from 'react';
import { Track } from '@music/types/tracks.types';
import { User } from '@music/types/user.types';
import { HeaderContent } from './components/HeaderContent';
import { HeaderTrack } from './components/panels/HeaderTrack';
import { HeaderUser } from './components/panels/HeaderUser';
import styles from './Header.module.scss';

interface Props {
    title?: string;
    subtitle?: string;
    track?: Track;
    user?: User;
    isSticky?: boolean;
}

export const Header: FC<Props> = ({
    title = 'Music Project',
    subtitle,
    track,
    user,
    isSticky = true,
}) => {
    return (
        <header
            className={classNames(styles.header, isSticky && styles.isSticky)}
        >
            <div
                className={classNames(
                    styles.content,
                    (track || user) && styles.hasData,
                )}
            >
                <HeaderContent
                    headingElement={track || user ? 'span' : 'h1'}
                    title={title}
                    subtitle={subtitle}
                />
            </div>
            {user && <HeaderUser user={user} />}
            {track && <HeaderTrack track={track} />}
        </header>
    );
};
