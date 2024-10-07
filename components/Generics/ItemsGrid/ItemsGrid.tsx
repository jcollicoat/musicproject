import { FC } from 'react';
import { Scroller } from 'Generics/Scroller/Scroller';
import { music } from 'music/api';
import { Album } from './Items/Album';
import { Artist } from './Items/Artist';
import { Playlist } from './Items/Playlist';
import styles from './ItemsGrid.module.scss';

type Albums = Awaited<ReturnType<typeof music.artists.albums>>;
type Artists = Awaited<ReturnType<typeof music.artists.relatedArtists>>;
type Playlists = Awaited<ReturnType<typeof music.user.playlists>>;

interface Props {
    albums?: Albums;
    artists?: Artists;
    playlists?: Playlists;
}

export const ItemsGrid: FC<Props> = ({ albums, artists, playlists }) => {
    const items = albums || artists || playlists;
    if (!items) return null;

    return (
        <Scroller direction="horizontal">
            <div className={styles.grid}>
                {albums &&
                    albums.map((album) => (
                        <Album key={album.id} album={album} />
                    ))}
                {artists &&
                    artists.map((artist) => (
                        <Artist key={artist.id} artist={artist} />
                    ))}
                {playlists &&
                    playlists.map((playlist) => (
                        <Playlist key={playlist.id} playlist={playlist} />
                    ))}
            </div>
        </Scroller>
    );
};
