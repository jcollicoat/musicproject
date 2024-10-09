import classNames from 'classnames';
import { FC } from 'react';
import { PiHeart, PiVinylRecord } from 'react-icons/pi';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { Icon } from 'Generics/Icon/Icon';
import { LinkedArtists } from 'Generics/Linked/LinkedArtists';
import { TimeText } from 'Generics/TimeText/TimeText';
import { useDuration } from 'hooks/useDuration';
import { useImages } from 'hooks/useImages';
import { Panel } from 'Panels/Panel';
import { PanelProps } from 'Panels/Panel';
import { spotify } from 'spotify/api';
import { titleCase } from 'utilities';
import layout from '../layout.module.scss';
import styles from './Album.module.scss';

interface Props extends PanelProps {
    albumId: string;
}

export const Album: FC<Props> = async ({ albumId, ...props }) => {
    const album = await spotify.albums.id(albumId);

    const images = useImages(album.images);
    const duration = useDuration(album.tracks.items);

    return (
        <Panel backgroundImage={images.large} {...props}>
            <div className={layout.content}>
                <img
                    src={images.medium}
                    alt={album.name}
                    height={160}
                    width={160}
                    className={classNames(layout.image, styles.image)}
                />
                <div className={layout.details}>
                    <span className={layout.label}>
                        {titleCase(album.album_type)}
                    </span>
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
                                {album.total_tracks}{' '}
                                {album.total_tracks === 1 ? 'track' : 'tracks'}
                            </span>
                        </div>
                        <div className={layout.item}>
                            <Icon icon="Clock" />
                            <TimeText durationMs={duration} />
                        </div>
                        <div className={layout.item}>
                            <Icon icon="Calendar" />
                            <span>
                                Released on{' '}
                                {new Date(album.release_date).toDateString()}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={layout.sidebar}>
                    <DataPoint
                        name="Popularity"
                        primary={{
                            value: album.popularity,
                            isPercent: true,
                        }}
                        icon={PiHeart}
                    />
                    <DataPoint
                        name="Label"
                        primary={{
                            value: album.label,
                        }}
                        icon={PiVinylRecord}
                        smallText
                    />
                </div>
            </div>
        </Panel>
    );
};
