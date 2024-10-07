import { FC } from 'react';
import { Panel } from 'components/Panel/Panel';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { Icon } from 'Generics/Icon/Icon';
import { music } from 'music/api';
import { PanelProps } from 'Panels/Panel';
import layout from '../layout.module.scss';

interface Props extends PanelProps {
    playlistId: string;
}

export const Playlist: FC<Props> = async ({ playlistId, ...props }) => {
    const playlist = await music.playlists.id(playlistId);
    const tracks = await music.playlists.tracks(playlistId);

    return (
        <Panel backgroundImage={playlist.images?.large} {...props}>
            <div className={layout.content}>
                <img
                    src={playlist.images?.medium ?? ''}
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
                            <Icon icon="Playlist" />
                            <span>
                                {tracks.total}{' '}
                                {tracks.total === 1 ? 'track' : 'tracks'}
                            </span>
                        </div>
                    </div>
                    {playlist.public && (
                        <div className={layout.section}>
                            <div className={layout.item}>
                                <Icon icon="Info" />
                                <span>Public Playlist</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className={layout.sidebar}>
                    <DataPoint
                        name="Creator"
                        value={playlist.owner.name ?? ''}
                        icon="User"
                        smallText
                    />
                </div>
            </div>
        </Panel>
    );
};
