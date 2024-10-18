import { PiMusicNote } from 'react-icons/pi';
import { music } from 'music/api';
import { AudioFeatures } from 'Panels/AudioFeatures/AudioFeatures';
import { Playlist } from 'Panels/Heroes/Playlist/Playlist';
import { ItemsList } from 'Panels/ItemsList/ItemsList';
import styles from './page.module.scss';

export const metadata = {
    title: 'Playlist',
};

export default async function Page({
    params: { playlistId },
}: {
    params: { playlistId: string };
}) {
    const playlist = await music.playlists.id(playlistId);

    return (
        <main className={styles.main}>
            <Playlist gridArea="header" playlistId={playlistId} />
            <AudioFeatures
                gridArea="audio"
                heading="Audio Features"
                trackIds={playlist.tracks.map((track) => track.id)}
            />
            <ItemsList
                gridArea="tracks"
                heading="Tracks"
                icon={PiMusicNote}
                tracks={playlist.tracks}
                fallbackImage={playlist.images?.medium ?? ''}
                overflowScroll={false}
            />
        </main>
    );
}
