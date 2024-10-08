import classNames from 'classnames';
import { FC } from 'react';
import { FollowButton } from 'Generics/Button/Actions/FollowButton';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { music } from 'music/api';
import { Panel, PanelProps } from 'Panels/Panel';
import layout from '../layout.module.scss';
import styles from './Artist.module.scss';

interface Props extends PanelProps {
    artistId: string;
}

export const Artist: FC<Props> = async ({ artistId, ...props }) => {
    const artist = await music.artists.id(artistId);
    const isFollowing = await music.user.following.artist(artistId);

    return (
        <Panel backgroundImage={artist.images.large} {...props}>
            <div className={layout.content}>
                <img
                    src={artist.images.medium}
                    alt={artist.name}
                    height={160}
                    width={160}
                    className={classNames(layout.image, layout.round)}
                />
                <div className={layout.details}>
                    <span className={layout.label}>Artist</span>
                    <h1>{artist.name}</h1>
                    <div className={styles.follow}>
                        <FollowButton
                            action={isFollowing ? 'remove' : 'add'}
                            type="artist"
                            id={artistId}
                        />
                        <span>
                            <em>{artist.followers.display}</em> followers
                        </span>
                    </div>
                </div>
                <div className={layout.sidebar}>
                    <DataPoint
                        name="Popularity"
                        value={artist.popularity}
                        icon="Heart"
                        hasBar
                    />
                    {artist.genres && (
                        <DataPoint
                            name="Genres"
                            value={artist.genres
                                .map((genre) => genre)
                                .join(', ')}
                            icon="Track"
                            smallText
                        />
                    )}
                </div>
            </div>
        </Panel>
    );
};
