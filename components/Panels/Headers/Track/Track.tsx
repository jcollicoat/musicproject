import classNames from 'classnames';
import { FC } from 'react';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { Icon } from 'Generics/Icon/Icon';
import { LinkedAlbum } from 'Generics/Linked/LinkedAlbum';
import { LinkedArtists } from 'Generics/Linked/LinkedArtists';
import { TimeText } from 'Generics/TimeText/TimeText';
import { music } from 'music/api';
import { Panel, PanelProps } from 'Panels/Panel';
import layout from '../layout.module.scss';
import styles from './Track.module.scss';

interface Props extends PanelProps {
    trackId: string;
}

export const Track: FC<Props> = async ({ trackId, ...props }) => {
    const track = await music.tracks.id(trackId);
    const album = await music.albums.id(track.album.id);

    return (
        <Panel backgroundImage={track.album.images.large} {...props}>
            <div className={layout.content}>
                <img
                    src={track.album.images.medium}
                    alt={track.album.name}
                    height={160}
                    width={160}
                    className={classNames(layout.image, styles.image)}
                />
                <div className={layout.details}>
                    <span className={layout.label}>Track</span>
                    <h1>{track.name}</h1>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <Icon icon="User" />
                            <LinkedArtists artists={track.artists} />
                        </div>
                        <div className={layout.item}>
                            <Icon icon="Disc" />
                            <LinkedAlbum album={track.album} />
                        </div>
                    </div>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <Icon icon="Clock" />
                            <TimeText durationMs={track.durationMs} />
                        </div>
                        <div className={layout.item}>
                            <Icon icon="Calendar" />
                            <span>
                                Released on {track.album.releaseDate.display}
                            </span>
                        </div>
                        {track.explicit && (
                            <span className={styles.explicit}>Explicit</span>
                        )}
                    </div>
                </div>
                <div className={layout.sidebar}>
                    <DataPoint
                        name="Popularity"
                        value={track.popularity}
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
