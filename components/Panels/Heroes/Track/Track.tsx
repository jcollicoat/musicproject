import classNames from 'classnames';
import { FC } from 'react';
import {
    PiCalendarBlank,
    PiClock,
    PiHeart,
    PiUser,
    PiVinylRecord,
} from 'react-icons/pi';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { LinkedAlbum } from 'Generics/Linked/LinkedAlbum';
import { LinkedArtists } from 'Generics/Linked/LinkedArtists';
import { TimeText } from 'Generics/TimeText/TimeText';
import { useImages } from 'hooks/useImages';
import { Panel, PanelProps } from 'Panels/Panel';
import { spotify } from 'spotify/api';
import layout from '../layout.module.scss';
import styles from './Track.module.scss';

interface Props extends PanelProps {
    trackId: string;
}

export const Track: FC<Props> = async ({ trackId, ...props }) => {
    const track = await spotify.tracks.id(trackId);
    const album = await spotify.albums.id(track.album.id);

    const images = useImages(album.images);

    return (
        <Panel backgroundImage={images.large} {...props}>
            <div className={layout.content}>
                <img
                    src={images.medium}
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
                            <PiUser />
                            <LinkedArtists artists={track.artists} />
                        </div>
                        <div className={layout.item}>
                            <PiVinylRecord />
                            <LinkedAlbum album={track.album} />
                        </div>
                    </div>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <PiClock />
                            <TimeText durationMs={track.duration_ms} />
                        </div>
                        <div className={layout.item}>
                            <PiCalendarBlank />
                            <span>
                                Released on{' '}
                                {new Date(
                                    track.album.release_date,
                                ).toDateString()}
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
                        primary={{
                            value: track.popularity,
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
