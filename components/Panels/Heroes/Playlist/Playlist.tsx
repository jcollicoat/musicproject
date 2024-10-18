import { FC } from 'react';
import { PiInfo, PiMusicNotes, PiUser } from 'react-icons/pi';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { useImages } from 'hooks/useImages';
import { Panel, PanelProps } from 'Panels/Panel';
import { spotify } from 'spotify/api';
import layout from '../layout.module.scss';

interface Props extends PanelProps {
    playlistId: string;
}

export const Playlist: FC<Props> = async ({ playlistId, ...props }) => {
    const playlist = await spotify.playlists.id(playlistId);
    // const tracks = await music.playlists.tracks(playlistId);
    const images = useImages(playlist.images);

    return (
        <Panel backgroundImage={images.large} {...props}>
            <div className={layout.content}>
                <img
                    src={images.medium}
                    alt={playlist.name}
                    height={160}
                    width={160}
                    className={layout.image}
                />
                <div className={layout.details}>
                    <span className={layout.label}>Playlist</span>
                    <h1>{playlist.name}</h1>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <PiMusicNotes />
                            <span>
                                {playlist.tracks.total}{' '}
                                {playlist.tracks.total === 1
                                    ? 'track'
                                    : 'tracks'}
                            </span>
                        </div>
                    </div>
                    {playlist.public && (
                        <div className={layout.section}>
                            <div className={layout.item}>
                                <PiInfo />
                                <span>Public Playlist</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className={layout.sidebar}>
                    <DataPoint
                        name="Creator"
                        primary={{
                            value: playlist.owner.display_name ?? 'Unknown',
                        }}
                        icon={PiUser}
                        smallText
                    />
                </div>
            </div>
        </Panel>
    );
};
