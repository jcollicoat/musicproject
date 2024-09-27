import { FC } from 'react';
import { DataPoint } from '@components/DataPoint/DataPoint';
import { Icon } from '@components/Icon/Icon';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import layout from './layout.module.scss';

interface Props {
    playlistId: string;
}

export const PlaylistPanel: FC<Props> = async ({ playlistId }) => {
    const playlist = await music.playlists.id(playlistId);
    const tracks = await music.playlists.tracks(playlistId);

    return (
        <Panel element="div" backgroundImage={playlist.images?.large}>
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
