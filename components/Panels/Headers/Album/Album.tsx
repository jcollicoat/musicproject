import classNames from 'classnames';
import { FC } from 'react';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { Icon } from 'Generics/Icon/Icon';
import { LinkedArtists } from 'Generics/Linked/LinkedArtists';
import { TimeText } from 'Generics/TimeText/TimeText';
import { music } from 'music/api';
import { Panel } from 'Panels/Panel';
import { PanelProps } from 'Panels/Panel';
import layout from '../layout.module.scss';
import styles from './Album.module.scss';

interface Props extends PanelProps {
    albumId: string;
}

export const Album: FC<Props> = async ({ albumId, ...props }) => {
    const album = await music.albums.id(albumId);

    return (
        <Panel backgroundImage={album.images.large} {...props}>
            <div className={layout.content}>
                <img
                    src={album.images.medium}
                    alt={album.name}
                    height={160}
                    width={160}
                    className={classNames(layout.image, styles.image)}
                />
                <div className={layout.details}>
                    <span className={layout.label}>{album.albumType}</span>
                    <h1>{album.name}</h1>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <Icon icon="User" />
                            <LinkedArtists artists={album.artists} />
                        </div>
                    </div>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <Icon icon="Disc" />
                            <span>
                                {album.totalTracks}{' '}
                                {album.totalTracks === 1 ? 'track' : 'tracks'}
                            </span>
                        </div>
                        <div className={layout.item}>
                            <Icon icon="Clock" />
                            <TimeText durationMs={album.length} />
                        </div>
                        <div className={layout.item}>
                            <Icon icon="Calendar" />
                            <span>Released on {album.releaseDate.display}</span>
                        </div>
                    </div>
                </div>
                <div className={layout.sidebar}>
                    <DataPoint
                        name="Popularity"
                        value={album.popularity}
                        icon="Heart"
                        hasBar
                    />
                    <DataPoint
                        name="Label"
                        value={album.label}
                        icon="Playlist"
                        smallText
                    />
                </div>
            </div>
        </Panel>
    );
};
