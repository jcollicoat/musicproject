import classNames from 'classnames';
import { FC } from 'react';
import { Album } from '@music/types/albums.types';
import { Artist } from '@music/types/artists.types';
import { Track } from '@music/types/tracks.types';
import { User } from '@music/types/user.types';
import { HeaderContent } from './components/HeaderContent';
import { HeaderAlbum } from './components/panels/HeaderAlbum';
import { HeaderArtist } from './components/panels/HeaderArtist';
import { HeaderTrack } from './components/panels/HeaderTrack';
import { HeaderUser } from './components/panels/HeaderUser';
import styles from './Header.module.scss';

interface Props {
    title?: string;
    subtitle?: string;
    album?: Album;
    artist?: Artist;
    track?: Track;
    user?: User;
    isSticky?: boolean;
}

export const Header: FC<Props> = ({
    title = 'Music Project',
    subtitle,
    album,
    artist,
    track,
    user,
    isSticky = true,
}) => {
    const hasData = album || artist || track || user;

    return (
        <header
            className={classNames(styles.header, isSticky && styles.isSticky)}
        >
            <div
                className={classNames(
                    styles.content,
                    hasData && styles.hasData,
                )}
            >
                <HeaderContent
                    headingElement={hasData ? 'span' : 'h1'}
                    title={title}
                    subtitle={subtitle}
                />
            </div>
            {album && <HeaderAlbum album={album} />}
            {artist && <HeaderArtist artist={artist} />}
            {user && <HeaderUser user={user} />}
            {track && <HeaderTrack track={track} />}
        </header>
    );
};
