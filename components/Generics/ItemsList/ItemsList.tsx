import { FC } from 'react';
import { Scroller } from 'Generics/Scroller/Scroller';
import { music } from 'music/api';
import { Album } from './Items/Album';
import { Track } from './Items/Track';
import styles from './ItemsList.module.scss';

type Albums = Awaited<ReturnType<typeof music.artists.albums>>;
type Tracks =
    | Awaited<ReturnType<typeof music.tracks.id>>[]
    | Awaited<ReturnType<typeof music.albums.id>>['tracks'];

interface Props {
    albums?: Albums;
    tracks?: Tracks;
    fallbackImage: string;
    overflowScroll?: boolean;
}

export const ItemsList: FC<Props> = ({
    albums,
    tracks,
    fallbackImage,
    overflowScroll = true,
}) => {
    const items = albums || tracks;
    if (!items) return null;

    return (
        <Scroller direction="vertical" enabled={overflowScroll}>
            <div className={styles.list}>
                {tracks &&
                    tracks.map((track) => (
                        <Track
                            key={track.id}
                            track={track}
                            fallbackImage={fallbackImage}
                        />
                    ))}
                {albums &&
                    albums.map((album) => (
                        <Album key={album.id} album={album} />
                    ))}
            </div>
        </Scroller>
    );
};
